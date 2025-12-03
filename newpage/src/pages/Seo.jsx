import { motion,useScroll, useTransform } from "framer-motion";
import { Search, BarChart2, Smartphone, FileText, Zap } from "lucide-react";

export default function SEO() {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const features = [
    {
      title: "Keyword Research",
      desc: "We capture the most searched phrases by your target audience to generate organic traffic.",
      icon: <Search className="w-12 h-12 text-white" />,
      color: "from-orange-500 to-orange-400",
    },
    {
      title: "On-Page SEO",
      desc: "Optimize the structure and wording on your site to appear higher in search results.",
      icon: <BarChart2 className="w-12 h-12 text-white" />,
      color: "from-orange-500 to-orange-400",
    },
    {
      title: "Mobile SEO",
      desc: "Ensure your website performs perfectly on mobile devices for search rankings.",
      icon: <Smartphone className="w-12 h-12 text-white" />,
      color: "from-orange-500 to-orange-400",
    },
    {
      title: "Content Optimization",
      desc: "Optimize readable content on your pages for better SEO performance.",
      icon: <FileText className="w-12 h-12 text-white" />,
      color: "from-orange-500 to-orange-400",
    },
    {
      title: "Site Speed Optimization",
      desc: "Streamline your website to load fast and rank higher in search results.",
      icon: <Zap className="w-12 h-12 text-white" />,
      color: "from-orange-500 to-orange-400",
    },
  ];

  return (
    <main className="relative bg-gradient-to-br from-orange-200 via-white to-orange-300 overflow-hidden">
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[150vw] h-[130vh] md:h-[170vh] bg-gradient-to-br from-orange-200 via-white to-black opacity-20 rounded-full pointer-events-none"
        style={{ y: bgY }}
      />
      {/* HERO */}
      <section className="relative z-10 px-6 py-24 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-orange-500 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Search Engine Optimization
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Grow your traffic and rank higher with strategies built for long-term success.
        </motion.p>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 md:px-12 pb-32 flex flex-col items-center space-y-24">
        {features.map((f, idx) => (
          <div
            key={f.title}
            className="relative flex flex-col items-center text-center"
          >
            {/* Centered Background blob */}
            <motion.div
              className={`absolute w-56 h-56 rounded-full bg-gradient-to-tr ${f.color} opacity-30 blur-3xl pointer-events-none`}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            {/* Icon with hover/pulse */}
            <motion.div
              className="relative w-24 h-24 flex items-center justify-center rounded-full bg-orange-500 shadow-lg mb-6"
              whileHover={{ scale: 1.1 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {f.icon}
            </motion.div>

            {/* Text */}
            <motion.div
              className="max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <h3 className="text-2xl font-semibold text-orange-500 mb-3">{f.title}</h3>
              <p className="text-gray-700">{f.desc}</p>
            </motion.div>
          </div>
        ))}
      </section>


      {/* Metrics / Success Visualizer */}
      <section className="relative z-10 px-6 md:px-12 py-20 bg-orange-300 text-white rounded-3xl mx-6 md:mx-12 mb-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {[
            { label: "Organic Visits", value: " +120%" },
            { label: "Keyword Rankings", value: "Top 5" },
            { label: "Bounce Rate", value: "-40%" },
          ].map((m, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <motion.span
                className="text-4xl md:text-5xl font-bold text-black"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
              >
                {m.value}
              </motion.span>
              <span className="mt-2 text-black text-sm md:text-base">{m.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="text-center py-24 bg-orange-500 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Dominate Search?
        </h2>
        <p className="text-lg max-w-xl mx-auto mb-8">
          Let us drive the right traffic to your site. Get in touch and let’s make SEO work for you.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-white text-orange-500 font-semibold rounded-full shadow hover:bg-orange-100 transition-transform duration-300 hover:scale-105"
        >
          Let’s Talk SEO →
        </a>
      </section>
    </main>
  );
}
