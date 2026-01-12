// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Marketing() {
  const items = [
    {
      title: "Graphic Design",
      text: "We create any design to help your business stand out. Whether it is a small icon, picture, or even animation.",
      icon: "Images/Branding/NP_GraphicDesign.png",
    },
    {
      title: "Logo Design",
      text: "If you’re a new business, haven’t tried creating a logo, or want a revamp — we can create a logo that can be utilized seamlessly across media.",
      icon: "Images/Branding/NP_colorpallette.png",
    },
    {
      title: "Advertisements",
      text: "If interested, you can work with our team to develop multi use graphics that can be utilized for advertisements. We can thne host them through google ads to generate traffic to your business.",
      icon: "Images/SEO/NP_mobileseo.png",
    },
    {
      title: "Copywriting",
      text: "We ensure that the text on your website not only captures strong SEO, but can be digested by your audience. We utilize the optimum amount of text to capture attention, create conversions, and keep your web page looking its best.",
      icon: "Images/SEO/NP_magnifyingglass.png",
    },
    {
      title: "Website Design",
      text: "Your website doesn’t have to be built statically. We bring in alluring curves and shapes to break up the monotony, by generating cutting edge ideas to give you and your customers a user experience unlike any other.",
      icon: "Images/SEO/NP_MouseClicker.png",
    },
  ];

  return (
    <main className="relative bg-gradient-to-br from-orange-200 via-white to-orange-300 overflow-hidden">
      <section className="px-6 md:px-12 py-24 max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-orange-500 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Digital Design
        </motion.h1>

        <motion.p
          className="text-lg max-w-2xl mx-auto text-gray-700 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Boost your visual identity, captivate your audience, and elevate your online presence.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <a
            href="/contact"
            className="inline-block mb-20 px-8 py-4 text-white bg-orange-500 rounded-full shadow hover:bg-orange-600 transition text-lg"
          >
            Start Your Digital Design Journey →
          </a>
        </motion.div>

        <div className="relative border-l-4 border-orange-300 ml-6 md:ml-0 md:border-none">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="
              relative flex flex-col md:flex-row items-center md:items-start
              gap-6 mb-16 pl-4
              hover:scale-105 transform transition duration-300
              border border-orange-200 rounded-2xl bg-white p-8 shadow-sm hover:shadow-lg
            "
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Timeline dot (mobile only) */}
            <div className="absolute -left-[10px] w-4 h-4 rounded-full bg-orange-500 md:hidden"></div>

            {/* Icon */}
            <div className="relative flex justify-center md:justify-start items-center w-full md:w-auto">
              <div className="absolute inset-0 rounded-full bg-orange-300 blur-xl opacity-40 animate-pulse"></div>

              <div className="rounded-full p-[4px] bg-gradient-to-br from-orange-400 to-red-500">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-white shadow-lg transform transition duration-300 hover:scale-110">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl font-semibold text-orange-500 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-700">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>


        {/* CTA SECTION */}
        <motion.section
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-orange-500">
            Want to see more?
          </h2>
          <p className="mb-6 text-lg max-w-xl mx-auto">
            Request a free quote for website design, development, and hosting today!
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition duration-300 shadow-md hover:shadow-lg"
          >
            Let's Create Digital Design That Sticks →
          </a>
        </motion.section>
      </section>
    </main>
  );
}
