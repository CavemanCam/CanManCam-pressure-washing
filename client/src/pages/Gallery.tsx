import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { services, projects } from "@/lib/data";
import { Link } from "wouter";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.service.toLowerCase().replace(/\s+/g, '-') === activeFilter);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumb items={[{ label: "Gallery", href: "/gallery" }]} />

      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 
          data-testid="text-gallery-title"
          className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
        >
          PRESSURE WASHING BEFORE & AFTER GALLERY
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          See the transformations CanManCam achieves with professional pressure washing. Browse our gallery of completed projects throughout Mount Pleasant, SC.
        </p>

        <div className="mb-8">
          <h2 className="text-lg font-heading font-bold text-primary mb-4">FILTER BY SERVICE</h2>
          <div className="flex flex-wrap gap-3">
            <button
              data-testid="button-filter-all"
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 font-bold text-sm uppercase transition-colors ${
                activeFilter === "all" 
                  ? "bg-accent text-white" 
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              All Services
            </button>
            {services.map((service) => (
              <button
                key={service.slug}
                data-testid={`button-filter-${service.slug}`}
                onClick={() => setActiveFilter(service.slug)}
                className={`px-4 py-2 font-bold text-sm uppercase transition-colors ${
                  activeFilter === service.slug 
                    ? "bg-accent text-white" 
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div 
                key={project.slug}
                data-testid={`card-gallery-${project.slug}`}
                className="bg-white border-2 border-gray-200 hover:border-primary transition-colors cursor-pointer"
              >
                <div className="bg-gray-200 h-48 flex items-center justify-center relative group">
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                    <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">
                      View Details
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-gray-500 text-sm uppercase tracking-wider">Before / After</span>
                  </div>
                </div>
                <div className="p-4">
                  <span className="bg-accent text-white text-xs font-bold px-2 py-1 uppercase">
                    {project.service}
                  </span>
                  <h3 className="text-sm font-heading font-bold text-primary mt-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{project.location}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-600">No projects found for this service. Check back soon!</p>
            </div>
          )}
        </div>

        <div className="bg-primary text-white p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">
                WANT TO SEE YOUR HOME IN OUR GALLERY?
              </h2>
              <p className="text-gray-200 mb-4">
                Get a free estimate for professional pressure washing services. I'll transform your property and you could be my next featured project!
              </p>
            </div>
            <div className="text-center">
              <Button 
                asChild 
                data-testid="button-gallery-cta"
                className="bg-accent hover:bg-accent/90 text-white font-bold uppercase px-8 py-6 h-auto rounded-none"
              >
                <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
                  Get Free Estimate
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">
            EXPLORE OUR SERVICES
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="px-4 py-2 bg-secondary text-white font-bold text-sm uppercase hover:bg-secondary/90 transition-colors">
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
