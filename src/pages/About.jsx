import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import GlassCard from "../components/ui/GlassCard";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  FloatingElement,
} from "../components/animations/AnimatedComponents";
import { team, COMPANY } from "../data/initialData";
import { FaGlobe, FaAward, FaHandshake, FaChartLine } from "react-icons/fa";

const achievements = [
  {
    icon: FaGlobe,
    title: "45+ Countries",
    desc: "Active trade partnerships worldwide",
  },
  {
    icon: FaAward,
    title: "ISO Certified",
    desc: "Quality management standards",
  },
  {
    icon: FaHandshake,
    title: "850+ Clients",
    desc: "Long-term business relationships",
  },
  {
    icon: FaChartLine,
    title: "18 Years",
    desc: "Industry leadership since 2008",
  },
];

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.span
              className="text-sm font-semibold uppercase tracking-widest text-cyan-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              About Us
            </motion.span>
            <motion.h1
              className="mt-2 font-display text-4xl font-bold text-white md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {COMPANY.name}
            </motion.h1>
            <motion.p
              className="mx-auto mt-4 max-w-2xl text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              A leading Sri Lankan export and import company connecting local
              excellence with global markets.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeInUp>
              <SectionTitle
                label="Our Story"
                title="Company History"
                center={false}
              />
              <p className="text-slate-400 leading-relaxed">
                Founded in 2008, World Entrepreneurs Export & Import (PVT) LTD
                began as a small trading firm in Colombo. Today, we are a
                full-service international trade company handling thousands of
                shipments annually across agriculture, textiles, industrial
                goods, and more.
              </p>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Our growth has been driven by integrity, compliance, and a
                relentless focus on client success in an ever-evolving global
                marketplace.
              </p>
            </FadeInUp>
            <motion.img
              initial={{ opacity: 0, x: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
              alt="Office"
              className="rounded-2xl shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-slate-950/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            className="grid gap-8 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            >
              <GlassCard>
                <h3 className="font-display text-2xl font-bold text-cyan-400">
                  Mission
                </h3>
                <p className="mt-4 text-slate-400">
                  To empower Sri Lankan businesses and international partners
                  with seamless, compliant, and cost-effective export and import
                  solutions that drive sustainable growth.
                </p>
              </GlassCard>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            >
              <GlassCard>
                <h3 className="font-display text-2xl font-bold text-amber-400">
                  Vision
                </h3>
                <p className="mt-4 text-slate-400">
                  To be South Asia&apos;s most trusted trade facilitation
                  company, recognized for innovation, reliability, and
                  excellence in global commerce.
                </p>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle label="Leadership" title="Message from the CEO" />
          <FadeInUp>
            <motion.div
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            >
              <GlassCard className="max-w-4xl mx-auto">
                <div className="flex flex-col gap-8 md:flex-row md:items-start">
                  <FloatingElement duration={4} distance={15}>
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop"
                      alt="CEO"
                      className="h-32 w-32 shrink-0 rounded-2xl object-cover"
                      loading="lazy"
                    />
                  </FloatingElement>
                  <div>
                    <p className="text-slate-300 leading-relaxed italic">
                      &ldquo;At WMC, we believe trade is the bridge between
                      nations and opportunities. Every shipment we handle
                      carries the promise of quality, trust, and partnership. We
                      invite you to grow with us.&rdquo;
                    </p>
                    <p className="mt-6 font-semibold text-white">
                      Rajesh Fernando
                    </p>
                    <p className="text-sm text-cyan-400">CEO & Founder</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </FadeInUp>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-slate-950/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle label="Achievements" title="Our Milestones" />
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((a) => (
              <StaggerItem key={a.title}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <GlassCard className="text-center">
                    <FloatingElement duration={3} distance={8}>
                      <a.icon className="mx-auto h-10 w-10 text-cyan-400" />
                    </FloatingElement>
                    <h3 className="mt-4 font-display font-semibold text-white">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400">{a.desc}</p>
                  </GlassCard>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            label="Global Reach"
            title="International Business"
            subtitle="Serving markets across continents with localized expertise"
          />
          <FadeInUp>
            <motion.div whileHover={{ scale: 1.01 }}>
              <GlassCard>
                <p className="text-slate-400 leading-relaxed">
                  WMC maintains active trade corridors to Europe, Middle East,
                  North America, and Asia-Pacific. Our international team
                  navigates complex regulations, currency considerations, and
                  cultural business practices to ensure smooth cross-border
                  transactions. We partner with major shipping lines, customs
                  authorities, and trade chambers to deliver end-to-end
                  solutions.
                </p>
              </GlassCard>
            </motion.div>
          </FadeInUp>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-24 bg-slate-950/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle label="Our Team" title="Meet the Experts" />
          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <GlassCard className="text-center !p-4">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="mx-auto h-40 w-40 rounded-2xl object-cover"
                      loading="lazy"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <h3 className="mt-4 font-display font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm text-cyan-400">{member.role}</p>
                  </GlassCard>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
