import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      date: "2 weeks ago",
      rating: 5,
      text: "CanManCam did an amazing job on our house and driveway! The team was professional, on time, and the results exceeded our expectations. Our home looks brand new again. Highly recommend!"
    },
    {
      name: "Mike Thompson",
      date: "1 month ago",
      rating: 5,
      text: "I called for a quote and got a response immediately. They came out the next day to clean my roof and gutters. Very fair pricing and excellent service. Will definitely use them again."
    },
    {
      name: "Emily Davis",
      date: "2 months ago",
      rating: 5,
      text: "Best pressure washing service in Mount Pleasant! They were careful with my plants and outdoor furniture. The soft wash on the siding made such a huge difference."
    },
    {
      name: "Robert Wilson",
      date: "3 months ago",
      rating: 5,
      text: "Professional, courteous, and detailed. They even cleaned a walkway I didn't ask for. Great attention to detail. 5 stars all the way."
    },
    {
      name: "Jessica Brown",
      date: "4 months ago",
      rating: 5,
      text: "My driveway was covered in oil stains and algae. CanManCam removed it all. It looks like fresh concrete now. Thank you!"
    },
    {
      name: "David Miller",
      date: "5 months ago",
      rating: 5,
      text: "Commercial service was top notch. Cleaned our storefront and sidewalk overnight so we didn't disrupt customers. Great job."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-body">
      <Header />
      <div className="bg-primary py-20 text-center text-white">
        <h1 className="text-5xl font-heading font-bold">Customer Reviews</h1>
        <p className="mt-4 text-xl opacity-90">See what your neighbors are saying about us</p>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="border-none shadow-md bg-gray-50 hover:bg-white transition-colors">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-lg text-primary">{review.name}</h4>
                    <span className="text-xs text-gray-400">{review.date}</span>
                  </div>
                  <div className="flex text-accent">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 italic">"{review.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
