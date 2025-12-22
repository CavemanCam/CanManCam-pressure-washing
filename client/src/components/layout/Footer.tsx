import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Link } from "wouter";
import logoImage from "@assets/generated_images/pressure_washing_company_logo_for_canmancam.png";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <img src={logoImage} alt="CanManCam Logo" className="h-20 w-auto object-contain bg-white/10 p-2 rounded-lg self-start" />
          <p className="text-gray-300 leading-relaxed">
            CanManCam is Mount Pleasant's most trustworthy pressure washing company. We provide top-tier exterior cleaning services with a satisfaction guarantee.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="bg-secondary p-2 rounded-full hover:bg-accent transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="bg-secondary p-2 rounded-full hover:bg-accent transition-colors"><Instagram className="h-5 w-5" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-heading font-bold mb-6 text-accent">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link href="/"><a className="hover:text-accent transition-colors">Home</a></Link></li>
            <li><Link href="/about"><a className="hover:text-accent transition-colors">About Us</a></Link></li>
            <li><Link href="/services"><a className="hover:text-accent transition-colors">Our Services</a></Link></li>
            <li><Link href="/reviews"><a className="hover:text-accent transition-colors">Reviews</a></Link></li>
            <li><Link href="/projects"><a className="hover:text-accent transition-colors">Recent Projects</a></Link></li>
            <li><Link href="/contact"><a className="hover:text-accent transition-colors">Contact Us</a></Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-heading font-bold mb-6 text-accent">Our Services</h3>
          <ul className="space-y-3">
            <li><Link href="/services"><a className="hover:text-accent transition-colors">House Washing</a></Link></li>
            <li><Link href="/services"><a className="hover:text-accent transition-colors">Roof Cleaning</a></Link></li>
            <li><Link href="/services"><a className="hover:text-accent transition-colors">Driveway Cleaning</a></Link></li>
            <li><Link href="/services"><a className="hover:text-accent transition-colors">Gutter Cleaning</a></Link></li>
            <li><Link href="/services"><a className="hover:text-accent transition-colors">Commercial Washing</a></Link></li>
            <li><Link href="/services"><a className="hover:text-accent transition-colors">Window Cleaning</a></Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-heading font-bold mb-6 text-accent">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-accent mt-1" />
              <div>
                <span className="block text-xs text-gray-400">Phone</span>
                <a href="tel:607-427-1175" className="font-bold text-lg hover:text-accent transition-colors">607-427-1175</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-accent mt-1" />
              <div>
                <span className="block text-xs text-gray-400">Email</span>
                <a href="mailto:canmancam@yahoo.com" className="hover:text-accent transition-colors">canmancam@yahoo.com</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-accent mt-1" />
              <div>
                <span className="block text-xs text-gray-400">Service Area</span>
                <span className="block">Mount Pleasant, SC & Surrounding Areas</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} CanManCam Pressure Washing. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
