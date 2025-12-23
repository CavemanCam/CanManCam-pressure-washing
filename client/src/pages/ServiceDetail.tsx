import { useRoute } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PriceBeatGuarantee } from "@/components/PriceBeatGuarantee";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { services, neighborhoods, blogPosts } from "@/lib/data";
import { Link } from "wouter";
import { LinkedParagraph } from "@/lib/contentLinks";

import houseWashing1 from "@assets/uploaded_images/house-washing-siding-exterior-cleaning.png";
import houseWashing2 from "@assets/uploaded_images/soft-washing-house-siding-after.JPEG";
import houseWashing3 from "@assets/uploaded_images/lowcountry-home-soft-washing-front.JPEG";
import houseWashing4 from "@assets/uploaded_images/house-washing-mount-pleasant-01.JPEG";
import houseWashing5 from "@assets/uploaded_images/house-washing-mount-pleasant-02.JPEG";
import houseWashingBefore from "@assets/uploaded_images/soft-washing-house-siding-before.JPEG";
import houseWashingAfter from "@assets/uploaded_images/vinyl-siding-soft-wash-after.JPEG";

import driveway1 from "@assets/uploaded_images/pressure-washing-driveway-after.JPEG";
import driveway2 from "@assets/uploaded_images/concrete-driveway-cleaning-after.JPEG";
import drivewayBefore from "@assets/uploaded_images/pressure-washing-driveway-before.JPEG";
import drivewayAfter from "@assets/uploaded_images/pressure-washing-driveway-after.JPEG";

import sidewalk1 from "@assets/uploaded_images/pressure-washing-sidewalk-mount-pleasant.JPEG";
import sidewalk2 from "@assets/uploaded_images/residential-sidewalk-cleaning-01.JPEG";
import sidewalk3 from "@assets/uploaded_images/front-walkway-pressure-washing-01.JPEG";
import sidewalk4 from "@assets/uploaded_images/front-walkway-pressure-washing-02.JPEG";
import sidewalk5 from "@assets/uploaded_images/paver-walkway-cleaning-after-01.JPEG";
import sidewalk6 from "@assets/uploaded_images/concrete-patio-cleaning-mount-pleasant-01.JPEG";

import gutter1 from "@assets/uploaded_images/gutter-cleaning-service-mount-pleasant.png";
import gutterStock1 from "@assets/stock_images/gutter_cleaning_pres_e74fc539.jpg";
import gutterStock2 from "@assets/stock_images/house_gutters_roof_e_56085430.jpg";

import window1 from "@assets/uploaded_images/window-cleaning-sunroom-porch.JPEG";
import window2 from "@assets/uploaded_images/bay-window-exterior-cleaning.JPEG";
import window3 from "@assets/uploaded_images/lowcountry-sunroom-cleaning.JPEG";
import window4 from "@assets/uploaded_images/screened-porch-cleaning-mount-pleasant.JPEG";

import trashcan1 from "@assets/uploaded_images/trash-can-cleaning-after.JPEG";
import trashcan2 from "@assets/uploaded_images/recycling-bin-clean-after.JPEG";
import trashcanBefore from "@assets/uploaded_images/trash-can-cleaning-before.JPEG";
import trashcanAfter from "@assets/uploaded_images/trash-can-cleaning-after.JPEG";
import recyclingBefore from "@assets/uploaded_images/recycling-bin-cleaning-blue-before.JPEG";
import recyclingAfter from "@assets/uploaded_images/recycling-bin-cleaning-blue-after.JPEG";

interface ServiceImageSet {
  hero: string;
  sectionImage: string;
  gallery: string[];
  beforeAfter?: { before: string; after: string }[];
}

const serviceImages: Record<string, ServiceImageSet> = {
  "house-washing": {
    hero: houseWashing1,
    sectionImage: houseWashing4,
    gallery: [houseWashing2, houseWashing3, houseWashing5],
    beforeAfter: [
      { before: houseWashingBefore, after: houseWashingAfter }
    ]
  },
  "driveway-cleaning": {
    hero: driveway1,
    sectionImage: driveway2,
    gallery: [driveway2],
    beforeAfter: [
      { before: drivewayBefore, after: drivewayAfter }
    ]
  },
  "sidewalk-cleaning": {
    hero: sidewalk1,
    sectionImage: sidewalk5,
    gallery: [sidewalk2, sidewalk3, sidewalk4, sidewalk6]
  },
  "gutter-cleaning": {
    hero: gutter1,
    sectionImage: gutterStock1,
    gallery: [gutterStock2]
  },
  "window-cleaning": {
    hero: window1,
    sectionImage: window3,
    gallery: [window2, window4]
  },
  "trash-can-cleaning": {
    hero: trashcan1,
    sectionImage: trashcan2,
    gallery: [],
    beforeAfter: [
      { before: trashcanBefore, after: trashcanAfter },
      { before: recyclingBefore, after: recyclingAfter }
    ]
  }
};

export default function ServiceDetail() {
  const [match, params] = useRoute("/services/:slug");
  const service = services.find(s => s.slug === params?.slug);

  if (!match || !service) return null;

  const relatedBlogPosts = blogPosts.filter(p => service.relatedBlogPosts?.includes(p.slug));
  const otherServices = services.filter(s => s.slug !== service.slug).slice(0, 3);
  const images = serviceImages[service.slug];

  const faqItems = service.faq?.map(f => ({ question: f.question, answer: f.answer })) || [];

  const paragraphs = service.fullDescription.split('\n\n');
  const firstHalf = paragraphs.slice(0, Math.ceil(paragraphs.length / 2));
  const secondHalf = paragraphs.slice(Math.ceil(paragraphs.length / 2));

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={`${service.name} Mount Pleasant, SC | CanManCam Pressure Washing`}
        description={service.shortDescription || service.description}
        canonicalUrl={`https://canmancam.com/services/${service.slug}`}
        keywords={`${service.name.toLowerCase()}, ${service.name.toLowerCase()} Mount Pleasant SC, ${service.name.toLowerCase()} Charleston, pressure washing services`}
        service={{
          name: service.name,
          description: service.description,
          provider: "CanManCam Pressure Washing",
          areaServed: "Mount Pleasant, SC",
          serviceType: service.name
        }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://canmancam.com/" },
          { name: "Services", url: "https://canmancam.com/services" },
          { name: service.name, url: `https://canmancam.com/services/${service.slug}` }
        ]}
      />
      <Header />
      
      {images && (
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img 
            src={images.hero} 
            alt={`${service.name} service in Mount Pleasant, SC`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white text-center drop-shadow-lg px-4">
              {service.name.toUpperCase()} IN MOUNT PLEASANT, SC
            </h1>
          </div>
        </div>
      )}
      
      <Breadcrumb items={[
        { label: "Services", href: "/services" },
        { label: service.name, href: `/services/${service.slug}` }
      ]} />

      <main className="flex-grow">
        {!images && (
          <div className="container mx-auto px-4 py-12">
            <h1 
              data-testid="text-service-title"
              className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
            >
              {service.name.toUpperCase()} IN MOUNT PLEASANT, SC
            </h1>
          </div>
        )}

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                  PROFESSIONAL {service.name.toUpperCase()}
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-4">
                  {firstHalf.slice(0, 2).map((paragraph, idx) => (
                    <LinkedParagraph 
                      key={idx} 
                      text={paragraph}
                      excludeHrefs={[`/services/${service.slug}`]}
                      maxLinks={1}
                      className="text-gray-700 leading-relaxed"
                    />
                  ))}
                </div>
                <Button 
                  asChild 
                  className="mt-8 bg-accent hover:bg-accent/90 text-white font-bold uppercase px-8 py-6 h-auto rounded-none"
                >
                  <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
                    Get Free Estimate
                  </a>
                </Button>
              </div>
              {images && (
                <div className="relative">
                  <img 
                    src={images.sectionImage} 
                    alt={`${service.name} example`}
                    className="w-full h-96 object-cover shadow-xl"
                  />
                  <div className="absolute -bottom-4 -left-4 bg-accent text-white p-4 font-heading font-bold text-xl">
                    MOUNT PLEASANT, SC
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {images?.beforeAfter && images.beforeAfter.length > 0 && (
          <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">
                BEFORE & AFTER RESULTS
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {images.beforeAfter.map((pair, idx) => (
                  <div key={idx} className="bg-white shadow-lg overflow-hidden">
                    <div className="grid grid-cols-2">
                      <div className="relative">
                        <img 
                          src={pair.before} 
                          alt={`${service.name} before cleaning`}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white text-center py-2 font-bold uppercase text-sm">
                          Before
                        </div>
                      </div>
                      <div className="relative">
                        <img 
                          src={pair.after} 
                          alt={`${service.name} after cleaning`}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-green-600 text-white text-center py-2 font-bold uppercase text-sm">
                          After
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                {images?.gallery.slice(0, 4).map((img, idx) => (
                  <img 
                    key={idx}
                    src={img} 
                    alt={`${service.name} work example ${idx + 1}`}
                    className="w-full h-48 object-cover"
                  />
                )) || (
                  <div className="col-span-2 h-48 bg-white/10 flex items-center justify-center">
                    <span className="text-white/50">More photos coming soon</span>
                  </div>
                )}
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-heading font-bold mb-6">
                  BENEFITS OF MY {service.name.toUpperCase()} SERVICE
                </h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <span className="text-accent font-bold text-2xl flex-shrink-0">✓</span>
                      <span className="text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                  THE DETAILS
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  {secondHalf.map((paragraph, idx) => (
                    <LinkedParagraph 
                      key={idx} 
                      text={paragraph}
                      excludeHrefs={[`/services/${service.slug}`]}
                      maxLinks={1}
                    />
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-gray-50 p-8 sticky top-4">
                  <h3 className="text-xl font-heading font-bold text-primary mb-4">
                    WHY CHOOSE CANMANCAM?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-gray-700">Camrin brings years of hands-on experience</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-gray-700">Professional-grade equipment</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-gray-700">Eco-friendly cleaning solutions</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-gray-700">Fully insured and licensed</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-gray-700">My Price Beat Guarantee</span>
                    </li>
                  </ul>
                  <Button 
                    asChild 
                    className="w-full mt-6 bg-accent hover:bg-accent/90 text-white font-bold uppercase py-4 rounded-none"
                  >
                    <a href="tel:607-427-1175">Call 607-427-1175</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-primary text-center mb-8">
              SERVING ALL MOUNT PLEASANT NEIGHBORHOODS
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              I proudly offer {service.name.toLowerCase()} services throughout Mount Pleasant, SC:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
              {neighborhoods.map((neighborhood) => (
                <Link 
                  key={neighborhood.slug} 
                  href={`/sc/${neighborhood.slug}-pressure-washing`} 
                  className="text-center p-3 bg-white border-2 border-gray-200 hover:border-accent hover:bg-accent/5 transition-colors"
                >
                  <span className="text-sm font-medium text-primary">{neighborhood.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {service.faq && service.faq.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">
                FREQUENTLY ASKED QUESTIONS
              </h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {service.faq.map((item, idx) => (
                  <div key={idx} className="bg-gray-50 p-6">
                    <h3 className="font-bold text-primary mb-3 text-lg">{item.question}</h3>
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {relatedBlogPosts.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-heading font-bold text-primary text-center mb-8">RELATED ARTICLES</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {relatedBlogPosts.slice(0, 4).map((post) => (
                  <Link key={post.slug} href={`/pressure-washing-tips/${post.slug}`} className="block bg-white p-6 border-2 border-gray-200 hover:border-primary transition-colors">
                    <h3 className="font-heading font-bold text-primary mb-2">{post.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-3">{post.answer}</p>
                    <span className="text-accent font-bold text-sm mt-4 block">Read More →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-heading font-bold text-primary text-center mb-8">OTHER SERVICES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {otherServices.map((relatedService) => (
                <Link 
                  key={relatedService.slug} 
                  href={`/services/${relatedService.slug}`}
                  data-testid={`link-related-service-${relatedService.slug}`}
                  className="block p-6 border-2 border-primary hover:bg-primary/5 transition-colors text-center"
                >
                  <h3 className="text-xl font-heading font-bold text-primary">{relatedService.name}</h3>
                  <p className="text-sm text-gray-600 mt-2">{relatedService.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <PriceBeatGuarantee />

      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-4">
            READY TO TRANSFORM YOUR PROPERTY?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation estimate for {service.name.toLowerCase()} in Mount Pleasant, SC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              data-testid="button-service-cta"
              className="bg-accent hover:bg-accent/90 text-white font-bold uppercase py-6 px-10 rounded-none text-lg"
            >
              <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
                Get Free Estimate
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-secondary font-bold uppercase py-6 px-10 rounded-none text-lg"
            >
              <a href="tel:607-427-1175">Call 607-427-1175</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
