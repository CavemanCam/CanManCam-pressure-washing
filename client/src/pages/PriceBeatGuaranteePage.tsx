import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function PriceBeatGuaranteePage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Price Beat Guarantee", href: "/price-beat-guarantee" }]} />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
          CanManCam's Price Beat Guarantee
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We guarantee the most competitive pricing in Mount Pleasant, SC. If you find a lower quote, we'll beat it by 5%.
        </p>

        <div className="prose prose-lg max-w-4xl mb-12">
          <h2 className="text-2xl font-heading font-bold text-primary mt-0 mb-4">How It Works</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-6">
            We stand behind our competitive pricing with a simple guarantee: if you receive a lower quote for the same pressure washing service in Mount Pleasant, we'll beat it by 5%. It's that simple. We believe in fair, transparent pricing with no hidden fees.
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">Our Promise to You</h2>
          <div className="space-y-3 mb-8">
            <div className="flex gap-3">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-primary">Honest Pricing</h3>
                <p className="text-sm text-gray-600">No hidden fees, no surprises. What you see is what you pay.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-primary">Free Estimates</h3>
                <p className="text-sm text-gray-600">Get a detailed quote with no obligation to hire us.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-primary">Price Beat Guarantee</h3>
                <p className="text-sm text-gray-600">Find a lower quote? We'll beat it by 5%.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-primary">Professional Quality</h3>
                <p className="text-sm text-gray-600">Premium service at fair prices, always.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-primary">Fully Insured</h3>
                <p className="text-sm text-gray-600">Complete protection for your property and peace of mind.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">Terms & Conditions</h2>
          <ul className="space-y-2 text-sm text-gray-700 mb-8">
            <li>• The Price Beat Guarantee applies to identical services for the same project scope</li>
            <li>• Quote must be from a licensed, insured Mount Pleasant pressure washing company</li>
            <li>• The competing quote must be provided in writing</li>
            <li>• Our estimate must be based on the same project specifications</li>
            <li>• The guarantee applies to CanManCam's published rates and quoted prices</li>
            <li>• We'll provide a matching quote minus 5% on the total service cost</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">Why Our Pricing Is Competitive</h2>
          <p className="text-base text-gray-700 mb-4">
            We've built our business on fair pricing and quality service. Here's why CanManCam offers great value:
          </p>
          <ul className="space-y-2 text-base text-gray-700 mb-8">
            <li>✓ Experienced team reduces job time and costs</li>
            <li>✓ Efficient operations mean lower overhead</li>
            <li>✓ Professional-grade equipment ensures quality results</li>
            <li>✓ Volume allows us to offer competitive pricing</li>
            <li>✓ Direct communication with owners, no middlemen</li>
            <li>✓ Long-term customer relationships built on trust</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">Customer Testimonials</h2>
          <p className="text-base text-gray-700 mb-4">
            Our Mount Pleasant customers appreciate our commitment to fair pricing and quality work. When you choose CanManCam, you're choosing a company that values honesty and customer satisfaction above all else.
          </p>
        </div>
      </main>

      <section className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Get Your Competitive Estimate Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Experience the CanManCam difference. Get a free estimate and discover why so many Mount Pleasant homeowners trust us with their pressure washing needs.
          </p>
          <Button asChild className="bg-accent hover:bg-accent/90 text-primary font-bold uppercase py-6 px-10">
            <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
              Get Free Estimate
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
