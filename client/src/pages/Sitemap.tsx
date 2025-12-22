import { Breadcrumb } from "@/components/Breadcrumb";
import { services, neighborhoods, blogPosts } from "@/lib/data";
import { Link } from "wouter";

export default function Sitemap() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Sitemap", href: "/sitemap" }]} />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8">
          Sitemap
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-heading font-bold text-primary mb-4">Main Pages</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/"><a className="text-accent hover:text-accent/80">Home</a></Link></li>
              <li><Link href="/about"><a className="text-accent hover:text-accent/80">About Us</a></Link></li>
              <li><Link href="/services"><a className="text-accent hover:text-accent/80">Services</a></Link></li>
              <li><Link href="/service-areas"><a className="text-accent hover:text-accent/80">Service Areas</a></Link></li>
              <li><Link href="/reviews"><a className="text-accent hover:text-accent/80">Reviews</a></Link></li>
              <li><Link href="/projects"><a className="text-accent hover:text-accent/80">Projects</a></Link></li>
              <li><Link href="/gallery"><a className="text-accent hover:text-accent/80">Gallery</a></Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-heading font-bold text-primary mb-4">Services</h2>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`}>
                    <a className="text-accent hover:text-accent/80">{service.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-heading font-bold text-primary mb-4">Resources</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/pressure-washing-tips"><a className="text-accent hover:text-accent/80">Blog / Tips</a></Link></li>
              <li><Link href="/pressure-washing-faq"><a className="text-accent hover:text-accent/80">FAQ</a></Link></li>
              <li><Link href="/price-beat-guarantee"><a className="text-accent hover:text-accent/80">Price Beat Guarantee</a></Link></li>
              <li><Link href="/contact"><a className="text-accent hover:text-accent/80">Contact</a></Link></li>
              <li><Link href="/privacy"><a className="text-accent hover:text-accent/80">Privacy Policy</a></Link></li>
              <li><Link href="/terms"><a className="text-accent hover:text-accent/80">Terms of Use</a></Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <h2 className="text-xl font-heading font-bold text-primary mb-4">Service Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm">
            {neighborhoods.map((neighborhood) => (
              <Link key={neighborhood.slug} href={`/sc/${neighborhood.slug}-pressure-washing`}>
                <a className="text-accent hover:text-accent/80">{neighborhood.name}</a>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <h2 className="text-xl font-heading font-bold text-primary mb-4">Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/pressure-washing-tips/${post.slug}`}>
                <a className="text-accent hover:text-accent/80">{post.title}</a>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
