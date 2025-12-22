import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { neighborhoods } from "@/lib/data";
import { Link } from "wouter";

export default function ServiceAreas() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Service Areas", href: "/service-areas" }]} />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
          Mount Pleasant Service Areas
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          CanManCam provides professional pressure washing services throughout Mount Pleasant, SC and all surrounding neighborhoods.
        </p>

        <div className="prose prose-lg max-w-4xl mb-12">
          <p className="text-base leading-relaxed text-gray-700 mb-8">
            We're proud to serve the Mount Pleasant community with professional pressure washing services. Whether you're in an established neighborhood like Old Village or a newer community like Carolina Park, CanManCam has the expertise to care for your property. All of our service areas are within Mount Pleasant, SC, allowing us to provide local knowledge and responsive service.
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">Neighborhoods We Serve</h2>
          <p className="text-base text-gray-700 mb-6">
            Click on any neighborhood below to learn more about pressure washing services available in that area:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {neighborhoods.map((neighborhood) => (
            <Link key={neighborhood.slug} href={`/sc/${neighborhood.slug}-pressure-washing`}>
              <a className="p-6 border-2 border-primary rounded-none hover:bg-primary/5 transition-colors">
                <h3 className="text-xl font-heading font-bold text-primary mb-2">{neighborhood.name}</h3>
                <p className="text-sm text-gray-600 mb-4">Professional pressure washing services</p>
                <span className="text-accent font-bold text-sm">View Services →</span>
              </a>
            </Link>
          ))}
        </div>

        <div className="bg-gray-50 p-8 rounded-none mb-12">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">Why Choose CanManCam for Your Neighborhood?</h2>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-accent font-bold">✓</span>
              <span className="text-gray-700">Local expertise in Mount Pleasant neighborhoods</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">✓</span>
              <span className="text-gray-700">Professional-grade equipment and techniques</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">✓</span>
              <span className="text-gray-700">Fully insured and licensed</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">✓</span>
              <span className="text-gray-700">Our Price Beat Guarantee ensures best value</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">✓</span>
              <span className="text-gray-700">Free estimates with no obligation</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">✓</span>
              <span className="text-gray-700">Responsive, friendly customer service</span>
            </li>
          </ul>
        </div>
      </main>

      <section className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Ready to Transform Your Mount Pleasant Property?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation estimate for pressure washing in your Mount Pleasant neighborhood.
          </p>
          <Button asChild className="bg-accent hover:bg-accent/90 text-primary font-bold uppercase py-6 px-10">
            <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
              Get Free Estimate
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
