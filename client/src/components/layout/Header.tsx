import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { services, neighborhoods } from "@/lib/data";
import logoImage from "@assets/generated_images/pressure_washing_company_logo_for_canmancam.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href}>
      <a className={`text-sm font-medium transition-colors hover:text-accent ${location === href ? "text-accent" : "text-primary"}`}>
        {children}
      </a>
    </Link>
  );

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 text-right text-sm font-bold tracking-wide">
        <div className="container mx-auto flex justify-end items-center gap-2">
          <Phone className="h-4 w-4" />
          <span>CONTACT US TODAY: <a href="tel:607-427-1175" className="hover:text-accent transition-colors">607-427-1175</a></span>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center gap-2">
            <img src={logoImage} alt="CanManCam Pressure Washing" className="h-20 w-auto object-contain" />
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <NavLink href="/">HOME</NavLink>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-primary hover:text-accent transition-colors outline-none">
              ABOUT <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/about">About Us</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/pressure-washing-faq">FAQ</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/service-areas">Service Areas</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/feedback">Submit Feedback</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-primary hover:text-accent transition-colors outline-none">
              SERVICES <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                <Link href="/services">All Services</Link>
              </DropdownMenuItem>
              {services.map((service) => (
                <DropdownMenuItem key={service.slug}>
                  <Link href={`/services/${service.slug}`}>{service.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-primary hover:text-accent transition-colors outline-none">
              NEIGHBORHOODS <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 max-h-96 overflow-y-auto">
              {neighborhoods.map((neighborhood) => (
                <DropdownMenuItem key={neighborhood.slug}>
                  <Link href={`/sc/${neighborhood.slug}-pressure-washing`}>{neighborhood.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <NavLink href="/pressure-washing-tips">BLOG</NavLink>
          <NavLink href="/reviews">REVIEWS</NavLink>
          <NavLink href="/projects">PROJECTS</NavLink>
          <NavLink href="/contact">CONTACT</NavLink>
          
          <Button asChild className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider">
            <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
              Free Quote
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-lg flex flex-col p-4 gap-3 max-h-96 overflow-y-auto">
          <Link href="/"><a className="text-primary font-bold hover:text-accent py-2" onClick={() => setIsOpen(false)}>HOME</a></Link>
          <Link href="/about"><a className="text-primary font-bold hover:text-accent py-2" onClick={() => setIsOpen(false)}>ABOUT</a></Link>
          <Link href="/services"><a className="text-primary font-bold hover:text-accent py-2" onClick={() => setIsOpen(false)}>SERVICES</a></Link>
          <Link href="/service-areas"><a className="text-primary font-bold hover:text-accent py-2" onClick={() => setIsOpen(false)}>NEIGHBORHOODS</a></Link>
          <Link href="/pressure-washing-tips"><a className="text-primary font-bold hover:text-accent py-2" onClick={() => setIsOpen(false)}>BLOG</a></Link>
          <Link href="/reviews"><a className="text-primary font-bold hover:text-accent py-2" onClick={() => setIsOpen(false)}>REVIEWS</a></Link>
          <Link href="/projects"><a className="text-primary font-bold hover:text-accent py-2" onClick={() => setIsOpen(false)}>PROJECTS</a></Link>
          <Link href="/contact"><a className="text-primary font-bold hover:text-accent py-2" onClick={() => setIsOpen(false)}>CONTACT</a></Link>
          <Button asChild className="bg-accent hover:bg-accent/90 w-full mt-2">
            <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
              Get Free Estimate
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
