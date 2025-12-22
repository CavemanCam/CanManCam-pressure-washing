import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

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
      <Link href="/">
        <a className="text-primary hover:text-accent transition-colors font-medium">Home</a>
      </Link>
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4 text-gray-400" />
          {idx === items.length - 1 ? (
            <span className="text-gray-600 font-medium">{item.label}</span>
          ) : (
            <Link href={item.href}>
              <a className="text-primary hover:text-accent transition-colors font-medium">{item.label}</a>
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
