import { Link } from "wouter";
import { services, neighborhoods } from "@/lib/data";
import logoImage from "@assets/generated_images/canmancam_pressure_washing_logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div className="flex flex-col gap-4">
          <Link href="/" className="self-start">
            <img src={logoImage} alt="CanManCam Pressure Washing" className="h-16 w-auto bg-white/90 p-2" />
          </Link>
          <p className="text-gray-300 leading-relaxed">
            CanManCam is Mount Pleasant's most trusted pressure washing company. We provide top-tier exterior cleaning services with a satisfaction guarantee.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-heading font-bold mb-6 text-accent">QUICK LINKS</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-accent transition-colors">Our Services</Link></li>
            <li><Link href="/reviews" className="hover:text-accent transition-colors">Reviews</Link></li>
            <li><Link href="/projects" className="hover:text-accent transition-colors">Recent Projects</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            <li><Link href="/price-beat-guarantee" className="hover:text-accent transition-colors">Price Beat Guarantee</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-heading font-bold mb-6 text-accent">OUR SERVICES</h3>
          <ul className="space-y-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="hover:text-accent transition-colors">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-heading font-bold mb-6 text-accent">CONTACT US</h3>
          <ul className="space-y-4">
            <li>
              <span className="block text-xs text-gray-400">Phone</span>
              <a href="tel:607-427-1175" className="font-bold text-lg hover:text-accent transition-colors">607-427-1175</a>
            </li>
            <li>
              <span className="block text-xs text-gray-400">Email</span>
              <a href="mailto:canmancam@yahoo.com" className="hover:text-accent transition-colors">canmancam@yahoo.com</a>
            </li>
            <li>
              <span className="block text-xs text-gray-400">Hours</span>
              <span className="block font-bold">Open 24/7</span>
            </li>
            <li>
              <span className="block text-xs text-gray-400">Service Area</span>
              <span className="block">Mount Pleasant, SC & Surrounding Areas</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-8">
        <div className="w-full h-64 mb-8">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107260.12761002278!2d-79.81088229999999!3d32.8484556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486774fb38b3d117%3A0xb6a402d9c8c63983!2sCanman%20Cam!5e0!3m2!1sen!2sus!4v1766426214312!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="CanManCam Service Area"
          ></iframe>
        </div>
      </div>

      <div className="container mx-auto px-4 border-t border-white/10 pt-8">
        <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
          <Link href="/sitemap" className="hover:text-accent transition-colors">Sitemap</Link>
          <span className="text-gray-500">|</span>
          <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
          <span className="text-gray-500">|</span>
          <Link href="/terms" className="hover:text-accent transition-colors">Terms of Use</Link>
          <span className="text-gray-500">|</span>
          <Link href="/feedback" className="hover:text-accent transition-colors">Feedback</Link>
        </div>
        <p className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} CanManCam Pressure Washing. All Rights Reserved. Serving Mount Pleasant, SC.
        </p>
      </div>
    </footer>
  );
}
