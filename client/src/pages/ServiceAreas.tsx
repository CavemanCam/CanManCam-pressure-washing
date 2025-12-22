import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { neighborhoods, services } from "@/lib/data";
import { Link } from "wouter";

export default function ServiceAreas() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumb items={[{ label: "Service Areas", href: "/service-areas" }]} />

      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 
          data-testid="text-service-areas-title"
          className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
        >
          MOUNT PLEASANT SERVICE AREAS
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          CanManCam provides professional pressure washing services throughout Mount Pleasant, SC and all surrounding neighborhoods. We're proud to serve the entire Mount Pleasant community with high-quality exterior cleaning services.
        </p>
        <p className="text-base text-gray-500 mb-12">
          Click on any neighborhood below to learn more about our services in that area. Each neighborhood page includes detailed information about the services we offer and why professional pressure washing is important for properties in that community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {neighborhoods.map((neighborhood) => (
            <Link 
              key={neighborhood.slug} 
              href={`/sc/${neighborhood.slug}-pressure-washing`}
              data-testid={`card-neighborhood-${neighborhood.slug}`}
              className="block p-6 border-2 border-primary hover:bg-primary hover:text-white transition-colors group"
            >
              <h3 className="text-xl font-heading font-bold text-primary group-hover:text-white mb-2">
                {neighborhood.name.toUpperCase()}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-200 mb-4">
                Professional pressure washing services
              </p>
              <span className="text-accent font-bold text-sm group-hover:text-white">
                View Services →
              </span>
            </Link>
          ))}
        </div>

        <div className="bg-gray-100 p-8 mb-12">
          <h2 className="text-2xl font-heading font-bold text-primary mb-6">
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
          <h2 className="text-2xl font-heading font-bold mb-6">
            WHY CHOOSE CANMANCAM FOR YOUR NEIGHBORHOOD?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
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
                <span>Our Price Beat Guarantee ensures best value</span>
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
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">
            SERVICE AREA MAP
          </h2>
          <div className="bg-gray-200 h-64 flex items-center justify-center mb-4">
            <div className="text-center">
              <p className="text-gray-600 font-bold mb-2">Mount Pleasant, SC</p>
              <p className="text-sm text-gray-500">Serving all neighborhoods within Mount Pleasant</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            We serve Isle of Palms, Old Village, Park West, Hamlin Plantation, Carolina Park, Dunes West, Crowfield, Planters Pointe, Long Point, Shem Creek, and surrounding Mount Pleasant areas.
          </p>
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
