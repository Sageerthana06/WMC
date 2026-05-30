import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { COMPANY } from "../../data/initialData";

export default function WhatsAppButton() {
  const url = `https://wa.me/${COMPANY.whatsapp}?text=Hello%20WMC,%20I%20would%20like%20to%20inquire%20about%20your%20services.`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-24 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white shadow-lg shadow-green-500/40"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </motion.a>
  );
}
