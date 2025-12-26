import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { neighborhoods } from "@/lib/data";
import { Link } from "wouter";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Contact For Pressure Washing Estimates | Mount Pleasant, SC | CanManCam"
        description="Contact CanManCam for free pressure washing estimates in Mount Pleasant, SC. Call 607-427-1175 or email canmancam@yahoo.com. Available 24/7."
        canonicalUrl="https://canmancam.com/contact"
        keywords="contact pressure washing, Mount Pleasant pressure washing quote, free estimate, Charleston power washing contact"
        breadcrumbs={[
          { name: "Home", url: "https://canmancam.com/" },
          { name: "Contact", url: "https://canmancam.com/contact" }
        ]}
      />
      <Header />
      <Breadcrumb items={[{ label: "Contact", href: "/contact" }]} />

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 
              data-testid="text-contact-title"
              className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
            >
              CONTACT CANMANCAM PRESSURE WASHING
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to schedule your service or have a question? I'm here to help!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6 text-center md:text-left">GET IN TOUCH</h2>
              <p className="text-gray-700 mb-8 text-center md:text-left">
                Contact me today for a free estimate. I'm happy to discuss your specific needs and answer any questions about my pressure washing services in Mount Pleasant.
              </p>
              
              <div className="space-y-6">
                <div className="p-4 bg-gray-50">
                  <h3 className="font-bold text-primary">Phone</h3>
                  <a 
                    href="tel:607-427-1175" 
                    data-testid="link-phone"
                    className="text-xl text-gray-700 hover:text-accent font-bold"
                  >
                    607-427-1175
                  </a>
                </div>
                
                <div className="p-4 bg-gray-50">
                  <h3 className="font-bold text-primary">Email</h3>
                  <a 
                    href="mailto:canmancam@yahoo.com" 
                    data-testid="link-email"
                    className="text-lg text-gray-700 hover:text-accent"
                  >
                    canmancam@yahoo.com
                  </a>
                </div>

                <div className="p-4 bg-gray-50">
                  <h3 className="font-bold text-primary">Hours</h3>
                  <p className="text-gray-700 font-bold text-lg">Open 24/7</p>
                  <p className="text-sm text-gray-500">I'm available around the clock for your convenience</p>
                </div>

                <div className="p-4 bg-gray-50">
                  <h3 className="font-bold text-primary">Service Area</h3>
                  <p className="text-gray-700">Mount Pleasant, SC & All Surrounding Neighborhoods</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-primary text-white p-8 mb-6">
                <h2 className="text-2xl font-heading font-bold mb-4">REQUEST A FREE QUOTE</h2>
                <p className="mb-6 text-gray-200">
                  The fastest way to get a quote is to use the online request form. Fill out your information and I'll get back to you promptly with a free estimate.
                </p>
                <Button 
                  asChild 
                  size="lg" 
                  data-testid="button-contact-quote"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-6 text-lg rounded-none"
                >
                  <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
                    Go to Request Form
                  </a>
                </Button>
              </div>

              <div className="bg-gray-50 p-8">
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  LEAVE A REVIEW
                </h3>
                <p className="text-gray-700 mb-4">
                  Had a great experience? I'd love to hear from you! Leave a review on Google.
                </p>
                <Button 
                  asChild 
                  variant="outline"
                  data-testid="button-google-review"
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-none"
                >
                  <a href="https://g.page/r/CYM5xsjZAqS2EBM/review" target="_blank" rel="noopener noreferrer">
                    Leave a Google Review
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-8 mb-12 max-w-5xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-primary mb-6 text-center">
            SERVICE AREA MAP
          </h2>
          <div className="w-full mb-6">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107260.12761002278!2d-79.81088229999999!3d32.8484556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486774fb38b3d117%3A0xb6a402d9c8c63983!2sCanman%20Cam!5e0!3m2!1sen!2sus!4v1766426214312!5m2!1sen!2sus" 
              width="100%" 
              height="350" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="CanManCam Service Area Map"
            ></iframe>
          </div>
          <h3 className="font-bold text-primary mb-4 text-center">NEIGHBORHOODS I SERVE</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {neighborhoods.map((neighborhood) => (
              <Link 
                key={neighborhood.slug} 
                href={`/sc/${neighborhood.slug}-pressure-washing`}
                className="px-3 py-1 bg-white border border-gray-300 text-sm text-primary hover:border-primary transition-colors"
              >
                {neighborhood.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">
            MULTIPLE WAYS TO REACH ME
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              data-testid="button-contact-call"
              className="bg-accent hover:bg-accent/90 text-white font-bold uppercase px-8 py-6 h-auto rounded-none"
            >
              <a href="tel:607-427-1175">Call 607-427-1175</a>
            </Button>
            <Button 
              asChild 
              variant="outline"
              data-testid="button-contact-email"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold uppercase px-8 py-6 h-auto rounded-none"
            >
              <a href="mailto:canmancam@yahoo.com">Email Me</a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
