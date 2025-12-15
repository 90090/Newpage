import { motion } from "framer-motion";
import { Monitor, ShoppingCart, ToolCase, Code, Server } from "lucide-react";

export default function WebDevelopment() {
  const features = [
    {
      title: "Responsive Design",
      desc: "We build websites that look perfect on any device, from desktops to smartphones. Unlike our competitors, we test across multiple screen sizes to ensure flawless layouts and smooth animations everywhere.",
      icon: <Monitor className="w-12 h-12 text-white" />,
      bg: "from-orange-500 to-orange-400",
    },
    {
      title: "eCommerce Solutions",
      desc: "Our eCommerce setups are fast, secure, and intuitive. We integrate payment solutions, product catalogs, and optimized checkouts, offering more flexibility than generic website builders.",
      icon: <ShoppingCart className="w-12 h-12 text-white" />,
      bg: "from-yellow-400 to-orange-400",
    },
    {
      title: "24/7 Maintenance",
      desc: "We proactively monitor and maintain your website around the clock. Unlike other agencies, we handle updates, security patches, and backups automatically, so your site is always running at peak performance.",
      icon: <ToolCase className="w-12 h-12 text-white" />,
      bg: "from-red-400 to-orange-500",
    },
    {
      title: "Front End Development",
      desc: "Our front-end code is clean, performant, and modern. We prioritize user experience, animations, and accessibility — setting us apart from teams that rely on template-based designs.",
      icon: <Code className="w-12 h-12 text-white" />,
      bg: "from-purple-500 to-pink-500",
    },
    {
      title: "Back End Development",
      desc: "We build robust back-end systems that handle data securely and efficiently. Our architecture scales with your business, offering more control and custom features than plug-and-play solutions.",
      icon: <Server className="w-12 h-12 text-white" />,
      bg: "from-cyan-400 to-blue-500",
    },
  ];

  return (
    <main className="relative bg-white text-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10 px-6 py-24 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-orange-500 mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Website Development
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-gray-700 text-lg mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We create custom websites with modern, scalable solutions that stand out visually and perform flawlessly.
        </motion.p>
        <motion.a
          href="/contact"
          className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-full shadow hover:bg-orange-600 transition"
          whileHover={{ scale: 1.05 }}
        >
          Start Your Project →
        </motion.a>
      </section>

      {/* Curved Background + Feature Section */}
      <section className="relative z-10 py-10 px-6 md:px-12">
        {/* Curved background shape */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-tr from-orange-200 to-orange-300 rounded-t-full opacity-40 -z-10"
          animate={{ rotate: [0, 2, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Features */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              className="relative flex flex-col md:flex-row items-center md:items-start gap-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
            >
              {/* Icon with gradient background */}
              <motion.div
                className={`relative w-24 h-24 flex items-center justify-center rounded-full shadow-lg mb-4 md:mb-0 bg-gradient-to-tr ${f.bg}`}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.15 }}
              >
                {f.icon}
              </motion.div>

              {/* Text */}
              <div className="max-w-md text-center md:text-left">
                <h3 className="text-2xl font-semibold text-orange-500 mb-3">
                  {f.title}
                </h3>
                <p className="text-gray-700">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Decorative floating code blocks */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-20"
        animate={{ rotate: [0, 2, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 rounded-lg bg-orange-200/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>

      {/* CTA Section */}
      <section className="text-center py-24 bg-orange-500 text-white">
        <h2 className="text-4xl font-bold mb-6">Let’s Build Your Website</h2>
        <p className="max-w-xl mx-auto mb-8">
          Custom websites with a personal touch. Fast, reliable, and visually striking.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-white text-orange-500 font-semibold rounded-full shadow hover:bg-orange-100 transition hover:scale-105"
        >
          Get Started →
        </a>
      </section>
    </main>
  );
}
