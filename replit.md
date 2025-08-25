# Overview

This is a React-based landing page application for "Bíblia Goods - ColoriMente", a Christian children's coloring book sales platform. The application is built as a full-stack solution with a Node.js/Express backend and React frontend, designed to showcase and sell digital Christian coloring books for children. The landing page follows modern design principles with colorful, child-friendly aesthetics and includes sections for hero messaging, product benefits, book showcases, testimonials, pricing, and FAQ.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation schemas

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API design with `/api` prefix routing
- **Development Server**: Vite middleware integration for hot reloading in development
- **Error Handling**: Centralized error middleware with proper HTTP status codes

## Data Storage Solutions
- **Database**: PostgreSQL with Neon Database as the serverless provider
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema evolution
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple
- **Development Storage**: In-memory storage implementation for development/testing

## Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL backing store
- **User Schema**: Basic user model with username/password authentication
- **Storage Interface**: Abstracted storage layer supporting both memory and database implementations

## External Dependencies
- **Database Provider**: Neon Database (@neondatabase/serverless) for serverless PostgreSQL
- **UI Framework**: Radix UI primitives for accessible component foundations
- **Fonts**: Google Fonts integration (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date manipulation utilities
- **Development Tools**: Replit-specific plugins for development environment integration
- **Build Tools**: ESBuild for server-side bundling, Vite for client-side bundling