import { useRoute } from "wouter";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PriceBeatGuarantee } from "@/components/PriceBeatGuarantee";
import { Button } from "@/components/ui/button";
import { services, neighborhoods } from "@/lib/data";
import { Link } from "wouter";

export default function ServiceDetail() {
  const [match, params] = useRoute("/services/:slug");
  const service = services.find(s => s.slug === params?.slug);

  if (!match || !service) return null;

  const serviceDescriptions: Record<string, { fullDescription: string; benefits: string[] }> = {
    "house-washing": {
      fullDescription: "Professional house washing is the most effective way to restore your home's exterior to like-new condition. Our expert technicians use specialized equipment and eco-friendly cleaning solutions to remove dirt, algae, mold, and mildew from your siding, trim, and other exterior surfaces. We're experienced with all siding types including vinyl, fiber cement, brick, and stucco. Regular professional house washing protects your investment and enhances curb appeal significantly.",
      benefits: [
        "Removes harmful mold and mildew",
        "Extends the life of your siding",
        "Dramatically improves curb appeal",
        "Protects your home's exterior",
        "Professional-grade results",
        "Eco-friendly cleaning solutions"
      ]
    },
    "driveway-cleaning": {
      fullDescription: "Your driveway is one of the first things people notice about your property. Over time, dirt, oil stains, algae, and weathering can make it look dingy and neglected. Our professional driveway cleaning removes years of buildup, revealing the beautiful concrete or pavement underneath. We use appropriate pressure levels for different surfaces and can handle concrete, asphalt, pavers, and brick driveways.",
      benefits: [
        "Removes oil and grease stains",
        "Eliminates algae and mold",
        "Restores original appearance",
        "Extends driveway lifespan",
        "Improves property value",
        "Safe for all driveway materials"
      ]
    },
    "sidewalk-cleaning": {
      fullDescription: "Clean sidewalks make a big difference in how your property looks. Whether it's residential sidewalks, commercial walkways, or concrete patios, professional sidewalk cleaning removes dirt, slime, algae, and other surface contaminants. Our technicians use the right technique and pressure level to clean effectively without damaging the surface.",
      benefits: [
        "Prevents slipping hazards",
        "Removes stains and discoloration",
        "Improves safety and cleanliness",
        "Maintains curb appeal",
        "Extends sidewalk life",
        "Professional-grade cleaning"
      ]
    },
    "gutter-cleaning": {
      fullDescription: "Clean gutters are essential for proper water drainage and preventing costly damage to your home. Debris-filled gutters can cause water to overflow, damaging your foundation, landscaping, and roof. Our professional gutter cleaning removes leaves, pine needles, dirt, and other debris, allowing water to flow freely. We ensure your gutters are ready to handle whatever weather comes your way.",
      benefits: [
        "Prevents water damage",
        "Protects your foundation",
        "Extends gutter lifespan",
        "Improves water drainage",
        "Reduces pest problems",
        "Safe and professional service"
      ]
    },
    "window-cleaning": {
      fullDescription: "Crystal clear windows enhance the appearance of your home and allow natural light to shine through. Professional window cleaning removes dirt, water spots, and buildup that DIY methods can't effectively tackle. Our trained technicians clean all windows safely and thoroughly, including high-story windows and hard-to-reach areas.",
      benefits: [
        "Crystal clear visibility",
        "Removes hard water spots",
        "Improves indoor light",
        "Professional results",
        "Safe high-window cleaning",
        "Streak-free guarantee"
      ]
    },
    "trash-can-cleaning": {
      fullDescription: "Trash cans accumulate bacteria, odors, and contaminants that can affect your property and health. Our professional trash can cleaning sanitizes and deodorizes your cans, eliminating odors and bacteria. It's an often-overlooked service that makes a noticeable difference in property cleanliness and neighborhood standards.",
      benefits: [
        "Eliminates odors",
        "Kills bacteria and germs",
        "Reduces pest attraction",
        "Improves hygiene",
        "Maintains property cleanliness",
        "Quick and efficient service"
      ]
    }
  };

  const description = serviceDescriptions[service.slug];

  return (
    <div>
      <Breadcrumb items={[
        { label: "Services", href: "/services" },
        { label: service.name, href: `/services/${service.slug}` }
      ]} />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
          {service.name} in Mount Pleasant, SC
        </h1>
        <p className="text-lg text-gray-600 mb-8">{service.description}</p>

        <div className="prose prose-lg max-w-4xl mb-12">
          <p className="text-base leading-relaxed text-gray-700 mb-8">
            {description.fullDescription}
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">Benefits of Our {service.name} Service</h2>
          <ul className="space-y-2 mb-8">
            {description.benefits.map((benefit, idx) => (
              <li key={idx} className="text-base text-gray-700 flex gap-3">
                <span className="text-accent font-bold">✓</span>
                {benefit}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">Serving All Mount Pleasant Neighborhoods</h2>
          <p className="text-base text-gray-700 mb-4">
            We proudly serve {service.name.toLowerCase()} in all Mount Pleasant neighborhoods:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
            {neighborhoods.map((neighborhood) => (
              <Link key={neighborhood.slug} href={`/sc/${neighborhood.slug}-pressure-washing`}>
                <a className="text-accent hover:text-accent/80 font-medium text-sm">{neighborhood.name}</a>
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">Why Choose CanManCam?</h2>
          <p className="text-base text-gray-700 mb-4">
            When you choose CanManCam for your {service.name.toLowerCase()} needs, you get:
          </p>
          <ul className="space-y-2 mb-8">
            <li className="text-base text-gray-700 flex gap-3">
              <span className="text-accent font-bold">✓</span>
              Expert technicians with years of experience
            </li>
            <li className="text-base text-gray-700 flex gap-3">
              <span className="text-accent font-bold">✓</span>
              Professional-grade equipment and techniques
            </li>
            <li className="text-base text-gray-700 flex gap-3">
              <span className="text-accent font-bold">✓</span>
              Eco-friendly cleaning solutions
            </li>
            <li className="text-base text-gray-700 flex gap-3">
              <span className="text-accent font-bold">✓</span>
              Fully insured and licensed
            </li>
            <li className="text-base text-gray-700 flex gap-3">
              <span className="text-accent font-bold">✓</span>
              Our Price Beat Guarantee
            </li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {services.filter(s => s.slug !== service.slug).slice(0, 3).map((relatedService) => (
              <Link key={relatedService.slug} href={`/services/${relatedService.slug}`}>
                <a className="p-4 border-2 border-primary rounded-none hover:bg-primary/5 transition-colors">
                  <h3 className="text-lg font-heading font-bold text-primary">{relatedService.name}</h3>
                  <p className="text-sm text-gray-600 mt-2">{relatedService.description}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <PriceBeatGuarantee />

      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">Ready to Transform Your Property?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation estimate for {service.name.toLowerCase()} in Mount Pleasant, SC. Our price beat guarantee ensures you get the best value.
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
