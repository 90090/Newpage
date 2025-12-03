// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Marketing() {
  const items = [
    {
      title: "Graphic Design",
      text: "We create any design to help your business stand out. Whether it is a small icon, picture, or even animation.",
      icon: "/icons/graphic.png",
    },
    {
      title: "Logo Design",
      text: "If you’re a new business, haven’t tried creating a logo, or want a revamp — we can create a seamless logo that can be utilized seamlessly across media.",
      icon: "/icons/logo.png",
    },
    {
      title: "Advertisements",
      text: "If interested, you can work with our team to develop multi use graphics that can be utilized for advertisements. We can host your ads through google ads to generate traffic to your business.",
      icon: "/icons/ads.png",
    },
    {
      title: "Copywriting",
      text: "We ensure that the text on your website not only captures strong SEO, but can be digested by your audience. We utilize the optimum amount of text to capture attention, create conversions, and keep your web page looking its best.",
      icon: "/icons/copy.png",
    },
    {
      title: "Website Design",
      text: "Your website doesn’t have to be built statically, brick by brick, blocky as all hell. We bring in alluring curves and shapes to break up the blocky monotonous of the digital landscape. We generate cutting edge ideas to give you and your customers a user experience unlike any other.",
      icon: "/icons/web.png",
    },
  ];

  return (
    <main className="relative bg-gradient-to-br from-orange-200 via-white to-orange-300 overflow-hidden">
      <section className="px-6 md:px-12 py-24 max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center text-orange-500 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Digital Design
        </motion.h1>

        <motion.p
          className="text-lg max-w-2xl mx-auto text-center text-gray-700 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Boost your visual identity, captivate your audience, and elevate your online presence.
        </motion.p>

        <div className="relative border-l-4 border-orange-300 ml-6 md:ml-0 md:border-none">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="
                relative flex flex-col md:flex-row items-start md:items-center gap-6 mb-16 pl-4
                md:even:flex-row-reverse hover:scale-105 transform transition duration-300
              "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Timeline line connector for mobile */}
              <div className="absolute -left-[10px] w-4 h-4 rounded-full bg-orange-500 md:hidden"></div>

              {/* Icon */}
              <div className="relative flex justify-center items-center">
                <div className="absolute inset-0 rounded-full bg-orange-300 blur-xl opacity-40 animate-pulse"></div>

                <div className="rounded-full p-[4px] bg-gradient-to-br from-orange-400 to-red-500">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-white shadow-lg transform transition duration-300 hover:scale-110">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Text block */}
              <div className="md:w-1/2">
                <h2 className="text-2xl font-semibold text-orange-500 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-700">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-block px-6 py-3 text-white bg-orange-500 rounded-full shadow hover:bg-orange-600 transition duration-300"
          >
            Let's Grow Your Digital Presence →
          </a>
        </div>
      </section>
    </main>
  );
}
