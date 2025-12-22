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
          Browse all pages on the CanManCam Pressure Washing website. Find information about our services, service areas, and helpful resources.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <h2 className="text-xl font-heading font-bold text-primary mb-4 pb-2 border-b-2 border-accent">MAIN PAGES</h2>
            <ul className="space-y-2">
              <li><Link href="/"><a className="text-accent hover:text-accent/80 hover:underline">Home</a></Link></li>
              <li><Link href="/about"><a className="text-accent hover:text-accent/80 hover:underline">About Us</a></Link></li>
              <li><Link href="/services"><a className="text-accent hover:text-accent/80 hover:underline">Services</a></Link></li>
              <li><Link href="/service-areas"><a className="text-accent hover:text-accent/80 hover:underline">Service Areas</a></Link></li>
              <li><Link href="/reviews"><a className="text-accent hover:text-accent/80 hover:underline">Reviews</a></Link></li>
              <li><Link href="/projects"><a className="text-accent hover:text-accent/80 hover:underline">Projects</a></Link></li>
              <li><Link href="/gallery"><a className="text-accent hover:text-accent/80 hover:underline">Gallery</a></Link></li>
              <li><Link href="/contact"><a className="text-accent hover:text-accent/80 hover:underline">Contact</a></Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-heading font-bold text-primary mb-4 pb-2 border-b-2 border-accent">SERVICES</h2>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`}>
                    <a className="text-accent hover:text-accent/80 hover:underline">{service.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-heading font-bold text-primary mb-4 pb-2 border-b-2 border-accent">RESOURCES</h2>
            <ul className="space-y-2">
              <li><Link href="/pressure-washing-tips"><a className="text-accent hover:text-accent/80 hover:underline">Blog / Tips</a></Link></li>
              <li><Link href="/pressure-washing-faq"><a className="text-accent hover:text-accent/80 hover:underline">FAQ</a></Link></li>
              <li><Link href="/price-beat-guarantee"><a className="text-accent hover:text-accent/80 hover:underline">Price Beat Guarantee</a></Link></li>
              <li><Link href="/feedback"><a className="text-accent hover:text-accent/80 hover:underline">Submit Feedback</a></Link></li>
              <li><Link href="/privacy"><a className="text-accent hover:text-accent/80 hover:underline">Privacy Policy</a></Link></li>
              <li><Link href="/terms"><a className="text-accent hover:text-accent/80 hover:underline">Terms of Use</a></Link></li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-heading font-bold text-primary mb-4 pb-2 border-b-2 border-accent">SERVICE AREAS - MOUNT PLEASANT NEIGHBORHOODS</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {neighborhoods.map((neighborhood) => (
              <Link key={neighborhood.slug} href={`/sc/${neighborhood.slug}-pressure-washing`}>
                <a className="text-accent hover:text-accent/80 hover:underline text-sm p-2 bg-gray-50 hover:bg-gray-100 transition-colors">
                  {neighborhood.name}
                </a>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-heading font-bold text-primary mb-4 pb-2 border-b-2 border-accent">BLOG POSTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/pressure-washing-tips/${post.slug}`}>
                <a className="text-accent hover:text-accent/80 hover:underline text-sm p-2 bg-gray-50 hover:bg-gray-100 transition-colors">
                  {post.title}
                </a>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-heading font-bold text-primary mb-4 pb-2 border-b-2 border-accent">PROJECTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`}>
                <a className="text-accent hover:text-accent/80 hover:underline text-sm p-2 bg-gray-50 hover:bg-gray-100 transition-colors">
                  {project.title}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
