import { Breadcrumb } from "@/components/Breadcrumb";

export default function Gallery() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Gallery", href: "/gallery" }]} />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
          Before & After Gallery
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          See the transformations CanManCam achieves with professional pressure washing.
        </p>
        <div className="bg-gray-50 p-12 text-center rounded-none">
          <p className="text-gray-600 mb-4">Gallery Coming Soon</p>
          <p className="text-gray-500">Check back soon to see our latest pressure washing projects in Mount Pleasant.</p>
        </div>
      </main>
    </div>
  );
}
