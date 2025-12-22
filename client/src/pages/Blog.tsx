import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/data";
import { Link } from "wouter";

export default function Blog() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Blog", href: "/pressure-washing-tips" }]} />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
          Pressure Washing Tips & FAQ
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Learn about pressure washing, property maintenance, and how to care for your Mount Pleasant home.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/pressure-washing-tips/${post.slug}`}>
              <a className="p-6 border-2 border-primary rounded-none hover:bg-primary/5 transition-colors h-full">
                <h3 className="text-xl font-heading font-bold text-primary mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{post.answer}</p>
                <span className="text-accent font-bold text-sm">Read More →</span>
              </a>
            </Link>
          ))}
        </div>

        <div className="bg-gray-50 p-8 rounded-none mb-12">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">Didn't Find Your Answer?</h2>
          <p className="text-gray-700 mb-6">
            Have a specific question about pressure washing or home maintenance? Contact CanManCam directly. Our team is happy to answer any questions about our services and provide personalized recommendations for your Mount Pleasant property.
          </p>
          <Button asChild className="bg-accent hover:bg-accent/90 text-white font-bold uppercase">
            <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
              Contact Us
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
}
