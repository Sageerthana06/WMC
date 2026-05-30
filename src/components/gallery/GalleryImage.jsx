import { useEffect, useState } from "react";
import { getImage } from "../../data/catalogTypes";
import { getGalleryImage } from "../../utils/galleryImageDB";

export default function GalleryImage({ item, className = "", alt }) {
  const [src, setSrc] = useState(getImage(item));
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setFailed(false);

    async function load() {
      if (item.storageId) {
        try {
          const data = await getGalleryImage(item.storageId);
          if (!cancelled) {
            if (data) setSrc(data);
            else setFailed(true);
          }
        } catch {
          if (!cancelled) setFailed(true);
        }
      } else {
        const img = getImage(item);
        if (!cancelled) setSrc(img || "");
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [item.storageId, item.image, item.url]);

  if (failed || !src) {
    return (
      <div
        className={`flex min-h-[120px] items-center justify-center bg-slate-800 text-sm text-slate-500 ${className}`}
      >
        Image unavailable
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || item.title}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
