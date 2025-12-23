import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { services } from "@/lib/data";
import { Link } from "wouter";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Pressure Washing Services Mount Pleasant, SC | CanManCam"
        description="Professional pressure washing services in Mount Pleasant, SC. House washing, driveway cleaning, gutter cleaning, window washing & more. Free estimates."
        canonicalUrl="https://canmancam.com/services"
        keywords="pressure washing services, house washing, driveway cleaning, gutter cleaning, window cleaning, Mount Pleasant SC, Charleston"
        breadcrumbs={[
          { name: "Home", url: "https://canmancam.com/" },
          { name: "Services", url: "https://canmancam.com/services" }
        ]}
      />
      <Header />
      <Breadcrumb items={[{ label: "Services", href: "/services" }]} />

      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 
          data-testid="text-services-title"
          className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
        >
          PRESSURE WASHING SERVICES IN MOUNT PLEASANT, SC
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          I'm Camrin, and CanManCam offers comprehensive exterior cleaning services throughout Mount Pleasant and surrounding areas. From house washing and driveway cleaning to window washing and gutter maintenance, I have the expertise and equipment to handle all your property's exterior cleaning needs.
        </p>
        <p className="text-base text-gray-500 mb-12">
          I use the latest soft washing and pressure washing techniques to safely and effectively clean every surface. I'm fully licensed, insured, and committed to your complete satisfaction.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div 
              key={service.slug}
              data-testid={`card-service-${service.slug}`}
              className="bg-white border-2 border-gray-200 hover:border-primary transition-colors"
            >
              <div className="bg-primary p-4">
                <h2 className="text-xl font-heading font-bold text-white">{service.name.toUpperCase()}</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.benefits.slice(0, 4).map((benefit, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex gap-2">
                      <span className="text-accent font-bold">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${service.slug}`} className="inline-block bg-accent hover:bg-accent/90 text-white font-bold uppercase text-sm px-6 py-3 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary text-white p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-4">MY PRICE BEAT GUARANTEE</h2>
              <p className="text-gray-200 mb-4">
                I'm confident in my pricing and quality. If you find a lower quote for the same service from another reputable company, I'll beat it by 5%. Quality service at competitive prices – that's my promise.
              </p>
              <Link href="/price-beat-guarantee" className="inline-block bg-accent hover:bg-accent/90 text-white font-bold uppercase px-6 py-3 transition-colors">
                Learn More
              </Link>
            </div>
            <div className="text-center">
              <div className="text-6xl font-heading font-bold text-accent mb-2">5%</div>
              <p className="text-xl">Price Beat Guarantee</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-gray-50">
            <div className="text-4xl font-heading font-bold text-primary mb-2">100%</div>
            <p className="text-gray-600">Satisfaction Guaranteed</p>
          </div>
          <div className="text-center p-6 bg-gray-50">
            <div className="text-4xl font-heading font-bold text-primary mb-2">12+</div>
            <p className="text-gray-600">Neighborhoods Served</p>
          </div>
          <div className="text-center p-6 bg-gray-50">
            <div className="text-4xl font-heading font-bold text-primary mb-2">6</div>
            <p className="text-gray-600">Professional Services</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">NEED HELP CHOOSING A SERVICE?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Not sure which services your property needs? Contact me for a free consultation. I'll assess your property and recommend the right services to keep your home looking its best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              data-testid="button-services-estimate"
              className="bg-accent hover:bg-accent/90 text-white font-bold uppercase px-8 py-6 h-auto rounded-none"
            >
              <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
                Get Free Estimate
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline"
              data-testid="button-services-call"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold uppercase px-8 py-6 h-auto rounded-none"
            >
              <a href="tel:607-427-1175">Call 607-427-1175</a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
