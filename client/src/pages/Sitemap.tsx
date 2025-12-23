import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { services, neighborhoods, blogPosts, projects } from "@/lib/data";
import { Link } from "wouter";

export default function Sitemap() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumb items={[{ label: "Sitemap", href: "/sitemap" }]} />

      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 
          data-testid="text-sitemap-title"
          className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
        >
          SITEMAP
        </h1>
        <p className="text-gray-600 mb-8">
          Browse all pages on the CanManCam Pressure Washing website. Find information about my services, service areas, and helpful resources.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <h2 className="text-xl font-heading font-bold text-primary mb-4 pb-2 border-b-2 border-accent">MAIN PAGES</h2>
            <ul className="space-y-2">
              <li><Link href="/" className="text-accent hover:text-accent/80 hover:underline">Home</Link></li>
              <li><Link href="/about" className="text-accent hover:text-accent/80 hover:underline">About</Link></li>
              <li><Link href="/services" className="text-accent hover:text-accent/80 hover:underline">Services</Link></li>
              <li><Link href="/service-areas" className="text-accent hover:text-accent/80 hover:underline">Service Areas</Link></li>
              <li><Link href="/reviews" className="text-accent hover:text-accent/80 hover:underline">Reviews</Link></li>
              <li><Link href="/projects" className="text-accent hover:text-accent/80 hover:underline">Projects</Link></li>
              <li><Link href="/gallery" className="text-accent hover:text-accent/80 hover:underline">Gallery</Link></li>
              <li><Link href="/contact" className="text-accent hover:text-accent/80 hover:underline">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-heading font-bold text-primary mb-4 pb-2 border-b-2 border-accent">SERVICES</h2>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-accent hover:text-accent/80 hover:underline">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-heading font-bold text-primary mb-4 pb-2 border-b-2 border-accent">RESOURCES</h2>
            <ul className="space-y-2">
              <li><Link href="/pressure-washing-tips" className="text-accent hover:text-accent/80 hover:underline">Blog / Tips</Link></li>
              <li><Link href="/pressure-washing-faq" className="text-accent hover:text-accent/80 hover:underline">FAQ</Link></li>
              <li><Link href="/price-beat-guarantee" className="text-accent hover:text-accent/80 hover:underline">Price Beat Guarantee</Link></li>
              <li><Link href="/feedback" className="text-accent hover:text-accent/80 hover:underline">Submit Feedback</Link></li>
              <li><Link href="/privacy" className="text-accent hover:text-accent/80 hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-accent hover:text-accent/80 hover:underline">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-heading font-bold text-primary mb-4 pb-2 border-b-2 border-accent">SERVICE AREAS - MOUNT PLEASANT NEIGHBORHOODS</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {neighborhoods.map((neighborhood) => (
              <Link 
                key={neighborhood.slug} 
                href={`/sc/${neighborhood.slug}-pressure-washing`}
                className="text-accent hover:text-accent/80 hover:underline text-sm p-2 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                {neighborhood.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-heading font-bold text-primary mb-4 pb-2 border-b-2 border-accent">BLOG POSTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {blogPosts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/pressure-washing-tips/${post.slug}`}
                className="text-accent hover:text-accent/80 hover:underline text-sm p-2 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                {post.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-heading font-bold text-primary mb-4 pb-2 border-b-2 border-accent">PROJECTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {projects.map((project) => (
              <Link 
                key={project.slug} 
                href={`/projects/${project.slug}`}
                className="text-accent hover:text-accent/80 hover:underline text-sm p-2 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                {project.title}
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
