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
import logoImage from "@assets/generated_images/pressure_washing_company_logo_for_canmancam.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const services = [
    { name: "House Washing", href: "/services" },
    { name: "Roof Cleaning", href: "/services" },
    { name: "Window Cleaning", href: "/services" },
    { name: "Pressure Washing", href: "/services" },
    { name: "Driveway Cleaning", href: "/services" },
    { name: "Gutter Cleaning", href: "/services" },
  ];

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
            <img src={logoImage} alt="CanManCam Pressure Washing" className="h-16 w-auto object-contain" />
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
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
                <Link href="/contact">FAQ</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-primary hover:text-accent transition-colors outline-none">
              SERVICES <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {services.map((service) => (
                <DropdownMenuItem key={service.name}>
                  <Link href={service.href}>{service.name}</Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem className="font-bold border-t mt-2 pt-2">
                <Link href="/services">View All Services</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <NavLink href="/reviews">REVIEWS</NavLink>
          <NavLink href="/projects">PROJECTS</NavLink>
          <NavLink href="/contact">CONTACT</NavLink>
          
          <Button asChild className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider ml-4">
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
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-lg flex flex-col p-4 gap-4 animate-in slide-in-from-top-5">
          <Link href="/"><a className="text-primary font-bold hover:text-accent" onClick={() => setIsOpen(false)}>HOME</a></Link>
          <Link href="/about"><a className="text-primary font-bold hover:text-accent" onClick={() => setIsOpen(false)}>ABOUT</a></Link>
          <div className="flex flex-col gap-2 pl-4 border-l-2 border-accent/20">
             <span className="text-sm font-bold text-gray-400 uppercase">Services</span>
             {services.map(s => (
               <Link key={s.name} href={s.href}>
                 <a className="text-primary hover:text-accent text-sm" onClick={() => setIsOpen(false)}>{s.name}</a>
               </Link>
             ))}
          </div>
          <Link href="/reviews"><a className="text-primary font-bold hover:text-accent" onClick={() => setIsOpen(false)}>REVIEWS</a></Link>
          <Link href="/projects"><a className="text-primary font-bold hover:text-accent" onClick={() => setIsOpen(false)}>PROJECTS</a></Link>
          <Link href="/contact"><a className="text-primary font-bold hover:text-accent" onClick={() => setIsOpen(false)}>CONTACT</a></Link>
          <Button asChild className="bg-accent hover:bg-accent/90 w-full mt-2">
            <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
              Get a Free Estimate
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
