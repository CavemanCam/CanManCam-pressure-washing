import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import drivewayImage from "@assets/generated_images/pressure_washing_driveway_before_and_after_split.png";
import roofImage from "@assets/generated_images/soft_wash_roof_cleaning_in_progress.png";

export default function Projects() {
  const projects = [
    {
      title: "Driveway Restoration in Mount Pleasant",
      description: "We removed years of built-up grime and algae from this concrete driveway, restoring its original brightness and curb appeal.",
      image: drivewayImage,
      category: "Driveway Cleaning"
    },
    {
      title: "Roof Soft Wash in Charleston",
      description: "Our soft wash technique safely removed black streaks and moss from this asphalt shingle roof without causing any damage.",
      image: roofImage,
      category: "Roof Cleaning"
    },
    // duplicating for layout
    {
      title: "Commercial Building Wash",
      description: "Complete exterior cleaning for a local business complex, ensuring a professional appearance for their customers.",
      image: drivewayImage, // Reusing for now
      category: "Commercial"
    },
    {
      title: "Vinyl Siding House Wash",
      description: "Removed green algae and oxidation from vinyl siding using our low-pressure cleaning solution.",
      image: roofImage, // Reusing for now
      category: "House Washing"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-body">
      <Header />
      <div className="bg-primary py-20 text-center text-white">
        <h1 className="text-5xl font-heading font-bold">Our Latest Projects</h1>
        <p className="mt-4 text-xl opacity-90">See the difference professional pressure washing makes</p>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-none shadow-md">
              <div className="h-64 overflow-hidden relative group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {project.category}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-heading font-bold text-primary mb-3">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
