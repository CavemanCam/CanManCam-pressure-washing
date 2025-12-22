import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";
import { Link } from "wouter";

export default function PriceBeatGuaranteePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumb items={[{ label: "Price Beat Guarantee", href: "/price-beat-guarantee" }]} />

      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 
          data-testid="text-price-beat-title"
          className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
        >
          CANMANCAM PRICE BEAT GUARANTEE
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          We guarantee the most competitive pricing in Mount Pleasant, SC. If you find a lower quote, we'll beat it by 5%.
        </p>

        <div className="max-w-4xl mb-12">
          <div className="bg-accent text-white p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-4">WE'LL BEAT ANY COMPETITOR'S PRICE BY 5%</h2>
                <p className="text-lg">
                  If you receive a lower quote from another reputable pressure washing company for the same service, we'll beat their price by 5%. That's our promise to you.
                </p>
              </div>
              <div className="text-center">
                <div className="text-7xl font-heading font-bold mb-2">5%</div>
                <p className="text-xl uppercase tracking-wider">Price Beat Guarantee</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-heading font-bold text-primary mb-4">HOW IT WORKS</h2>
          <div className="space-y-4 mb-8">
            <div className="flex gap-4 items-start p-4 bg-gray-50">
              <div className="bg-primary text-white font-bold text-xl h-10 w-10 flex items-center justify-center shrink-0">1</div>
              <div>
                <h3 className="font-bold text-primary">Get Your Quote</h3>
                <p className="text-gray-700">Request a free estimate from CanManCam for your pressure washing project.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 bg-gray-50">
              <div className="bg-primary text-white font-bold text-xl h-10 w-10 flex items-center justify-center shrink-0">2</div>
              <div>
                <h3 className="font-bold text-primary">Compare Prices</h3>
                <p className="text-gray-700">If you receive a lower written quote from another reputable pressure washing company for the same service, share it with us.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 bg-gray-50">
              <div className="bg-primary text-white font-bold text-xl h-10 w-10 flex items-center justify-center shrink-0">3</div>
              <div>
                <h3 className="font-bold text-primary">We Beat It</h3>
                <p className="text-gray-700">We'll verify the competitor's quote and beat it by 5%. You get the best price with the best service.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-heading font-bold text-primary mb-4">OUR PROMISE TO YOU</h2>
          <div className="space-y-3 mb-8">
            <div className="flex gap-3 p-3 bg-gray-50">
              <span className="text-accent font-bold text-lg">✓</span>
              <div>
                <h3 className="font-bold text-primary">Honest Pricing</h3>
                <p className="text-sm text-gray-600">No hidden fees, no surprises. What you see is what you pay.</p>
              </div>
            </div>
            <div className="flex gap-3 p-3 bg-gray-50">
              <span className="text-accent font-bold text-lg">✓</span>
              <div>
                <h3 className="font-bold text-primary">Free Estimates</h3>
                <p className="text-sm text-gray-600">Get a detailed quote with no obligation to hire us.</p>
              </div>
            </div>
            <div className="flex gap-3 p-3 bg-gray-50">
              <span className="text-accent font-bold text-lg">✓</span>
              <div>
                <h3 className="font-bold text-primary">Professional Quality</h3>
                <p className="text-sm text-gray-600">Premium service at fair prices, always.</p>
              </div>
            </div>
            <div className="flex gap-3 p-3 bg-gray-50">
              <span className="text-accent font-bold text-lg">✓</span>
              <div>
                <h3 className="font-bold text-primary">Fully Insured</h3>
                <p className="text-sm text-gray-600">Complete protection for your property and peace of mind.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-heading font-bold text-primary mb-4">TERMS & CONDITIONS</h2>
          <ul className="space-y-2 text-sm text-gray-700 mb-8">
            <li className="flex gap-2"><span className="text-accent font-bold">•</span> The Price Beat Guarantee applies to identical services for the same project scope</li>
            <li className="flex gap-2"><span className="text-accent font-bold">•</span> Quote must be from a licensed, insured Mount Pleasant pressure washing company</li>
            <li className="flex gap-2"><span className="text-accent font-bold">•</span> The competing quote must be provided in writing</li>
            <li className="flex gap-2"><span className="text-accent font-bold">•</span> Our estimate must be based on the same project specifications</li>
            <li className="flex gap-2"><span className="text-accent font-bold">•</span> The guarantee applies to CanManCam's published rates and quoted prices</li>
            <li className="flex gap-2"><span className="text-accent font-bold">•</span> We'll provide a matching quote minus 5% on the total service cost</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-primary mb-4">WHY OUR PRICING IS COMPETITIVE</h2>
          <p className="text-gray-700 mb-4">
            We've built our business on fair pricing and quality service. Here's why CanManCam offers great value:
          </p>
          <ul className="space-y-2 text-gray-700 mb-8">
            <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Experienced team reduces job time and costs</li>
            <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Efficient operations mean lower overhead</li>
            <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Professional-grade equipment ensures quality results</li>
            <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Volume allows us to offer competitive pricing</li>
            <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Direct communication with owners, no middlemen</li>
            <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Long-term customer relationships built on trust</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-8 mb-12">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">SERVICES COVERED BY OUR GUARANTEE</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="block p-4 bg-white border-2 border-gray-200 hover:border-primary text-center transition-colors">
                <span className="font-bold text-primary">{service.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <section className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">GET YOUR COMPETITIVE ESTIMATE TODAY</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Experience the CanManCam difference. Get a free estimate and discover why so many Mount Pleasant homeowners trust us.
          </p>
          <Button 
            asChild 
            data-testid="button-price-beat-cta"
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
