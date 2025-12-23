import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="About CanManCam Pressure Washing | Mount Pleasant, SC"
        description="Learn about CanManCam, Mount Pleasant's most trusted pressure washing company. Licensed, insured, and committed to quality. Free estimates available."
        canonicalUrl="https://canmancam.com/about"
        keywords="about CanManCam, Mount Pleasant pressure washing company, Charleston pressure washing, local pressure washing business"
        breadcrumbs={[
          { name: "Home", url: "https://canmancam.com/" },
          { name: "About", url: "https://canmancam.com/about" }
        ]}
      />
      <Header />
      <Breadcrumb items={[{ label: "About", href: "/about" }]} />

      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 
          data-testid="text-about-title"
          className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
        >
          ABOUT CANMANCAM PRESSURE WASHING
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Mount Pleasant's trusted source for professional exterior cleaning services.
        </p>

        <div className="max-w-4xl mb-12">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">MY MISSION</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            I'm dedicated to providing the highest quality exterior cleaning services to homeowners and businesses throughout Mount Pleasant, SC. I believe that every property deserves to look its best, and I'm committed to delivering exceptional results that exceed my customers' expectations.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            My mission is simple: to make professional pressure washing accessible, affordable, and hassle-free for the community. I combine industry-leading techniques with old-fashioned customer service to create an experience that's as pleasant as the results I deliver.
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-12 mb-4">MY VALUES</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-gray-50">
              <h3 className="font-bold text-primary mb-2">Quality First</h3>
              <p className="text-gray-600">I never cut corners. Every job receives my full attention and expertise, regardless of size or scope.</p>
            </div>
            <div className="p-6 bg-gray-50">
              <h3 className="font-bold text-primary mb-2">Honest Pricing</h3>
              <p className="text-gray-600">My Price Beat Guarantee ensures you always get fair, competitive pricing with no hidden fees or surprises.</p>
            </div>
            <div className="p-6 bg-gray-50">
              <h3 className="font-bold text-primary mb-2">Customer Focus</h3>
              <p className="text-gray-600">Your satisfaction is my priority. I listen to your needs and work to exceed your expectations every time.</p>
            </div>
            <div className="p-6 bg-gray-50">
              <h3 className="font-bold text-primary mb-2">Community Connection</h3>
              <p className="text-gray-600">As a local business, I'm invested in Mount Pleasant. I take pride in serving my neighbors and community.</p>
            </div>
          </div>

          <h2 className="text-2xl font-heading font-bold text-primary mt-12 mb-4">WHY CHOOSE CANMANCAM?</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex gap-3">
              <span className="text-accent font-bold text-lg">✓</span>
              <span className="text-gray-700"><strong>Licensed & Insured:</strong> I carry full liability insurance to protect your property and give you peace of mind.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold text-lg">✓</span>
              <span className="text-gray-700"><strong>Professional Equipment:</strong> I use commercial-grade pressure washing and soft washing equipment for superior results.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold text-lg">✓</span>
              <span className="text-gray-700"><strong>Eco-Friendly Solutions:</strong> My cleaning products are biodegradable and safe for your family, pets, and landscaping.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold text-lg">✓</span>
              <span className="text-gray-700"><strong>Local Expertise:</strong> I know Mount Pleasant neighborhoods and understand the specific challenges of Lowcountry properties.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold text-lg">✓</span>
              <span className="text-gray-700"><strong>Satisfaction Guarantee:</strong> I stand behind my work. If you're not happy, I'll make it right.</span>
            </li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-primary mt-12 mb-4">MY SERVICES</h2>
          <p className="text-gray-700 mb-6">
            I offer a comprehensive range of exterior cleaning services to keep your property looking its best:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <Link href="/services/house-washing" className="block p-4 bg-primary text-white text-center font-bold hover:bg-primary/90 transition-colors">House Washing</Link>
            <Link href="/services/driveway-cleaning" className="block p-4 bg-primary text-white text-center font-bold hover:bg-primary/90 transition-colors">Driveway Cleaning</Link>
            <Link href="/services/sidewalk-cleaning" className="block p-4 bg-primary text-white text-center font-bold hover:bg-primary/90 transition-colors">Sidewalk Cleaning</Link>
            <Link href="/services/gutter-cleaning" className="block p-4 bg-primary text-white text-center font-bold hover:bg-primary/90 transition-colors">Gutter Cleaning</Link>
            <Link href="/services/window-cleaning" className="block p-4 bg-primary text-white text-center font-bold hover:bg-primary/90 transition-colors">Window Cleaning</Link>
            <Link href="/services/trash-can-cleaning" className="block p-4 bg-primary text-white text-center font-bold hover:bg-primary/90 transition-colors">Trash Can Cleaning</Link>
          </div>
        </div>

        <div className="bg-accent text-white p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">
                MY PRICE BEAT GUARANTEE
              </h2>
              <p className="mb-4">
                I'm confident in the value I provide. If you receive a lower quote from another reputable pressure washing company for the same service, I'll beat their price by 5%. Quality service at competitive prices – that's my promise.
              </p>
              <Link href="/price-beat-guarantee" className="inline-block bg-white text-accent font-bold uppercase px-6 py-3 hover:bg-gray-100 transition-colors">
                Learn More
              </Link>
            </div>
            <div className="text-center">
              <div className="text-6xl font-heading font-bold mb-2">5%</div>
              <p className="text-xl">Price Beat Guarantee</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">
            CONTACT US TODAY
          </h2>
          <p className="text-gray-600 mb-6">
            <strong>Phone:</strong> 607-427-1175<br />
            <strong>Email:</strong> canmancam@yahoo.com
          </p>
          <Button 
            asChild 
            data-testid="button-about-estimate"
            className="bg-accent hover:bg-accent/90 text-white font-bold uppercase px-8 py-6 h-auto rounded-none"
          >
            <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
              Get Free Estimate
            </a>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
