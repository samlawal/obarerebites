import { NextResponse } from "next/server";
import { list } from "@vercel/blob";

// Public endpoint — returns custom image URLs (no auth needed)
export async function GET() {
  try {
    const { blobs } = await list({ prefix: "dishes/" });
    const images: Record<string, { current?: string }> = {};

    for (const blob of blobs) {
      const parts = blob.pathname.split("/");
      if (parts.length >= 3) {
        const dishId = parts[1];
        const type = parts[2].replace(".webp", "");
        if (type === "current") {
          if (!images[dishId]) images[dishId] = {};
          images[dishId].current = blob.url;
        }
      }
    }

    return NextResponse.json(
      { images },
      { headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" } }
    );
  } catch {
    return NextResponse.json({ images: {} });
  }
}
