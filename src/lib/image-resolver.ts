// Resolves dish image: checks Vercel Blob for custom upload, falls back to default
// Called client-side — fetches once and caches the map

let imageCache: Record<string, string> | null = null;
let cacheTime = 0;
const CACHE_TTL = 60_000; // 1 minute

export async function getCustomImages(): Promise<Record<string, string>> {
  const now = Date.now();
  if (imageCache && now - cacheTime < CACHE_TTL) return imageCache;

  try {
    const res = await fetch("/api/admin/public");
    if (!res.ok) return {};
    const data = await res.json();
    const map: Record<string, string> = {};
    for (const [dishId, urls] of Object.entries(
      data.images as Record<string, { current?: string }>
    )) {
      if (urls.current) map[dishId] = urls.current;
    }
    imageCache = map;
    cacheTime = now;
    return map;
  } catch {
    return {};
  }
}
