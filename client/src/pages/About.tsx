import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-body">
      <Header />
      <div className="bg-primary py-20 text-center text-white">
        <h1 className="text-5xl font-heading font-bold">About Us</h1>
      </div>
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h2 className="text-3xl font-heading font-bold text-primary mb-6">Your Trusted Local Pressure Washing Experts</h2>
        <div className="prose prose-lg text-gray-600">
          <p className="mb-4">
            CanManCam is a premier pressure washing company serving Mount Pleasant, SC and surrounding areas. We are dedicated to providing the highest quality exterior cleaning services for both residential and commercial properties.
          </p>
          <p className="mb-4">
            Our team is committed to excellence, using the latest equipment and safe, effective cleaning solutions to restore your property's beauty. We understand that your home is your biggest investment, and we treat it with the care and respect it deserves.
          </p>
          <p>
            Whether you need house washing, roof cleaning, driveway cleaning, or gutter cleaning, you can count on CanManCam to deliver outstanding results.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
