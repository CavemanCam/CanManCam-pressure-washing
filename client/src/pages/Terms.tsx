import { Breadcrumb } from "@/components/Breadcrumb";

export default function Terms() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Terms of Use", href: "/terms" }]} />
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8">
          Terms of Use
        </h1>

        <div className="prose prose-lg max-w-none space-y-6">
          <div>
            <h2 className="text-2xl font-heading font-bold text-primary mb-2">Acceptance of Terms</h2>
            <p className="text-gray-700">
              By using CanManCam's website and services, you agree to comply with these Terms of Use. If you do not agree, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-primary mb-2">Services</h2>
            <p className="text-gray-700 mb-2">CanManCam provides professional pressure washing and related services in Mount Pleasant, SC:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>House washing</li>
              <li>Driveway cleaning</li>
              <li>Sidewalk cleaning</li>
              <li>Gutter cleaning</li>
              <li>Window cleaning</li>
              <li>Trash can cleaning</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-primary mb-2">Estimates and Pricing</h2>
            <p className="text-gray-700">
              All estimates are provided in good faith based on information available at the time. Actual costs may vary based on site conditions, project scope, and unforeseen circumstances discovered during work.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-primary mb-2">Limitation of Liability</h2>
            <p className="text-gray-700">
              CanManCam is fully insured and takes all precautions to protect your property. However, CanManCam is not responsible for any damage caused by third parties or pre-existing conditions on your property.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-primary mb-2">Contact Information</h2>
            <p className="text-gray-700">
              For questions about these terms, contact us at 607-427-1175 or canmancam@yahoo.com.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
