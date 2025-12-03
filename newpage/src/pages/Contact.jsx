// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ContactForm from "../components/Contactform";


export default function Contact() {
  return (
    <main className="bg-gradient-to-br from-orange-200 via-white to-orange-300">
      <section className="container mx-auto px-4 py-16 max-w-4xl animate-fadeIn space-y-12 ">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl font-bold text-orange-500">
            Request a Free Quote
          </h2>
          <p className="text-black max-w-xl mx-auto">
            We'd love to hear how we can help!
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-[#323232] rounded-lg shadow p-6"
        >
          <ContactForm />
        </motion.div>

        {/* Email Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="text-center space-y-2"
        >
          <p className="text-sm text-gray-600">
            You'll hear back from us within 24 hours. Let's make it happen.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
