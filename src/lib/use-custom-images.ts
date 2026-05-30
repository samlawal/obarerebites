"use client";

import { useState, useEffect } from "react";

let globalCache: Record<string, string> = {};
let fetched = false;

export function useCustomImages(): Record<string, string> {
  const [images, setImages] = useState<Record<string, string>>(globalCache);

  useEffect(() => {
    if (fetched) return;
    fetched = true;

    fetch("/api/admin/public")
      .then((r) => (r.ok ? r.json() : { images: {} }))
      .then((data) => {
        const map: Record<string, string> = {};
        for (const [dishId, urls] of Object.entries(
          (data.images || {}) as Record<string, { current?: string }>
        )) {
          if (urls.current) map[dishId] = urls.current;
        }
        globalCache = map;
        setImages(map);
      })
      .catch(() => {});
  }, []);

  return images;
}
