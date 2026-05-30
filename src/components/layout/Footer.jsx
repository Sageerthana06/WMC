import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { COMPANY } from "../../data/initialData";
import { footerNavLinks } from "../../data/navLinks";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 font-display text-lg font-bold text-white">
                W
              </div>
              <span className="font-display font-bold text-white">
                {COMPANY.shortName}
              </span>
            </div>
            <p className="text-sm text-slate-400">{COMPANY.name}</p>
            <p className="mt-2 text-sm text-slate-500">{COMPANY.tagline}</p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {footerNavLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 transition hover:text-cyan-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-0.5 shrink-0 text-cyan-400" />
                {COMPANY.address}
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="shrink-0 text-cyan-400" />
                {COMPANY.phone}
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="shrink-0 text-cyan-400" />
                {COMPANY.email}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Follow Us</h4>
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
                  className="glass flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 transition hover:bg-cyan-500/20 hover:text-cyan-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
