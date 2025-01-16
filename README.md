# V1 - Full-Stack Application Template

A modern full-stack application template built with Next.js 14, featuring a dashboard, authentication, and various integrations.

## Features

### ✅ Implemented Features

- **Authentication & Authorization**
  - Supabase authentication
  - Protected routes
  - Sign in/Sign out functionality

- **Dashboard**
  - Main dashboard with quick actions and metrics
  - Overview page with key statistics
  - Analytics page
  - Audio content management
  - User management
  - Settings page
  - System status monitoring

- **UI/UX**
  - Modern, responsive design
  - Dark/Light theme support
  - Shadcn UI components
  - TailwindCSS styling
  - Mobile-first approach

- **Development Environment**
  - TypeScript for type safety
  - Turborepo for monorepo management
  - Biome for linting and formatting
  - Next.js 14 app router
  - Internationalization (i18n) setup

### 🚧 Features In Progress

- **Email Integration**
  - React Email templates not configured
  - Resend integration pending
  - Email verification flow needed

- **Analytics & Monitoring**
  - OpenPanel analytics integration pending
  - Sentry error tracking setup needed
  - Performance monitoring implementation required

- **Link Management**
  - Dub integration for sharable links not implemented

- **Background Processing**
  - Trigger.dev jobs configuration pending
  - Background task management needed

- **Caching & Rate Limiting**
  - Upstash Redis setup required
  - Rate limiting implementation needed

- **Billing**
  - Polar integration pending
  - Payment processing not implemented
  - Subscription management needed

## Tech Stack

[Next.js](https://nextjs.org/) - Framework<br>
[Turborepo](https://turbo.build) - Build system<br>
[Biome](https://biomejs.dev) - Linter, formatter<br>
[TailwindCSS](https://tailwindcss.com/) - Styling<br>
[Shadcn](https://ui.shadcn.com/) - UI components<br>
[TypeScript](https://www.typescriptlang.org/) - Type safety<br>
[Supabase](https://supabase.com/) - Authentication, database, storage<br>
[Upstash](https://upstash.com/) - Cache and rate limiting<br>
[React Email](https://react.email/) - Email templates<br>
[Resend](https://resend.com/) - Email delivery<br>
[i18n](https://next-international.vercel.app/) - Internationalization<br>
[Sentry](https://sentry.io/) - Error handling/monitoring<br>
[Dub](https://dub.sh/) - Sharable links<br>
[Trigger.dev](https://trigger.dev/) - Background jobs<br>
[OpenPanel](https://openpanel.dev/) - Analytics<br>
[Polar](https://polar.sh) - Billing (coming soon)<br>
[react-safe-action](https://next-safe-action.dev) - Validated Server Actions<br>
[nuqs](https://nuqs.47ng.com/) - Type-safe search params state manager<br>
[next-themes](https://next-themes-example.vercel.app/) - Theme manager<br>

## Directory Structure

```
.
├── apps                         # App workspace
│    ├── api                     # Supabase (API, Auth, Storage, Realtime, Edge Functions)
│    ├── app                     # App - your product
│    ├── web                     # Marketing site
│    └── ...
├── packages                     # Shared packages between apps
│    ├── analytics               # OpenPanel analytics
│    ├── email                   # React email library
│    ├── jobs                    # Trigger.dev background jobs
│    ├── kv                      # Upstash rate-limited key-value storage
│    ├── logger                  # Logger library
│    ├── supabase                # Supabase - Queries, Mutations, Clients
│    └── ui                      # Shared UI components (Shadcn)
├── tooling                      # are the shared configuration that are used by the apps and packages
│    └── typescript              # Shared TypeScript configuration
├── .cursorrules                 # Cursor rules specific to this project
├── biome.json                   # Biome configuration
├── turbo.json                   # Turbo configuration
├── LICENSE
└── README.md
```

## Prerequisites

Bun<br>
Docker<br>
Upstash<br>
Dub<br>
Trigger.dev<br>
Resend<br>
Supabase<br>
Sentry<br>
OpenPanel<br>

## Getting Started

Clone this repo locally with the following command:

```bash
bunx degit midday-ai/v1 v1
```

2. Install dependencies:
```bash
bun i
```

2. Copy `.env.example` to `.env` and update the variables.

```sh
```sh
# Copy .env.example to .env for each app
cp apps/api/.env.example apps/api/.env
cp apps/app/.env.example apps/app/.env
cp apps/web/.env.example apps/web/.env
```
4. Start the development server from either bun or turbo:
## Contributing
```ts
bun dev // starts everything in development mode (web, app, api, email)
bun dev:web // starts the web app in development mode
bun dev:app // starts the app in development mode
bun dev:api // starts the api in development mode
bun dev:email // starts the email app in development mode
## License
// Database
bun migrate // run migrations
bun seed // run seed
```
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.