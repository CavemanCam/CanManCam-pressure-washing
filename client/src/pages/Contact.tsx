import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col font-body">
      <Header />
      <div className="bg-primary py-20 text-center text-white">
        <h1 className="text-5xl font-heading font-bold">Contact Us</h1>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Ready to schedule your service or have a question? Contact us today! We offer free estimates and are happy to discuss your specific needs.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-secondary p-3 rounded-full text-white">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Phone</h4>
                  <a href="tel:607-427-1175" className="text-lg text-gray-700 hover:text-accent">607-427-1175</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-secondary p-3 rounded-full text-white">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Email</h4>
                  <a href="mailto:canmancam@yahoo.com" className="text-lg text-gray-700 hover:text-accent">canmancam@yahoo.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-secondary p-3 rounded-full text-white">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Hours</h4>
                  <p className="text-gray-700">Mon - Fri: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-heading font-bold text-primary mb-6">Request a Quote</h3>
            <p className="mb-6 text-gray-600">The fastest way to get a quote is to use our online request form.</p>
            <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-6 text-lg">
              <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
                Go to Request Form
              </a>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
