// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import OurProcessSection from "../components/OurProcessSection";
// import teamPhoto1 from "../assets/team1.jpg"; // Replace with actual image paths
// import teamPhoto2 from "../assets/team2.jpg";

export default function About() {

  return (
    <main className="bg-white text-black overflow-hidden bg-gradient-to-tr from-orange-400 to-gray-100">
      <section className="text-center pt-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/NewPageLogo.png"
            alt="Newpage Logo"
            className="mx-auto w-40 md:w-52 mb-3 drop-shadow-md"
          />
        </motion.div>
      </section>
      {/* Who We Are */}
      <section className="max-w-4xl mx-auto mb-24 px-4 sm:px-6">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-6 pt-5 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Who We Are
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg leading-relaxed sm:leading-loose text-black text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We are two recent college graduates who want to help{" "}
          <span className="font-semibold">YOU</span> establish a trusted brand on the web.  Any type of 
          business needs to have a digital presence in order to effectively reach all potential customers. Allow us to use our expertise in web design, hosting, 
          SEO, and marketing to help cement your place in the digital marketplace.
        </motion.p>
      </section>


      {/* The Team */}
      <section className="mb-24 text-center">
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
          <motion.div
            className="text-center max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="your-work-image.jpg"
              alt="Team Member 1"
              className="rounded-xl shadow-lg w-full mb-4"
            />
            <h3 className="font-semibold text-xl mb-1">Jack</h3>
            <p className="text-gray-700">
              Business Specialist, Copywriter, Graphic Designer
            </p>
          </motion.div>

          <motion.div
            className="text-center max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="your-work-image.jpg"
              alt="Team Member 2"
              className="rounded-xl shadow-lg w-full mb-4"
            />
            <h3 className="font-semibold text-xl mb-1">Ethan</h3>
            <p className="text-gray-700">
              Lead Developer, Hosting Expert
            </p>
          </motion.div>
        </div>
      </section>


      {/* Our Process */}
      <OurProcessSection />

    </main>
  );
}


