import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Shield, MapPin, Phone } from "lucide-react";

export default function WomenMode() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={ref} className="py-48 relative overflow-hidden bg-surface-charcoal">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary-container/10 via-background to-background"></div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10 flex flex-col lg:flex-row items-center gap-24">
        
        <motion.div style={{ y: y1 }} className="w-full lg:w-1/2 relative">
          <div className="glass-panel p-2 rounded-[3rem] border border-glass-border/30 bg-surface-container-lowest/50 backdrop-blur-xl relative z-10">
            <div className="rounded-[2.5rem] overflow-hidden relative aspect-[4/5]">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzEd9yuzT94TfyF1vm5zfcbnmsKHMmMoUSs9ZDqNy_sEd-1pf6aY0i9DNWfdLDMDyiZFrOUvuuEriMFZjS-cclC70pk6CN8DiIGJeu2hQGQ28nkqoZTBcBSD7m2fZ8u1OWL5qjNeZ8RsYD6GPV6ZRmQnyVjHXtEP386lQnQ_uD12UdYyTYebVoFHPeV60WE8FUjGEIUFv4GoR_R5s5Amo7iDGWUuAJ4Hmio8V4GKu7r02doUersHz8NHF8tUGlZBcM3K9bknST8YPs" 
                alt="Verified Driver"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse shadow-[0_0_10px_#68dba9]"></div>
                  <span className="text-secondary font-bold tracking-widest text-xs uppercase">Live Trip Tracking</span>
                </div>
                <div className="bg-background/80 backdrop-blur-md p-6 rounded-2xl border border-glass-border">
                  <div className="text-primary font-bold text-xl">Aarti Sharma</div>
                  <div className="text-text-secondary text-sm mb-4">Top Rated • 4.98 ★</div>
                  <button className="w-full py-3 bg-error/10 hover:bg-error/20 border border-error/50 text-error font-bold rounded-xl flex items-center justify-center gap-2 transition-colors">
                    <Phone size={18} /> SOS EMERGENCY
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div style={{ y: y2 }} className="absolute -right-12 top-24 glass-panel p-6 rounded-2xl border border-secondary/20 shadow-2xl z-20 backdrop-blur-2xl">
            <div className="flex items-center gap-4">
              <Shield className="text-secondary" size={24} />
              <span className="text-primary font-bold">Women-Only Matching</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-secondary font-bold tracking-widest text-xs uppercase">Safety Redefined</span>
            <h2 className="font-headline-xl text-5xl md:text-6xl text-primary mt-6 mb-8 leading-tight">Absolute Peace. <br/>By Design.</h2>
            <p className="text-xl text-text-secondary mb-12 font-light leading-relaxed">
              Select "Women Mode" to be exclusively matched with our verified female driver-partners. VoltRide is the first platform to prioritize this level of social safety at its core, not as an afterthought.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Shield className="text-secondary" />
                </div>
                <div>
                  <h4 className="text-primary font-bold text-xl mb-2">Tiered Verification</h4>
                  <p className="text-text-secondary">Background checks that exceed industry standards for every partner on our network.</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="text-secondary" />
                </div>
                <div>
                  <h4 className="text-primary font-bold text-xl mb-2">Continuous Monitoring</h4>
                  <p className="text-text-secondary">Real-time trip sharing with emergency contacts and our 24/7 central command.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
