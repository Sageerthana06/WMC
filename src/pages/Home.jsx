import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroSection from "../components/home/HeroSection";
import SectionTitle from "../components/ui/SectionTitle";
import GlassCard from "../components/ui/GlassCard";
import CatalogCard from "../components/ui/CatalogCard";
import AnimatedCounter from "../components/ui/AnimatedCounter";
import { useData } from "../context/DataContext";
import { partners, stats, COMPANY } from "../data/initialData";

export default function Home() {
  const { services } = useData();
  const featuredServices = services.filter((s) => s.featured).slice(0, 4);

  return (
    <>
      <HeroSection />

      {/* Services Overview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            label="What We Do"
            title="Our Core Services"
            subtitle="Comprehensive trade solutions tailored for global businesses"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((svc, i) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <CatalogCard item={svc} imageClass="aspect-[16/10]" />
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-block rounded-xl border border-cyan-500/50 px-8 py-3 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-500/10"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="text-center">
                  <p className="font-display text-4xl font-bold gradient-text">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-slate-400">{stat.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-slate-500">
            Trusted Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {partners.map((name) => (
              <span
                key={name}
                className="font-display text-lg font-semibold text-slate-600 transition hover:text-slate-400"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <GlassCard className="text-center !p-12">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Ready to Expand Globally?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Partner with {COMPANY.shortName} for seamless export and import
              solutions. Get a free consultation today.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-block rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-4 font-semibold text-white shadow-xl shadow-cyan-500/30"
            >
              Contact Us Now
            </Link>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
