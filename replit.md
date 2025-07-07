# Family Budget Application

## Overview

This is a full-stack family budget application built with React, Express, and PostgreSQL. It's designed to help families track their grocery expenses and get shopping recommendations. The application features a modern UI with shadcn/ui components, server-side product management with in-memory storage (with plans for PostgreSQL integration), and a responsive design optimized for family use.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and gradients
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (currently using in-memory storage)
- **Session Management**: PostgreSQL session store ready for implementation
- **API Design**: RESTful API with proper error handling and validation
- **Development**: Hot reload with Vite integration in development mode

### Database Schema
- **Products Table**: Stores product information with fields for name, category, description, price, and icon
- **Schema Validation**: Zod schemas for runtime validation and TypeScript types
- **Migration Support**: Drizzle migrations configured for PostgreSQL

## Key Components

### Data Models
- **Product**: Core entity with id, name, category, description, price, and icon
- **Categories**: Predefined categories (bread, dairy, eggs, meat, vegetables, fruits, basics, spices)
- **Validation**: Comprehensive input validation with Zod schemas

### Frontend Components
- **Navigation**: Multi-page navigation with active state indicators
- **Product Management**: CRUD operations with modal-based editing
- **Category Organization**: Products grouped by category with visual indicators
- **Price Analysis**: Cost breakdown with min/max/average pricing
- **Statistics**: Family budget insights and recommendations
- **Responsive Design**: Mobile-first approach with breakpoint considerations

### Backend Services
- **Storage Layer**: Abstracted storage interface supporting both in-memory and database implementations
- **API Routes**: RESTful endpoints for product CRUD operations
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Logging**: Request logging with performance metrics

## Data Flow

1. **Client Request**: User interactions trigger API calls through TanStack Query
2. **Server Processing**: Express routes handle requests with validation
3. **Data Layer**: Storage interface manages data persistence
4. **Response**: JSON responses with proper error handling
5. **UI Updates**: React components re-render based on query state changes

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database driver
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Headless UI components
- **tailwindcss**: Utility-first CSS framework
- **zod**: Schema validation library
- **wouter**: Lightweight routing library

### Development Dependencies
- **vite**: Build tool and dev server
- **typescript**: Type checking
- **tsx**: TypeScript execution
- **esbuild**: Fast bundler for production builds

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with hot reload
- **Database**: In-memory storage for quick development
- **Environment**: NODE_ENV=development with dev-specific features

### Production Environment
- **Build Process**: Vite build for frontend, esbuild for backend
- **Database**: PostgreSQL with Drizzle migrations
- **Deployment**: Node.js server serving static files and API
- **Environment Variables**: DATABASE_URL for PostgreSQL connection

### Build Commands
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server
- `npm run db:push`: Database schema updates

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 07, 2025. Initial setup