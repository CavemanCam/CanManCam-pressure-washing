import { Link } from "wouter";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="container mx-auto px-4 py-4 flex items-center gap-2 text-sm">
      <Link href="/" className="text-primary hover:text-accent transition-colors font-medium">
        Home
      </Link>
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <span className="text-gray-400">›</span>
          {idx === items.length - 1 ? (
            <span className="text-gray-600 font-medium">{item.label}</span>
          ) : (
            <Link href={item.href} className="text-primary hover:text-accent transition-colors font-medium">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
