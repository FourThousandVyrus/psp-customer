# Links Payments

> A Stripe-inspired payment platform tailored for Ghana's mobile money ecosystem

Links Payments enables merchants to accept MTN, Vodafone, and AirtelTigo mobile money payments through a modern, animated dashboard experience powered by React, Next.js, and Remotion.

## Features

- **Mobile Money Integration**: Support for MTN, Vodafone, and AirtelTigo
- **Full Payment Dashboard**: Transaction management, analytics, and customer insights
- **Hosted Checkout**: Secure, embeddable checkout flow with real-time updates
- **Motion Graphics**: Powered by Remotion for programmatic video generation
- **Type-Safe API**: Built with tRPC for end-to-end type safety
- **Mock Payments**: Sophisticated payment simulation for development and testing

## Tech Stack

### Frontend
- **Next.js 14** - App Router, React Server Components
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **Remotion** - Programmatic video & animations
- **Framer Motion** - UI animations
- **Zustand** - State management
- **TanStack Query** - Server state management

### Backend
- **Node.js + TypeScript** - Runtime
- **Express** - API framework
- **tRPC** - Type-safe API
- **Prisma** - Database ORM
- **PostgreSQL** - Database
- **Redis** - Caching
- **BullMQ** - Background jobs

### Infrastructure
- **Turborepo** - Monorepo build system
- **pnpm** - Package manager

## Project Structure

```
links-payments/
├── apps/
│   ├── web/                 # Merchant dashboard (Next.js)
│   ├── checkout/            # Checkout experience (Next.js)
│   ├── marketing-studio/    # Remotion video generation
│   └── api/                 # Backend API server
├── packages/
│   ├── database/            # Prisma schema & client
│   ├── types/               # Shared TypeScript types
│   ├── utils/               # Shared utilities
│   └── ui/                  # Shared UI components
└── turbo.json               # Turborepo configuration
```

## Getting Started

### Prerequisites

- Node.js 20+ and pnpm 8+
- PostgreSQL 16+
- Redis 7+

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd links-payments
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   Copy the example env file in the API:
   ```bash
   cp apps/api/.env.example apps/api/.env
   ```

   Update the following variables:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/links_payments"
   REDIS_HOST=localhost
   REDIS_PORT=6379
   JWT_SECRET=your-secret-key
   ```

4. **Initialize the database**
   ```bash
   pnpm db:push
   ```

5. **Start development servers**
   ```bash
   pnpm dev
   ```

   This will start:
   - Web dashboard: http://localhost:3000
   - Checkout: http://localhost:3001
   - API server: http://localhost:4000
   - Remotion studio: Opens in browser

## Available Scripts

### Root Commands
- `pnpm dev` - Start all apps in development mode
- `pnpm build` - Build all apps
- `pnpm lint` - Lint all packages
- `pnpm type-check` - Type check all packages
- `pnpm clean` - Clean all build artifacts

### Database Commands
- `pnpm db:generate` - Generate Prisma client
- `pnpm db:push` - Push schema to database
- `pnpm db:migrate` - Run database migrations
- `pnpm db:studio` - Open Prisma Studio

## Apps

### Web Dashboard ([apps/web](apps/web))
Merchant-facing dashboard for managing payments, customers, and analytics.

**Features:**
- Transaction list and detail views
- Customer management
- Analytics and reporting
- Webhook configuration
- API key management

### Checkout ([apps/checkout](apps/checkout))
Standalone checkout experience for customers to complete payments.

**Features:**
- Mobile money provider selection
- Ghana phone number validation
- Real-time payment status updates
- Animated success/failure states

### Marketing Studio ([apps/marketing-studio](apps/marketing-studio))
Remotion project for generating marketing videos and animations.

**Compositions:**
- Hero video for landing page
- Checkout success animation
- Analytics dashboard animations

### API ([apps/api](apps/api))
Backend API server with tRPC endpoints and background job processing.

**Services:**
- Mobile money simulation
- Transaction processing
- Webhook delivery
- Authentication

## Packages

### Database ([packages/database](packages/database))
Prisma schema and client for PostgreSQL database.

**Models:**
- Merchant - Business accounts
- Customer - Auto-created from transactions
- Transaction - Payment records
- WebhookLog - Webhook delivery tracking

### Types ([packages/types](packages/types))
Shared TypeScript types and interfaces.

### Utils ([packages/utils](packages/utils))
Shared utility functions for Ghana-specific features:
- Phone number validation and formatting
- Currency conversion (GHS ↔ pesewas)
- Date formatting
- Zod validators

### UI ([packages/ui](packages/ui))
Shared React components (shadcn/ui components will be added here).

## Ghana-Specific Features

### Phone Number Validation
Automatically validates and formats Ghana phone numbers, detecting the provider:

```typescript
import { validateGhanaPhone } from '@links/utils';

const result = validateGhanaPhone('0244123456');
// { isValid: true, formatted: '+233244123456', provider: 'MTN' }
```

### Currency Formatting
Handles Ghana Cedis (GHS) and pesewas conversion:

```typescript
import { formatGHS, ghsToPesewas } from '@links/utils';

formatGHS(150000);  // "GH₵ 1,500.00"
ghsToPesewas(100);  // 10000 pesewas
```

### Mobile Money Providers
- **MTN Mobile Money**: Prefixes 24, 25, 54, 55, 59
- **Vodafone Cash**: Prefixes 20, 50
- **AirtelTigo Money**: Prefixes 23, 26, 27, 28, 56, 57

## Payment Simulation

The platform includes a sophisticated mobile money simulator for development:

### Test Phone Numbers
- `+233200000001` - Always succeeds
- `+233200000002` - Always fails
- `+233200000003` - Timeout (expires after 30s)
- `+233200000004` - Slow processing (15s)

### Provider Behavior
- MTN: 3s delay, 95% success rate
- Vodafone: 5s delay, 93% success rate
- AirtelTigo: 7s delay, 90% success rate

## Development Workflow

### Adding New Features

1. **Define types** in `packages/types`
2. **Add utilities** in `packages/utils` if needed
3. **Update database schema** in `packages/database/prisma/schema.prisma`
4. **Run migrations**: `pnpm db:migrate`
5. **Implement API logic** in `apps/api/src`
6. **Build UI** in respective Next.js app

### Testing

Run unit tests:
```bash
pnpm test
```

Run E2E tests:
```bash
pnpm test:e2e
```

## Deployment

### Frontend (Vercel)
```bash
vercel --prod
```

### Backend (Railway/Render)
```bash
# Deploy API server with PostgreSQL and Redis
```

## Environment Variables

### Web App
- `NEXT_PUBLIC_API_URL` - API server URL
- `NEXTAUTH_SECRET` - NextAuth secret
- `NEXTAUTH_URL` - App URL

### API Server
- `DATABASE_URL` - PostgreSQL connection string
- `REDIS_HOST` - Redis host
- `REDIS_PORT` - Redis port
- `JWT_SECRET` - JWT signing secret
- `MTN_SUCCESS_RATE` - MTN simulation success rate (0-1)
- `VODAFONE_SUCCESS_RATE` - Vodafone simulation success rate (0-1)
- `AIRTELTIGO_SUCCESS_RATE` - AirtelTigo simulation success rate (0-1)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a pull request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions, please open a GitHub issue.

---

**Built with ❤️ for Ghana's mobile money ecosystem**
