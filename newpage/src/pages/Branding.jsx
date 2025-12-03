// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";

export default function Branding() {

  return (
    <main className="relative bg-gradient-to-br from-orange-200 via-white to-orange-300 overflow-hidden">
      {/* HERO */}
      <section className="px-6 md:px-12 py-24 max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 text-orange-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Branding That Sticks
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Your brand is more than a logo, it's the story people remember.  
          We help you shape that story visually, verbally, and strategically so your audience connects instantly.
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
            Start Your Branding →
          </a>
        </motion.div>

        {/* SECTION TITLE */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          How We Build Your Brand
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-gray-600 mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          A strategic, creative, and seamless process designed to make your brand unforgettable.
        </motion.p>

        {/* TIMELINE STEPS */}
        <div className="relative max-w-4xl mx-auto mb-24">
            {/* Vertical timeline line (desktop only) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-3/4 top-7 w-2 bg-orange-200"></div>

            {[
              {
                title: "Discover Your Message",
                text:
                  "We learn what your brand stands for and understand the message you want your audience to feel the moment they see your business.",
              },
              {
                title: "Develop Your Visual Identity",
                text:
                  "We build a complete visual ecosystem—graphics, color palettes, fonts—that carries meaning and instantly connects with your customers.",
              },
              {
                title: "Craft Your Brand Voice",
                text:
                  "Your website and marketing materials speak with a consistent, authentic, and relatable voice that aligns with your core values.",
              },
              {
                title: "Integrate Everything Seamlessly",
                text:
                  "Every piece comes together to create a recognizable, powerful brand presence that sticks in your customer’s mind.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`relative md:w-1/2 mx-auto p-6`}
              >
                {/* CARD */}
                <div className="bg-white border border-orange-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center flex flex-col items-center">
                  
                  {/* Number Circle */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-500 text-white text-2xl font-bold shadow mb-4">
                    {index + 1}
                  </div>

                  {/* Step Title */}
                  <h3 className="text-2xl font-semibold text-black mb-3">
                    {step.title}
                  </h3>

                  {/* Step Text */}
                  <p className="text-gray-600 text-base leading-relaxed max-w-md">
                    {step.text}
                  </p>
                </div>

                
              </motion.div>
            ))}
          </div>


       {/* FEATURE CARDS */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Tools We Use to Elevate Your Brand
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        {[
          {
            title: "Graphics",
            desc: "We generate a set of designs tailored to the message your brand wants to communicate.",
            img: "/Images/Branding/NP_GraphicDesign.png",
          },
          {
            title: "Color Palette Creation",
            desc: "We craft a unique set of colors that become instantly recognizable and memorable to your customers.",
            img: "/Images/Branding/NP_colorpallette.png",
          },
          {
            title: "Font/Typography",
            desc: "We ensure your typography reflects the emotion, style, and tone your brand wants to express.",
            img: "/Images/Branding/NP_typography.png",
          },
          {
            title: "Brand Voice",
            desc: "We shape the messaging on your website so your brand speaks clearly with the personality your customers relate to.",
            img: "/Images/Branding/NP_BrandVoice.png",
          },
          {
            title: "Brand Integration",
            desc: "We blend together voice, fonts, colors, and designs into a cohesive identity customers remember instantly.",
            img: "/Images/Branding/NP_Integration.png",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="
              relative p-8 rounded-2xl bg-white border border-orange-200 
              shadow-md hover:shadow-xl hover:scale-[1.02]
              transition-all duration-300 flex flex-col items-center text-center
              overflow-hidden
            "
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {/* Accent Hover Glow */}
            <div className="absolute inset-0 bg-orange-150 opacity-0 hover:opacity-80 transition-all duration-300 pointer-events-none"></div>
            
            {/* Image Circle */}
              <div className="
                w-25 h-25 rounded-full bg-orange-500 
                flex items-center justify-center shadow-lg mb-6 overflow-hidden relative z-10
              ">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />
              </div>
            {/* Title */}
            <h3 className="text-2xl font-semibold text-orange-500 mb-3 relative z-10">
              {item.title}
            </h3>

            {/* Divider */}
            <div className="w-16 h-1 bg-orange-300 rounded-full mb-4"></div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed relative z-10">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
      </section>
    </main>
  );
}
