import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { reviews } from "@/lib/data";
import { Link } from "wouter";

export default function Reviews() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumb items={[{ label: "Reviews", href: "/reviews" }]} />

      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 
          data-testid="text-reviews-title"
          className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
        >
          WHAT MOUNT PLEASANT CUSTOMERS SAY ABOUT CANMANCAM
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Don't just take our word for it. Read what our customers have to say about their experience with CanManCam Pressure Washing.
        </p>
        <p className="text-base text-gray-500 mb-12">
          We're proud to serve the Mount Pleasant community with professional pressure washing services. Our 5-star reviews reflect our commitment to quality, customer service, and outstanding results.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mb-12">
          {reviews.map((review, idx) => (
            <div 
              key={idx}
              data-testid={`card-review-${idx}`}
              className="bg-gray-50 p-8"
            >
              <div className="flex text-accent mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <div>
                  <p className="font-bold text-primary">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}, Mount Pleasant</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary text-white p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">
                LEAVE YOUR REVIEW ON GOOGLE
              </h2>
              <p className="text-gray-200 mb-4">
                Had a great experience with CanManCam? We'd love to hear about it! Leave us a review on Google to help other Mount Pleasant homeowners find quality pressure washing services.
              </p>
              <Button 
                asChild 
                data-testid="button-google-review"
                className="bg-accent hover:bg-accent/90 text-white font-bold uppercase rounded-none"
              >
                <a href="https://g.page/r/CYM5xsjZAqS2EBM/review" target="_blank" rel="noopener noreferrer">
                  Leave a Google Review
                </a>
              </Button>
            </div>
            <div className="text-center">
              <div className="text-6xl font-heading font-bold text-accent mb-2">5.0</div>
              <div className="flex justify-center text-accent mb-2">
                {[...Array(5)].map((_, i) => <span key={i} className="text-2xl">★</span>)}
              </div>
              <p className="text-gray-200">Google Rating</p>
            </div>
          </div>
        </div>


        <div className="text-center">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">
            READY TO EXPERIENCE THE CANMANCAM DIFFERENCE?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our satisfied customers throughout Mount Pleasant. Get a free estimate today and see why homeowners trust CanManCam for their pressure washing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              data-testid="button-reviews-estimate"
              className="bg-accent hover:bg-accent/90 text-white font-bold uppercase px-8 py-6 h-auto rounded-none"
            >
              <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
                Get Free Estimate
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline"
              data-testid="button-reviews-services"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold uppercase px-8 py-6 h-auto rounded-none"
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
