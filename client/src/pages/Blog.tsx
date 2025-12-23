import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { blogPosts } from "@/lib/data";
import { Link } from "wouter";

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Pressure Washing Tips & Blog | CanManCam Mount Pleasant, SC"
        description="Expert pressure washing tips and guides for Mount Pleasant homeowners. Learn about home maintenance, cleaning techniques, and how to protect your property."
        canonicalUrl="https://canmancam.com/pressure-washing-tips"
        keywords="pressure washing tips, power washing guide, home maintenance Mount Pleasant, exterior cleaning advice, Charleston pressure washing blog"
        breadcrumbs={[
          { name: "Home", url: "https://canmancam.com/" },
          { name: "Blog", url: "https://canmancam.com/pressure-washing-tips" }
        ]}
      />
      <Header />
      <Breadcrumb items={[{ label: "Pressure Washing Tips", href: "/pressure-washing-tips" }]} />

      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
          PRESSURE WASHING TIPS & FAQ
        </h1>
        <p className="text-lg text-gray-600 mb-4" data-testid="text-blog-intro">
          Learn about pressure washing, property maintenance, and how to care for your Mount Pleasant home. These expert guides answer your most common questions about exterior cleaning services.
        </p>
        <p className="text-base text-gray-500 mb-12">
          Each article is written by Camrin, with years of hands-on pressure washing experience serving the Mount Pleasant, SC area. Find answers to your questions and learn how to protect your property.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/pressure-washing-tips/${post.slug}`}
              data-testid={`card-blog-${post.slug}`}
              className="block p-6 border-2 border-primary hover:bg-primary/5 transition-colors h-full"
            >
              <h3 className="text-xl font-heading font-bold text-primary mb-3">{post.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">{post.answer}</p>
              <span className="text-accent font-bold text-sm uppercase tracking-wider">Read More →</span>
            </Link>
          ))}
        </div>

        <div className="bg-gray-50 p-8 mb-12">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">DIDN'T FIND YOUR ANSWER?</h2>
          <p className="text-gray-700 mb-6">
            Have a specific question about pressure washing or home maintenance? Contact me directly. I'm happy to answer any questions about my services and provide personalized recommendations for your Mount Pleasant property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              data-testid="button-blog-contact"
              className="bg-accent hover:bg-accent/90 text-white font-bold uppercase rounded-none"
            >
              <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
                Contact Us
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline"
              data-testid="button-blog-faq"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold uppercase rounded-none"
            >
              <Link href="/pressure-washing-faq">View Full FAQ</Link>
            </Button>
          </div>
        </div>

        <div className="border-t-2 border-gray-200 pt-8">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">POPULAR TOPICS</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/house-washing" className="px-4 py-2 bg-primary text-white font-bold text-sm uppercase hover:bg-primary/90 transition-colors">House Washing</Link>
            <Link href="/services/driveway-cleaning" className="px-4 py-2 bg-primary text-white font-bold text-sm uppercase hover:bg-primary/90 transition-colors">Driveway Cleaning</Link>
            <Link href="/price-beat-guarantee" className="px-4 py-2 bg-accent text-white font-bold text-sm uppercase hover:bg-accent/90 transition-colors">Price Beat Guarantee</Link>
            <Link href="/service-areas" className="px-4 py-2 bg-secondary text-white font-bold text-sm uppercase hover:bg-secondary/90 transition-colors">Service Areas</Link>
          </div>
        </div>
      </main>

      <section className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">READY FOR PROFESSIONAL PRESSURE WASHING?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get a free estimate for pressure washing services in Mount Pleasant, SC. I'm ready to transform your property.
          </p>
          <Button 
            asChild 
            data-testid="button-blog-cta"
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
