import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "@assets/stock_images/pressure_washing_hou_08430493.jpg";
import { Link } from "wouter";

export default function Home() {
  const services = [
    { title: "House Washing", description: "Safe soft washing to remove mold, algae, and dirt from your siding.", icon: "🏠" },
    { title: "Roof Cleaning", description: "Extend the life of your roof by removing harmful black streaks and moss.", icon: "🛖" },
    { title: "Driveway Cleaning", description: "Restore the brightness of your concrete and improve curb appeal.", icon: "🛣️" },
    { title: "Gutter Cleaning", description: "Keep your gutters flowing freely and prevent water damage.", icon: "🌧️" },
    { title: "Window Cleaning", description: "Streak-free shine for your windows, enhancing your view.", icon: "🪟" },
    { title: "Commercial", description: "Keep your business looking professional and welcoming.", icon: "🏢" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-body text-gray-800">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center text-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-4 text-accent drop-shadow-md">
            Mount Pleasant's Most Trustworthy
          </h2>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight drop-shadow-lg">
            Pressure Washing Company
          </h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-6 uppercase tracking-wider h-auto w-full md:w-auto shadow-xl hover:translate-y-[-2px] transition-transform">
              <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
                Get a Free Estimate
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-6 uppercase tracking-wider h-auto w-full md:w-auto backdrop-blur-sm">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
        
        {/* Slant bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}></div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Complete Exterior Pressure Washing In The Mount Pleasant Area
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            When you need any part of your home pressure washed in or around Mount Pleasant, the all-in-one pressure washing service to call is CanManCam! We offer a complete line of pressure washing services, including all types of power washing and soft wash roof cleaning.
          </p>
          <div className="p-6 bg-muted/30 rounded-lg border border-muted inline-block">
            <p className="font-bold text-xl text-primary mb-2">We make pressure washing simple, affordable, and thorough!</p>
            <p className="text-gray-600">Our experienced pressure washing professionals are highly trained, insured, and ready to serve you.</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">Our Premium Services</h2>
            <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card key={idx} className="group hover:shadow-xl transition-all duration-300 border-none shadow-md overflow-hidden">
                <div className="h-3 bg-secondary group-hover:bg-accent transition-colors" />
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link href="/services">
                    <span className="text-accent font-bold uppercase text-sm tracking-wide hover:underline cursor-pointer inline-flex items-center gap-1">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 opacity-10 bg-white rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 p-24 opacity-10 bg-accent rounded-full -translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">100% Satisfaction Guarantee</h2>
            <div className="space-y-6 text-lg text-gray-200">
              <p>
                We stand behind our work. Our goal is to provide the highest quality service and the best customer experience possible. If you are not completely satisfied, we will make it right.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent shrink-0" />
                  <span>Licensed & Fully Insured Professionals</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent shrink-0" />
                  <span>Safe "Soft Wash" Techniques for Siding</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent shrink-0" />
                  <span>7 Day Rain Guarantee for Window Cleaning</span>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold mt-6 shadow-lg">
                <Link href="/contact">Contact Us Now</Link>
              </Button>
            </div>
          </div>
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 text-center">
            <h3 className="text-3xl font-heading font-bold mb-4">Why Soft Wash?</h3>
            <p className="mb-6">
              Algae, mold, and lichen build-up is corrosive to your roof and siding. High pressure can cause damage! We use specialized solutions to gently kill these organisms at the root without damaging your property.
            </p>
            <div className="aspect-video bg-black/20 rounded-lg flex items-center justify-center">
              <span className="text-sm uppercase tracking-widest opacity-70">Soft Wash Demonstration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">What Neighbors Say</h2>
            <div className="flex justify-center gap-1 text-accent mb-4">
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-50 border-none shadow-sm">
              <CardContent className="p-8">
                <div className="flex text-accent mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-gray-700 italic mb-6">"CanManCam did an awesome job. They powerwashed our home, porches, sidewalks, detached garage, deck & brick columns. Everything is so clean. I would recommend this company & know they would do a fantastic job."</p>
                <p className="font-bold text-primary">- Happy Customer</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border-none shadow-sm">
              <CardContent className="p-8">
                <div className="flex text-accent mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-gray-700 italic mb-6">"They did a fantastic job! Very communicative, arrived early, got the job done quickly and thoroughly. Our house and deck look like new. We couldn’t have asked for a smoother process!"</p>
                <p className="font-bold text-primary">- Satisfied Client</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white uppercase font-bold tracking-wide">
              <Link href="/reviews">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to Transform Your Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">Get a free, no-obligation quote today and see the difference CanManCam can make.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-12 py-6 uppercase shadow-xl">
               <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
                Get Free Quote
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-secondary font-bold text-lg px-12 py-6 uppercase bg-transparent">
              <a href="tel:607-427-1175">Call 607-427-1175</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
