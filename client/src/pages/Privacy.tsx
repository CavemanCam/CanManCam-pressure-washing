import { Breadcrumb } from "@/components/Breadcrumb";

export default function Privacy() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Privacy Policy", href: "/privacy" }]} />
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none space-y-6">
          <div>
            <h2 className="text-2xl font-heading font-bold text-primary mb-2">Your Privacy Matters</h2>
            <p className="text-gray-700">
              CanManCam is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-primary mb-2">Information We Collect</h2>
            <p className="text-gray-700 mb-2">We may collect information you provide directly, such as:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Name and contact information</li>
              <li>Email address and phone number</li>
              <li>Service requests and preferences</li>
              <li>Property information for estimates</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-primary mb-2">How We Use Your Information</h2>
            <p className="text-gray-700 mb-2">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Provide and improve our services</li>
              <li>Respond to your requests and inquiries</li>
              <li>Send service updates and confirmations</li>
              <li>Communicate about promotions (if you opt-in)</li>
              <li>Protect against fraud and ensure security</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-primary mb-2">Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, and destruction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-primary mb-2">Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about this Privacy Policy, please contact us at 607-427-1175 or canmancam@yahoo.com.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
