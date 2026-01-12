// eslint-disable-next-line no-unused-vars
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import FeaturesSection from "../components/FeaturesSection";
import { Cloud } from "lucide-react"; // for data cloud icon header

function Home() {
  const controls = useAnimation();
  const sectionRef = useRef();
  const isInView = useInView(sectionRef, { once: false });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const featureData = [
    {
      title: "Responsive Websites",
      text: "We analyze your business and utilize cutting-edge design to ensure your website works seamlessly across every screen size.",
      image: "/Images/Home/NP_ComputerandPhonewWebsite.png",
    },
    {
      title: "Consistent Hosting",
      text: "We provide you with consistent, secure, free web hosting. We also improve website uptime and speed, leading to more time spent and more conversions.",
      image: "/Images/Home/NP_CloudGraphic2.png",
    },
    {
      title: "Exciting Branding",
      text: "We craft unique branding strategies to help you build customer loyalty and differentiate you from competitors.",
      image: "/Images/Home/NP_SEOGraphic.png",
    },
    {
      title: "Results-Driven Marketing",
      text: "We explore all avenues to make sure you get the best results — through SEO, ads, graphic design, and more.",
      image: "/Images/Home/NP_MarketingGraphic.png",
    },
  ];

  return (
    <main className="bg-white text-black">
      <section className="relative overflow-hidden bg-white">
        
        {/* HERO SECTION */}
        <div className="p-6 text-left flex flex-col md:flex-row items-center justify-center relative z-10">
          <motion.div
            className="flex-1 max-w"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
              Grow Your Digital Presence
            </motion.h2>
            <motion.p className="text-lg text-gray-700 mb-6 leading-relaxed">
              New to having a digital presence? Not sure how to host a website?
              <span className="font-semibold text-orange-500"> Newpage </span>
              is a creative digital agency that helps you create an impact through
              powerful web design. Whether you're a new business or an established
              one, we want to see you succeed.
            </motion.p>

            <a
              href="/contact"
              className="inline-block mr-5 px-6 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition duration-300 shadow-md hover:shadow-lg"
            >
              Request a Free Quote
            </a>

            <a
              href="/work"
              className="inline-block mt-4 px-8 py-3 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300 shadow-md hover:shadow-lg"
            >
              View Our Work
            </a>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src="/Images/Home/NP_ComputerandPhonewWebsite.png"
                alt="Our Work Example"
                className="height-auto"
              />
              {/* Subtle orange glow behind image */}
              <div className="absolute inset-0 rounded-2xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* WHY US SECTION */}
      <div className="relative overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 Q720,0 1440,80 L1440,0 L0,0 Z"
            fill="white"
          />
        </svg>
      <motion.section
        className="bg-orange-100 text-white py-20 px-6 md:px-16 text-center md:text-left"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        
        <div className="flex flex-col md:flex-row items-center justify-left md:justify-between gap-10">
          {/* TEXT CONTENT */}
          <div className="md:w-1/2">
            <h2 className="text-3xl text-left font-bold mb-4 text-black">
              Website Design and Hosting
            </h2>
            <p className="text-black text-base md:text-lg text-left leading-relaxed">
              Looking for professional web design in CT? We build fast,
              mobile-friendly websites for small businesses across Connecticut.
              Whether you're in Hartford, New Haven, Stamford, Bridgeport, or even
              outside Connecticut, we're ready to work with you — <span className="font-semibold">wherever you're
              located.</span>
            </p>
          </div>

          {/* IMAGE + BRANDING */}
      <div className="md:w-1/2 flex flex-col items-center text-black">
        <p className="font-semibold tracking-wide text-md mb-2">
          Welcome to
        </p>

        {/* LOGO */}
        <img
          src="/NewPageLogo.png"
          alt="Newpage logo"
          className="w-40 md:w-50"
        />

        {/* MAIN IMAGE */}
        <img
          src="/Images/Home/NP_CT Graphic.png"
          alt="Connecticut map showing our locations"
          className="max-w-full height-auto rounded-lg brightness-0"
        />

        {/* CAPTION */}
        <p className="font-semibold mt-2 text-md self-end">
          a Connecticut-based company
        </p>
      </div>
        </div>
      </motion.section>
      </div>


      {/* FEATURES SECTION */}
      <section className="text-center py-16 px-4 bg-[#323232]">
        <div className="mb-16 text-center text-white">
        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-tr from-orange-500 to-[#0096ff] rounded-full shadow-lg mb-6">
          <Cloud className="w-10 h-10 text-white" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-3">What We Offer</h2>
      </div>
        <FeaturesSection featureData={featureData} />
      </section>

      {/* CALL TO ACTION */}
      <motion.section
        className="bg-orange-500 text-white text-center py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-8 px-4">
          Ready to Create Something New?
        </h2>
        <a
          href="/contact"
          className="inline-block mt-4 px-6 py-3 rounded-full bg-white text-orange-500 font-semibold hover:bg-orange-100 transition duration-300 shadow-md hover:shadow-lg"
        >
          Reach Out to Us →
        </a>
      </motion.section>
    </main>
  );
}

export default Home;
