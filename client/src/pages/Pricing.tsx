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
            <h1 className="text-4xl md:text-7xl font-heading font-bold mb-6 uppercase tracking-normal leading-[1.1]">
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
              <span>Dozens of Local Projects Completed</span>
            </div>
          </div>
        </section>

        {/* Detailed Pricing Table */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4 uppercase">Detailed Pricing Guide</h2>
                <p className="text-gray-600 text-lg">Below we break down typical costs by surface type and material so you know what to expect.</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-6 uppercase border-b-2 border-accent inline-block">Surface Pricing</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-start border-b pb-2">
                      <div>
                        <span className="block font-bold text-primary">House Siding</span>
                        <span className="text-xs text-gray-500 italic">Varies by height and build-up</span>
                      </div>
                      <span className="font-bold text-accent whitespace-nowrap">$0.15 – $0.35 / sq ft</span>
                    </div>
                    <div className="flex justify-between items-start border-b pb-2">
                      <div>
                        <span className="block font-bold text-primary">Roof (Shingle/Metal)</span>
                        <span className="text-xs text-gray-500 italic">Soft wash only</span>
                      </div>
                      <span className="font-bold text-accent whitespace-nowrap">$0.25 – $0.45 / sq ft</span>
                    </div>
                    <div className="flex justify-between items-start border-b pb-2">
                      <div>
                        <span className="block font-bold text-primary">Driveways</span>
                        <span className="text-xs text-gray-500 italic">Concrete; includes pre and post-treatment</span>
                      </div>
                      <span className="font-bold text-accent whitespace-nowrap">$0.15 – $0.30 / sq ft</span>
                    </div>
                    <div className="flex justify-between items-start border-b pb-2">
                      <div>
                        <span className="block font-bold text-primary">Decks (Wood/Composite)</span>
                        <span className="text-xs text-gray-500 italic">Priced higher due to time and care</span>
                      </div>
                      <span className="font-bold text-accent whitespace-nowrap">$0.25 – $0.50 / sq ft</span>
                    </div>
                    <div className="flex justify-between items-start border-b pb-2">
                      <div>
                        <span className="block font-bold text-primary">Patios/Walkways</span>
                        <span className="text-xs text-gray-500 italic">Easier access lowers the cost</span>
                      </div>
                      <span className="font-bold text-accent whitespace-nowrap">$0.15 – $0.25 / sq ft</span>
                    </div>
                    <div className="flex justify-between items-start border-b pb-2">
                      <div>
                        <span className="block font-bold text-primary">Fences</span>
                        <span className="text-xs text-gray-500 italic">Priced per linear foot or sq. ft.</span>
                      </div>
                      <span className="font-bold text-accent whitespace-nowrap">$0.20 – $0.40 / sq ft</span>
                    </div>
                    <div className="flex justify-between items-start border-b pb-2">
                      <div>
                        <span className="block font-bold text-primary">Gutters (Exterior only)</span>
                        <span className="text-xs text-gray-500 italic">Often bundled with other services</span>
                      </div>
                      <span className="font-bold text-accent whitespace-nowrap">$1.00 – $3.00 / lin. ft</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-12">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-primary mb-6 uppercase border-b-2 border-accent inline-block">Common Bundles</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-gray-50 border-l-4 border-accent">
                        <div>
                          <span className="block font-bold text-primary uppercase text-sm">Bundle (House + Windows)</span>
                          <span className="text-xs text-gray-500 italic">Most Popular - Lowcountry Soft Wash</span>
                        </div>
                        <span className="text-lg font-bold text-accent">5% OFF</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 border-l-4 border-accent">
                        <div>
                          <span className="block font-bold text-primary uppercase text-sm">Driveway + Sidewalk Bundle</span>
                          <span className="text-xs text-gray-500 italic">Added at a reduced price</span>
                        </div>
                        <span className="text-lg font-bold text-accent">SAVE $$$</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-heading font-bold text-primary mb-6 uppercase border-b-2 border-accent inline-block">Material Techniques</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-bold text-primary">Vinyl & Hardie Board</span>
                        <span className="text-sm text-gray-600 italic">Soft Wash Only</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-bold text-primary">Brick & Stone</span>
                        <span className="text-sm text-gray-600 italic">Soft Wash + Pressure</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-bold text-primary">Concrete</span>
                        <span className="text-sm text-gray-600 italic">High Pressure + Treatment</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Core Pricing Grid */}
        <section className="py-20 container mx-auto px-4 border-t">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-primary mb-6 uppercase text-center tracking-tight">How Much Does It Cost?</h2>
            <div className="w-32 h-1.5 bg-accent mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed">
              Every home in Mount Pleasant is different, but our commitment to fair pricing remains the same. Use these base rates to plan your next project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* House Washing Card (Unique Design) */}
            <div className="bg-primary text-white p-10 shadow-2xl hover:shadow-3xl transition-all relative border-b-8 border-accent flex flex-col">
              <div className="flex-grow">
                <h3 className="text-3xl font-heading font-bold mb-2 uppercase">House Washing</h3>
                <p className="text-white/80 mb-6 font-semibold uppercase tracking-wider text-xs">Safe Soft Wash Technology</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-heading font-bold">$295</span>
                  <span className="text-white/70 font-bold">STARTING RATE</span>
                </div>
                <div className="space-y-4 mb-10">
                  <h4 className="font-bold text-white uppercase text-sm border-b border-white/20 pb-2">What's Included:</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-accent" /> Full exterior siding sanitization</li>
                    <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-accent" /> Algae, mold & mildew removal</li>
                    <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-accent" /> Eaves, soffits & gutters exterior</li>
                    <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-accent" /> Plant protection protocol</li>
                  </ul>
                </div>
              </div>
              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white font-bold rounded-none py-8 text-lg mt-auto">
                <Link href="/services/house-washing">HOUSE WASH DETAILS</Link>
              </Button>
            </div>

            {/* Driveway Cleaning Card */}
            <div className="bg-white border border-gray-100 p-10 shadow-xl hover:shadow-2xl transition-all flex flex-col">
              <div className="flex-grow">
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
                  </ul>
                </div>
              </div>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-none py-8 text-lg mt-auto">
                <Link href="/services/driveway-cleaning">DRIVEWAY DETAILS</Link>
              </Button>
            </div>

            {/* Gutter Cleaning Card */}
            <div className="bg-white border border-gray-100 p-10 shadow-xl hover:shadow-2xl transition-all flex flex-col">
              <div className="flex-grow">
                <h3 className="text-3xl font-heading font-bold text-primary mb-2 uppercase">Gutter Cleaning</h3>
                <p className="text-gray-500 mb-6 font-semibold uppercase tracking-wider text-xs">Debris Removal & Flush</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-heading font-bold text-primary">$150</span>
                  <span className="text-gray-400 font-bold">STARTING RATE</span>
                </div>
                <div className="space-y-4 mb-10">
                  <h4 className="font-bold text-primary uppercase text-sm border-b pb-2">What's Included:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-accent" /> Full interior debris removal</li>
                    <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-accent" /> Downspout functionality test</li>
                    <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-accent" /> Bagging & disposal of debris</li>
                  </ul>
                </div>
              </div>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-none py-8 text-lg mt-auto">
                <Link href="/services/gutter-cleaning">GUTTER DETAILS</Link>
              </Button>
            </div>

            {/* Window Cleaning Card */}
            <div className="bg-white border border-gray-100 p-10 shadow-xl hover:shadow-2xl transition-all flex flex-col">
              <div className="flex-grow">
                <h3 className="text-3xl font-heading font-bold text-primary mb-2 uppercase">Window Cleaning</h3>
                <p className="text-gray-500 mb-6 font-semibold uppercase tracking-wider text-xs">Exterior Glass Specialist</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-heading font-bold text-primary">$195</span>
                  <span className="text-gray-400 font-bold">STARTING RATE</span>
                </div>
                <div className="space-y-4 mb-10">
                  <h4 className="font-bold text-primary uppercase text-sm border-b pb-2">What's Included:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-accent" /> Deionized water filtration</li>
                    <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-accent" /> Frame & sill wiping</li>
                    <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-accent" /> Streak-free guarantee</li>
                  </ul>
                </div>
              </div>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-none py-8 text-lg mt-auto">
                <Link href="/services/window-cleaning">WINDOW DETAILS</Link>
              </Button>
            </div>

            {/* Sidewalk Cleaning Card */}
            <div className="bg-white border border-gray-100 p-10 shadow-xl hover:shadow-2xl transition-all flex flex-col">
              <div className="flex-grow">
                <h3 className="text-3xl font-heading font-bold text-primary mb-2 uppercase">Sidewalk Cleaning</h3>
                <p className="text-gray-500 mb-6 font-semibold uppercase tracking-wider text-xs">Curb Appeal Essential</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-heading font-bold text-primary">$95</span>
                  <span className="text-gray-400 font-bold">STARTING RATE</span>
                </div>
                <div className="space-y-4 mb-10">
                  <h4 className="font-bold text-primary uppercase text-sm border-b pb-2">What's Included:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-accent" /> High-pressure surface cleaning</li>
                    <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-accent" /> Edge-to-edge organic removal</li>
                    <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-accent" /> Post-treatment for longevity</li>
                  </ul>
                </div>
              </div>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-none py-8 text-lg mt-auto">
                <Link href="/services/sidewalk-cleaning">SIDEWALK DETAILS</Link>
              </Button>
            </div>

            {/* Trash Can Cleaning Card */}
            <div className="bg-white border border-gray-100 p-10 shadow-xl hover:shadow-2xl transition-all flex flex-col">
              <div className="flex-grow">
                <h3 className="text-3xl font-heading font-bold text-primary mb-2 uppercase">Trash Can Cleaning</h3>
                <p className="text-gray-500 mb-6 font-semibold uppercase tracking-wider text-xs">Deodorize & Sanitize</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-heading font-bold text-primary">$20</span>
                  <span className="text-gray-400 font-bold">STARTING RATE</span>
                </div>
                <div className="space-y-4 mb-10">
                  <h4 className="font-bold text-primary uppercase text-sm border-b pb-2">What's Included:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-accent" /> Proprietary eco-cleaning system</li>
                    <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-accent" /> Eco-friendly deodorizing</li>
                    <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-accent" /> Wastewater recovery & removal</li>
                  </ul>
                </div>
              </div>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-none py-8 text-lg mt-auto">
                <Link href="/services/trash-can-cleaning">BIN CLEANING DETAILS</Link>
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
                  <h3 className="text-xl font-bold text-primary mb-4">How is the final price determined?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    While our starting rates cover most standard Mount Pleasant homes, final pricing depends on <strong>actual square footage, surface material, and the level of organic growth</strong>. We use satellite imaging to provide firm, upfront quotes so there are never any surprises on service day.
                  </p>
                </div>

                <div className="bg-white p-8 border shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-4">Are there any hidden travel or setup fees?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    No. Our quotes are <strong>all-inclusive</strong>. They cover travel within Mount Pleasant, all specialized cleaning solutions, equipment setup, and the final walk-through. The price you see on your quote is exactly what you'll pay upon completion.
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
        <section className="py-24 container mx-auto px-4 border-t">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-16 uppercase text-center">What Factors Affect My Price?</h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-gray-50 p-10 border-b-4 border-accent shadow-sm hover:shadow-md transition-shadow">
                <span className="text-6xl font-heading font-bold text-accent/20 block mb-6">01</span>
                <h4 className="text-2xl font-bold text-primary mb-4 uppercase tracking-tight">Square Footage</h4>
                <div className="w-12 h-1 bg-accent mb-6"></div>
                <p className="text-gray-700 leading-relaxed">
                  Larger surfaces require more cleaning solution and specialized equipment time. We use satellite imaging to provide accurate quotes based on your property's actual footprint.
                </p>
              </div>

              <div className="bg-gray-50 p-10 border-b-4 border-accent shadow-sm hover:shadow-md transition-shadow">
                <span className="text-6xl font-heading font-bold text-accent/20 block mb-6">02</span>
                <h4 className="text-2xl font-bold text-primary mb-4 uppercase tracking-tight">Surface Condition</h4>
                <div className="w-12 h-1 bg-accent mb-6"></div>
                <p className="text-gray-700 leading-relaxed">
                  Heavy organic growth, rust staining, or oil deposits may require additional pre-treatment cycles and specialized surfactants to achieve a like-new finish.
                </p>
              </div>

              <div className="bg-gray-50 p-10 border-b-4 border-accent shadow-sm hover:shadow-md transition-shadow">
                <span className="text-6xl font-heading font-bold text-accent/20 block mb-6">03</span>
                <h4 className="text-2xl font-bold text-primary mb-4 uppercase tracking-tight">Accessibility</h4>
                <div className="w-12 h-1 bg-accent mb-6"></div>
                <p className="text-gray-700 leading-relaxed">
                  Complex roof pitches, tight lot lines in neighborhoods like I'On, or heights requiring specialized equipment can affect the setup time and safety protocols required for the job.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final High-CTR CTA */}
        <section className="bg-secondary text-white py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-7xl font-heading font-bold mb-8 uppercase tracking-normal leading-[1.1]">Get Your Clean Property Today</h2>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white/90 leading-relaxed">
              Join dozens of Mount Pleasant families who get elite results without the premium price tag.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold rounded-none px-12 py-10 text-2xl shadow-2xl transition-transform hover:scale-105">
                <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new">GET FREE QUOTE</a>
              </Button>
              <div className="text-left bg-white/5 p-8 border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="text-accent w-6 h-6" />
                  <span className="font-bold text-lg uppercase tracking-wider">Fixed Quote &rarr; No Upcharges</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="text-accent w-6 h-6" />
                  <span className="font-bold text-lg uppercase tracking-wider">Same-Day Satellite Estimates</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent w-6 h-6" />
                  <span className="font-bold text-lg uppercase tracking-wider">Insured & Background Checked</span>
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
