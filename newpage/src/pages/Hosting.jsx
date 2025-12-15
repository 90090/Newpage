import { motion, useScroll, useTransform } from "framer-motion";
import { Cloud, Shield, Plug, Zap, Gift } from "lucide-react";
import Reveal from "../components/Reveal";

export default function Hosting() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const features = [
    {
      title: "Cloud Hosting",
      icon: <Cloud className="w-12 h-12 text-white" />,
      desc: "Modern, scalable cloud infrastructure optimized for speed and uptime. Powered by next-gen data centers and managed entirely for us.",
      visual: (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-40"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      ),
      bg: "from-blue-500/20 via-purple-500/10 to-pink-500/20",
    },
    {
      title: "Secure & Reliable",
      icon: <Shield className="w-12 h-12 text-white" />,
      desc: "Protected with firewalls, SSL, and DDoS prevention. We handle security and uptime monitoring 24/7.",
      visual: (
        <motion.div
          className="absolute -inset-2 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 opacity-30 blur-2xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      ),
      bg: "from-green-400/20 via-emerald-400/10 to-lime-300/20",
    },
    {
      title: "Seamless Integration",
      icon: <Plug className="w-12 h-12 text-white" />,
      desc: "Integrated with your website stack, analytics, and CMS tools. We ensure everything works together smoothly.",
      visual: (
        <motion.div
          className="absolute -inset-2 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 opacity-30 blur-2xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      ),
      bg: "from-cyan-400/20 via-blue-500/10 to-indigo-500/20",
    },
    {
      title: "Fast",
      icon: <Zap className="w-12 h-12 text-white" />,
      desc: "Blazing-fast load times backed by edge caching and performance tuning. Your users will feel the difference instantly.",
      visual: (
        <motion.div
          className="absolute -inset-2 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 opacity-30 blur-2xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      ),
      bg: "from-orange-400/20 via-yellow-400/10 to-red-400/20",
    },
    {
      title: "Free",
      icon: <Gift className="w-12 h-12 text-white" />,
      desc: "We offer a free hosting tier for small projects, nonprofits, and early-stage businesses ready to get online fast.",
      visual: (
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,192,203,0.5),transparent_60%)] rounded-full"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      ),
      bg: "from-pink-400/20 via-rose-400/10 to-purple-400/20",
    },
  ];

  return (
    <main className="relative bg-gradient-to-br from-orange-200 via-white to-orange-300 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,165,0,0.1),transparent_70%)]"
        style={{ y }}
      />

      {/* HERO */}
      <section className="text-center py-10 px-6 relative z-10">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-orange-500 mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Premium Hosting Services
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Every website we host runs on secure, high-speed cloud infrastructure designed for performance, reliability, and seamless management.
        </motion.p>

        <motion.a
          href="/contact"
          className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition shadow-md"
          whileHover={{ scale: 1.05 }}
        >
          Contact Us →
        </motion.a>
      </section>

      
        {/* CLOUD DISPLAY */}
        <section className="relative flex flex-col items-center justify-center py-10 md:py-100 overflow-hidden">
          {/* Center Icon */}
          <motion.div className="relative z-20 mb-10 md:mb-0">
            <motion.img
              src="/Images/Home/NP_CloudGraphic2.png"
              alt="Hosting Center"
              className="w-52 object-contain drop-shadow-lg"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>

          {/* Clouds positioned around center */}
          <div className="hidden md:block absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-full h-full flex items-center justify-center">
              {features.map((f, i) => {
                const angle = (i / features.length) * 2 * Math.PI - Math.PI / 2;
                const radius = 320;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <Reveal key={f.title}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        x: x,
                        y: y
                      }}
                      transition={{
                        duration: 0.8,
                        delay: i * 0.15,
                        type: "spring",
                        stiffness: 120,
                      }}
                      className="absolute pointer-events-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="relative flex flex-col items-center justify-center text-center rounded-full p-6 bg-white/90 backdrop-blur-md shadow-xl border border-orange-200 w-44 h-44 group cursor-pointer"
                      >

                        {/* Cloud glow */}
                        <motion.div
                          className={`absolute inset-0 rounded-full bg-gradient-to-tr ${f.bg} opacity-40 blur-xl -z-10`}
                          animate={{ scale: [1, 1.15, 1] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {/* Icon bubble */}
                        <div className="p-3 bg-gradient-to-tr from-orange-500 to-pink-500 rounded-full mb-2 shadow-lg">
                          {f.icon}
                        </div>

                        {/* Title */}
                        <h3 className="font-bold text-sm text-gray-900 leading-tight px-2">{f.title}</h3>

                        {/* Description tooltip */}
                        <motion.div
                          className="absolute z-30 top-full mt-4 left-1/2 -translate-x-1/2 w-64 bg-gray-900 text-white text-sm p-4 rounded-xl shadow-2xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-300"
                          initial={{ y: -10 }}
                          whileHover={{ y: 0 }}
                        >
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-900 rotate-45"></div>
                          {f.desc}
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* MOBILE VERSION – STACKED */}
          <div className="flex flex-col md:hidden gap-8 mt-6 w-full px-4 max-w-sm">

            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center
                  rounded-3xl p-6 bg-white/90 backdrop-blur-md shadow-lg border border-orange-200"
              >
                {/* Glow */}
                <motion.div
                  className={`absolute inset-0 rounded-full bg-gradient-to-tr ${f.bg} opacity-40 blur-xl -z-10`}
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Icon */}
                <div className="p-3 bg-gradient-to-tr from-orange-500 to-pink-500 rounded-full shadow-lg mb-3">
                  {f.icon}
                </div>

                {/* Title + Description */}
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{f.title}</h3>
                <p className="text-gray-700 text-sm px-2">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      {/* FINAL CTA */}
      <motion.section
        className="bg-orange-500 text-white text-center py-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="max-w-xl mx-auto mb-10">
          Let us handle your hosting — we’ll keep your website fast, secure, and worry-free.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-orange-500 rounded-full font-semibold hover:bg-orange-100 transition"
        >
          Contact Us →
        </a>
      </motion.section>
    </main>
  );
}
