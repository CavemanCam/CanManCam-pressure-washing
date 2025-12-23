import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Feedback() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumb items={[{ label: "Feedback", href: "/feedback" }]} />

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 
              data-testid="text-feedback-title"
              className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
            >
              I'D LOVE YOUR FEEDBACK
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your feedback helps me improve my services and better serve the Mount Pleasant community. Whether you have a suggestion, compliment, or concern, I want to hear from you.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-8 text-center">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">SHARE YOUR EXPERIENCE</h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Had a great experience with CanManCam? I'd love to hear about it! Your feedback helps me continue providing excellent pressure washing service to Mount Pleasant homeowners. Positive reviews also help other homeowners find quality service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  data-testid="button-google-review"
                  className="bg-accent hover:bg-accent/90 text-white font-bold uppercase rounded-none"
                >
                  <a href="https://g.page/r/CYM5xsjZAqS2EBM/review" target="_blank" rel="noopener noreferrer">
                    Leave a Google Review
                  </a>
                </Button>
                <Button 
                  asChild 
                  variant="outline"
                  data-testid="button-contact-feedback"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold uppercase rounded-none"
                >
                  <a href="mailto:canmancam@yahoo.com?subject=Feedback%20for%20CanManCam">
                    Send Direct Feedback
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-primary text-white p-8">
              <h2 className="text-2xl font-heading font-bold mb-6 text-center">HOW TO REACH ME</h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <h3 className="font-bold mb-2 text-accent">CALL ME</h3>
                  <p className="mb-4">
                    <a href="tel:607-427-1175" className="text-xl hover:text-accent transition-colors">607-427-1175</a>
                  </p>
                  <p className="text-sm text-gray-300">Available 24/7</p>
                </div>
                <div className="text-center">
                  <h3 className="font-bold mb-2 text-accent">EMAIL ME</h3>
                  <p className="mb-4">
                    <a href="mailto:canmancam@yahoo.com" className="hover:text-accent transition-colors">canmancam@yahoo.com</a>
                  </p>
                  <p className="text-sm text-gray-300">I typically respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-6 text-center">WHAT I DO WITH YOUR FEEDBACK</h2>
              <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                <div className="flex gap-3 items-start bg-white p-4">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <span className="text-gray-700">Every piece of feedback is read and considered</span>
                </div>
                <div className="flex gap-3 items-start bg-white p-4">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <span className="text-gray-700">Suggestions are reviewed for service improvements</span>
                </div>
                <div className="flex gap-3 items-start bg-white p-4">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <span className="text-gray-700">Concerns are addressed promptly and professionally</span>
                </div>
                <div className="flex gap-3 items-start bg-white p-4">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <span className="text-gray-700">Positive feedback motivates me to keep delivering great results</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">NEED SERVICE?</h2>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Looking to schedule pressure washing service? Get a free estimate today.
              </p>
              <Button 
                asChild 
                data-testid="button-feedback-estimate"
                className="bg-accent hover:bg-accent/90 text-white font-bold uppercase px-8 py-6 h-auto rounded-none"
              >
                <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
                  Get Free Estimate
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <h3 className="font-bold text-primary mb-4">EXPLORE MORE</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/reviews" className="text-accent hover:underline">Read Customer Reviews</Link>
              <Link href="/services" className="text-accent hover:underline">Services</Link>
              <Link href="/about" className="text-accent hover:underline">About CanManCam</Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
