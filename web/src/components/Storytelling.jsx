import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "../utils/cn";

export default function Storytelling() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="vision" ref={containerRef} className="py-48 relative bg-surface-container-lowest">
      <div className="max-w-4xl mx-auto px-margin-mobile text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <span className="text-primary-container font-bold tracking-widest text-xs uppercase mb-6 inline-block">The Paradigm Shift</span>
        </motion.div>
        
        <h2 className="font-headline-xl text-4xl md:text-6xl text-primary leading-tight tracking-tight mb-12">
          Sustainability as the <br/>
          <span className="text-text-secondary line-through decoration-error/50">Option</span>{" "}
          <span className="text-primary-container italic">Standard.</span>
        </h2>
        
        <div className="space-y-8 text-xl md:text-2xl text-text-secondary leading-relaxed font-light">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Current ride platforms treat green energy as a niche add-on. You pay extra for low-impact travel, while the default contributes to urban smog.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-primary font-medium"
          >
            Every single vehicle in our fleet is 100% electric. No exceptions. No compromise. Premium travel that repairs the city's air with every kilometer.
          </motion.p>
        </div>
      </div>

      <motion.div 
        className="mt-32 w-full h-[60vh] md:h-[80vh] relative"
        style={{ scale: useTransform(scrollYProgress, [0.3, 0.8], [0.9, 1]) }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest to-transparent z-10"></div>
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiEUe9-rcjyAvLai-t550uGpXpOsPepsPJsvf5yGphR3k-QCXfZHFV68znTGHZgxATFwUTScSmV7D5ZPyN_-Fk5EdvkHcIQoH2uXq7c4KC5GYJbho2fNLWvGUPiJ25GapldNS4w3gxI8g6gyKVU_hJf87UaxOl2es56JPLrBNg5wE5whzyVX7zbN2shvYACCCpkrGnlMGy9dPMxNXUXe8TeoMAqJy6ZQyXyqcpQgKnxF5oXZgDy3019D4TGU9NNPv4sl4cF2qPNN9Q"
          alt="Premium EV"
          className="w-full h-full object-cover opacity-60"
        />
      </motion.div>
    </section>
  );
}
