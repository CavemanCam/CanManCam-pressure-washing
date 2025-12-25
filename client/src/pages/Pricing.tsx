import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { CheckCircle2, Info, DollarSign, Clock, ShieldCheck, Star, Zap, Droplets } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Pressure Washing Prices Mount Pleasant SC | Free Quotes & Rates"
        description="Get transparent pricing for pressure washing in Mount Pleasant, SC. House washing from $295, driveways from $150, and trash can cleaning from $20. Free estimates!"
        keywords="pressure washing prices mount pleasant sc, driveway cleaning service cost, house washing cost, trash can cleaning price, how to deodorize trash can, gutter cleaning mount pleasant sc pricing"
      />
      <Header />
      <Breadcrumb items={[{ label: "Pricing", href: "/pricing" }]} />

      <main className="flex-grow">
        {/* High-CTR Hero */}
        <section className="bg-primary text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-7xl font-heading font-bold mb-6 uppercase tracking-tight">
              Mount Pleasant Pressure Washing Pricing
            </h1>
            <p className="text-xl md:text-2xl opacity-95 mb-10 max-w-4xl mx-auto leading-relaxed">
              Stop guessing what it costs. We provide <strong>transparent, upfront rates</strong> for Mount Pleasant's highest-rated exterior cleaning services. 
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold rounded-none px-10 py-8 text-xl shadow-2xl transition-transform hover:scale-105">
                <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
                  GET YOUR FREE QUOTE NOW
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary font-bold rounded-none px-10 py-8 text-xl backdrop-blur-sm">
                <a href="tel:607-427-1175">CALL 607-427-1175</a>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-accent">
              <Star className="fill-accent w-4 h-4" />
              <Star className="fill-accent w-4 h-4" />
              <Star className="fill-accent w-4 h-4" />
              <Star className="fill-accent w-4 h-4" />
              <Star className="fill-accent w-4 h-4" />
              <span>500+ Local Projects Completed</span>
            </div>
          </div>
        </section>

        {/* The Core Pricing Grid */}
        <section className="py-20 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4 uppercase">How Much Does It Cost?</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Every home in Mount Pleasant is different, but our commitment to fair pricing remains the same. Use these base rates to plan your next project.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* House Washing Card */}
            <div className="bg-white border-t-8 border-accent p-10 shadow-xl hover:shadow-2xl transition-all">
              <h3 className="text-3xl font-heading font-bold text-primary mb-2 uppercase">House Washing</h3>
              <p className="text-gray-500 mb-6 font-semibold uppercase tracking-wider text-xs">Safe Soft Wash Technology</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-heading font-bold text-primary">$295</span>
                <span className="text-gray-400 font-bold">STARTING RATE</span>
              </div>
              <div className="space-y-4 mb-10">
                <h4 className="font-bold text-primary uppercase text-sm border-b pb-2">What's Included:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-accent" /> Full exterior siding sanitization</li>
                  <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-accent" /> Algae, mold & mildew removal</li>
                  <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-accent" /> Eaves, soffits & gutters exterior</li>
                  <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-accent" /> Plant protection protocol</li>
                </ul>
              </div>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-none py-8 text-lg">
                <Link href="/services/house-washing">HOUSE WASH DETAILS</Link>
              </Button>
            </div>

            {/* Trash Can Cleaning Card */}
            <div className="bg-primary text-white p-10 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden">
              <div className="absolute -right-10 -top-10 bg-accent w-32 h-32 rotate-45 flex items-end justify-center pb-4">
                <Zap className="text-white w-8 h-8 -rotate-45" />
              </div>
              <h3 className="text-3xl font-heading font-bold mb-2 uppercase">Trash Can Cleaning</h3>
              <p className="text-white/70 mb-6 font-semibold uppercase tracking-wider text-xs">Deodorize & Sanitize</p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-white/10 p-4 border border-white/20">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold uppercase text-sm">Monthly Plan</span>
                    <span className="text-2xl font-heading font-bold text-accent">$20</span>
                  </div>
                  <p className="text-xs text-white/60 italic">Best for odor prevention (Up to 2 cans)</p>
                </div>
                <div className="bg-white/10 p-4 border border-white/20 relative">
                  <div className="absolute -top-2 -right-2 bg-accent text-[8px] font-bold px-2 py-1 rounded">POPULAR</div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold uppercase text-sm">Quarterly Plan</span>
                    <span className="text-2xl font-heading font-bold text-accent">$35</span>
                  </div>
                  <p className="text-xs text-white/60 italic">Every 3 months (Up to 2 cans)</p>
                </div>
                <div className="bg-white/10 p-4 border border-white/20">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold uppercase text-sm">One-Time Clean</span>
                    <span className="text-2xl font-heading font-bold text-accent">$50</span>
                  </div>
                  <p className="text-xs text-white/60 italic">Deep sanitization (Up to 2 cans)</p>
                </div>
              </div>

              <div className="space-y-3 mb-10 text-sm opacity-90">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Kills 99.9% of germs & viruses</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Professional grade deodorizers</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Zero wastewater runoff</li>
              </div>
              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white font-bold rounded-none py-8 text-lg">
                <Link href="/services/trash-can-cleaning">STOP THE SMELL</Link>
              </Button>
            </div>

            {/* Driveway Cleaning Card */}
            <div className="bg-white border-t-8 border-accent p-10 shadow-xl hover:shadow-2xl transition-all">
              <h3 className="text-3xl font-heading font-bold text-primary mb-2 uppercase">Driveway Cleaning</h3>
              <p className="text-gray-500 mb-6 font-semibold uppercase tracking-wider text-xs">Deep Surface Restoration</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-heading font-bold text-primary">$150</span>
                <span className="text-gray-400 font-bold">STARTING RATE</span>
              </div>
              <div className="space-y-4 mb-10">
                <h4 className="font-bold text-primary uppercase text-sm border-b pb-2">What's Included:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-accent" /> Industrial surface cleaner tech</li>
                  <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-accent" /> Pre-treatment for organic growth</li>
                  <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-accent" /> Post-treatment for lasting shine</li>
                  <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-accent" /> Sidewalk cleaning (optional)</li>
                </ul>
              </div>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-none py-8 text-lg">
                <Link href="/services/driveway-cleaning">DRIVEWAY DETAILS</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* SEO FAQ Section - Targeted for Google Snippets */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4 uppercase">Pricing FAQ</h2>
                <p className="text-gray-600 text-lg">Answers to your most common questions about pressure washing costs in Mount Pleasant.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 border shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-4">How to deodorize a trash can effectively?</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A <strong>smelly trash can</strong> is usually caused by bacteria build-up. While DIY rinsing helps, our professional service uses high-pressure water and industrial deodorizers to kill 99.9% of bacteria. This is the only way to truly stop the "smelly trash can" cycle in Mount Pleasant's heat.
                  </p>
                  <Link href="/pressure-washing-tips/how-to-deodorize-trash-can" className="text-accent font-bold uppercase text-sm hover:underline">Read the guide &rarr;</Link>
                </div>

                <div className="bg-white p-8 border shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-4">Where should garbage cans be cleaned?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Cleaning garbage cans on your driveway or lawn can lead to harmful bacteria entering storm drains. At CanManCam, we use a self-contained cleaning system that recovers wastewater, making it the most eco-friendly way to clean your bins in Mount Pleasant.
                  </p>
                </div>

                <div className="bg-white p-8 border shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-4">How much does gutter cleaning cost?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our <strong>gutter cleaning in Mount Pleasant, SC</strong> typically starts at $150. This price includes full debris removal and ensuring all downspouts are flushing correctly. Proper gutter maintenance prevents foundation damage, which can save you thousands in the long run.
                  </p>
                </div>

                <div className="bg-white p-8 border shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-4">Do you offer bundle discounts?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes! We offer a <strong>Price Beat Guarantee</strong> and bundle discounts. Combining a House Wash with Window Cleaning or Driveway Cleaning typically saves you 10% on the total service cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Factors Affecting Pricing */}
        <section className="py-20 container mx-auto px-4 border-t">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-primary mb-10 uppercase">What Factors Affect My Price?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-accent w-8 h-8" />
                </div>
                <h4 className="font-bold text-primary mb-2 uppercase">Square Footage</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Larger surfaces require more cleaning solution and time, impacting the base rate.</p>
              </div>
              <div className="p-6">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="text-accent w-8 h-8" />
                </div>
                <h4 className="font-bold text-primary mb-2 uppercase">Surface Condition</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Heavy organic growth or oil staining may require extra pre-treatment cycles.</p>
              </div>
              <div className="p-6">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="text-accent w-8 h-8" />
                </div>
                <h4 className="font-bold text-primary mb-2 uppercase">Accessibility</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Complex roof pitches or tight lot lines in neighborhoods like I'On can affect the duration of the job.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final High-CTR CTA */}
        <section className="bg-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 uppercase tracking-tighter">Get Your Clean Property Today</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-white/80">
              Join hundreds of Mount Pleasant families who get elite results without the premium price tag.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold rounded-none px-12 py-10 text-2xl shadow-2xl">
                <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new">GET FREE QUOTE</a>
              </Button>
              <div className="text-left bg-white/5 p-6 border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  <span className="font-bold text-sm">Fixed Quote &rarr; No Upcharges</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  <span className="font-bold text-sm">Same-Day Satellite Estimates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  <span className="font-bold text-sm">Insured & Background Checked</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
