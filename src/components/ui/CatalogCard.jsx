import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import ServiceIcon from "./ServiceIcon";
import { getImage, getTitle } from "../../data/catalogTypes";

/**
 * Unified card for service / product / gallery items
 */
export default function CatalogCard({
  item,
  onClick,
  badge,
  footer,
  imageClass = "aspect-[4/3]",
  showIconOverlay = true,
}) {
  const title = getTitle(item);
  const image = getImage(item);

  return (
    <GlassCard
      className={`overflow-hidden !p-0 ${onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
      hover={Boolean(onClick)}
    >
      <div className={`relative overflow-hidden ${imageClass}`}>
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full min-h-[160px] items-center justify-center bg-slate-800">
            <ServiceIcon name={item.icon} className="h-12 w-12 text-cyan-400" />
          </div>
        )}
        {showIconOverlay && item.icon && image && (
          <div className="absolute left-3 top-3 rounded-lg bg-black/50 p-2 text-cyan-400 backdrop-blur-sm">
            <ServiceIcon name={item.icon} className="h-5 w-5" />
          </div>
        )}
        {badge}
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
        {item.description && (
          <p className="mt-2 line-clamp-2 text-sm text-slate-400">{item.description}</p>
        )}
        {footer}
      </div>
    </GlassCard>
  );
}
