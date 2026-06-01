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
                World Entrepreneurs Company was founded to empower individuals
                through entrepreneurship, leadership development, and direct
                marketing opportunities. Since its establishment, the company
                has focused on professional growth, innovation, and creating
                pathways to success for its team members and partners.
                "Empowering People, Building Leaders."
              </p>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Our growth has been driven by integrity, compliance, and a
                relentless focus on client success in an ever-evolving global
                marketplace.
              </p>
            </FadeInUp>
            <motion.video
              initial={{ opacity: 0, x: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.55, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-2xl shadow-2xl w-full aspect-square object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/vid/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>
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
                  Welcome to our company. Our mission is to create
                  opportunities, develop leadership, and empower individuals to
                  achieve their personal and professional goals. Through
                  innovation, teamwork, and dedication, we strive to provide
                  exceptional value to our customers and partners. Thank you for
                  being part of our journey towards growth and success
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
                  To become a leading marketing company that empowers Sri Lankan
                  youth, enabling them to establish branch companies across the
                  nation and create sustainable employment opportunities.
                </p>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
{
  /* About.js கோப்பில் மாற்ற வேண்டிய பகுதி */
}
<section className="py-24 bg-slate-950/50">
  <div className="mx-auto max-w-7xl px-4 lg:px-8">
    {/* SectionTitle-க்கு பதிலாக படத்தை நேரடியாகப் பயன்படுத்துதல் */}
    <div className="text-center mb-12">
      <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
        Our Team
      </span>
      <img
        src="/path/to/your/image_5203fb.png"
        alt="Meet the Experts"
        className="mx-auto mt-4"
      />
    </div>

    <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {/* உங்கள் டீம் மெம்பர்கள் கோட் */}
    </StaggerContainer>
  </div>
</section>;
