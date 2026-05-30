import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import SectionTitle from "../components/ui/SectionTitle";
import GlassCard from "../components/ui/GlassCard";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import ImageUpload from "../components/ui/ImageUpload";
import LocationSection from "../components/contact/LocationSection";
import { useData } from "../context/DataContext";
import { COMPANY } from "../data/initialData";

export default function Contact() {
  const { addMessage } = useData();
  const { hash } = useLocation();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    image: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (hash === "#location") {
      setTimeout(() => {
        document.getElementById("location")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [hash]);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    addMessage(form);
    toast.success("Message sent successfully! We will contact you soon.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "", image: "" });
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const inputClass = (field) =>
    `glass-dark w-full rounded-xl border px-4 py-3 text-white outline-none transition ${
      errors[field]
        ? "border-red-500/50 focus:border-red-500"
        : "border-white/10 focus:border-cyan-500/50"
    }`;

  return (
    <>
      <div className="pt-24 pb-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            label="Contact"
            title="Get In Touch"
            subtitle="We'd love to hear from you. Send us a message anytime."
          />

          <div className="grid gap-12 lg:grid-cols-2">
            <GlassCard>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <input
                    name="name"
                    placeholder="Your Name *"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>
                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>
                <input
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass("phone")}
                />
                <input
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={inputClass("subject")}
                />
              <div>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message *"
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass("message")} resize-none`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>
              <ImageUpload
                value={form.image}
                onChange={(url) => setForm((prev) => ({ ...prev, image: url }))}
                label="Attach photo (optional)"
                hint="Tap to choose a photo — no link needed"
              />
              <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-semibold text-white disabled:opacity-60"
                >
                  {loading ? <LoadingSpinner size="sm" /> : "Send Message"}
                </button>
              </form>
            </GlassCard>

            <div className="space-y-6">
              <GlassCard>
                <h3 className="font-display text-xl font-semibold text-white">
                  Company Details
                </h3>
                <ul className="mt-6 space-y-4 text-slate-400">
                  <li className="flex items-start gap-3">
                    <FaMapMarkerAlt className="mt-1 shrink-0 text-cyan-400" />
                    {COMPANY.address}
                  </li>
                  <li className="flex items-center gap-3">
                    <FaPhone className="shrink-0 text-cyan-400" />
                    <a href={`tel:${COMPANY.phone}`} className="hover:text-white">
                      {COMPANY.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaEnvelope className="shrink-0 text-cyan-400" />
                    <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
                      {COMPANY.email}
                    </a>
                  </li>
                </ul>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3 font-semibold text-white hover:bg-green-600"
                >
                  <FaWhatsapp className="text-xl" /> Chat on WhatsApp
                </a>
              </GlassCard>

              <GlassCard>
                <h3 className="mb-4 font-semibold text-white">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: FaFacebookF, href: COMPANY.social.facebook },
                    { icon: FaLinkedinIn, href: COMPANY.social.linkedin },
                    { icon: FaInstagram, href: COMPANY.social.instagram },
                    { icon: FaTwitter, href: COMPANY.social.twitter },
                  ].map(({ icon: Icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass flex h-11 w-11 items-center justify-center rounded-lg text-slate-400 hover:text-cyan-400"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </GlassCard>

              <motion.a
                href="#location"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-2 rounded-2xl border border-sky-400/40 bg-sky-500/10 px-6 py-4 text-sm font-semibold text-sky-300 transition hover:bg-sky-500/20"
              >
                <FaMapMarkerAlt />
                Scroll to full location map below
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      <LocationSection />
    </>
  );
}
