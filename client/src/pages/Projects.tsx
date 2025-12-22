import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { projects, services, neighborhoods } from "@/lib/data";
import { Link } from "wouter";

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumb items={[{ label: "Projects", href: "/projects" }]} />

      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 
          data-testid="text-projects-title"
          className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
        >
          CANMANCAM PRESSURE WASHING PROJECTS IN MOUNT PLEASANT, SC
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          See the difference professional pressure washing makes. Browse our recent projects throughout Mount Pleasant neighborhoods and discover how CanManCam transforms properties with expert exterior cleaning.
        </p>
        <p className="text-base text-gray-500 mb-12">
          Each project showcases our commitment to quality, attention to detail, and the dramatic results we achieve for our clients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <a 
                data-testid={`card-project-${project.slug}`}
                className="block bg-white border-2 border-gray-200 hover:border-primary transition-colors"
              >
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <div className="text-center p-4">
                    <span className="text-gray-500 text-sm uppercase tracking-wider">Before / After</span>
                    <p className="text-xs text-gray-400 mt-1">{project.service}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-accent text-white text-xs font-bold px-3 py-1 uppercase">
                      {project.service}
                    </span>
                    <span className="text-xs text-gray-500">{project.date}</span>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                  <span className="text-accent font-bold text-sm uppercase">View Project →</span>
                </div>
              </a>
            </Link>
          ))}
        </div>

        <div className="bg-gray-50 p-8 mb-12">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">
            BROWSE BY SERVICE
          </h2>
          <div className="flex flex-wrap gap-3">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <a className="px-4 py-2 bg-primary text-white font-bold text-sm uppercase hover:bg-primary/90 transition-colors">
                  {service.name}
                </a>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-8 mb-12">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">
            BROWSE BY NEIGHBORHOOD
          </h2>
          <div className="flex flex-wrap gap-3">
            {neighborhoods.map((neighborhood) => (
              <Link key={neighborhood.slug} href={`/sc/${neighborhood.slug}-pressure-washing`}>
                <a className="px-4 py-2 bg-secondary text-white font-bold text-sm uppercase hover:bg-secondary/90 transition-colors">
                  {neighborhood.name}
                </a>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">
            WANT YOUR PROPERTY TO LOOK THIS GOOD?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get a free estimate for professional pressure washing services. Our Price Beat Guarantee ensures you get the best value in Mount Pleasant.
          </p>
          <Button 
            asChild 
            data-testid="button-projects-cta"
            className="bg-accent hover:bg-accent/90 text-white font-bold uppercase px-8 py-6 h-auto rounded-none"
          >
            <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
              Get Free Estimate
            </a>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
