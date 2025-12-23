import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { services } from "@/lib/data";
import { Link } from "wouter";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumb items={[{ label: "Terms of Use", href: "/terms" }]} />

      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <h1 
          data-testid="text-terms-title"
          className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
        >
          TERMS OF USE
        </h1>
        <p className="text-gray-500 mb-8">Last Updated: December 22, 2024</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">ACCEPTANCE OF TERMS</h2>
            <p className="text-gray-700 leading-relaxed">
              By using CanManCam Pressure Washing's website and services, you agree to comply with these Terms of Use. If you do not agree with any part of these terms, please do not use my website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">SERVICES</h2>
            <p className="text-gray-700 mb-4">CanManCam provides professional pressure washing and related exterior cleaning services in Mount Pleasant, SC and surrounding areas, including:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {services.map((service) => (
                <Link 
                  key={service.slug} 
                  href={`/services/${service.slug}`}
                  className="p-2 bg-gray-50 text-center text-sm text-primary hover:bg-gray-100 transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">ESTIMATES AND PRICING</h2>
            <p className="text-gray-700 leading-relaxed">
              All estimates are provided in good faith based on information available at the time of assessment. Actual costs may vary based on site conditions, project scope, and unforeseen circumstances discovered during work. Final pricing will be confirmed before work begins. My <Link href="/price-beat-guarantee" className="text-accent hover:underline">Price Beat Guarantee</Link> applies subject to its stated terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">SERVICE AGREEMENT</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accepting my estimate and scheduling service, you agree to:
            </p>
            <ul className="space-y-2">
              <li className="flex gap-2"><span className="text-accent font-bold">•</span> <span className="text-gray-700">Provide accurate information about your property and service needs</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold">•</span> <span className="text-gray-700">Ensure safe access to work areas</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold">•</span> <span className="text-gray-700">Prepare the property as advised (moving furniture, closing windows, etc.)</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold">•</span> <span className="text-gray-700">Provide payment as agreed upon completion of work</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">LIMITATION OF LIABILITY</h2>
            <p className="text-gray-700 leading-relaxed">
              CanManCam is fully insured and takes all reasonable precautions to protect your property. I am not responsible for any damage caused by pre-existing conditions, including but not limited to: loose siding, damaged caulking, deteriorated mortar, or other conditions that may be revealed or exacerbated by cleaning. I will inform you of any pre-existing damage observed before beginning work.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">CANCELLATION POLICY</h2>
            <p className="text-gray-700 leading-relaxed">
              Please provide at least 24 hours notice if you need to reschedule or cancel an appointment. I understand that circumstances change and will work with you to find a convenient alternative time whenever possible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">INTELLECTUAL PROPERTY</h2>
            <p className="text-gray-700 leading-relaxed">
              All content on this website, including text, images, logos, and design elements, is the property of CanManCam Pressure Washing and is protected by copyright laws. You may not reproduce, distribute, or use any content without my written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">CONTACT INFORMATION</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about these terms, please contact me:
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
            <Link href="/privacy" className="text-accent hover:underline">Privacy Policy</Link>
            <Link href="/price-beat-guarantee" className="text-accent hover:underline">Price Beat Guarantee</Link>
            <Link href="/contact" className="text-accent hover:underline">Contact Us</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
