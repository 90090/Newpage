import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Reveal({ children, y = 50,}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // only animate once
    threshold: 0.3, // how much of element must be visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, scale: [0.3, 1.1, 1], y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{
        duration: 1,
        delay: .15,
        stiffness: 90,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
