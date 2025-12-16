import { motion } from "framer-motion";
import { Monitor, ShoppingCart, ToolCase, Code, Server } from "lucide-react";

export default function WebDevelopment() {
  const features = [
    {
      title: "Responsive Design",
      desc: "We build websites that look perfect on any device, from desktops to smartphones. Unlike our competitors, we test across multiple screen sizes to ensure flawless layouts and smooth animations everywhere.",
      icon: <Monitor className="w-12 h-12 text-white" />,
      bg: "from-orange-500 to-[#0096ff]",
    },
    {
      title: "eCommerce Solutions",
      desc: "Our eCommerce setups are fast, secure, and intuitive. We integrate payment solutions, product catalogs, and optimized checkouts, offering more flexibility than generic website builders.",
      icon: <ShoppingCart className="w-12 h-12 text-white" />,
      bg: "from-orange-500 to-[#0096ff]",
    },
    {
      title: "24/7 Maintenance",
      desc: "We proactively monitor and maintain your website around the clock. Unlike other agencies, we handle updates, security patches, and backups automatically, so your site is always running at peak performance.",
      icon: <ToolCase className="w-12 h-12 text-white" />,
      bg: "from-orange-500 to-[#0096ff]",
    },
    {
      title: "Front End Development",
      desc: "Our front-end code is clean, performant, and modern. We prioritize user experience, animations, and accessibility — setting us apart from teams that rely on template-based designs.",
      icon: <Code className="w-12 h-12 text-white" />,
      bg: "from-orange-500 to-[#0096ff]",
    },
    {
      title: "Back End Development",
      desc: "We build robust back-end systems that handle data securely and efficiently. Our architecture scales with your business, offering more control and custom features than plug-and-play solutions.",
      icon: <Server className="w-12 h-12 text-white" />,
      bg: "from-orange-500 to-[#0096ff]",
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
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <a
            href="/contact"
            className="inline-block mb-20 mt-8 px-8 py-4 text-white bg-orange-500 rounded-full shadow hover:bg-orange-600 transition text-lg"
          >
            Start Your Project →
          </a>
        </motion.div>
      </section>

      {/* Curved Background + Feature Section */}
      <section className="relative z-10 py-10 px-6 md:px-12">
        {/* Curved background shape */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1100px] h-[1100px] bg-gradient-to-tr from-orange-200 to-orange-300 rounded-full opacity-40 -z-20 pointer-events-none"
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

      {/* CTA SECTION */}
      <motion.section
        className="mt-24 mb-24 text-center "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4 text-orange-500">
          Let’s Build Your Website
        </h2>
        <p className="mb-6 text-lg max-w-xl mx-auto">
          Custom websites with a personal touch. Fast, reliable, and visually striking.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition duration-300 shadow-md hover:shadow-lg"
        >
          Let's Work Together →
        </a>
      </motion.section>
    </main>
  );
}
