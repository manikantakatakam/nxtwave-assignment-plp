# Pixel Perfect Palettes

Pixel Perfect Palettes is a modern React web application built with TypeScript and Vite. It features a product discovery page with filtering capabilities, user authentication (sign-in and sign-up), and a responsive UI powered by Radix UI components and Tailwind CSS.

## Technologies Used

- React 18
- TypeScript
- Vite
- React Router DOM
- React Query (TanStack Query)
- Radix UI components
- Tailwind CSS
- Node.js (for backend server)
- Other libraries: bcrypt, jsonwebtoken, mongoose, lucide-react, date-fns, and more

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd pixel-perfect-palettes-56
```

2. Install dependencies:

```bash
npm install
```

## Running the Development Server

Start the development server along with the backend server:

```bash
npm run dev
```

This runs both the Vite frontend and the Node.js backend concurrently.

Open your browser and navigate to `http://localhost:5173` (or the port Vite specifies) to view the app.

## Building for Production

To build the frontend for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

- `src/` - Main source code
  - `components/` - Reusable UI components, layout, and product-related components
  - `pages/` - Application pages (Index, SignIn, SignUp, NotFound)
  - `hooks/` - Custom React hooks
  - `lib/` - Utility functions
  - `App.tsx` - Main app component with routing
  - `main.tsx` - React app entry point
- `server/` - Backend server code (authentication, API)
- `public/` - Static assets (images, robots.txt, etc.)
- `package.json` - Project metadata and scripts
- `vite.config.ts` - Vite configuration
- `tailwind.config.ts` - Tailwind CSS configuration

## Features

- Product discovery page with filtering sidebar and product cards
- Responsive design with mobile support
- User authentication with sign-in and sign-up forms
- Notifications using toast components
- Routing with React Router DOM
- Data fetching and caching with React Query

## Authentication

- Sign in and sign up pages post credentials to backend endpoints (`/signin` and `/signup`)
- On successful sign-in, users are redirected to the product discovery page
- Basic error handling and validation on forms

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
