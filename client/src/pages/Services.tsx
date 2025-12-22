import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Services() {
  const services = [
    { name: "House Washing", description: "Our soft wash house washing service gently removes dirt, algae, mold, and mildew from your home's exterior without the risk of high-pressure damage. Safe for vinyl, brick, stucco, and wood." },
    { name: "Roof Cleaning", description: "Remove unsightly black streaks, moss, and lichen from your roof. Our cleaning process extends the life of your shingles and improves your home's curb appeal." },
    { name: "Driveway & Concrete Cleaning", description: "Blast away years of grime, oil stains, and tire marks. We clean driveways, sidewalks, patios, and pool decks to make them look new again." },
    { name: "Gutter Cleaning", description: "Protect your home from water damage with our thorough gutter cleaning service. We remove all debris and ensure your downspouts are flowing freely." },
    { name: "Window Cleaning", description: "Get streak-free, crystal clear windows with our pure water cleaning system. We clean both exterior glass and frames." },
    { name: "Commercial Pressure Washing", description: "Keep your business looking professional. We clean storefronts, parking lots, building exteriors, and more for commercial clients." },
  ];

  return (
    <div className="min-h-screen flex flex-col font-body">
      <Header />
      <div className="bg-primary py-20 text-center text-white">
        <h1 className="text-5xl font-heading font-bold">Our Services</h1>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((s, i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className="bg-accent/10 p-4 rounded-lg text-accent font-bold text-2xl h-16 w-16 flex items-center justify-center shrink-0">
                {i + 1}
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-3">{s.name}</h3>
                <p className="text-gray-600 leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
