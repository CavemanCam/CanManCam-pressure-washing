import { Link } from "wouter";
import { services, neighborhoods } from "@/lib/data";
import logoImage from "@assets/generated_images/pressure_washing_company_logo_for_canmancam.png";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div className="flex flex-col gap-4">
          <img src={logoImage} alt="CanManCam Logo" className="h-20 w-auto object-contain bg-white/10 p-2 self-start" />
          <p className="text-gray-300 leading-relaxed">
            CanManCam is Mount Pleasant's most trusted pressure washing company. We provide top-tier exterior cleaning services with a satisfaction guarantee.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="bg-secondary p-2 hover:bg-accent transition-colors text-white font-bold text-sm">FB</a>
            <a href="#" className="bg-secondary p-2 hover:bg-accent transition-colors text-white font-bold text-sm">IG</a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-heading font-bold mb-6 text-accent">QUICK LINKS</h3>
          <ul className="space-y-3">
            <li><Link href="/"><a className="hover:text-accent transition-colors">Home</a></Link></li>
            <li><Link href="/about"><a className="hover:text-accent transition-colors">About Us</a></Link></li>
            <li><Link href="/services"><a className="hover:text-accent transition-colors">Our Services</a></Link></li>
            <li><Link href="/reviews"><a className="hover:text-accent transition-colors">Reviews</a></Link></li>
            <li><Link href="/projects"><a className="hover:text-accent transition-colors">Recent Projects</a></Link></li>
            <li><Link href="/contact"><a className="hover:text-accent transition-colors">Contact Us</a></Link></li>
            <li><Link href="/price-beat-guarantee"><a className="hover:text-accent transition-colors">Price Beat Guarantee</a></Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-heading font-bold mb-6 text-accent">OUR SERVICES</h3>
          <ul className="space-y-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`}>
                  <a className="hover:text-accent transition-colors">{service.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-heading font-bold mb-6 text-accent">CONTACT US</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">P</span>
              <div>
                <span className="block text-xs text-gray-400">Phone</span>
                <a href="tel:607-427-1175" className="font-bold text-lg hover:text-accent transition-colors">607-427-1175</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">E</span>
              <div>
                <span className="block text-xs text-gray-400">Email</span>
                <a href="mailto:canmancam@yahoo.com" className="hover:text-accent transition-colors">canmancam@yahoo.com</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">A</span>
              <div>
                <span className="block text-xs text-gray-400">Service Area</span>
                <span className="block">Mount Pleasant, SC & Surrounding Areas</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 border-t border-white/10 pt-8">
        <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
          <Link href="/sitemap"><a className="hover:text-accent transition-colors">Sitemap</a></Link>
          <span className="text-gray-500">|</span>
          <Link href="/privacy"><a className="hover:text-accent transition-colors">Privacy Policy</a></Link>
          <span className="text-gray-500">|</span>
          <Link href="/terms"><a className="hover:text-accent transition-colors">Terms of Use</a></Link>
          <span className="text-gray-500">|</span>
          <Link href="/feedback"><a className="hover:text-accent transition-colors">Feedback</a></Link>
        </div>
        <p className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} CanManCam Pressure Washing. All Rights Reserved. Serving Mount Pleasant, SC.
        </p>
      </div>
    </footer>
  );
}
