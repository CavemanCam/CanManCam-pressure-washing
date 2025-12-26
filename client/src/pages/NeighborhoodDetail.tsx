import { Link, useRoute } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PriceBeatGuarantee } from "@/components/PriceBeatGuarantee";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { services, neighborhoods, blogPosts } from "@/lib/data";

// Helper to parse the custom markdown-like links [Text](/path)
function formatContent(content: string) {
  const parts = content.split(/(\[.*?\]\(.*?\))/g);
  return parts.map((part, index) => {
    const match = part.match(/\[(.*?)\]\((.*?)\)/);
    if (match) {
      return (
        <Link key={index} href={match[2]} className="text-accent hover:underline font-semibold">
          {match[1]}
        </Link>
      );
    }
    return part;
  });
}

export default function NeighborhoodDetail() {
  const [match, params] = useRoute("/sc/:slug");
  const rawSlug = (params as any)?.slug || "";
  const cleanSlug = rawSlug.replace(/-pressure-washing$/, "");
  const neighborhood = neighborhoods.find(n => n.slug === cleanSlug);

  if (!match || !neighborhood) return null;

  const neighborhoodIndex = neighborhoods.findIndex(n => n.slug === neighborhood.slug);
  const prevNeighborhood = neighborhoods[(neighborhoodIndex - 1 + neighborhoods.length) % neighborhoods.length];
  const nextNeighborhood = neighborhoods[(neighborhoodIndex + 1) % neighborhoods.length];
  
  const relatedPosts = blogPosts.filter(p => p.relatedNeighborhoods?.includes(neighborhood.slug)).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={`${neighborhood.name} Pressure Washing | Mount Pleasant, SC | CanManCam`}
        description={`Professional pressure washing services in ${neighborhood.name}, Mount Pleasant, SC. House washing, driveway cleaning & more. Free estimates. Call 607-427-1175.`}
        canonicalUrl={`https://canmancam.com/sc/${neighborhood.slug}-pressure-washing`}
        keywords={`${neighborhood.name} pressure washing, ${neighborhood.name} power washing, Mount Pleasant ${neighborhood.name}, Charleston area pressure washing`}
        breadcrumbs={[
          { name: "Home", url: "https://canmancam.com/" },
          { name: "Service Areas", url: "https://canmancam.com/service-areas" },
          { name: neighborhood.name, url: `https://canmancam.com/sc/${neighborhood.slug}-pressure-washing` }
        ]}
      />
      <Header />
      <Breadcrumb items={[
        { label: "Service Areas", href: "/service-areas" },
        { label: neighborhood.name, href: `/sc/${neighborhood.slug}-pressure-washing` }
      ]} />

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 
              data-testid="text-neighborhood-title"
              className="text-5xl md:text-7xl font-heading font-bold text-primary mb-6"
            >
              {neighborhood.name.toUpperCase()} PRESSURE WASHING SERVICES
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional pressure washing in {neighborhood.name}, Mount Pleasant, SC. Free estimates and price beat guarantee.
            </h2>
          </div>

          <div className="bg-gray-50 p-8 mb-12">
            <div className="text-lg text-gray-700 leading-relaxed text-center">
              {formatContent(neighborhood.description)}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border-l-4 border-accent p-6">
              <h3 className="text-xl font-heading font-bold text-primary mb-4 text-center">NEIGHBORHOOD CHARACTERISTICS</h3>
              <div className="text-gray-700 leading-relaxed text-center">
                {formatContent(neighborhood.characteristics)}
              </div>
            </div>
            <div className="bg-primary text-white p-6">
              <h3 className="text-xl font-heading font-bold mb-4 text-center">WHY CHOOSE CANMANCAM?</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>Local expertise in {neighborhood.name}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>Professional-grade equipment</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>Eco-friendly cleaning solutions</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>Price Beat Guarantee</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-12 max-w-3xl mx-auto">
            <div className="text-gray-700 leading-relaxed text-left">
              {formatContent(neighborhood.content)}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-primary mb-6 text-center">
              SERVICES AVAILABLE IN {neighborhood.name.toUpperCase()}
            </h2>
            <p className="text-base text-gray-700 mb-6 text-center max-w-2xl mx-auto">
              I proudly offer all my pressure washing services throughout {neighborhood.name}:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <Link 
                  key={service.slug} 
                  href={`/services/${service.slug}`}
                  data-testid={`link-service-${service.slug}`}
                  className="block p-4 border-2 border-primary hover:bg-primary hover:text-white transition-colors text-center group"
                >
                  <h3 className="text-lg font-heading font-bold text-primary group-hover:text-white">{service.name}</h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-200 mt-2">{service.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-accent text-white p-8 mb-12">
            <h2 className="text-2xl font-heading font-bold mb-6 text-center">
              WHY PROFESSIONAL PRESSURE WASHING FOR {neighborhood.name.toUpperCase()}?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-bold">✓</span>
                  Maintains your property's value in this desirable community
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">✓</span>
                  Protects exterior surfaces from weather and environmental damage
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">✓</span>
                  Preserves the neighborhood's attractive appearance
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-bold">✓</span>
                  Removes harmful mold, mildew, and algae
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">✓</span>
                  Improves curb appeal and first impressions
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">✓</span>
                  My Price Beat Guarantee ensures the best value
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-12 bg-gray-50 p-8">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">
              CANMANCAM IN {neighborhood.name.toUpperCase()}
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-4">
              I'm Camrin, and I'm proud to serve the {neighborhood.name} community with professional pressure washing services. Whether you need house washing, driveway cleaning, window cleaning, or any of my other services, I have the expertise and equipment to get the job done right.
            </p>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Contact me today for a free estimate and discover why {neighborhood.name} homeowners trust CanManCam for their exterior cleaning needs.
            </p>
          </div>

          {relatedPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center uppercase tracking-tight">HELPFUL ARTICLES</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((post) => (
                  <Link 
                    key={post.slug} 
                    href={`/pressure-washing-tips/${post.slug}`}
                    className="block p-6 border-2 border-gray-200 hover:border-primary transition-colors text-center shadow-sm"
                  >
                    <h3 className="font-heading font-bold text-primary text-xl mb-3 leading-tight">{post.title}</h3>
                    <span className="text-accent text-sm font-bold uppercase tracking-wider">Read More →</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <Link 
              href={`/sc/${prevNeighborhood.slug}-pressure-washing`}
              className="block p-4 border-2 border-gray-300 text-center hover:border-primary transition-colors"
            >
              <div className="text-sm font-bold text-gray-500 mb-1">Previous Area</div>
              <div className="font-heading font-bold text-primary">{prevNeighborhood.name}</div>
            </Link>
            <Link 
              href="/service-areas"
              className="block p-4 border-2 border-gray-300 text-center hover:border-primary transition-colors"
            >
              <div className="font-heading font-bold text-primary">View All Service Areas</div>
            </Link>
            <Link 
              href={`/sc/${nextNeighborhood.slug}-pressure-washing`}
              className="block p-4 border-2 border-gray-300 text-center hover:border-primary transition-colors"
            >
              <div className="text-sm font-bold text-gray-500 mb-1">Next Area</div>
              <div className="font-heading font-bold text-primary">{nextNeighborhood.name}</div>
            </Link>
          </div>
        </div>
      </main>

      <PriceBeatGuarantee />

      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">
            READY TO TRANSFORM YOUR {neighborhood.name.toUpperCase()} PROPERTY?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation estimate for pressure washing in {neighborhood.name}. My price beat guarantee ensures you get the best value.
          </p>
          <Button 
            asChild 
            data-testid="button-neighborhood-cta"
            className="bg-accent hover:bg-accent/90 text-white font-bold uppercase py-6 px-10 rounded-none"
          >
            <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
              Get Free Estimate for {neighborhood.name}
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
