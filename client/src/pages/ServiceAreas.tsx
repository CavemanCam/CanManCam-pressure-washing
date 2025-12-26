import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { neighborhoods, services } from "@/lib/data";
import { Link } from "wouter";

export default function ServiceAreas() {
  const featuredNeighborhoods = neighborhoods.slice(0, 4);
  const remainingNeighborhoods = neighborhoods.slice(4);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Pressure Washing Service Areas | Mount Pleasant, SC | CanManCam"
        description="CanManCam serves all Mount Pleasant, SC neighborhoods. Isle of Palms, Old Village, Park West, Hamlin Plantation, Carolina Park, Dunes West & more."
        canonicalUrl="https://canmancam.com/service-areas"
        keywords="Mount Pleasant pressure washing, Charleston area service, Isle of Palms, Old Village, Park West, Hamlin Plantation, Carolina Park, Dunes West"
        breadcrumbs={[
          { name: "Home", url: "https://canmancam.com/" },
          { name: "Service Areas", url: "https://canmancam.com/service-areas" }
        ]}
      />
      <Header />
      <Breadcrumb items={[{ label: "Service Areas", href: "/service-areas" }]} />

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 
              data-testid="text-service-areas-title"
              className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
            >
              MOUNT PLEASANT SERVICE AREAS
            </h1>
            <p className="text-lg text-gray-600 mb-4 max-w-3xl mx-auto">
              CanManCam provides professional pressure washing services throughout Mount Pleasant, SC and all surrounding neighborhoods. I'm proud to serve the entire Mount Pleasant community with high-quality exterior cleaning services.
            </p>
            <p className="text-base text-gray-500 max-w-2xl mx-auto">
              Click on any neighborhood below to learn more about my services in that area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {featuredNeighborhoods.map((neighborhood) => (
              <Link 
                key={neighborhood.slug} 
                href={`/sc/${neighborhood.slug}-pressure-washing`}
                data-testid={`card-neighborhood-${neighborhood.slug}`}
                className="block p-8 bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                <h3 className="text-2xl font-heading font-bold mb-2">
                  {neighborhood.name.toUpperCase()}
                </h3>
                <p className="text-gray-200 mb-4">
                  Professional pressure washing services for {neighborhood.name} residents
                </p>
                <span className="text-accent font-bold">
                  View Services →
                </span>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {remainingNeighborhoods.map((neighborhood, idx) => (
              <Link 
                key={neighborhood.slug} 
                href={`/sc/${neighborhood.slug}-pressure-washing`}
                data-testid={`card-neighborhood-${neighborhood.slug}`}
                className={`block p-5 border-2 hover:border-primary hover:bg-primary/5 transition-colors text-center ${
                  idx % 2 === 0 ? 'border-accent' : 'border-gray-200'
                }`}
              >
                <h3 className="text-lg font-heading font-bold text-primary mb-1">
                  {neighborhood.name.toUpperCase()}
                </h3>
                <span className="text-accent font-bold text-sm">
                  View →
                </span>
              </Link>
            ))}
          </div>

          <div className="bg-gray-100 p-8 mb-12">
            <h2 className="text-2xl font-heading font-bold text-primary mb-6 text-center">
              ALL SERVICES AVAILABLE IN EVERY NEIGHBORHOOD
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {services.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="block p-4 bg-white border-2 border-gray-200 hover:border-primary transition-colors text-center">
                  <span className="font-bold text-primary text-sm">{service.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-primary text-white p-8 mb-12">
            <h2 className="text-2xl font-heading font-bold mb-6 text-center">
              WHY CHOOSE CANMANCAM FOR YOUR NEIGHBORHOOD?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <span>Local expertise in Mount Pleasant neighborhoods</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <span>Professional-grade equipment and techniques</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <span>Fully insured and licensed</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <span>My Price Beat Guarantee ensures best value</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <span>Free estimates with no obligation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <span>Responsive, friendly customer service</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              SERVICE AREA MAP
            </h2>
            <div className="w-full h-96 mb-8 max-w-4xl mx-auto shadow-lg border-2 border-primary/10">
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
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              I serve Isle of Palms, Old Village, Park West, Hamlin Plantation, Carolina Park, Dunes West, Planters Pointe, Long Point, Shem Creek, and surrounding Mount Pleasant areas.
            </p>
          </div>
        </div>
      </main>

      <section className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            READY TO TRANSFORM YOUR MOUNT PLEASANT PROPERTY?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation estimate for pressure washing in your Mount Pleasant neighborhood.
          </p>
          <Button 
            asChild 
            data-testid="button-service-areas-cta"
            className="bg-accent hover:bg-accent/90 text-white font-bold uppercase py-6 px-10 rounded-none"
          >
            <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
              Get Free Estimate
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
