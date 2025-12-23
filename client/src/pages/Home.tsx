import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { services, reviews } from "@/lib/data";
import heroImage from "@assets/uploaded_images/mount-pleasant-lowcountry-home-exterior-hero.png";
import houseWashingImage from "@assets/uploaded_images/house-washing-siding-exterior-cleaning.png";
import drivewayImage from "@assets/uploaded_images/pressure-washing-driveway-after.JPEG";
import sidewalkImage from "@assets/uploaded_images/pressure-washing-sidewalk-mount-pleasant.JPEG";
import gutterCleaningImage from "@assets/uploaded_images/gutter-cleaning-service-mount-pleasant.png";
import windowCleaningImage from "@assets/uploaded_images/window-cleaning-sunroom-porch.JPEG";
import trashCanImage from "@assets/uploaded_images/trash-can-cleaning-after.JPEG";
import { Link } from "wouter";

function ExpandableHomeReview({ review, idx }: { review: typeof reviews[0], idx: number }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 150;
  const displayText = isLong && !expanded ? review.text.slice(0, 150) + "..." : review.text;

  return (
    <div data-testid={`card-review-${idx}`} className="bg-gray-50 p-8">
      <div className="flex text-accent mb-4">
        {[...Array(review.rating)].map((_, i) => <span key={i} className="text-lg">★</span>)}
      </div>
      <p className="text-gray-700 italic mb-4 whitespace-pre-line">"{displayText}"</p>
      {isLong && (
        <button 
          onClick={() => setExpanded(!expanded)}
          className="text-accent font-bold text-sm uppercase tracking-wider mb-4 hover:underline cursor-pointer"
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      )}
      <div className="flex justify-between items-center">
        <p className="font-bold text-primary">- {review.name}</p>
        <p className="text-sm text-gray-500">{review.location}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const serviceImages: Record<string, string> = {
    "house-washing": houseWashingImage,
    "driveway-cleaning": drivewayImage,
    "sidewalk-cleaning": sidewalkImage,
    "gutter-cleaning": gutterCleaningImage,
    "window-cleaning": windowCleaningImage,
    "trash-can-cleaning": trashCanImage
  };

  return (
    <div className="min-h-screen flex flex-col font-body text-gray-800">
      <SEO
        title="CanManCam Pressure Washing | Mount Pleasant, SC | House Washing & Driveway Cleaning"
        description="Mount Pleasant's most trusted pressure washing company. Professional house washing, driveway cleaning, roof cleaning & more. Free estimates. Call 607-427-1175."
        canonicalUrl="https://canmancam.com/"
        keywords="pressure washing Mount Pleasant SC, house washing, driveway cleaning, power washing, soft washing, exterior cleaning, Charleston area"
        aggregateRating={{ ratingValue: 5.0, reviewCount: reviews.length }}
        breadcrumbs={[
          { name: "Home", url: "https://canmancam.com/" }
        ]}
      />
      <Header />

      <section 
        data-testid="hero-section"
        className="relative h-[600px] md:h-[700px] flex items-center justify-center text-center text-white"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-4 text-accent drop-shadow-md">
            Mount Pleasant's Most Trusted
          </h2>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight drop-shadow-lg">
            BEST HOUSE WASH SERVICE IN MOUNT PLEASANT
          </h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              data-testid="button-hero-estimate"
              className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-6 uppercase tracking-wider h-auto w-full md:w-auto shadow-xl hover:translate-y-[-2px] transition-transform rounded-none"
            >
              <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
                Get a Free Estimate
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              data-testid="button-hero-services"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-6 uppercase tracking-wider h-auto w-full md:w-auto backdrop-blur-sm rounded-none"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}></div>
      </section>

      <section data-testid="intro-section" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Complete Exterior Pressure Washing In The Mount Pleasant Area
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            When you need any part of your home pressure washed in or around Mount Pleasant, the all-in-one pressure washing service to call is CanManCam! We offer a complete line of pressure washing services, including all types of power washing and soft wash house cleaning. Our experienced professionals are highly trained, insured, and ready to serve you.
          </p>
          <div className="p-6 bg-gray-50 inline-block">
            <p className="font-bold text-xl text-primary mb-2">We make pressure washing simple, affordable, and thorough!</p>
            <p className="text-gray-600">Serving Isle of Palms, Old Village, Park West, Hamlin Plantation, and all Mount Pleasant neighborhoods.</p>
          </div>
        </div>
      </section>

      <section data-testid="services-section" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">OUR PREMIUM SERVICES</h2>
            <div className="h-1 w-24 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {services.map((service) => (
              <Link 
                key={service.slug} 
                href={`/services/${service.slug}`}
                data-testid={`card-service-${service.slug}`}
                className="group relative block h-64 overflow-hidden cursor-pointer"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${serviceImages[service.slug]})` }}
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/70 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white text-center">
                  <h3 className="text-xl font-heading font-bold uppercase mb-2">{service.name}</h3>
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              asChild 
              data-testid="button-view-all-services"
              className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider px-8 py-6 h-auto rounded-none"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section data-testid="price-beat-section" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">PRICE BEAT GUARANTEE</h2>
          <p className="text-lg text-gray-200 mb-8">
            We stand behind our pricing. If you find a lower quote for the same service from another reputable company, we'll beat it by 5%. Our goal is to provide the highest quality service at the best possible price.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-8 text-left max-w-2xl mx-auto">
            <div className="flex items-center gap-3">
              <span className="text-accent font-bold text-xl">✓</span>
              <span>Licensed & Fully Insured Professionals</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent font-bold text-xl">✓</span>
              <span>Safe "Soft Wash" Techniques for Siding</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent font-bold text-xl">✓</span>
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent font-bold text-xl">✓</span>
              <span>Free Estimates with No Obligation</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent font-bold text-xl">✓</span>
              <span>Open 24/7 for Your Convenience</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent font-bold text-xl">✓</span>
              <span>Local Mount Pleasant Company</span>
            </div>
          </div>
          <Button 
            asChild 
            size="lg" 
            data-testid="button-price-beat-learn"
            className="bg-accent hover:bg-accent/90 text-white font-bold shadow-lg rounded-none uppercase tracking-wider"
          >
            <Link href="/price-beat-guarantee">Learn More About Our Guarantee</Link>
          </Button>
        </div>
      </section>

      <section data-testid="reviews-section" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">WHAT MOUNT PLEASANT NEIGHBORS SAY</h2>
            <div className="flex justify-center gap-1 text-accent mb-4">
              {[...Array(5)].map((_, i) => <span key={i} className="text-2xl">★</span>)}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reviews.map((review, idx) => (
              <ExpandableHomeReview key={idx} review={review} idx={idx} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              asChild 
              variant="outline" 
              data-testid="button-read-reviews"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white uppercase font-bold tracking-wide rounded-none"
            >
              <Link href="/reviews">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      <section data-testid="cta-section" className="py-20 bg-secondary text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">READY TO TRANSFORM YOUR HOME?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">Get a free, no-obligation quote today and see the difference CanManCam can make for your Mount Pleasant property.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              data-testid="button-cta-quote"
              className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-12 py-6 uppercase shadow-xl rounded-none"
            >
              <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
                Get Free Quote
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              data-testid="button-cta-call"
              className="border-2 border-white text-white hover:bg-white hover:text-secondary font-bold text-lg px-12 py-6 uppercase bg-transparent rounded-none"
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
