import { useRoute } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PriceBeatGuarantee } from "@/components/PriceBeatGuarantee";
import { Button } from "@/components/ui/button";
import { services, neighborhoods, blogPosts } from "@/lib/data";
import { Link } from "wouter";
import { LinkedParagraph } from "@/lib/contentLinks";

import houseWashing1 from "@assets/uploaded_images/house-washing-siding-exterior-cleaning.png";
import houseWashing2 from "@assets/uploaded_images/soft-washing-house-siding-after.JPEG";
import houseWashing3 from "@assets/uploaded_images/lowcountry-home-soft-washing-front.JPEG";
import driveway1 from "@assets/uploaded_images/pressure-washing-driveway-after.JPEG";
import driveway2 from "@assets/uploaded_images/concrete-driveway-cleaning-after.JPEG";
import sidewalk1 from "@assets/uploaded_images/pressure-washing-sidewalk-mount-pleasant.JPEG";
import sidewalk2 from "@assets/uploaded_images/residential-sidewalk-cleaning-01.JPEG";
import sidewalk3 from "@assets/uploaded_images/front-walkway-pressure-washing-01.JPEG";
import gutter1 from "@assets/uploaded_images/gutter-cleaning-service-mount-pleasant.png";
import window1 from "@assets/uploaded_images/window-cleaning-sunroom-porch.JPEG";
import window2 from "@assets/uploaded_images/bay-window-exterior-cleaning.JPEG";
import trashcan1 from "@assets/uploaded_images/trash-can-cleaning-after.JPEG";
import trashcan2 from "@assets/uploaded_images/recycling-bin-clean-after.JPEG";

const serviceImages: Record<string, { hero: string; gallery: string[] }> = {
  "house-washing": {
    hero: houseWashing1,
    gallery: [houseWashing2, houseWashing3]
  },
  "driveway-cleaning": {
    hero: driveway1,
    gallery: [driveway2]
  },
  "sidewalk-cleaning": {
    hero: sidewalk1,
    gallery: [sidewalk2, sidewalk3]
  },
  "gutter-cleaning": {
    hero: gutter1,
    gallery: []
  },
  "window-cleaning": {
    hero: window1,
    gallery: [window2]
  },
  "trash-can-cleaning": {
    hero: trashcan1,
    gallery: [trashcan2]
  }
};

export default function ServiceDetail() {
  const [match, params] = useRoute("/services/:slug");
  const service = services.find(s => s.slug === params?.slug);

  if (!match || !service) return null;

  const relatedBlogPosts = blogPosts.filter(p => service.relatedBlogPosts?.includes(p.slug));
  const otherServices = services.filter(s => s.slug !== service.slug).slice(0, 3);
  const images = serviceImages[service.slug];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {images && (
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img 
            src={images.hero} 
            alt={`${service.name} service in Mount Pleasant, SC`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white text-center drop-shadow-lg px-4">
              {service.name.toUpperCase()} IN MOUNT PLEASANT, SC
            </h1>
          </div>
        </div>
      )}
      
      <Breadcrumb items={[
        { label: "Services", href: "/services" },
        { label: service.name, href: `/services/${service.slug}` }
      ]} />

      <main className="flex-grow container mx-auto px-4 py-12">
        {!images && (
          <h1 
            data-testid="text-service-title"
            className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
          >
            {service.name.toUpperCase()} IN MOUNT PLEASANT, SC
          </h1>
        )}
        <p className="text-lg text-gray-600 mb-8">{service.description}</p>

        <div className="prose prose-lg max-w-4xl mb-12">
          {service.fullDescription.split('\n\n').map((paragraph, idx) => (
            <LinkedParagraph 
              key={idx} 
              text={paragraph}
              excludeHrefs={[`/services/${service.slug}`]}
              maxLinks={idx < 3 ? 2 : 1}
            />
          ))}

          <h2 className="text-2xl font-heading font-bold text-primary mt-12 mb-4">
            BENEFITS OF OUR {service.name.toUpperCase()} SERVICE
          </h2>
          <ul className="space-y-3 mb-8">
            {service.benefits.map((benefit, idx) => (
              <li key={idx} className="text-base text-gray-700 flex gap-3">
                <span className="text-accent font-bold text-lg">✓</span>
                {benefit}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-heading font-bold text-primary mt-12 mb-4">
            SERVING ALL MOUNT PLEASANT NEIGHBORHOODS
          </h2>
          <p className="text-base text-gray-700 mb-4">
            We proudly offer {service.name.toLowerCase()} services in all Mount Pleasant neighborhoods:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
            {neighborhoods.map((neighborhood) => (
              <Link key={neighborhood.slug} href={`/sc/${neighborhood.slug}-pressure-washing`} className="text-accent hover:text-accent/80 font-medium text-sm hover:underline">
                {neighborhood.name}
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-heading font-bold text-primary mt-12 mb-4">
            WHY CHOOSE CANMANCAM?
          </h2>
          <p className="text-base text-gray-700 mb-4">
            When you choose CanManCam for your {service.name.toLowerCase()} needs, you get:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="text-base text-gray-700 flex gap-3">
              <span className="text-accent font-bold text-lg">✓</span>
              Expert technicians with years of experience
            </li>
            <li className="text-base text-gray-700 flex gap-3">
              <span className="text-accent font-bold text-lg">✓</span>
              Professional-grade equipment and techniques
            </li>
            <li className="text-base text-gray-700 flex gap-3">
              <span className="text-accent font-bold text-lg">✓</span>
              Eco-friendly cleaning solutions
            </li>
            <li className="text-base text-gray-700 flex gap-3">
              <span className="text-accent font-bold text-lg">✓</span>
              Fully insured and licensed
            </li>
            <li className="text-base text-gray-700 flex gap-3">
              <span className="text-accent font-bold text-lg">✓</span>
              Our Price Beat Guarantee
            </li>
          </ul>

          {images && images.gallery.length > 0 && (
            <>
              <h2 className="text-2xl font-heading font-bold text-primary mt-12 mb-4">
                OUR {service.name.toUpperCase()} WORK
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {images.gallery.map((img, idx) => (
                  <div key={idx} className="overflow-hidden">
                    <img 
                      src={img} 
                      alt={`${service.name} example ${idx + 1} in Mount Pleasant`}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          {service.faq && service.faq.length > 0 && (
            <>
              <h2 className="text-2xl font-heading font-bold text-primary mt-12 mb-4">
                FREQUENTLY ASKED QUESTIONS
              </h2>
              <div className="space-y-6 mb-8">
                {service.faq.map((item, idx) => (
                  <div key={idx} className="border-l-4 border-accent pl-4">
                    <h3 className="font-bold text-primary mb-2">{item.question}</h3>
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {relatedBlogPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">RELATED ARTICLES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedBlogPosts.slice(0, 4).map((post) => (
                <Link key={post.slug} href={`/pressure-washing-tips/${post.slug}`} className="block p-4 border-2 border-gray-200 hover:border-primary transition-colors">
                  <h3 className="font-heading font-bold text-primary mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{post.answer}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mb-12">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">OTHER SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherServices.map((relatedService) => (
              <Link 
                key={relatedService.slug} 
                href={`/services/${relatedService.slug}`}
                data-testid={`link-related-service-${relatedService.slug}`}
                className="block p-4 border-2 border-primary hover:bg-primary/5 transition-colors"
              >
                <h3 className="text-lg font-heading font-bold text-primary">{relatedService.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{relatedService.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <PriceBeatGuarantee />

      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">
            READY TO TRANSFORM YOUR PROPERTY?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation estimate for {service.name.toLowerCase()} in Mount Pleasant, SC. Our price beat guarantee ensures you get the best value.
          </p>
          <Button 
            asChild 
            data-testid="button-service-cta"
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
