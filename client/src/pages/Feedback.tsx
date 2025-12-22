import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";

export default function Feedback() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Feedback", href: "/feedback" }]} />
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
          We'd Love Your Feedback
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your feedback helps us improve our services and better serve the Mount Pleasant community.
        </p>

        <div className="space-y-8">
          <div className="bg-gray-50 p-8 rounded-none">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">Share Your Experience</h2>
            <p className="text-gray-700 mb-6">
              Had a great experience with CanManCam? We'd love to hear about it! Your feedback helps us continue providing excellent service to Mount Pleasant.
            </p>
            <Button asChild className="bg-accent hover:bg-accent/90 text-white font-bold uppercase">
              <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
                Leave Feedback
              </a>
            </Button>
          </div>

          <div className="bg-secondary text-white p-8 rounded-none">
            <h2 className="text-2xl font-heading font-bold mb-4">Other Ways to Connect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-2">Call Us</h3>
                <p><a href="tel:607-427-1175" className="hover:text-accent">607-427-1175</a></p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Email Us</h3>
                <p><a href="mailto:canmancam@yahoo.com" className="hover:text-accent">canmancam@yahoo.com</a></p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Leave a Google Review</h3>
                <p className="text-sm">Visit our Google Business Profile to share your experience with others in Mount Pleasant.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
