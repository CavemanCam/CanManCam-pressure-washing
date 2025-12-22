# CanManCam Pressure Washing Website

## Overview

This is a professional, SEO-optimized website for CanManCam, a pressure washing company serving Mount Pleasant, SC. The site is built as a full-stack application with a React frontend and Express backend, designed to generate leads through service pages, neighborhood-specific landing pages, blog content, and customer reviews.

The website follows a local service business structure with:
- 6 core service pages (house washing, driveway cleaning, sidewalk cleaning, gutter cleaning, window cleaning, trash can cleaning)
- 12 Mount Pleasant neighborhood-specific service area pages
- Blog/FAQ content for SEO
- Project showcase and gallery pages
- Contact forms integrated with Jobber for lead management

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS v4 with custom theme variables
- **UI Components**: shadcn/ui component library (New York style)
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite

The frontend follows a page-based architecture where each route maps to a dedicated page component in `client/src/pages/`. Shared data (services, neighborhoods, reviews, blog posts) is centralized in `client/src/lib/data.ts`.

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Server**: Node.js with HTTP server
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts` for database models

The backend serves the static frontend in production and provides API routes prefixed with `/api`. Currently uses in-memory storage (`MemStorage`) but is structured for PostgreSQL migration.

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Route page components
│   │   ├── lib/         # Utilities and data
│   │   └── hooks/       # Custom React hooks
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   └── storage.ts    # Data storage interface
├── shared/           # Shared types and schemas
│   └── schema.ts     # Drizzle database schema
└── migrations/       # Database migrations
```

### Design System
- **Primary Color**: Deep blue (#153B56)
- **Accent Color**: Lighter blue (#246593)
- **Typography**: Bebas Neue for headings, Roboto for body text
- **Style**: Professional service business aesthetic with bold CTAs

### Key Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run db:push` - Push database schema changes

## External Dependencies

### Third-Party Services
- **Jobber**: Lead management and quote requests via external forms (clienthub.getjobber.com)
- **Google Fonts**: Bebas Neue and Roboto typefaces

### Database
- **PostgreSQL**: Primary database (configured via `DATABASE_URL` environment variable)
- **Drizzle ORM**: Database toolkit with schema in `shared/schema.ts`

### Key NPM Packages
- `@tanstack/react-query`: Server state management
- `drizzle-orm` / `drizzle-zod`: Database ORM and validation
- `wouter`: Client-side routing
- `@radix-ui/*`: Accessible UI primitives (via shadcn/ui)
- `tailwindcss`: Utility-first CSS framework
- `express`: Backend web framework