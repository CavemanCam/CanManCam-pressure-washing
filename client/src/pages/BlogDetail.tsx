import { useRoute } from "wouter";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { blogPosts, services, neighborhoods } from "@/lib/data";
import { Link } from "wouter";

export default function BlogDetail() {
  const [match, params] = useRoute("/pressure-washing-tips/:slug");
  const post = blogPosts.find(p => p.slug === params?.slug);

  if (!match || !post) return null;

  const blogContent: Record<string, { content: string; relatedServices: string[]; relatedNeighborhoods: string[] }> = {
    "how-often-pressure-wash-house": {
      content: "Most homes in Mount Pleasant should be pressure washed every 1-2 years depending on climate, weather conditions, and dirt accumulation. Properties in coastal areas like Isle of Palms or Shem Creek may need more frequent cleaning due to salt air and moisture. The best time to schedule pressure washing is in spring to prepare your home for summer, and again in fall before winter weather arrives.\n\nSeveral factors determine how often your home needs pressure washing. If your home is surrounded by trees, you may need cleaning more frequently due to fallen leaves, pollen, and organic growth. Homes facing north or in shaded areas are more prone to mold and mildew growth. Properties in high-traffic areas or near main roads accumulate dirt and pollution more quickly.\n\nRegular pressure washing not only improves your home's appearance but also protects your investment. Dirt, algae, and mold can deteriorate your siding over time. By scheduling professional house washing every 1-2 years, you extend the life of your exterior surfaces and maintain your property's value. We recommend consulting with our team to assess your home's specific needs.",
      relatedServices: ["house-washing", "gutter-cleaning", "window-cleaning"],
      relatedNeighborhoods: ["isle-of-palms", "old-village", "park-west"]
    },
    "pressure-vs-soft-washing": {
      content: "Understanding the difference between pressure washing and soft washing is crucial for protecting your property. Pressure washing uses high-pressure water jets (typically 1500-4000 PSI) to blast away dirt and grime from hard surfaces like concrete, brick, and metal. Soft washing uses lower pressure (usually under 500 PSI) combined with specialized cleaning solutions to safely clean delicate surfaces like vinyl siding, shingles, and painted surfaces.\n\nPressure washing is ideal for driveways, sidewalks, decks, and other hard surfaces that can withstand high pressure. The powerful water jets effectively remove stubborn stains, oil, and algae. However, using too much pressure on delicate surfaces can cause damage, which is why soft washing is the preferred method for house siding and roofs.\n\nSoft washing uses biodegradable cleaning solutions to eliminate mold, mildew, algae, and other organic contaminants. The solutions do the work rather than pressure, making it safe for almost any surface. Our team assesses each project to determine whether pressure washing or soft washing is the best approach for your specific needs.",
      relatedServices: ["house-washing", "driveway-cleaning", "roof-cleaning"],
      relatedNeighborhoods: ["hamlin-plantation", "carolina-park", "dunes-west"]
    },
    "pressure-washing-cost-mount-pleasant": {
      content: "Pressure washing costs in Mount Pleasant vary based on several factors. The size of your property, the type of surfaces being cleaned, the level of dirt and staining, and the specific services needed all affect pricing. House washing typically costs more than driveway cleaning due to the complexity and safety requirements of working at heights.\n\nWe offer free estimates with no obligation. During the consultation, we assess your property's specific needs and provide a detailed quote. Most homeowners find that professional pressure washing offers excellent value compared to DIY methods, especially when considering the time, equipment costs, and risk of damage from improper technique.\n\nOur Price Beat Guarantee ensures you're getting the best value in Mount Pleasant. If you find a lower quote for the same service, we'll beat it by 5%. This commitment to fair pricing means you can choose CanManCam with confidence, knowing you're getting professional quality at competitive rates.",
      relatedServices: ["house-washing", "driveway-cleaning", "gutter-cleaning"],
      relatedNeighborhoods: ["old-village", "park-west", "hamlin-plantation"]
    },
    "pressure-washing-damage": {
      content: "When performed correctly, professional pressure washing does not damage your home. However, improper technique can cause problems like water intrusion, damage to siding, erosion of mortar, or degradation of paint. This is why hiring experienced professionals is essential.\n\nDifferent surfaces require different pressure levels. Concrete can handle 3000-4000 PSI without damage. Vinyl siding should never exceed 1500 PSI, and wood surfaces typically need even lower pressure. Paint and roofing materials require soft washing techniques rather than high pressure. Professional technicians know these distinctions and adjust their equipment accordingly.\n\nCan ManCam uses low-pressure soft washing for delicate surfaces and appropriate pressure levels for hard surfaces. Our team is trained to protect your property while achieving excellent cleaning results. We're fully insured in case any issues occur, giving you peace of mind.",
      relatedServices: ["house-washing", "window-cleaning", "roof-cleaning"],
      relatedNeighborhoods: ["crowfield", "planters-pointe", "long-point"]
    },
    "professional-pressure-washing-expectations": {
      content: "When you hire CanManCam for professional pressure washing, you can expect quality service from start to finish. Our team arrives on time with all necessary equipment, provides clear communication about the scope of work, and protects your property throughout the job.\n\nBefore work begins, we inspect your property to identify any concerns, discuss expectations, and move any outdoor items that might be in the way. We protect plants, landscaping, and delicate areas. During cleaning, our technicians work efficiently while maintaining safety standards. We'll update you as the work progresses.\n\nUpon completion, we do a final walkthrough to ensure you're satisfied with the results. We clean up any debris and leave your property looking pristine. We guarantee quality results and stand behind our work with our commitment to excellence.",
      relatedServices: ["house-washing", "driveway-cleaning", "sidewalk-cleaning"],
      relatedNeighborhoods: ["shem-creek", "lexington-park", "pin-oak"]
    },
    "driveway-maintenance-after-washing": {
      content: "After professional driveway cleaning, proper maintenance helps extend your driveway's life and appearance. First, seal any cracks or damage you notice. Small cracks can grow into larger problems if left untreated, potentially requiring expensive repairs or replacement.\n\nKeep water from pooling on your driveway. Standing water can penetrate the surface and cause deterioration. Ensure proper drainage around your driveway and fix any low spots that collect water. Clean up any oil or chemical spills promptly to prevent staining and surface damage.\n\nRegular sweeping removes dirt and debris that can accumulate over time. Consider resealing your concrete driveway every 2-3 years to protect against stains and UV damage. If weeds grow through cracks, remove them promptly. Schedule professional pressure washing annually to maintain your driveway's clean appearance and prevent dirt buildup.",
      relatedServices: ["driveway-cleaning", "sidewalk-cleaning", "house-washing"],
      relatedNeighborhoods: ["carolina-park", "dunes-west", "crowfield"]
    },
    "professional-vs-diy-pressure-washing": {
      content: "While DIY pressure washing might seem like a cost-saving option, professional pressure washing offers significant advantages. Equipment rental costs, risk of property damage, physical demands, and time investment often make professional service more economical in the long run.\n\nProfessional cleaners have training, experience, and expertise in handling different surfaces and situations. They know the correct pressure levels for various materials, have access to commercial-grade equipment, and understand proper safety protocols. Improper technique can damage siding, strip paint, damage grout, or cause water intrusion into your home.\n\nCanManCam handles the work safely and efficiently, giving you time to focus on other priorities. Our team is fully insured, so if any issues occur, you're protected. You'll get professional results that last, plus the satisfaction of knowing the job was done right.",
      relatedServices: ["house-washing", "window-cleaning", "gutter-cleaning"],
      relatedNeighborhoods: ["planters-pointe", "long-point", "shem-creek"]
    },
    "safe-pressure-washing-gutters": {
      content: "Yes, pressure washing is safe for gutters when performed by professionals using appropriate techniques. Improper pressure washing can damage gutters, bend them out of shape, or force water into areas where it shouldn't go, potentially causing leaks or water damage to your home's interior.\n\nProfessional gutter cleaning uses lower pressure combined with proper techniques to remove debris, leaves, pine needles, and dirt without damaging the gutter system. We carefully clean gutters and downspouts, ensuring water flows freely to direct water away from your foundation.\n\nOur team is experienced in gutter maintenance and knows how to handle different gutter types and materials. We ensure your gutters are ready to handle heavy rain, protect your foundation from water damage, and maintain the integrity of your home's exterior.",
      relatedServices: ["gutter-cleaning", "house-washing", "roof-cleaning"],
      relatedNeighborhoods: ["lexington-park", "pin-oak", "isle-of-palms"]
    },
    "best-time-year-pressure-wash": {
      content: "Spring and fall are the ideal times for pressure washing in Mount Pleasant. Spring cleaning prepares your home for summer entertaining and removes winter grime, pollen, and buildup. Fall cleaning removes summer dust, pollen, and prepares your property for winter weather.\n\nAvoid pressure washing in extreme conditions. Don't pressure wash during heavy rain or cold weather when temperatures are below 40°F, as water won't dry properly and can create ice hazards. Summer is acceptable for pressure washing, though hot weather can dry surfaces quickly, which is sometimes beneficial.\n\nFor homes in coastal areas like Isle of Palms or areas with heavy pollen, spring is especially important to remove salt residue, algae, and environmental contaminants. Schedule your pressure washing appointment early in spring or fall to ensure availability and get on our calendar before busy seasons.",
      relatedServices: ["house-washing", "driveway-cleaning", "sidewalk-cleaning"],
      relatedNeighborhoods: ["old-village", "park-west", "hamlin-plantation"]
    },
    "remove-concrete-stains": {
      content: "Stubborn stains on concrete driveways, sidewalks, and patios can be challenging to remove, but professional pressure washing solutions are highly effective. Oil stains require specific degreasers and techniques to break down the petroleum products and lift the stain from the concrete.\n\nRust stains from metal objects, pool chemicals, or acidic sources need specialized cleaning solutions. Concrete is porous and can absorb stains deeply, making immediate attention important to prevent permanent discoloration.\n\nOur team assesses the type and severity of stains and applies appropriate cleaning solutions combined with correct pressure levels. We work strategically to remove stains without damaging the concrete surface. For especially stubborn stains, we may recommend applying solutions and allowing time for them to work before pressure washing.",
      relatedServices: ["driveway-cleaning", "sidewalk-cleaning", "house-washing"],
      relatedNeighborhoods: ["carolina-park", "dunes-west", "crowfield"]
    },
    "window-cleaning-professional-vs-diy": {
      content: "Professional window cleaning offers several advantages over DIY methods. Professionals have specialized tools and techniques that achieve streak-free results that are difficult to replicate at home. Commercial-grade squeegees, scrapers, and solutions are designed for professional results.\n\nSafety is another major consideration. Cleaning second-story windows or skylights from a ladder creates fall hazards. Professional window cleaners have proper safety equipment and training to work safely at heights. They also protect your property from water damage or chemical spills that might occur during DIY cleaning.\n\nProfessional window cleaners save you time and effort. They clean all your windows thoroughly, including hard-to-reach areas and window frames. The results are crystal clear windows that let natural light shine through and improve your home's appearance.",
      relatedServices: ["window-cleaning", "house-washing", "sidewalk-cleaning"],
      relatedNeighborhoods: ["planters-pointe", "long-point", "shem-creek"]
    },
    "pressure-washing-selling-home": {
      content: "Yes, professional pressure washing significantly improves your home's curb appeal and can increase perceived property value. When buyers approach a home, their first impression heavily influences their perception of the entire property. A clean exterior makes a powerful positive impression.\n\nPressure washing removes years of dirt, algae, mold, and weathering that make homes look old and neglected. A clean driveway, house siding, sidewalks, and windows immediately suggest that the home is well-maintained. This positive first impression can influence buyers' entire perception of the property.\n\nClean windows allow natural light to showcase the interior. Pressure-washed siding displays the home's true color and condition. A clean driveway suggests proper maintenance throughout the property. Many real estate agents recommend pressure washing as one of the highest ROI improvements before listing a home.",
      relatedServices: ["house-washing", "driveway-cleaning", "window-cleaning"],
      relatedNeighborhoods: ["old-village", "park-west", "isle-of-palms"]
    },
    "prepare-property-pressure-washing": {
      content: "Preparing your property before professional pressure washing ensures a smooth, efficient job. First, move any outdoor furniture, decorations, planters, or items that might be in the way. This includes grills, patio furniture, lawn ornaments, and any other moveable items in the work area.\n\nProtect sensitive plants by indicating their location to our team. We take care to avoid damaging landscaping, but letting us know about delicate plants helps us plan our approach. Close windows and doors to prevent water intrusion. If you have outdoor electrical outlets or AC units that might be exposed, let us know so we can take appropriate precautions.\n\nInform neighbors that we'll be working on your property, especially if parking might be affected or work will generate noise. In neighborhoods like Hamlin Plantation or Carolina Park, good neighbor communication is always appreciated.",
      relatedServices: ["house-washing", "driveway-cleaning", "gutter-cleaning"],
      relatedNeighborhoods: ["hamlin-plantation", "carolina-park", "dunes-west"]
    },
    "trash-can-cleaning-importance": {
      content: "Regular trash can cleaning is often overlooked, but it's important for property hygiene and neighborhood standards. Trash cans accumulate bacteria, mold, and food residue that create odors and attract pests like raccoons, rats, and insects. This creates health hazards and pest problems for your property.\n\nClean trash cans reduce odors that affect your home and neighborhood. They eliminate bacteria and germs that can contaminate your property. Regular cleaning also extends the life of your trash cans by preventing rust and deterioration.\n\nOur trash can cleaning service sanitizes and deodorizes your cans using professional-grade solutions. It's an affordable service that makes a noticeable difference in property cleanliness and neighborhood appearance. Most Mount Pleasant homeowners appreciate this service, especially in communities like Isle of Palms where oceanside living can intensify odor issues.",
      relatedServices: ["trash-can-cleaning", "house-washing", "driveway-cleaning"],
      relatedNeighborhoods: ["isle-of-palms", "shem-creek", "old-village"]
    },
    "mold-mildew-removal": {
      content: "Mold and mildew are common problems on Mount Pleasant properties, especially in coastal areas and shaded locations. These organisms not only look unsightly but can damage surfaces and pose health risks, particularly for people with allergies or respiratory issues.\n\nMold and mildew thrive in damp, shady conditions. Properties under trees, in north-facing locations, or near water are especially prone to these issues. Left untreated, mold can deteriorate roofing, siding, and other surfaces over time.\n\nProfessional pressure washing or soft washing removes mold and mildew organisms safely and effectively. We use specialized cleaning solutions that eliminate these contaminants without harming your property or landscaping. Regular pressure washing prevents mold and mildew from accumulating, protecting your home's surfaces and your family's health. Many Mount Pleasant properties benefit from regular mold and mildew removal, especially in neighborhoods like Shem Creek and Lexington Park where environmental moisture is higher.",
      relatedServices: ["house-washing", "roof-cleaning", "gutter-cleaning"],
      relatedNeighborhoods: ["shem-creek", "lexington-park", "planters-pointe"]
    }
  };

  const content = blogContent[post.slug];
  
  const relatedServices = content?.relatedServices || [];
  const relatedNeighborhoods = content?.relatedNeighborhoods || [];

  return (
    <div>
      <Breadcrumb items={[
        { label: "Blog", href: "/pressure-washing-tips" },
        { label: post.title, href: `/pressure-washing-tips/${post.slug}` }
      ]} />

      <main className="container mx-auto px-4 py-12">
        <article className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            {post.question}
          </h1>
          <p className="text-gray-500 text-sm mb-8">Posted on December 22, 2025 | CanManCam Pressure Washing</p>

          <div className="bg-secondary text-white p-6 rounded-none mb-8">
            <p className="text-lg leading-relaxed">
              {post.answer}
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-base leading-relaxed text-gray-700 whitespace-pre-wrap">
              {content?.content}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Related Services</h3>
              <div className="space-y-3">
                {services.filter(s => relatedServices.includes(s.slug)).map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`}>
                    <a className="block p-3 border-l-4 border-accent hover:bg-gray-50 transition-colors">
                      <h4 className="font-bold text-primary">{service.name}</h4>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </a>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Service Areas</h3>
              <div className="space-y-3">
                {neighborhoods.filter(n => relatedNeighborhoods.includes(n.slug)).map((neighborhood) => (
                  <Link key={neighborhood.slug} href={`/sc/${neighborhood.slug}-pressure-washing`}>
                    <a className="block p-3 border-l-4 border-accent hover:bg-gray-50 transition-colors">
                      <h4 className="font-bold text-primary">{neighborhood.name}</h4>
                      <p className="text-sm text-gray-600">Pressure Washing Services</p>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>

      <section className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Have More Questions?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact CanManCam today for professional pressure washing services in Mount Pleasant. We're happy to discuss your specific needs.
          </p>
          <Button asChild className="bg-accent hover:bg-accent/90 text-primary font-bold uppercase py-6 px-10">
            <a href="https://clienthub.getjobber.com/hubs/bb7e70fa-ec16-417a-9059-46487bf60acb/public/requests/2107339/new" target="_blank" rel="noopener noreferrer">
              Get Free Estimate
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
