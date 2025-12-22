import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { services, blogPosts } from "@/lib/data";
import { Link } from "wouter";

export default function FAQ() {
  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          q: "What areas do you serve?",
          a: "We serve all of Mount Pleasant, SC including Isle of Palms, Old Village, Park West, Hamlin Plantation, Carolina Park, Dunes West, Crowfield, Planters Pointe, Long Point, and Shem Creek."
        },
        {
          q: "Do you offer free estimates?",
          a: "Yes! We provide free, no-obligation estimates for all our services. Contact us today at 607-427-1175 or use our online request form to schedule your estimate."
        },
        {
          q: "Are you licensed and insured?",
          a: "Yes, CanManCam is fully licensed and insured. We carry comprehensive liability insurance to protect your property and give you peace of mind."
        },
        {
          q: "What is your Price Beat Guarantee?",
          a: "If you receive a lower quote from another reputable pressure washing company for the same service, we'll beat their price by 5%. We're confident in our value and committed to fair pricing."
        }
      ]
    },
    {
      category: "Services & Techniques",
      questions: [
        {
          q: "What services do you offer?",
          a: "We offer house washing, driveway cleaning, sidewalk cleaning, gutter cleaning, window cleaning, and trash can cleaning. Each service uses appropriate techniques for optimal results."
        },
        {
          q: "What is the difference between pressure washing and soft washing?",
          a: "Pressure washing uses high-pressure water to clean hard surfaces like concrete. Soft washing uses low pressure with specialized cleaning solutions to safely clean delicate surfaces like siding and roofs without damage."
        },
        {
          q: "Do you use eco-friendly cleaning products?",
          a: "Yes, we use biodegradable, environmentally responsible cleaning solutions that are safe for your family, pets, and landscaping while still providing professional results."
        },
        {
          q: "Is pressure washing safe for my home?",
          a: "Yes, when performed by trained professionals using appropriate techniques. We use soft washing for delicate surfaces and adjust pressure levels for each material to ensure safe, effective cleaning."
        }
      ]
    },
    {
      category: "Pricing & Scheduling",
      questions: [
        {
          q: "How much does pressure washing cost?",
          a: "Costs vary based on property size, services needed, and surface condition. We provide free estimates so you know exactly what to expect. Our Price Beat Guarantee ensures competitive pricing."
        },
        {
          q: "What are your hours of operation?",
          a: "We're available Monday through Friday, 8:00 AM to 6:00 PM, with Saturday appointments available by request. Contact us at 607-427-1175 to schedule."
        },
        {
          q: "How quickly can you schedule service?",
          a: "We work to accommodate your schedule as quickly as possible. Contact us to find available appointment times. During peak seasons, we recommend booking in advance."
        },
        {
          q: "Do you offer package deals?",
          a: "Yes, we offer discounted rates when combining multiple services. Ask about package pricing when you request your free estimate."
        }
      ]
    },
    {
      category: "Maintenance & Preparation",
      questions: [
        {
          q: "How often should I get pressure washing?",
          a: "Most homes benefit from pressure washing every 1-2 years. Properties in shaded areas, near water, or under heavy tree canopy may need more frequent cleaning. We can recommend a schedule for your specific property."
        },
        {
          q: "How do I prepare for pressure washing?",
          a: "Move outdoor furniture away from work areas, close all windows and doors, and note any sensitive plants. We'll handle the rest. See our preparation guide for complete details."
        },
        {
          q: "How long does pressure washing take?",
          a: "Service time varies by property size and services needed. Most house washings take 2-4 hours. Driveway cleaning typically takes 1-2 hours. We'll provide a time estimate with your quote."
        },
        {
          q: "What should I expect after pressure washing?",
          a: "Your property will look dramatically cleaner immediately. Surfaces may be slippery while drying. We'll do a walkthrough to ensure you're satisfied before we leave."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumb items={[{ label: "FAQ", href: "/pressure-washing-faq" }]} />

      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 
          data-testid="text-faq-title"
          className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
        >
          PRESSURE WASHING FAQ
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Have questions about our pressure washing services in Mount Pleasant? Find answers to common questions below, or contact us directly for personalized assistance.
        </p>

        <div className="max-w-4xl space-y-12 mb-12">
          {faqs.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">{section.category.toUpperCase()}</h2>
              <div className="space-y-4">
                {section.questions.map((item, qIdx) => (
                  <div key={qIdx} className="border-l-4 border-accent pl-4 py-2">
                    <h3 className="font-bold text-primary mb-2">{item.q}</h3>
                    <p className="text-gray-700">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-8 mb-12">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">SERVICE-SPECIFIC FAQS</h2>
          <p className="text-gray-700 mb-6">
            Each of our service pages includes detailed FAQs specific to that service. Click below to learn more:
          </p>
          <div className="flex flex-wrap gap-3">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="px-4 py-2 bg-primary text-white font-bold text-sm uppercase hover:bg-primary/90 transition-colors">
                {service.name} FAQ
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-8 mb-12">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">HELPFUL ARTICLES</h2>
          <p className="text-gray-700 mb-6">
            Want more detailed information? Check out our blog for in-depth guides and tips:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blogPosts.slice(0, 6).map((post) => (
              <Link key={post.slug} href={`/pressure-washing-tips/${post.slug}`} className="block p-4 bg-white border-2 border-gray-200 hover:border-primary transition-colors">
                <h3 className="font-bold text-primary text-sm mb-2">{post.title}</h3>
                <span className="text-accent text-xs font-bold uppercase">Read More →</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-primary text-white p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">STILL HAVE QUESTIONS?</h2>
              <p className="text-gray-200 mb-4">
                Can't find the answer you're looking for? Contact CanManCam directly. We're happy to answer any questions about our services and provide personalized recommendations.
              </p>
              <div className="space-y-2 mb-6">
                <p><strong>Phone:</strong> 607-427-1175</p>
                <p><strong>Email:</strong> canmancam@yahoo.com</p>
              </div>
            </div>
            <div className="text-center">
              <Button 
                asChild 
                data-testid="button-faq-estimate"
                className="bg-accent hover:bg-accent/90 text-white font-bold uppercase px-8 py-6 h-auto rounded-none"
              >
                <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
                  Get Free Estimate
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
