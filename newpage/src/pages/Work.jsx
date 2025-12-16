import { motion } from "framer-motion";

const projects = [
  {
    title: "Nardellis",
    image: "/Images/Work/Nardellis.png",
    link: "https://nardellis.com",
  },
  {
    title: "Social Circle CT",
    image: "/Images/Work/SocialCircle.png",
    link: "https://socialcirclect.com",
  },
  {
    title: "Big Dipper",
    image: "/Images/Work/BigDipper.png",
    link: "https://BigDipper.com",
  },
  {
    title: "Bee's Vending",
    image: "/Images/Work/BeesVending.png",
    link: "https://beesvending.com",
  },
  {
    title: "Emerald Screen Printing",
    image: "/Images/Work/EmeraldScreenPrinting.png",
    link: "https://emeraldscreenprinting.com",
  },
  {
    title: "Jimmy's of Watertown",
    image: "/Images/Work/Jimmys.png",
    link: "https://jimmysofwatertown.com",
  },
];

export default function Work() {
  return (
    <main className="bg-gradient-to-br from-orange-200 via-white to-orange-300 text-black px-6 py-12 md:px-12 lg:px-24">
      
      {/* HEADER */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <img
          src="/NewPageLogo.png"
          alt="Newpage Logo"
          className="mx-auto w-32 md:w-48 mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
          Our Work
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Explore our recent work and see how we bring brands to life online. We create bold, innovative websites that make an impact. Contact us today to share your ideas!
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition duration-300 shadow-md hover:shadow-lg"
        >
          Request a Quote Today →
        </a>
      </motion.section>

      {/* PROJECT CARDS */}
      <section className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group cursor-pointer overflow-visible transition-transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Monitor frame */}
            <div className="relative w-full h-64 md:h-72">
              <img
                src="/Images/Work/NP_OurWorkLaptopFrame.png" // your monitor frame image
                alt="Monitor Frame"
                className="w-full h-full object-contain relative z-10"
              />
              {/* Website inside monitor */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute top-[5%] left-[13%] right-[13%] w-[75%] h-[75%] object-contain rounded-md z-0"
              />
            </div>

            {/* Title overlay */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center bg-orange-500 text-white font-bold text-md w-60 px-2 py-2 rounded-full shadow-lg z-20">
              {project.title}
            </div>
          </motion.a>
        ))}
      </section>

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
          Let's Work Together →
        </a>
      </motion.section>
    </main>
  );
}
