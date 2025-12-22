import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Link } from "wouter";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumb items={[{ label: "Privacy Policy", href: "/privacy" }]} />

      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <h1 
          data-testid="text-privacy-title"
          className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
        >
          PRIVACY POLICY
        </h1>
        <p className="text-gray-500 mb-8">Last Updated: December 22, 2024</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">YOUR PRIVACY MATTERS</h2>
            <p className="text-gray-700 leading-relaxed">
              CanManCam Pressure Washing ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services in Mount Pleasant, SC and surrounding areas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">INFORMATION WE COLLECT</h2>
            <p className="text-gray-700 mb-4">We may collect information you provide directly, including:</p>
            <ul className="space-y-2">
              <li className="flex gap-2"><span className="text-accent font-bold">•</span> <span className="text-gray-700">Name and contact information</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold">•</span> <span className="text-gray-700">Email address and phone number</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold">•</span> <span className="text-gray-700">Service requests and preferences</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold">•</span> <span className="text-gray-700">Property address and information for estimates</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold">•</span> <span className="text-gray-700">Payment information when applicable</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">HOW WE USE YOUR INFORMATION</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="space-y-2">
              <li className="flex gap-2"><span className="text-accent font-bold">•</span> <span className="text-gray-700">Provide and improve our pressure washing services</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold">•</span> <span className="text-gray-700">Respond to your requests and inquiries</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold">•</span> <span className="text-gray-700">Send service updates and appointment confirmations</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold">•</span> <span className="text-gray-700">Communicate about promotions (if you opt-in)</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold">•</span> <span className="text-gray-700">Protect against fraud and ensure security</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">DATA SECURITY</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. We use industry-standard practices to safeguard the information you provide to us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">THIRD-PARTY SERVICES</h2>
            <p className="text-gray-700 leading-relaxed">
              We may use third-party services for scheduling, payment processing, and communication. These services have their own privacy policies, and we encourage you to review them. We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">YOUR RIGHTS</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="space-y-2">
              <li className="flex gap-2"><span className="text-accent font-bold">•</span> <span className="text-gray-700">Access the personal information we hold about you</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold">•</span> <span className="text-gray-700">Request correction of inaccurate information</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold">•</span> <span className="text-gray-700">Request deletion of your information</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold">•</span> <span className="text-gray-700">Opt out of marketing communications</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">CONTACT US</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy or our practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 mt-4">
              <p className="text-gray-700"><strong>Phone:</strong> 607-427-1175</p>
              <p className="text-gray-700"><strong>Email:</strong> canmancam@yahoo.com</p>
              <p className="text-gray-700"><strong>Service Area:</strong> Mount Pleasant, SC</p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="font-bold text-primary mb-4">RELATED PAGES</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/terms">
              <a className="text-accent hover:underline">Terms of Use</a>
            </Link>
            <Link href="/contact">
              <a className="text-accent hover:underline">Contact Us</a>
            </Link>
            <Link href="/about">
              <a className="text-accent hover:underline">About Us</a>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
