import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What areas do you serve?",
          a: "We serve all of Mount Pleasant, SC including Isle of Palms, Old Village, Park West, Hamlin Plantation, Carolina Park, Dunes West, Crowfield, Planters Pointe, Long Point, Shem Creek, Lexington Park, and Pin Oak."
        },
        {
          q: "Do you offer free estimates?",
          a: "Yes! We provide free, no-obligation estimates for all our services. Contact us today to schedule your estimate."
        },
        {
          q: "Are you licensed and insured?",
          a: "Yes, CanManCam is fully licensed and insured. We carry liability insurance to protect your property."
        },
        {
          q: "How long have you been in business?",
          a: "Contact us for information about CanManCam's experience and track record in Mount Pleasant."
        }
      ]
    },
    {
      category: "Services",
      questions: [
        {
          q: "What services do you offer?",
          a: "We offer house washing, driveway cleaning, sidewalk cleaning, gutter cleaning, window cleaning, and trash can cleaning."
        },
        {
          q: "Do you use eco-friendly cleaning products?",
          a: "Yes, we use environmentally responsible cleaning solutions whenever possible while maintaining professional results."
        },
        {
          q: "Can you pressure wash all surfaces?",
          a: "We can pressure wash most surfaces, but we use soft washing techniques on delicate surfaces like siding and roofing to prevent damage."
        },
        {
          q: "Is pressure washing safe for my home?",
          a: "Professional pressure washing is safe when done correctly. Our team uses appropriate pressure levels for each surface type."
        }
      ]
    },
    {
      category: "Pricing & Scheduling",
      questions: [
        {
          q: "What is your Price Beat Guarantee?",
          a: "We guarantee competitive pricing. If you find a lower quote for the same service, we'll beat it by 5%."
        },
        {
          q: "What are your hours of operation?",
          a: "Contact us at 607-427-1175 or canmancam@yahoo.com to schedule an appointment that works for you."
        },
        {
          q: "Do you offer discounts?",
          a: "We offer competitive pricing on all services. Ask us about package deals when you request your free estimate."
        },
        {
          q: "How quickly can you schedule service?",
          a: "We work to accommodate your schedule. Contact us to find available appointment times."
        }
      ]
    },
    {
      category: "Maintenance",
      questions: [
        {
          q: "How often should I get pressure washing?",
          a: "Most homes benefit from pressure washing every 1-2 years. Climate and environmental factors affect frequency."
        },
        {
          q: "How do I maintain my property after pressure washing?",
          a: "Regular sweeping, prompt stain removal, and addressing cracks promptly help maintain your property's appearance."
        },
        {
          q: "Can pressure washing damage my property?",
          a: "When performed correctly by professionals, pressure washing won't damage your property. We use appropriate techniques for each surface."
        }
      ]
    }
  ];

  return (
    <div>
      <Breadcrumb items={[{ label: "FAQ", href: "/pressure-washing-faq" }]} />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Have questions about our pressure washing services in Mount Pleasant? Find answers below.
        </p>

        <div className="max-w-3xl space-y-12 mb-12">
          {faqs.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">{section.category}</h2>
              <div className="space-y-4">
                {section.questions.map((item, qIdx) => (
                  <div key={qIdx} className="border-l-4 border-accent pl-4">
                    <h3 className="font-bold text-primary mb-2">{item.q}</h3>
                    <p className="text-gray-700">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-8 rounded-none">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">Still Have Questions?</h2>
          <p className="text-gray-700 mb-6">
            Can't find the answer you're looking for? Contact CanManCam directly. We're happy to answer any questions about our services.
          </p>
          <div className="space-y-2 mb-6">
            <p className="text-gray-700"><strong>Phone:</strong> 607-427-1175</p>
            <p className="text-gray-700"><strong>Email:</strong> canmancam@yahoo.com</p>
          </div>
          <Button asChild className="bg-accent hover:bg-accent/90 text-white font-bold uppercase">
            <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
              Get Free Estimate
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
}
