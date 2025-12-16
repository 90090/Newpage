import Reveal from "./Reveal";
import { Cloud } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesSection({ featureData }) {
  return (
    <section className="py-8 px-4 max-w-6xl mx-auto">
      {featureData.map((feature, index) => (
        <Reveal key={index}>
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-10 mb-20`}
          >

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="relative flex flex-col items-center text-center rounded-3xl bg-white/10 backdrop-blur-md p-10 w-full md:w-1/2 shadow-lg hover:shadow-orange-400/40 border border-orange-200"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-400/10 bg-[#0096ff]/10 -z-10 blur-2xl"></div>
              <div className="p-3 bg-gradient-to-tr from-orange-400 to-[#0096ff] rounded-full mb-4 shadow-md">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-2xl mb-2 text-white">{feature.title}</h3>
              <p className="text-white">{feature.text}</p>
            </motion.div>

            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="rounded-xl max-w-xs md:max-w-sm object-cover"
              />
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
