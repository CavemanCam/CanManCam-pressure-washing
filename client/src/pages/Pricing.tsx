import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="2025 Pressure Washing Pricing | Mount Pleasant, SC | CanManCam"
        description="Transparent 2025 pricing for pressure washing, roof cleaning, and trash can sanitization in Mount Pleasant, SC. Get a free quote today!"
      />
      <Header />
      <Breadcrumb items={[{ label: "Pricing", href: "/pricing" }]} />

      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
          2025 Pressure Washing Pricing Guide
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Get a free, no-obligation estimate up front. Below, we break down typical costs by surface type, project scope, and materials for Mount Pleasant homeowners.
        </p>

        {/* Surface Material Pricing */}
        <div className="mb-16">
          <h2 className="text-2xl font-heading font-bold text-primary mb-6">Pricing by Surface & Material</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 border">Surface Type</th>
                  <th className="p-4 border">Price Range (2025)</th>
                  <th className="p-4 border">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-4 border font-bold">House Siding</td>
                  <td className="p-4 border">$0.15 – $0.35 / sq ft</td>
                  <td className="p-4 border">Varies by height and organic build-up</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border font-bold">Roof (Shingle/Metal)</td>
                  <td className="p-4 border">$0.25 – $0.45 / sq ft</td>
                  <td className="p-4 border">Safe soft wash only; preserves shingle integrity</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 border font-bold">Driveways (Concrete)</td>
                  <td className="p-4 border">$0.15 – $0.30 / sq ft</td>
                  <td className="p-4 border">Includes pre and post-treatment for long-lasting results</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border font-bold">Decks (Wood/Composite)</td>
                  <td className="p-4 border">$0.25 – $0.50 / sq ft</td>
                  <td className="p-4 border">Specialized care for delicate materials</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 border font-bold">Patios/Walkways</td>
                  <td className="p-4 border">$0.15 – $0.25 / sq ft</td>
                  <td className="p-4 border">Easier access lowers the cost</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border font-bold">Fences</td>
                  <td className="p-4 border">$0.20 – $0.40 / sq ft</td>
                  <td className="p-4 border">Priced per linear foot or sq. ft.</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 border font-bold">Gutter Cleaning (Exterior)</td>
                  <td className="p-4 border">$1.00 – $3.00 / linear ft</td>
                  <td className="p-4 border">Essential for Mount Pleasant storm seasons</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Project Based Pricing */}
        <div className="mb-16">
          <h2 className="text-2xl font-heading font-bold text-primary mb-6">Average Cost by Project Type</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 border-l-4 border-accent">
              <h3 className="font-bold text-xl mb-2">One-Story House Wash</h3>
              <p className="text-primary font-bold text-2xl mb-2">$295 – $750</p>
              <p className="text-gray-600">Typical duration: 1.5 to 2.5 hours. Perfect for siding refreshment.</p>
            </div>
            <div className="bg-gray-50 p-6 border-l-4 border-accent">
              <h3 className="font-bold text-xl mb-2">Two-Story House Wash</h3>
              <p className="text-primary font-bold text-2xl mb-2">$400 – $2,400</p>
              <p className="text-gray-600">Includes ladder access and detailed second-story cleaning.</p>
            </div>
            <div className="bg-gray-50 p-6 border-l-4 border-accent">
              <h3 className="font-bold text-xl mb-2">Trash Can Cleaning Price</h3>
              <p className="text-primary font-bold text-2xl mb-2">$85 – $350</p>
              <p className="text-gray-600">Gutter whitening and bin sanitization options. Stop the "smelly trash can" issue!</p>
            </div>
            <div className="bg-gray-50 p-6 border-l-4 border-accent">
              <h3 className="font-bold text-xl mb-2">Driveway Cleaning Service</h3>
              <p className="text-primary font-bold text-2xl mb-2">$150 – $500</p>
              <p className="text-gray-600">30 minutes per 1,000 sq. ft. Often bundled for extra savings.</p>
            </div>
          </div>
        </div>

        {/* SEO Problem Solver: Trash Cans */}
        <div className="bg-primary/5 p-8 mb-16 rounded-lg border border-primary/10">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">How to Deodorize a Trash Can in 2025</h2>
          <p className="text-lg text-gray-700 mb-6">
            Dealing with a <strong>smelly trash can</strong>? Most homeowners ask "where should garbage cans be cleaned?" or "how do I stop the smell?" 
            While DIY methods like bleach help temporarily, professional high-heat sanitization is the only way to truly kill bacteria and remove the source of the <strong>trash can smell</strong>.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 shadow-sm">
              <h4 className="font-bold text-primary mb-2">Eliminate Bacteria</h4>
              <p className="text-sm text-gray-600">Our 200° water kills 99.9% of the bacteria that cause odors.</p>
            </div>
            <div className="bg-white p-4 shadow-sm">
              <h4 className="font-bold text-primary mb-2">Eco-Friendly</h4>
              <p className="text-sm text-gray-600">We contain all wastewater, preventing runoff into Mount Pleasant drains.</p>
            </div>
            <div className="bg-white p-4 shadow-sm">
              <h4 className="font-bold text-primary mb-2">Monthly Protection</h4>
              <p className="text-sm text-gray-600">Subscription plans keep your bins fresh year-round.</p>
            </div>
          </div>
        </div>

        {/* Bundle & Save */}
        <div className="bg-accent text-white p-8 rounded-lg mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-2">Bundle & Save 5%</h2>
              <p className="text-xl">Combine House Washing and Window Cleaning for an automatic discount.</p>
            </div>
            <Button asChild className="bg-white text-accent hover:bg-gray-100 font-bold py-6 px-10">
              <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
                Get My Bundle Quote
              </a>
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">Gutter Cleaning Mount Pleasant SC</h2>
          <p className="text-gray-600 mb-8">
            Don't let clogged gutters damage your foundation. Our 2025 specialized gutter cleaning service ensures proper drainage and protects your Lowcountry home from heavy rain damage.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
