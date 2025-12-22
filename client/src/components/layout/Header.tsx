import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { services, neighborhoods } from "@/lib/data";
import logoImage from "@assets/ChatGPT_Image_Dec_22,_2025,_03_48_03_PM-Picsart-BackgroundRemo_1766436716266.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href} className={`text-sm font-medium transition-colors hover:text-accent ${location === href ? "text-accent" : "text-primary"}`}>
      {children}
    </Link>
  );

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="bg-primary text-white py-2 px-4 text-right text-sm font-bold tracking-wide">
        <div className="container mx-auto flex justify-end items-center gap-2">
          <span>CONTACT US TODAY: <a href="tel:607-427-1175" className="hover:text-accent transition-colors">607-427-1175</a></span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img src={logoImage} alt="CanManCam Pressure Washing" className="h-32 md:h-40 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          <NavLink href="/">HOME</NavLink>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-primary hover:text-accent transition-colors outline-none">
              ABOUT ▾
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-none">
              <DropdownMenuItem className="rounded-none cursor-pointer" asChild>
                <Link href="/about">About Us</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-none cursor-pointer" asChild>
                <Link href="/pressure-washing-faq">FAQ</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-none cursor-pointer" asChild>
                <Link href="/service-areas">Service Areas</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-none cursor-pointer" asChild>
                <Link href="/feedback">Submit Feedback</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-primary hover:text-accent transition-colors outline-none">
              SERVICES ▾
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 rounded-none">
              <DropdownMenuItem className="rounded-none cursor-pointer" asChild>
                <Link href="/services">All Services</Link>
              </DropdownMenuItem>
              {services.map((service) => (
                <DropdownMenuItem key={service.slug} className="rounded-none cursor-pointer" asChild>
                  <Link href={`/services/${service.slug}`}>{service.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-primary hover:text-accent transition-colors outline-none">
              NEIGHBORHOODS ▾
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 rounded-none">
              {neighborhoods.map((neighborhood) => (
                <DropdownMenuItem key={neighborhood.slug} className="rounded-none cursor-pointer" asChild>
                  <Link href={`/sc/${neighborhood.slug}-pressure-washing`}>{neighborhood.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <NavLink href="/pressure-washing-tips">BLOG</NavLink>
          <NavLink href="/reviews">REVIEWS</NavLink>
          <NavLink href="/contact">CONTACT</NavLink>
          
          <Button asChild className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider rounded-none">
            <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
              Free Quote
            </a>
          </Button>
        </nav>

        <button 
          className="lg:hidden text-primary font-bold text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-mobile-menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-lg flex flex-col p-4 gap-3 max-h-96 overflow-y-auto">
          <Link href="/" className="text-primary font-bold hover:text-accent py-2" onClick={() => setIsOpen(false)}>HOME</Link>
          <Link href="/about" className="text-primary font-bold hover:text-accent py-2" onClick={() => setIsOpen(false)}>ABOUT</Link>
          <Link href="/services" className="text-primary font-bold hover:text-accent py-2" onClick={() => setIsOpen(false)}>SERVICES</Link>
          <Link href="/service-areas" className="text-primary font-bold hover:text-accent py-2" onClick={() => setIsOpen(false)}>NEIGHBORHOODS</Link>
          <Link href="/pressure-washing-tips" className="text-primary font-bold hover:text-accent py-2" onClick={() => setIsOpen(false)}>BLOG</Link>
          <Link href="/reviews" className="text-primary font-bold hover:text-accent py-2" onClick={() => setIsOpen(false)}>REVIEWS</Link>
          <Link href="/contact" className="text-primary font-bold hover:text-accent py-2" onClick={() => setIsOpen(false)}>CONTACT</Link>
          <Button asChild className="bg-accent hover:bg-accent/90 w-full mt-2 rounded-none">
            <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
              Get Free Estimate
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
