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
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-200 via-white to-orange-300">
        {/* Background accent for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,165,0,0.1),transparent_60%)] pointer-events-none -z-10"></div>

        {/* HEADER / LOGO */}
        <motion.div
          className="text-center pt-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-orange-500 tracking-tight">
            Welcome to 
          </h1> 
          <img
            src="/NewPageLogo.png"
            alt="Newpage Logo"
            className="mx-auto w-40 md:w-52 mb-3 drop-shadow-md"
          />
          
        </motion.div>

        {/* HERO SECTION */}
        <div className="md:p-13 p-8 text-center flex flex-col md:flex-row items-center justify-center gap-12 relative z-10">
          <motion.div
            className="flex-1 max-w"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
              A Web Design & Development Company
            </motion.h2>
            <motion.p className="text-lg text-gray-700 mb-6 leading-relaxed">
              New to having a digital presence? Not sure how to host a website?
              <span className="font-semibold text-orange-500"> Newpage </span>
              is a creative digital agency that helps you create an impact through
              powerful web design. Whether you're a new business or an established
              one, we want to see you succeed.
            </motion.p>

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
                className="rounded-2xl max-w-md"
              />
              {/* Subtle orange glow behind image */}
              <div className="absolute inset-0 bg-orange-200/30 blur-2xl rounded-2xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* WHY US SECTION */}
      <motion.section
        className="bg-orange-500 text-white py-12 px-6 md:px-16 text-center md:text-left"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-10">
          {/* TEXT CONTENT */}
          <div className="md:w-1/2">
            <h2 className="text-3xl text-center font-bold mb-4">
              CT Website Design and Hosting
            </h2>
            <p className="text-base md:text-lg text-center leading-relaxed">
              Looking for professional web design in CT? We build fast,
              mobile-friendly websites for small businesses across Connecticut.
              Whether you're in Hartford, New Haven, Stamford, Bridgeport, or even
              outside Connecticut, we're ready to work with you — wherever you're
              located.
            </p>
          </div>

          {/* IMAGE */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/Images/Home/NP_CT Graphic.png"
              alt="Connecticut map showing our locations"
              className="w-64 sm:w-80 md:w-112 rounded-lg"
            />
          </div>
        </div>

        {/* BUTTON */}
        <div className="mt-10 flex justify-center">
          <a
            href="/contact"
            className="inline-block px-6 py-3 rounded-full bg-white text-orange-500 font-semibold hover:bg-orange-100 transition duration-300 shadow-md hover:shadow-lg"
          >
            Request a Free Quote
          </a>
        </div>
      </motion.section>


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
