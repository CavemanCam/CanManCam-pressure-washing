import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PriceBeatGuarantee() {
  return (
    <section className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">OUR PRICE BEAT GUARANTEE</h2>
          <p className="text-lg mb-6">
            We guarantee our prices are the most competitive in Mount Pleasant. If you find a lower quote for the same service, we'll beat it by 5%.
          </p>
          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
              <span>Honest pricing with no hidden fees</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
              <span>Free estimates with zero obligation</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
              <span>We'll beat any competitor's price by 5%</span>
            </div>
          </div>
          <Button asChild className="bg-accent hover:bg-accent/90 text-white font-bold uppercase py-6 px-8">
            <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
              Get Your Free Estimate
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
