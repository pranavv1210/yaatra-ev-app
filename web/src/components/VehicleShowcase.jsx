import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const vehicles = [
  {
    name: "EV Bike",
    desc: "Master Bengaluru's traffic with nimble, high-torque electric bikes.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGo3IvRNMcTEcVBO-pgvMdTXQuA_47WPEsJwxbCvPQkhVRjOHHdz7W_6QhoblTkUS9ntrbJPmc0S6c1MB0Gg_Hr0P_j2M5BT-Ho9Ic17fyXTtWyo5JmwUKkxScgjZ24SEtuFJOG4f7OStxQvNvlhuM6dQIwJHCB-dHOq7wtAo6WNCObERnE-xfT1XDQgezi37szOFTPJakm2bUsBPIbAk6I-YYinJXmh4LyTU4r2pfpg7N3ZR4BDCZVSnwGY89E8ro0u9Aveg7A_Qk",
    tag: "SWIFT",
    stats: [
      { v: "120km", l: "Range" },
      { v: "4.2s", l: "0-60 km/h" },
      { v: "Premium", l: "Tier" }
    ]
  },
  {
    name: "EV Cab",
    desc: "The gold standard of urban mobility. Silent cabins and premium comfort.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBk3qdH-g7mqxs9RlC_DGM-Q2yIYUCE2AhRnDElHC1lzceZwww-eKRte9ubg6h41WzIMlr9OFG0wlMBHhfR66u_ABdfvg7qSoADE-_uIPdmgnkmT4CGlqOnfjVgpcqx5sbuxtH360UIZvSs6VGdvOKE9zB1Wk17kikwr9ehEqwvKHPccSN8mAUlTCbjuG9OVmbkIsB6yFHuOoWyxT3hyRORomgS_bRkmd_X3qcvJZd7pG-x3Llb8LFcIcZWVB5CBTpA2XY-mi4xTde0",
    tag: "LUXURY",
    stats: [
      { v: "450km", l: "Range" },
      { v: "ADAS", l: "Safety" },
      { v: "Elite", l: "Tier" }
    ]
  },
  {
    name: "EV Auto",
    desc: "Reimagining the icon of Indian cities for a sustainable tomorrow.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvkG4PN51kxrHtC2xiHZINplvQUMfusf1ZhNn4m9-wpwevkZpkUARNdMN9wDjYS7KtR_ArZRmEZ2nUaxKzP6inukVrDNLvFmhDsnSQSGqO78Se0yJi_ruEEA3hEbenOogSLKHhBnoLvuQ6FGh2DFWF-XKAX6-fEWh-wrw_dAIw27cDCsxPlocdqdP8ZjFKjxEG201RyoURAAvMFZuuUjH28jKnjt43RaQI8NKfLUr7QlN-zwjkus8IkvkvzMyUYmrz51NnsYAz_HWd",
    tag: "VERSATILE",
    stats: [
      { v: "180km", l: "Range" },
      { v: "Smart", l: "Digital" },
      { v: "Urban", l: "Tier" }
    ]
  }
];

export default function VehicleShowcase() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: targetRef,
    offset: ["start start", "end end"]
  });
  // Transform vertical scroll to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  return (
    <section id="models" ref={targetRef} className="relative h-[300vh] bg-surface-charcoal/50">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-30 mb-8 pt-24 shrink-0">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-headline-xl text-4xl md:text-6xl text-primary"
          >
            The Fleet.
          </motion.h2>
          <p className="text-text-secondary mt-2">Engineered for every journey.</p>
        </div>

        <motion.div style={{ x }} className="flex w-[300vw] flex-1 items-center pb-24">
          {vehicles.map((veh, i) => (
            <div key={i} className="w-screen flex-shrink-0 flex items-center justify-center px-4">
              <div className="glass-panel w-full max-w-4xl rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col md:flex-row group border-glass-border/30">
                <div className="md:w-3/5 h-[40vh] md:h-[60vh] relative overflow-hidden bg-background">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/50 z-10 md:hidden"></div>
                  <img 
                    src={veh.img} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    alt={veh.name} 
                  />
                  <div className="absolute top-6 left-6 bg-primary-container text-on-primary font-bold px-4 py-1.5 rounded-full text-xs tracking-widest z-20">
                    {veh.tag}
                  </div>
                </div>
                <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-surface-container-lowest/80 backdrop-blur-3xl">
                  <h3 className="font-headline-md text-3xl text-primary mb-4">{veh.name}</h3>
                  <p className="text-text-secondary mb-12 text-lg leading-relaxed">{veh.desc}</p>
                  
                  <div className="grid grid-cols-3 gap-4 border-t border-glass-border/50 pt-8">
                    {veh.stats.map((s, idx) => (
                      <div key={idx}>
                        <div className="text-primary font-bold text-xl">{s.v}</div>
                        <div className="text-xs text-text-secondary uppercase tracking-widest mt-1">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
