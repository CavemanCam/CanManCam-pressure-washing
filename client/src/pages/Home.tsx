import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { services, reviews, projects } from "@/lib/data";
import heroImage from "@assets/stock_images/pressure_washing_hou_08430493.jpg";
import { Link } from "wouter";

export default function Home() {
  const serviceImages: Record<string, string> = {
    "house-washing": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    "driveway-cleaning": "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
    "sidewalk-cleaning": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
    "gutter-cleaning": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop",
    "window-cleaning": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&h=400&fit=crop",
    "trash-can-cleaning": "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop"
  };

  return (
    <div className="min-h-screen flex flex-col font-body text-gray-800">
      <Header />

      <section 
        data-testid="hero-section"
        className="relative h-[600px] md:h-[700px] flex items-center justify-center text-center text-white"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-4 text-accent drop-shadow-md">
            Mount Pleasant's Most Trusted
          </h2>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight drop-shadow-lg">
            PRESSURE WASHING COMPANY
          </h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              data-testid="button-hero-estimate"
              className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-6 uppercase tracking-wider h-auto w-full md:w-auto shadow-xl hover:translate-y-[-2px] transition-transform rounded-none"
            >
              <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
                Get a Free Estimate
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              data-testid="button-hero-services"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-6 uppercase tracking-wider h-auto w-full md:w-auto backdrop-blur-sm rounded-none"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}></div>
      </section>

      <section data-testid="intro-section" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Complete Exterior Pressure Washing In The Mount Pleasant Area
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            When you need any part of your home pressure washed in or around Mount Pleasant, the all-in-one pressure washing service to call is CanManCam! We offer a complete line of pressure washing services, including all types of power washing and soft wash house cleaning. Our experienced professionals are highly trained, insured, and ready to serve you.
          </p>
          <div className="p-6 bg-gray-50 inline-block">
            <p className="font-bold text-xl text-primary mb-2">We make pressure washing simple, affordable, and thorough!</p>
            <p className="text-gray-600">Serving Isle of Palms, Old Village, Park West, Hamlin Plantation, and all Mount Pleasant neighborhoods.</p>
          </div>
        </div>
      </section>

      <section data-testid="services-section" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">OUR PREMIUM SERVICES</h2>
            <div className="h-1 w-24 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {services.map((service) => (
              <Link 
                key={service.slug} 
                href={`/services/${service.slug}`}
                data-testid={`card-service-${service.slug}`}
                className="group relative block h-64 overflow-hidden cursor-pointer"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${serviceImages[service.slug]})` }}
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/70 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white text-center">
                  <h3 className="text-xl font-heading font-bold uppercase mb-2">{service.name}</h3>
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              asChild 
              data-testid="button-view-all-services"
              className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider px-8 py-6 h-auto rounded-none"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section data-testid="price-beat-section" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">PRICE BEAT GUARANTEE</h2>
            <div className="space-y-6 text-lg text-gray-200">
              <p>
                We stand behind our pricing. If you find a lower quote for the same service from another reputable company, we'll beat it by 5%. Our goal is to provide the highest quality service at the best possible price.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-accent font-bold text-xl">✓</span>
                  <span>Licensed & Fully Insured Professionals</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent font-bold text-xl">✓</span>
                  <span>Safe "Soft Wash" Techniques for Siding</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent font-bold text-xl">✓</span>
                  <span>100% Satisfaction Guarantee</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent font-bold text-xl">✓</span>
                  <span>Free Estimates with No Obligation</span>
                </li>
              </ul>
              <Button 
                asChild 
                size="lg" 
                data-testid="button-price-beat-learn"
                className="bg-accent hover:bg-accent/90 text-white font-bold mt-6 shadow-lg rounded-none uppercase tracking-wider"
              >
                <Link href="/price-beat-guarantee">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="bg-white/10 p-8 backdrop-blur-sm border border-white/20 text-center">
            <h3 className="text-3xl font-heading font-bold mb-4">WHY SOFT WASH?</h3>
            <p className="mb-6">
              Algae, mold, and lichen buildup is corrosive to your roof and siding. High pressure can cause damage! We use specialized solutions to gently kill these organisms at the root without damaging your property.
            </p>
            <p className="text-sm text-gray-300">
              Soft washing uses lower pressure combined with eco-friendly cleaning solutions that eliminate organic growth at its source, providing longer-lasting results than pressure-only methods.
            </p>
          </div>
        </div>
      </section>

      <section data-testid="reviews-section" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">WHAT MOUNT PLEASANT NEIGHBORS SAY</h2>
            <div className="flex justify-center gap-1 text-accent mb-4">
              {[...Array(5)].map((_, i) => <span key={i} className="text-2xl">★</span>)}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reviews.map((review, idx) => (
              <div key={idx} data-testid={`card-review-${idx}`} className="bg-gray-50 p-8">
                <div className="flex text-accent mb-4">
                  {[...Array(review.rating)].map((_, i) => <span key={i} className="text-lg">★</span>)}
                </div>
                <p className="text-gray-700 italic mb-6">"{review.text}"</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-primary">- {review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              asChild 
              variant="outline" 
              data-testid="button-read-reviews"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white uppercase font-bold tracking-wide rounded-none"
            >
              <Link href="/reviews">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      <section data-testid="projects-section" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">RECENT PROJECTS</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">See the difference professional pressure washing makes. Browse our recent projects throughout Mount Pleasant neighborhoods.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {projects.slice(0, 3).map((project) => (
              <Link 
                key={project.slug} 
                href={`/projects/${project.slug}`}
                data-testid={`card-project-${project.slug}`} 
                className="block bg-white p-6 hover:shadow-lg transition-shadow"
              >
                <div className="bg-gray-200 h-40 mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm uppercase tracking-wider">Before / After</span>
                </div>
                <h3 className="font-heading font-bold text-primary text-lg mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                <p className="text-xs text-accent font-bold uppercase">{project.date}</p>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              asChild 
              data-testid="button-view-projects"
              className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider px-8 py-6 h-auto rounded-none"
            >
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <section data-testid="cta-section" className="py-20 bg-secondary text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">READY TO TRANSFORM YOUR HOME?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">Get a free, no-obligation quote today and see the difference CanManCam can make for your Mount Pleasant property.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              data-testid="button-cta-quote"
              className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-12 py-6 uppercase shadow-xl rounded-none"
            >
              <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
                Get Free Quote
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              data-testid="button-cta-call"
              className="border-2 border-white text-white hover:bg-white hover:text-secondary font-bold text-lg px-12 py-6 uppercase bg-transparent rounded-none"
            >
              <a href="tel:607-427-1175">Call 607-427-1175</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
