import { useRoute } from "wouter";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PriceBeatGuarantee } from "@/components/PriceBeatGuarantee";
import { Button } from "@/components/ui/button";
import { services, neighborhoods } from "@/lib/data";
import { Link } from "wouter";

export default function NeighborhoodDetail() {
  const [match, params] = useRoute("/sc/:slug-pressure-washing");
  const neighborhood = neighborhoods.find(n => n.slug === (params as any)?.slug);

  if (!match || !neighborhood) return null;

  const neighborhoodDescriptions: Record<string, string> = {
    "isle-of-palms": "Isle of Palms is a beautiful coastal community known for its pristine beaches and upscale homes. The salt air and coastal climate require regular pressure washing to maintain your property's appearance and protect against salt damage.",
    "old-village": "Old Village is Mount Pleasant's charming historic district with beautiful architecture and established landscaping. Our pressure washing services help maintain these distinctive properties while preserving their character.",
    "park-west": "Park West is a premier planned community with stunning homes and meticulously maintained properties. We provide pressure washing services to keep Park West properties looking their absolute best.",
    "hamlin-plantation": "Hamlin Plantation is known for its large estates and manicured lawns. Our professional pressure washing services maintain the pristine appearance these properties demand.",
    "carolina-park": "Carolina Park is a growing community with modern homes and active family-oriented amenities. We keep Carolina Park properties clean and well-maintained year-round.",
    "dunes-west": "Dunes West features beautiful homes with sophisticated designs and coastal-inspired architecture. Regular pressure washing maintains the elegant appearance these properties deserve.",
    "crowfield": "Crowfield is an established neighborhood with diverse architectural styles and mature landscaping. Our pressure washing services help maintain property values and curb appeal.",
    "planters-pointe": "Planters Pointe is a community featuring quality homes and excellent amenities. We provide comprehensive pressure washing services throughout this neighborhood.",
    "long-point": "Long Point is known for waterfront living and scenic properties. Our pressure washing services help protect and maintain these valuable properties.",
    "shem-creek": "Shem Creek offers a perfect blend of modern convenience and natural beauty. Our pressure washing keeps these homes looking fresh and well-maintained.",
    "lexington-park": "Lexington Park is a well-established community with consistent property standards. We help maintain the neighborhood's attractive appearance with professional pressure washing.",
    "pin-oak": "Pin Oak features quality homes in a peaceful setting. Our pressure washing services maintain the neighborhood's reputation for well-kept properties."
  };

  return (
    <div>
      <Breadcrumb items={[
        { label: "Service Areas", href: "/service-areas" },
        { label: neighborhood.name, href: `/sc/${neighborhood.slug}-pressure-washing` }
      ]} />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
          {neighborhood.name} Pressure Washing Services
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Professional pressure washing in {neighborhood.name}, Mount Pleasant, SC
        </p>

        <div className="prose prose-lg max-w-4xl mb-12">
          <p className="text-base leading-relaxed text-gray-700 mb-8">
            {neighborhoodDescriptions[neighborhood.slug]}
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">Services Available in {neighborhood.name}</h2>
          <p className="text-base text-gray-700 mb-4">
            We proudly offer all our pressure washing services throughout {neighborhood.name}:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <a className="p-4 border-2 border-primary rounded-none hover:bg-primary/5 transition-colors">
                  <h3 className="text-lg font-heading font-bold text-primary">{service.name}</h3>
                  <p className="text-sm text-gray-600 mt-2">{service.description}</p>
                </a>
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">Why Professional Pressure Washing for {neighborhood.name}?</h2>
          <ul className="space-y-2 mb-8">
            <li className="text-base text-gray-700 flex gap-3">
              <span className="text-accent font-bold">✓</span>
              Maintains your property's value in this desirable community
            </li>
            <li className="text-base text-gray-700 flex gap-3">
              <span className="text-accent font-bold">✓</span>
              Protects exterior surfaces from weather and environmental damage
            </li>
            <li className="text-base text-gray-700 flex gap-3">
              <span className="text-accent font-bold">✓</span>
              Preserves the neighborhood's attractive appearance
            </li>
            <li className="text-base text-gray-700 flex gap-3">
              <span className="text-accent font-bold">✓</span>
              Removes harmful mold, mildew, and algae
            </li>
            <li className="text-base text-gray-700 flex gap-3">
              <span className="text-accent font-bold">✓</span>
              Improves curb appeal and first impressions
            </li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">CanManCam in {neighborhood.name}</h2>
          <p className="text-base text-gray-700">
            CanManCam is proud to serve the {neighborhood.name} community with professional pressure washing services. Whether you need house washing, driveway cleaning, window cleaning, or any of our other services, we have the expertise and equipment to get the job done right. Our team is familiar with the unique characteristics of {neighborhood.name} properties and knows exactly how to care for them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Link href={`/sc/${neighborhoods[(neighborhoods.findIndex(n => n.slug === neighborhood.slug) - 1 + neighborhoods.length) % neighborhoods.length].slug}-pressure-washing`}>
            <a className="p-4 border-2 border-gray-300 text-center hover:border-primary transition-colors">
              <div className="text-sm font-bold text-gray-500 mb-1">Previous Area</div>
              <div className="font-heading font-bold text-primary">{neighborhoods[(neighborhoods.findIndex(n => n.slug === neighborhood.slug) - 1 + neighborhoods.length) % neighborhoods.length].name}</div>
            </a>
          </Link>
          <Link href="/service-areas">
            <a className="p-4 border-2 border-gray-300 text-center hover:border-primary transition-colors">
              <div className="font-heading font-bold text-primary">View All Service Areas</div>
            </a>
          </Link>
          <Link href={`/sc/${neighborhoods[(neighborhoods.findIndex(n => n.slug === neighborhood.slug) + 1) % neighborhoods.length].slug}-pressure-washing`}>
            <a className="p-4 border-2 border-gray-300 text-center hover:border-primary transition-colors">
              <div className="text-sm font-bold text-gray-500 mb-1">Next Area</div>
              <div className="font-heading font-bold text-primary">{neighborhoods[(neighborhoods.findIndex(n => n.slug === neighborhood.slug) + 1) % neighborhoods.length].name}</div>
            </a>
          </Link>
        </div>
      </main>

      <PriceBeatGuarantee />

      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">Ready to Transform Your {neighborhood.name} Property?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation estimate for pressure washing in {neighborhood.name}. Our price beat guarantee ensures you get the best value.
          </p>
          <Button asChild className="bg-accent hover:bg-accent/90 text-white font-bold uppercase py-6 px-10">
            <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
              Get Free Estimate
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
