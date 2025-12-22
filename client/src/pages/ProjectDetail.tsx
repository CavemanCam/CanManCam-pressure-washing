import { useRoute } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { projects, services, neighborhoods } from "@/lib/data";
import { Link } from "wouter";

export default function ProjectDetail() {
  const [match, params] = useRoute("/projects/:slug");
  const project = projects.find(p => p.slug === params?.slug);

  if (!match || !project) return null;

  const projectIndex = projects.findIndex(p => p.slug === project.slug);
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];
  
  const relatedService = services.find(s => s.name.toLowerCase().includes(project.service.toLowerCase().split(' ')[0]));
  const relatedNeighborhood = neighborhoods.find(n => n.name.toLowerCase() === project.location.toLowerCase());
  const similarProjects = projects.filter(p => p.slug !== project.slug && p.service === project.service).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumb items={[
        { label: "Projects", href: "/projects" },
        { label: project.title, href: `/projects/${project.slug}` }
      ]} />

      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 
          data-testid="text-project-title"
          className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
        >
          {project.title.toUpperCase()}
        </h1>
        <div className="flex flex-wrap gap-4 mb-8">
          <span className="bg-accent text-white px-4 py-2 font-bold text-sm uppercase">
            {project.service}
          </span>
          <span className="bg-secondary text-white px-4 py-2 font-bold text-sm uppercase">
            {project.location}
          </span>
          <span className="bg-gray-200 text-gray-700 px-4 py-2 font-bold text-sm">
            {project.date}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-200 h-64 md:h-96 flex items-center justify-center">
            <div className="text-center p-8">
              <p className="text-gray-600 font-bold text-xl mb-2">BEFORE</p>
              <p className="text-gray-500 text-sm">Project photo coming soon</p>
            </div>
          </div>
          <div className="bg-gray-300 h-64 md:h-96 flex items-center justify-center">
            <div className="text-center p-8">
              <p className="text-gray-600 font-bold text-xl mb-2">AFTER</p>
              <p className="text-gray-500 text-sm">Project photo coming soon</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mb-12">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">PROJECT DETAILS</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6">
              <h3 className="font-bold text-primary mb-2">SERVICE TYPE</h3>
              <p className="text-gray-700">{project.service}</p>
              {relatedService && (
                <Link href={`/services/${relatedService.slug}`}>
                  <a className="text-accent text-sm hover:underline mt-2 inline-block">Learn more about {relatedService.name} →</a>
                </Link>
              )}
            </div>
            <div className="bg-gray-50 p-6">
              <h3 className="font-bold text-primary mb-2">LOCATION</h3>
              <p className="text-gray-700">{project.location}, Mount Pleasant, SC</p>
              {relatedNeighborhood && (
                <Link href={`/sc/${relatedNeighborhood.slug}-pressure-washing`}>
                  <a className="text-accent text-sm hover:underline mt-2 inline-block">View {relatedNeighborhood.name} services →</a>
                </Link>
              )}
            </div>
          </div>

          <h2 className="text-2xl font-heading font-bold text-primary mb-4">WHY THIS PROJECT MATTERED</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Professional {project.service.toLowerCase()} makes a significant difference in property appearance and value. This {project.location} project showcases the transformative power of expert pressure washing, demonstrating how years of accumulated dirt, algae, and weathering can be safely removed to reveal the surface beneath.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            CanManCam uses professional-grade equipment and appropriate techniques for each surface type, ensuring safe, effective cleaning without damage. Our team takes pride in delivering results that exceed client expectations, as demonstrated by this {project.location} project.
          </p>
        </div>

        {similarProjects.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">SIMILAR PROJECTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {similarProjects.map((p) => (
                <Link key={p.slug} href={`/projects/${p.slug}`}>
                  <a className="block bg-white border-2 border-gray-200 hover:border-primary transition-colors">
                    <div className="bg-gray-200 h-32 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Before / After</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading font-bold text-primary text-sm">{p.title}</h3>
                      <p className="text-xs text-gray-500 mt-1">{p.location}</p>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Link href={`/projects/${prevProject.slug}`}>
            <a className="p-4 border-2 border-gray-300 text-center hover:border-primary transition-colors">
              <div className="text-sm font-bold text-gray-500 mb-1">Previous Project</div>
              <div className="font-heading font-bold text-primary text-sm">{prevProject.title}</div>
            </a>
          </Link>
          <Link href="/projects">
            <a className="p-4 border-2 border-gray-300 text-center hover:border-primary transition-colors">
              <div className="font-heading font-bold text-primary">View All Projects</div>
            </a>
          </Link>
          <Link href={`/projects/${nextProject.slug}`}>
            <a className="p-4 border-2 border-gray-300 text-center hover:border-primary transition-colors">
              <div className="text-sm font-bold text-gray-500 mb-1">Next Project</div>
              <div className="font-heading font-bold text-primary text-sm">{nextProject.title}</div>
            </a>
          </Link>
        </div>
      </main>

      <section className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            WANT RESULTS LIKE THIS FOR YOUR PROPERTY?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get a free estimate for professional {project.service.toLowerCase()} in {project.location} and throughout Mount Pleasant.
          </p>
          <Button 
            asChild 
            data-testid="button-project-cta"
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
