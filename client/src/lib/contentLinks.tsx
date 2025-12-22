import React from 'react';
import { Link } from 'wouter';
import { services, neighborhoods, blogPosts } from './data';

interface InternalLink {
  keyword: string;
  href: string;
  title: string;
}

const serviceLinks: InternalLink[] = services.map(s => ({
  keyword: s.name.toLowerCase(),
  href: `/services/${s.slug}`,
  title: s.name
}));

const neighborhoodLinks: InternalLink[] = neighborhoods.map(n => ({
  keyword: n.name.toLowerCase(),
  href: `/sc/${n.slug}-pressure-washing`,
  title: n.name
}));

const additionalKeywordLinks: InternalLink[] = [
  { keyword: 'soft washing', href: '/pressure-washing-tips/pressure-vs-soft-washing', title: 'soft washing' },
  { keyword: 'soft wash', href: '/pressure-washing-tips/pressure-vs-soft-washing', title: 'soft wash' },
  { keyword: 'price beat guarantee', href: '/price-beat-guarantee', title: 'Price Beat Guarantee' },
  { keyword: 'free estimate', href: '/contact', title: 'free estimate' },
  { keyword: 'mold and mildew', href: '/pressure-washing-tips/mold-mildew-removal', title: 'mold and mildew' },
  { keyword: 'algae growth', href: '/pressure-washing-tips/how-often-pressure-wash-house', title: 'algae growth' },
  { keyword: 'curb appeal', href: '/services/house-washing', title: 'curb appeal' },
  { keyword: 'exterior cleaning', href: '/services', title: 'exterior cleaning' },
  { keyword: 'pressure washing services', href: '/services', title: 'pressure washing services' },
];

const allLinks: InternalLink[] = [
  ...serviceLinks,
  ...neighborhoodLinks,
  ...additionalKeywordLinks,
];

export function injectContextualLinks(
  text: string,
  excludeHrefs: string[] = [],
  maxLinks: number = 5
): React.ReactNode[] {
  const excludeSet = new Set(excludeHrefs.map(h => h.toLowerCase()));
  
  const availableLinks = allLinks.filter(link => !excludeSet.has(link.href.toLowerCase()));
  
  const usedKeywords = new Set<string>();
  const parts: React.ReactNode[] = [];
  let currentIndex = 0;
  let linksAdded = 0;
  const lowerText = text.toLowerCase();
  
  interface Match {
    start: number;
    end: number;
    link: InternalLink;
    originalText: string;
  }
  
  const matches: Match[] = [];
  
  for (const link of availableLinks) {
    if (linksAdded >= maxLinks) break;
    
    const keywordLower = link.keyword.toLowerCase();
    let searchStart = 0;
    
    while (searchStart < lowerText.length) {
      const idx = lowerText.indexOf(keywordLower, searchStart);
      if (idx === -1) break;
      
      const beforeChar = idx > 0 ? lowerText[idx - 1] : ' ';
      const afterChar = idx + keywordLower.length < lowerText.length ? lowerText[idx + keywordLower.length] : ' ';
      
      const isWordBoundary = /[\s.,;:!?'"()\-—]/.test(beforeChar) && /[\s.,;:!?'"()\-—]/.test(afterChar);
      
      if (isWordBoundary && !usedKeywords.has(keywordLower)) {
        const overlaps = matches.some(m => 
          (idx >= m.start && idx < m.end) || 
          (idx + keywordLower.length > m.start && idx + keywordLower.length <= m.end)
        );
        
        if (!overlaps) {
          matches.push({
            start: idx,
            end: idx + keywordLower.length,
            link,
            originalText: text.substring(idx, idx + keywordLower.length)
          });
          usedKeywords.add(keywordLower);
          linksAdded++;
          break;
        }
      }
      
      searchStart = idx + 1;
    }
  }
  
  matches.sort((a, b) => a.start - b.start);
  
  for (const match of matches) {
    if (match.start > currentIndex) {
      parts.push(text.substring(currentIndex, match.start));
    }
    
    parts.push(
      <Link 
        key={`link-${match.start}`}
        href={match.link.href}
        className="text-accent hover:text-accent/80 font-medium hover:underline"
      >
        {match.originalText}
      </Link>
    );
    
    currentIndex = match.end;
  }
  
  if (currentIndex < text.length) {
    parts.push(text.substring(currentIndex));
  }
  
  return parts.length > 0 ? parts : [text];
}

export function LinkedParagraph({ 
  text, 
  excludeHrefs = [],
  maxLinks = 5,
  className = "text-base leading-relaxed text-gray-700 mb-6"
}: { 
  text: string; 
  excludeHrefs?: string[];
  maxLinks?: number;
  className?: string;
}) {
  const content = injectContextualLinks(text, excludeHrefs, maxLinks);
  return <p className={className}>{content}</p>;
}

export function getRecommendedLinksForNeighborhood(neighborhoodSlug: string): InternalLink[] {
  const recommendations: InternalLink[] = [];
  
  recommendations.push({
    keyword: 'house washing',
    href: '/services/house-washing',
    title: 'House Washing'
  });
  recommendations.push({
    keyword: 'driveway cleaning',
    href: '/services/driveway-cleaning',
    title: 'Driveway Cleaning'
  });
  recommendations.push({
    keyword: 'gutter cleaning',
    href: '/services/gutter-cleaning',
    title: 'Gutter Cleaning'
  });
  
  const relatedPosts = blogPosts.filter(p => 
    p.relatedNeighborhoods?.includes(neighborhoodSlug)
  ).slice(0, 2);
  
  for (const post of relatedPosts) {
    const keywords = post.title.toLowerCase().split(' ').slice(0, 3).join(' ');
    recommendations.push({
      keyword: keywords,
      href: `/pressure-washing-tips/${post.slug}`,
      title: post.title
    });
  }
  
  return recommendations;
}

export function getRecommendedLinksForService(serviceSlug: string): InternalLink[] {
  const recommendations: InternalLink[] = [];
  
  const topNeighborhoods = neighborhoods.slice(0, 3);
  for (const n of topNeighborhoods) {
    recommendations.push({
      keyword: n.name.toLowerCase(),
      href: `/sc/${n.slug}-pressure-washing`,
      title: n.name
    });
  }
  
  const service = services.find(s => s.slug === serviceSlug);
  if (service?.relatedBlogPosts) {
    const relatedPosts = blogPosts.filter(p => 
      service.relatedBlogPosts?.includes(p.slug)
    ).slice(0, 2);
    
    for (const post of relatedPosts) {
      recommendations.push({
        keyword: 'pressure washing',
        href: `/pressure-washing-tips/${post.slug}`,
        title: post.title
      });
    }
  }
  
  return recommendations;
}

export function getRecommendedLinksForBlogPost(postSlug: string): InternalLink[] {
  const recommendations: InternalLink[] = [];
  const post = blogPosts.find(p => p.slug === postSlug);
  
  if (post?.relatedServices) {
    for (const serviceSlug of post.relatedServices.slice(0, 2)) {
      const service = services.find(s => s.slug === serviceSlug);
      if (service) {
        recommendations.push({
          keyword: service.name.toLowerCase(),
          href: `/services/${service.slug}`,
          title: service.name
        });
      }
    }
  }
  
  if (post?.relatedNeighborhoods) {
    for (const neighborhoodSlug of post.relatedNeighborhoods.slice(0, 2)) {
      const neighborhood = neighborhoods.find(n => n.slug === neighborhoodSlug);
      if (neighborhood) {
        recommendations.push({
          keyword: neighborhood.name.toLowerCase(),
          href: `/sc/${neighborhood.slug}-pressure-washing`,
          title: neighborhood.name
        });
      }
    }
  }
  
  const otherPosts = blogPosts.filter(p => p.slug !== postSlug).slice(0, 1);
  for (const otherPost of otherPosts) {
    recommendations.push({
      keyword: 'pressure washing tips',
      href: `/pressure-washing-tips/${otherPost.slug}`,
      title: otherPost.title
    });
  }
  
  return recommendations;
}
