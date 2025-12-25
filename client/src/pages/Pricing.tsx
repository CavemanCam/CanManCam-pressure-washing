import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { CheckCircle2, Info, DollarSign, Clock, ShieldCheck } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Pressure Washing Prices Mount Pleasant SC 2025 | Free Quotes"
        description="Get transparent 2025 pressure washing prices in Mount Pleasant, SC. Driveway cleaning from $150, house washing from $295. Free same-day estimates. Call now!"
        keywords="pressure washing prices mount pleasant sc, driveway cleaning service cost, house washing cost 2025, trash can cleaning price, how to deodorize trash can, gutter cleaning mount pleasant sc pricing"
      />
      <Header />
      <Breadcrumb items={[{ label: "Pricing", href: "/pricing" }]} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
              Pressure Washing Prices Mount Pleasant SC 2025
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
              Transparent, affordable, and professional exterior cleaning. Get your free, no-obligation estimate in 60 seconds.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold rounded-none px-8 py-6 text-lg">
                <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
                  GET FREE INSTANT QUOTE
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary font-bold rounded-none px-8 py-6 text-lg">
                <a href="tel:607-427-1175">CALL 607-427-1175</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Pricing Table */}
        <section className="py-16 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">How Much Does Pressure Washing Cost?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe in honest, upfront pricing. While every job is unique, here are our base rates for 2025.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* House Washing */}
            <div className="bg-white border-2 border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-accent text-white py-1 px-4 text-xs font-bold uppercase tracking-wider">Most Popular</div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-2">House Washing</h3>
              <p className="text-gray-500 mb-6 text-sm italic">Safe Soft Wash System</p>
              <div className="text-4xl font-heading font-bold text-accent mb-6">From $295</div>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Removes algae, mold & mildew</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Protects siding integrity</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Includes trim & eaves</li>
              </ul>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-none py-6">
                <Link href="/services/house-washing">Learn More</Link>
              </Button>
            </div>

            {/* Driveway Cleaning */}
            <div className="bg-white border-2 border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-heading font-bold text-primary mb-2">Driveway Cleaning Service</h3>
              <p className="text-gray-500 mb-6 text-sm italic">Concrete Deep Clean</p>
              <div className="text-4xl font-heading font-bold text-accent mb-6">From $150</div>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Removes oil & tire marks</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Pre & post-treatment included</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Kills slippery algae build-up</li>
              </ul>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-none py-6">
                <Link href="/services/driveway-cleaning">Learn More</Link>
              </Button>
            </div>

            {/* Trash Can Cleaning */}
            <div className="bg-white border-2 border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-heading font-bold text-primary mb-2">Trash Can Cleaning Price</h3>
              <p className="text-gray-500 mb-6 text-sm italic">200° Sanitization</p>
              <div className="text-4xl font-heading font-bold text-accent mb-6">From $85</div>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Kills 99.9% of bacteria</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Stops the "smelly trash can"</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Monthly plans available</li>
              </ul>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-none py-6">
                <Link href="/services/trash-can-cleaning">Learn More</Link>
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto bg-gray-50 p-4 rounded-lg">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 border border-primary-foreground/20">Additional Services</th>
                  <th className="p-4 border border-primary-foreground/20">Average Cost (2025)</th>
                  <th className="p-4 border border-primary-foreground/20">Service Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-gray-200 font-bold">Roof Cleaning</td>
                  <td className="p-4 border border-gray-200">$500 – $1,500</td>
                  <td className="p-4 border border-gray-200">Soft wash only. Removes black streaks (Gloeocapsa Magma).</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200 font-bold">Gutter Cleaning</td>
                  <td className="p-4 border border-gray-200">$1.00 – $3.00 / ft</td>
                  <td className="p-4 border border-gray-200">Includes debris removal and downspout flushing.</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200 font-bold">Window Cleaning</td>
                  <td className="p-4 border border-gray-200">$150 – $300</td>
                  <td className="p-4 border border-gray-200">Exterior cleaning with water-fed pole technology.</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200 font-bold">Patio / Walkway</td>
                  <td className="p-4 border border-gray-200">$0.15 – $0.25 / sq ft</td>
                  <td className="p-4 border border-gray-200">Surface cleaning for pavers, brick, or stone.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SEO Problem Solver Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">How to Deodorize a Trash Can & Why It Matters</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Searching for a <strong>smelly trash can</strong> solution? Many Mount Pleasant residents ask <strong>"where should garbage cans be cleaned?"</strong> 
                  DIY hose-downs don't kill the bacteria causing the odor. Our specialized service uses 200-degree water to eliminate the root cause of the smell.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="bg-accent/10 p-2 rounded-full"><Clock className="w-6 h-6 text-accent" /></div>
                    <div>
                      <h4 className="font-bold text-primary">Save Time</h4>
                      <p className="text-gray-600">Don't waste hours scrubbing. We do it in minutes with professional results.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="bg-accent/10 p-2 rounded-full"><ShieldCheck className="w-6 h-6 text-accent" /></div>
                    <div>
                      <h4 className="font-bold text-primary">Eco-Friendly Wastewater Recovery</h4>
                      <p className="text-gray-600">We contain all wastewater to protect our local Mount Pleasant waterways.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 border-2 border-primary/5 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-6">2025 Value Bundles</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <div>
                      <h4 className="font-bold">The "Fresh Home" Bundle</h4>
                      <p className="text-sm text-gray-500">House Wash + Driveway Cleaning</p>
                    </div>
                    <div className="text-accent font-bold">SAVE 10%</div>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <div>
                      <h4 className="font-bold">The "Clean Views" Bundle</h4>
                      <p className="text-sm text-gray-500">House Wash + Window Cleaning</p>
                    </div>
                    <div className="text-accent font-bold">SAVE 5%</div>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <div>
                      <h4 className="font-bold">Trash Can Subscription</h4>
                      <p className="text-sm text-gray-500">Monthly Sanitization</p>
                    </div>
                    <div className="text-accent font-bold">FROM $35/MO</div>
                  </div>
                </div>
                <Button asChild className="w-full mt-8 bg-accent hover:bg-accent/90 text-white font-bold rounded-none py-6">
                  <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new">CLAIM BUNDLE SAVINGS</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section with Schema Hooks */}
        <section className="py-16 container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-primary mb-12 text-center underline decoration-accent decoration-4 underline-offset-8">
            Pricing FAQ & Common Questions
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-xl mb-3 flex gap-2 items-center"><Info className="w-5 h-5 text-accent" /> How much does pressure washing cost in Mount Pleasant?</h3>
              <p className="text-gray-700">
                In 2025, residential pressure washing typically costs between <strong>$200 and $500</strong> for a full house wash. Driveway cleaning ranges from <strong>$150 to $300</strong>. Final pricing depends on square footage, level of organic growth, and surface accessibility.
              </p>
            </div>
            <div className="bg-white p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-xl mb-3 flex gap-2 items-center"><Info className="w-5 h-5 text-accent" /> Why do prices vary between vinyl and Hardie-board?</h3>
              <p className="text-gray-700">
                While both require our specialized <strong>soft washing</strong> technique, Hardie-board and stucco sometimes require different chemical concentrations to safely remove mold without damaging the finish, which can slightly impact the service fee.
              </p>
            </div>
            <div className="bg-white p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-xl mb-3 flex gap-2 items-center"><Info className="w-5 h-5 text-accent" /> Do you offer free estimates?</h3>
              <p className="text-gray-700">
                Yes! We provide 100% free, no-obligation estimates. In many cases, we can provide a quote via satellite imagery on the same day you request it.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-secondary text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Ready for a Cleaner Home?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join 500+ Mount Pleasant homeowners who trust CanManCam for transparent pricing and elite results.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold rounded-none px-12 py-8 text-xl">
              <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new">GET MY FREE ESTIMATE</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
