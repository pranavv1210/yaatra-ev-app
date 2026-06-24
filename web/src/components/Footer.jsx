export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-24 border-t border-glass-border/30 relative z-10">
      <div className="max-w-container-max mx-auto px-margin-mobile grid grid-cols-1 md:grid-cols-4 gap-stack-lg">
        <div className="col-span-1 md:col-span-1">
          <div className="font-headline-md text-headline-md text-primary font-bold mb-6">VoltRide</div>
          <p className="text-text-secondary text-sm leading-relaxed">Pioneering sustainable urban mobility for a cleaner, safer Bengaluru.</p>
        </div>
        <div>
          <h4 className="text-primary font-bold mb-6 uppercase text-xs tracking-widest">Platform</h4>
          <ul className="space-y-4 text-sm">
            <li><a className="text-text-secondary hover:text-primary transition-colors" href="#">Models</a></li>
            <li><a className="text-text-secondary hover:text-primary transition-colors" href="#">Women Mode</a></li>
            <li><a className="text-text-secondary hover:text-primary transition-colors" href="#">Driver Partners</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-primary font-bold mb-6 uppercase text-xs tracking-widest">Resources</h4>
          <ul className="space-y-4 text-sm">
            <li><a className="text-text-secondary hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="text-text-secondary hover:text-primary transition-colors" href="#">Terms of Service</a></li>
            <li><a className="text-text-secondary hover:text-primary transition-colors" href="#">Carbon Reports</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-primary font-bold mb-6 uppercase text-xs tracking-widest">Connect</h4>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full border border-glass-border flex items-center justify-center hover:bg-primary-container hover:text-on-primary transition-all" href="#">
              <span className="material-symbols-outlined text-sm">alternate_email</span>
            </a>
            <a className="w-10 h-10 rounded-full border border-glass-border flex items-center justify-center hover:bg-primary-container hover:text-on-primary transition-all" href="#">
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile mt-16 pt-8 border-t border-glass-border flex flex-col md:flex-row justify-between items-center text-text-secondary text-xs gap-4">
        <p>© 2024 VoltRide Mobility. Crafted for Bengaluru.</p>
        <div className="flex gap-6">
          <span>Bengaluru Operations</span>
          <span className="text-primary-container">Waitlist Status: OPEN</span>
        </div>
      </div>
    </footer>
  );
}
