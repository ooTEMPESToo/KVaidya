type FooterProps = object
const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10 mt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-left">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">ProHealth</h3>
            <p className="text-sm">Connecting you with trusted medical professionals. Your health is our priority.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-sky-400 transition-colors">Find a Doctor</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
            <p className="text-sm">123 Health St, Wellness City, GA</p>
            <p className="text-sm">Email: support@prohealth.com</p>
            <p className="text-sm">Phone: (555) 123-4567</p>
          </div>
        </div>
        <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} ProHealth. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;