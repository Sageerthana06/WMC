import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaPlay, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import SectionTitle from "../components/ui/SectionTitle";
import GalleryInsertForm from "../components/gallery/GalleryInsertForm";
import GalleryImage from "../components/gallery/GalleryImage";
import { useData } from "../context/DataContext";

const tabs = [
  { id: "all", label: "All" },
  { id: "warehouse", label: "Warehouse" },
  { id: "products", label: "Products" },
  { id: "events", label: "Events" },
  { id: "video", label: "Videos" },
];

export default function Gallery() {
  const { gallery, removeGalleryPhoto } = useData();
  const [tab, setTab] = useState("all");
  const [lightbox, setLightbox] = useState(null);

  const filtered = useMemo(() => {
    if (tab === "all") return gallery;
    if (tab === "video") return gallery.filter((g) => g.type === "video");
    return gallery.filter((g) => g.category === tab);
  }, [gallery, tab]);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    if (!window.confirm("Remove this photo?")) return;
    await removeGalleryPhoto(id);
    toast.info("Photo removed");
    if (lightbox?.id === id) setLightbox(null);
  };

  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          label="Gallery"
          title="Our World in Pictures"
          subtitle="Tap Add Photo to upload — works on mobile and desktop"
        />

        <div
          id="gallery-grid"
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`rounded-xl px-5 py-2.5 text-sm font-medium transition ${
                tab === t.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                  : "glass text-slate-400 hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="py-16 text-center text-slate-500">
            No photos in this category yet. Use{" "}
            <strong className="text-cyan-400">Add Photo</strong> above.
          </p>
        ) : (
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.05 }}
                className="mb-4 break-inside-avoid"
              >
                <div className="group relative w-full overflow-hidden rounded-2xl glass-dark">
                  <button
                    type="button"
                    onClick={() => setLightbox(item)}
                    className="block w-full text-left"
                  >
                    {item.type === "video" ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <GalleryImage
                        item={item}
                        className="w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-sm font-medium text-white">
                        {item.title}
                      </p>
                    </div>
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/90 text-white shadow-lg">
                          <FaPlay className="ml-1" />
                        </div>
                      </div>
                    )}
                  </button>
                  {item.uploaded && (
                    <button
                      type="button"
                      onClick={(e) => handleDelete(e, item.id)}
                      className="absolute right-2 top-2 rounded-full bg-red-500/90 p-2 text-white shadow-lg sm:opacity-0 sm:transition sm:group-hover:opacity-100"
                      aria-label="Delete photo"
                    >
                      <FaTrash className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute right-6 top-6 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            >
              <FaTimes className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-h-[90vh] max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {lightbox.type === "video" ? (
                <div className="aspect-video w-full overflow-hidden rounded-2xl">
                  <iframe
                    src={lightbox.videoUrl}
                    title={lightbox.title}
                    className="h-full w-full"
                    allowFullScreen
                  />
                </div>
              ) : (
                <GalleryImage
                  item={lightbox}
                  className="max-h-[85vh] w-full rounded-2xl object-contain"
                />
              )}
              <p className="mt-4 text-center text-lg font-semibold text-white">
                {lightbox.title}
              </p>
              {lightbox.description && (
                <p className="mt-1 text-center text-slate-400">
                  {lightbox.description}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
