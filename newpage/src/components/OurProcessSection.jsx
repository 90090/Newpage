import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineInformationCircle, HiX, } from "react-icons/hi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import CheckUp from "/Images/About/6StepProcess_CheckUp.png";
import Connect from "/Images/About/6StepProcess_Connect.png";
import Design from "/Images/About/6StepProcess_Design.png";
import Development from "/Images/About/6StepProcess_Development.png";
import Optimization from "/Images/About/6StepProcess_Optimize.png";
import Research from "/Images/About/6StepProcess_ContentResearch.png";

export default function OurProcessSection() {
  const steps = [
    {
      image: Connect,
      label: "1. Connect",
      desc: "We meet with you to understand your business goals and digital needs.",
    },
    {
      image: Research,
      label: "2. Research",
      desc: "We analyze your market, competitors, and audience to build a strong strategy.",
    },
    {
      image: Design,
      label: "3. Design",
      desc: "We craft an engaging, user-focused design that reflects your brand.",
    },
    {
      image: CheckUp,
      label: "4. Checkup",
      desc: "We review and refine the design based on feedback and testing.",
    },
    {
      image: Development,
      label: "5. Development",
      desc: "We build your site with modern, responsive, and fast technologies.",
    },
    {
      image: Optimization,
      label: "6. Optimization",
      desc: "We optimize performance, SEO, and analytics for long-term growth.",
    },
  ];

  const [activeStep, setActiveStep] = useState(null);

  const Arrow = () => (
    <div className="hidden lg:flex items-center justify-center mx-6">
      <MdOutlineKeyboardDoubleArrowRight className="text-orange-500 w-12 h-12" />
    </div>
  );

  

  return (
    <>
      {/* OUR PROCESS SECTION */}
      <section
        className="relative bg-[#1f1f1f] pt-20 md:pt-28 pb-20 md:pb-28 overflow-visible text-center"
        aria-labelledby="our-process-heading"
      >
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-gray-500/10 to-transparent pointer-events-none"></div>
        <h2
          id="our-process-heading"
          className="text-3xl md:text-5xl text-white font-bold mb-16"
        >
          Our Process
        </h2>

        {/* Desktop: single row with arrows */}
        <div className="hidden lg:flex justify-center items-center px-4 max-w-7xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center">
              {/* Step container */}
              <div className="flex flex-col items-center">
                <motion.button
                  onClick={() => setActiveStep(i)}
                  className="relative bg-orange-500 text-white p-6 rounded-full shadow-lg flex items-center justify-center h-32 w-32 hover:scale-110 hover:shadow-2xl transform transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-orange-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  aria-label={`${step.label} - click for details`}
                >
                  <img
                    src={step.image}
                    alt={step.label}
                    className="h-16 w-16 object-contain"
                    draggable="false"
                  />
                  <HiOutlineInformationCircle className="absolute bottom-0 right-0 text-white/90 w-6 h-6" />
                </motion.button>
                <p className="mt-4 font-semibold text-white text-md">
                  {step.label}
                </p>
              </div>

              {i < steps.length - 1 && <Arrow />}
            </div>
          ))}
        </div>

        {/* Mobile/Tablet: Grid layout */}
        <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-8 px-6 max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <button
                onClick={() => setActiveStep(i)}
                className="relative bg-orange-500 text-white p-5 rounded-full shadow-lg flex items-center justify-center h-28 w-28 hover:scale-105 transform transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-orange-300"
                aria-label={`${step.label} - click for details`}
              >
                <img
                  src={step.image}
                  alt={step.label}
                  className="h-14 w-14 object-contain"
                  draggable="false"
                />
                <HiOutlineInformationCircle className="absolute bottom-0 right-0 text-white/90 w-5 h-5" />
              </button>
              <p className="mt-3 text-white text-sm md:text-base font-medium">
                {step.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CLAW GRAPHIC - Positioned between sections */}
      <div className="absolute z-30 w-full pointer-events-none">
        <motion.img
          src="/Images/About/NP_ClawGraphic.png"
          alt="Crane Claw"
          className="mx-auto w-[700px] h-[250px] md:w-[900px] md:h-[450px] drop-shadow-2xl"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>

      {/* Popup Modal with Enhanced Interactivity */}
      <AnimatePresence>
        {activeStep !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveStep(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-white to-orange-50 rounded-3xl shadow-2xl max-w-xl w-full p-8 md:p-10 text-center relative overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative background circles */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-200/30 rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-300/20 rounded-full blur-2xl -z-10" />

              {/* Close button */}
              <button
                onClick={() => setActiveStep(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Close modal"
              >
                <HiX className="w-6 h-6 text-gray-600" />
              </button>

              {/* Animated icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mb-6"
              >
                <div className="inline-block p-6 bg-orange-500 rounded-full shadow-lg">
                  <img
                    src={steps[activeStep].image}
                    alt={steps[activeStep].label}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </motion.div>

              {/* Title with animated underline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  {steps[activeStep].label}
                </h3>
                <motion.div
                  className="h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mx-auto mb-6"
                  initial={{ width: 0 }}
                  animate={{ width: "80px" }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                />
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-gray-700 text-lg leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {steps[activeStep].desc}
              </motion.p>

              {/* Step indicator */}
              <motion.div
                className="flex justify-center gap-2 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeStep
                        ? "w-8 bg-orange-500"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to step ${i + 1}`}
                  />
                ))}
              </motion.div>

              {/* Navigation buttons */}
              <div className="flex gap-4 justify-center">
                {activeStep > 0 && (
                  <motion.button
                    onClick={() => setActiveStep(activeStep - 1)}
                    className="px-6 py-3 rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ← Previous
                  </motion.button>
                )}
                {activeStep < steps.length - 1 && (
                  <motion.button
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="px-6 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Next →
                  </motion.button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WHY CHOOSE US */}
      <section className="relative bg-orange-500 text-center pb-24 pt-50 md:pt-90 z-10">
        <div className="max-w-4xl mx-auto text-white px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Any good business relationship starts by forming a connection. The
            first step in our process is connecting with you — we use what you
            share with us to foster the perfect experience for your customers.
            Through creativity and customer research, we tailor your website to
            meet the needs of your business. When you partner with NewPage, you
            get a fresh approach that reaches greater audiences.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-block mt-4 px-8 py-4 rounded-full bg-gray-100 text-orange-500 font-semibold hover:bg-gray-200 transition duration-300 shadow-md hover:shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
          >
            Reach Out To Us Today →
          </motion.a>
        </div>
      </section>
    </>
  );
}