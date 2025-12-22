import type { Express } from "express";

const baseUrl = "https://canmancam.replit.app";

const neighborhoods = [
  "isle-of-palms", "old-village", "park-west", "hamlin-plantation",
  "carolina-park", "dunes-west", "planters-pointe", "long-point", "shem-creek"
];

const services = [
  "house-washing", "driveway-cleaning", "sidewalk-cleaning",
  "roof-cleaning", "gutter-cleaning", "window-cleaning", "trash-can-cleaning"
];

const blogPosts = [
  "how-often-pressure-wash-house", "pressure-vs-soft-washing",
  "pressure-washing-cost-mount-pleasant", "pressure-washing-damage",
  "professional-pressure-washing-expectations", "prepare-property-pressure-washing",
  "mold-mildew-removal", "trash-can-cleaning-importance", "best-time-year-pressure-wash"
];

const projects = [
  "old-village-historic-home", "park-west-driveway", "isle-of-palms-beach-house",
  "hamlin-plantation-estate", "carolina-park-new-construction", "dunes-west-pool-deck",
  "shem-creek-condo", "long-point-waterfront", "planters-pointe-complete"
];

const staticPages = [
  { url: "/", priority: "1.0", changefreq: "weekly" },
  { url: "/about", priority: "0.8", changefreq: "monthly" },
  { url: "/services", priority: "0.9", changefreq: "weekly" },
  { url: "/service-areas", priority: "0.8", changefreq: "monthly" },
  { url: "/contact", priority: "0.8", changefreq: "monthly" },
  { url: "/reviews", priority: "0.8", changefreq: "weekly" },
  { url: "/projects", priority: "0.7", changefreq: "weekly" },
  { url: "/pressure-washing-tips", priority: "0.8", changefreq: "weekly" },
  { url: "/pressure-washing-faq", priority: "0.8", changefreq: "monthly" },
  { url: "/gallery", priority: "0.7", changefreq: "weekly" },
  { url: "/price-beat-guarantee", priority: "0.7", changefreq: "monthly" },
  { url: "/sitemap", priority: "0.3", changefreq: "monthly" },
  { url: "/privacy", priority: "0.3", changefreq: "yearly" },
  { url: "/terms", priority: "0.3", changefreq: "yearly" },
  { url: "/feedback", priority: "0.5", changefreq: "monthly" },
];

export function registerSitemapRoutes(app: Express) {
  app.get("/sitemap.xml", (req, res) => {
    const today = new Date().toISOString().split("T")[0];
    
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

    staticPages.forEach(page => {
      xml += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
    });

    services.forEach(slug => {
      xml += `  <url>
    <loc>${baseUrl}/services/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
    });

    neighborhoods.forEach(slug => {
      xml += `  <url>
    <loc>${baseUrl}/sc/${slug}-pressure-washing</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
    });

    blogPosts.forEach(slug => {
      xml += `  <url>
    <loc>${baseUrl}/pressure-washing-tips/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
    });

    projects.forEach(slug => {
      xml += `  <url>
    <loc>${baseUrl}/projects/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
    });

    xml += `</urlset>`;

    res.header("Content-Type", "application/xml");
    res.send(xml);
  });

  app.get("/robots.txt", (req, res) => {
    const robotsTxt = `# robots.txt for CanManCam Pressure Washing
User-agent: *
Allow: /

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay for politeness
Crawl-delay: 1
`;

    res.header("Content-Type", "text/plain");
    res.send(robotsTxt);
  });
}
