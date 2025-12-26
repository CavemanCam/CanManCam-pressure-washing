import { useState, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { services, neighborhoods } from "@/lib/data";
import logoImage from "@assets/canmancam-pressure-washing-mount-pleasant_1766437167448.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href} className={`text-sm font-medium transition-colors hover:text-accent ${location === href ? "text-accent" : "text-primary"}`}>
      {children}
    </Link>
  );

  return (
    <header className="w-full shadow-sm sticky top-0 z-50" style={{ background: 'linear-gradient(135deg, #e6f4f9 0%, #ffffff 50%, #d4eef7 100%)' }}>
      <div className="bg-primary text-white py-2 px-4 text-right text-sm font-bold tracking-wide">
        <div className="container mx-auto flex justify-end items-center gap-2 uppercase">
          <span>CALL TODAY: <a href="tel:607-427-1175" className="hover:text-accent transition-colors">607-427-1175</a></span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img src={logoImage} alt="CanManCam Pressure Washing" className="h-20 md:h-26 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          <NavLink href="/">HOME</NavLink>
          
          <div onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>
            <DropdownMenu open={openDropdown === 'about'} onOpenChange={(open) => setOpenDropdown(open ? 'about' : null)}>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-primary hover:text-accent transition-colors outline-none cursor-pointer">
                ABOUT ▾
              </DropdownMenuTrigger>
              <DropdownMenuContent className="rounded-none bg-white p-3 shadow-2xl border-t-4 border-accent min-w-[200px]">
                <div className="flex flex-col gap-2">
                  <DropdownMenuItem className="p-0 cursor-pointer" asChild>
                    <Link href="/about" className="flex items-center w-full px-4 py-3 bg-gray-50 hover:bg-accent hover:text-white transition-all font-bold text-xs uppercase tracking-widest border border-gray-100 shadow-sm cursor-pointer">
                      About Us
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-0 cursor-pointer" asChild>
                    <Link href="/pressure-washing-faq" className="flex items-center w-full px-4 py-3 bg-gray-50 hover:bg-accent hover:text-white transition-all font-bold text-xs uppercase tracking-widest border border-gray-100 shadow-sm cursor-pointer">
                      FAQ
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-0 cursor-pointer" asChild>
                    <Link href="/service-areas" className="flex items-center w-full px-4 py-3 bg-gray-50 hover:bg-accent hover:text-white transition-all font-bold text-xs uppercase tracking-widest border border-gray-100 shadow-sm cursor-pointer">
                      Service Areas
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-0 cursor-pointer" asChild>
                    <Link href="/feedback" className="flex items-center w-full px-4 py-3 bg-gray-50 hover:bg-accent hover:text-white transition-all font-bold text-xs uppercase tracking-widest border border-gray-100 shadow-sm cursor-pointer">
                      Submit Feedback
                    </Link>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
            <DropdownMenu open={openDropdown === 'services'} onOpenChange={(open) => setOpenDropdown(open ? 'services' : null)}>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-primary hover:text-accent transition-colors outline-none cursor-pointer uppercase">
                Services ▾
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 rounded-none bg-white p-3 shadow-2xl border-t-4 border-accent">
                <div className="flex flex-col gap-2">
                  <DropdownMenuItem className="p-0 cursor-pointer" asChild>
                    <Link href="/services" className="flex items-center w-full px-4 py-3 bg-gray-50 hover:bg-accent hover:text-white transition-all font-bold text-xs uppercase tracking-widest border border-gray-100 shadow-sm cursor-pointer">
                      All Services
                    </Link>
                  </DropdownMenuItem>
                  <div className="grid grid-cols-1 gap-2">
                    {services.map((service) => (
                      <DropdownMenuItem key={service.slug} className="p-0 cursor-pointer" asChild>
                        <Link href={`/services/${service.slug}`} className="flex items-center w-full px-4 py-3 bg-gray-50 hover:bg-accent hover:text-white transition-all font-bold text-[11px] uppercase tracking-wider border border-gray-100 shadow-sm cursor-pointer">
                          {service.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div onMouseEnter={() => handleMouseEnter('neighborhoods')} onMouseLeave={handleMouseLeave}>
            <DropdownMenu open={openDropdown === 'neighborhoods'} onOpenChange={(open) => setOpenDropdown(open ? 'neighborhoods' : null)}>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-primary hover:text-accent transition-colors outline-none cursor-pointer uppercase">
                Neighborhoods ▾
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[800px] rounded-none bg-white p-4 shadow-2xl border-t-4 border-accent">
                <div className="grid grid-cols-3 gap-3">
                  {neighborhoods.map((neighborhood) => (
                    <DropdownMenuItem key={neighborhood.slug} className="p-0 cursor-pointer" asChild>
                      <Link href={`/sc/${neighborhood.slug}-pressure-washing`} className="flex items-center justify-center w-full px-3 py-4 bg-gray-50 hover:bg-accent hover:text-white transition-all font-bold text-xs uppercase tracking-normal border border-gray-200 shadow-sm text-center leading-tight hover:shadow-md hover:-translate-y-0.5 transform cursor-pointer">
                        {neighborhood.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <NavLink href="/pricing">PRICING</NavLink>
          <NavLink href="/pressure-washing-tips">TIPS</NavLink>
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
          <Link href="/pricing" className="text-primary font-bold hover:text-accent py-2" onClick={() => setIsOpen(false)}>PRICING</Link>
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
