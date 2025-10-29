# Volza Platform

A comprehensive B2B import-export marketplace platform built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

### 🔐 Authentication & User Management
- Secure login/signup with email verification
- Role-based access control (Admin, User, Manager)
- Protected and public route handling
- User profile management
- Organization onboarding

### 🔍 Advanced Search Capabilities
- **Find Buyers**: Discover potential buyers for your products
- **Find Suppliers**: Connect with reliable suppliers worldwide
- **Product Search**: Search for specific products and specifications
- **Company Search**: Find companies by industry and location
- **Key Contacts**: Access key decision makers and contacts

### 📊 Dashboard & Analytics
- Comprehensive dashboard with key metrics
- Real-time analytics and insights
- Quick action buttons for common tasks
- Recent activity tracking

### 📋 Task Management
- Create, assign, and track tasks
- Priority levels (Low, Medium, High, Urgent)
- Status management (Pending, In Progress, Completed, Cancelled)
- Team collaboration features
- Task comments and attachments

### 🎫 Ticket Management
- Support ticket system
- Priority and category management
- Assignment to team members
- Status tracking and resolution

### 📁 Workspace & Collections
- Save searches for quick access
- Organize contacts and companies into collections
- Share collections with team members
- Export data functionality

### 🌍 Global Features
- Multi-country support
- Currency conversion
- Industry-specific categorization
- Company size and revenue filtering

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library
- **State Management**: React Query (TanStack Query)
- **Forms**: React Hook Form with Zod validation
- **HTTP Client**: Axios
- **Icons**: Heroicons
- **Notifications**: React Hot Toast

## Project Structure

```
Frontend-volza/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Protected routes
│   │   ├── dashboard/           # Dashboard pages
│   │   ├── searches/            # Search pages
│   │   ├── tasks/               # Task management
│   │   ├── tickets/             # Ticket management
│   │   ├── workspace/           # Workspace features
│   │   ├── countries/           # Countries page
│   │   ├── collections/         # Collections page
│   │   └── accounts/            # Account management
│   ├── (public)/                # Public routes
│   │   ├── login/               # Login page
│   │   └── signup/              # Signup page
│   └── globals.css              # Global styles
├── components/                   # Reusable components
│   ├── ui/                      # Base UI components
│   ├── forms/                   # Form components
│   ├── charts/                  # Chart components
│   ├── tables/                  # Table components
│   ├── layout/                  # Layout components
│   └── auth/                    # Authentication components
├── hooks/                       # Custom React hooks
│   ├── auth/                    # Authentication hooks
│   ├── api/                     # API hooks
│   └── ui/                      # UI hooks
├── services/                    # API services
│   ├── api/                     # Base API client
│   ├── auth/                    # Authentication service
│   ├── search/                  # Search service
│   ├── tasks/                   # Task service
│   └── tickets/                 # Ticket service
├── types/                       # TypeScript type definitions
│   ├── api/                     # API types
│   ├── auth/                    # Auth types
│   └── ui/                      # UI types
├── utils/                       # Utility functions
│   ├── constants/               # App constants
│   ├── helpers/                 # Helper functions
│   └── validators/              # Validation schemas
└── lib/                         # Library configurations
    ├── api-client/              # Axios configuration
    └── query-client/            # React Query configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- API backend running on `http://localhost:3001`

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Frontend-volza
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

4. Update environment variables
```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

5. Run the development server
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking

## Key Features Implementation

### Authentication Flow
1. User signs up with organization details
2. Email verification required
3. Onboarding process to complete profile
4. Role-based access to different features

### Search Functionality
- Real-time search with debouncing
- Advanced filtering options
- Pagination support
- Search suggestions
- Save searches for later use

### Task Management
- Create tasks with priorities and due dates
- Assign tasks to team members
- Track progress with status updates
- Add comments and attachments
- Filter and sort tasks

### Responsive Design
- Mobile-first approach
- Responsive sidebar navigation
- Adaptive layouts for different screen sizes
- Touch-friendly interface

## API Integration

The application integrates with a REST API backend. Key endpoints include:

- `/auth/*` - Authentication endpoints
- `/search/*` - Search functionality
- `/tasks/*` - Task management
- `/tickets/*` - Ticket management
- `/workspace/*` - Workspace features

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team.