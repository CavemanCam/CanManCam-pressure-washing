import { useRoute } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { blogPosts, services, neighborhoods } from "@/lib/data";
import { Link } from "wouter";

export default function BlogDetail() {
  const [match, params] = useRoute("/pressure-washing-tips/:slug");
  const post = blogPosts.find(p => p.slug === params?.slug);

  if (!match || !post) return null;

  const relatedServices = services.filter(s => post.relatedServices?.includes(s.slug));
  const relatedNeighborhoods = neighborhoods.filter(n => post.relatedNeighborhoods?.includes(n.slug));
  const relatedPosts = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumb items={[
        { label: "Pressure Washing Tips", href: "/pressure-washing-tips" },
        { label: post.title, href: `/pressure-washing-tips/${post.slug}` }
      ]} />

      <main className="flex-grow container mx-auto px-4 py-12">
        <article className="max-w-4xl">
          <h1 
            data-testid="text-blog-title"
            className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
          >
            {post.question}
          </h1>
          <p className="text-gray-500 text-sm mb-8">
            CanManCam Pressure Washing | Mount Pleasant, SC
          </p>

          <div className="bg-secondary text-white p-6 mb-8">
            <p data-testid="text-blog-answer" className="text-lg leading-relaxed">
              {post.answer}
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            {post.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-base leading-relaxed text-gray-700 mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {relatedServices.length > 0 && (
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-4">RELATED SERVICES</h3>
                <div className="space-y-3">
                  {relatedServices.map((service) => (
                    <Link 
                      key={service.slug} 
                      href={`/services/${service.slug}`}
                      data-testid={`link-service-${service.slug}`}
                      className="block p-3 border-l-4 border-accent hover:bg-gray-50 transition-colors"
                    >
                      <h4 className="font-bold text-primary">{service.name}</h4>
                      <p className="text-sm text-gray-600">{service.shortDescription}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {relatedNeighborhoods.length > 0 && (
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-4">SERVICE AREAS</h3>
                <div className="space-y-3">
                  {relatedNeighborhoods.map((neighborhood) => (
                    <Link 
                      key={neighborhood.slug} 
                      href={`/sc/${neighborhood.slug}-pressure-washing`}
                      data-testid={`link-neighborhood-${neighborhood.slug}`}
                      className="block p-3 border-l-4 border-accent hover:bg-gray-50 transition-colors"
                    >
                      <h4 className="font-bold text-primary">{neighborhood.name}</h4>
                      <p className="text-sm text-gray-600">Pressure Washing Services in Mount Pleasant</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="border-t-2 border-gray-200 pt-8 mb-12">
            <h3 className="text-xl font-heading font-bold text-primary mb-4">RELATED ARTICLES</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedPosts.map((relPost) => (
                <Link 
                  key={relPost.slug} 
                  href={`/pressure-washing-tips/${relPost.slug}`}
                  className="block p-4 border-2 border-gray-200 hover:border-primary transition-colors"
                >
                  <h4 className="font-heading font-bold text-primary text-sm mb-2">{relPost.title}</h4>
                  <span className="text-accent text-xs font-bold uppercase">Read More →</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/price-beat-guarantee" className="text-accent font-bold hover:underline">Price Beat Guarantee</Link>
            <Link href="/contact" className="text-accent font-bold hover:underline">Contact Us</Link>
            <Link href="/services" className="text-accent font-bold hover:underline">All Services</Link>
          </div>
        </article>
      </main>

      <section className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">HAVE MORE QUESTIONS?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact CanManCam today for professional pressure washing services in Mount Pleasant. We're happy to discuss your specific needs.
          </p>
          <Button 
            asChild 
            data-testid="button-blog-detail-cta"
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
