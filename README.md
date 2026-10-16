# E-Commerce Website

A modern e-commerce web application built with **Next.js** and **React**, featuring an interactive shopping experience, animated UI components, and authentication integration.

**Live Demo:** [ecommerce-series.vercel.app](https://ecommerce-series.vercel.app/)

## Overview

This project explores building an e-commerce storefront using Next.js, with a focus on reusable UI components, responsive web design, authentication, and integration with external product APIs.

## Tech Stack

- **Framework:** Next.js 12
- **Frontend:** React 17
- **Authentication:** NextAuth.js
- **Animations:** Framer Motion
- **API Requests:** Axios
- **Icons:** React Icons
- **Utilities:** Classnames
- **Deployment:** Vercel

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- Yarn
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/Permanaa/ecommerce-nextjs.git
cd ecommerce-nextjs
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Configure Environment Variables

Create a local environment file from the example:

```bash
cp .env.local.example .env.local
```

Configure the required variables in `.env.local`:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_generated_secret

NEXT_PUBLIC_GOOGLE_ID=your_google_client_id
NEXT_PUBLIC_GOOGLE_SECRET=your_google_client_secret

NEXT_PUBLIC_RAPIDAPI_HOST=your_rapidapi_host
NEXT_PUBLIC_RAPIDAPI_KEY=your_rapidapi_key
```

Replace the placeholder values with the credentials required by your local configuration.

**Security note:** Never commit real API keys, OAuth client secrets, or authentication secrets to version control. Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser, so do not store private credentials under that prefix.

### 4. Run the Development Server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `yarn dev` | Start the development server |
| `yarn build` | Create a production build |
| `yarn start` | Start the production server |
| `yarn lint` | Run the configured Next.js lint command |

## Project Structure

```text
ecommerce-nextjs/
├── public/                  # Static assets
├── src/                     # Application source code
├── .env.local.example       # Environment variable template
├── .eslintrc.json           # ESLint configuration
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies and scripts
├── yarn.lock                # Dependency lockfile
└── README.md                # Project documentation
```

## Deployment

The application is deployed on Vercel.

To deploy your own instance:

1. Import the repository into [Vercel](https://vercel.com/).
2. Configure the required environment variables in your project settings.
3. Deploy the application.
4. Update `NEXTAUTH_URL` to match your production URL and configure the relevant OAuth provider callback URLs.

## Learning Objectives

This project demonstrates practical experience with:

- Building web interfaces using Next.js and React.
- Creating animated interactions with Framer Motion.
- Integrating authentication with NextAuth.js.
- Connecting a frontend application to external APIs.
- Managing environment-based configuration.
- Preparing a Next.js application for deployment.

---
