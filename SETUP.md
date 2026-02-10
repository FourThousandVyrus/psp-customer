# Links Payments - Setup Guide

This guide will walk you through setting up the Links Payments development environment.

## Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js 20+**
   ```bash
   node --version  # Should be >= 20.0.0
   ```

2. **pnpm 8+**
   ```bash
   npm install -g pnpm
   pnpm --version  # Should be >= 8.0.0
   ```

3. **PostgreSQL 16+**
   - Download from [postgresql.org](https://www.postgresql.org/download/)
   - Or use Docker: `docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=postgres postgres:16`

4. **Redis 7+**
   - Download from [redis.io](https://redis.io/download/)
   - Or use Docker: `docker run -d -p 6379:6379 redis:7`

## Step-by-Step Setup

### 1. Install Dependencies

```bash
# Install all workspace dependencies
pnpm install
```

This will install dependencies for all apps and packages in the monorepo.

### 2. Set Up PostgreSQL Database

Create a new database for Links Payments:

```sql
CREATE DATABASE links_payments;
```

Or use the command line:

```bash
psql -U postgres -c "CREATE DATABASE links_payments;"
```

### 3. Configure Environment Variables

Create a `.env` file in the API directory:

```bash
cp apps/api/.env.example apps/api/.env
```

Edit `apps/api/.env` and update the following:

```env
# Database (update with your PostgreSQL credentials)
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/links_payments?schema=public"

# Redis (update if your Redis is configured differently)
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

# JWT Secret (generate a secure random string)
JWT_SECRET=your-super-secret-jwt-key-change-this

# Mobile Money Simulation (success rates between 0 and 1)
MTN_SUCCESS_RATE=0.95
VODAFONE_SUCCESS_RATE=0.93
AIRTELTIGO_SUCCESS_RATE=0.90
```

### 4. Initialize the Database

Generate Prisma client and push the schema to the database:

```bash
# Generate Prisma client
pnpm db:generate

# Push schema to database (creates tables)
pnpm db:push
```

**Note**: For production, use migrations instead:
```bash
pnpm db:migrate
```

### 5. Verify Database Setup

Open Prisma Studio to verify the database structure:

```bash
pnpm db:studio
```

This will open a browser window at http://localhost:5555 showing your database tables.

### 6. Start Development Servers

Start all apps in development mode:

```bash
pnpm dev
```

This will start:

| App | URL | Port |
|-----|-----|------|
| Web Dashboard | http://localhost:3000 | 3000 |
| Checkout | http://localhost:3001 | 3001 |
| API Server | http://localhost:4000 | 4000 |
| Remotion Studio | (opens in browser) | - |

### 7. Verify Everything Works

1. **API Health Check**
   ```bash
   curl http://localhost:4000/health
   # Should return: {"status":"ok","timestamp":"..."}
   ```

2. **Web Dashboard**
   - Open http://localhost:3000
   - You should see the Links Payments landing page

3. **Checkout**
   - Open http://localhost:3001
   - You should see the checkout placeholder

4. **Remotion Studio**
   - The Remotion Studio should open automatically
   - You can view and preview animations

## Troubleshooting

### Port Already in Use

If you get "port already in use" errors, you can:

1. Kill the process using the port:
   ```bash
   # Windows
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F

   # macOS/Linux
   lsof -ti:3000 | xargs kill -9
   ```

2. Or change the port in the respective `package.json`:
   ```json
   "dev": "next dev -p 3002"  // Use a different port
   ```

### Database Connection Issues

If you can't connect to PostgreSQL:

1. Verify PostgreSQL is running:
   ```bash
   # Check PostgreSQL status
   pg_isready -U postgres
   ```

2. Check your `DATABASE_URL` format:
   ```
   postgresql://[user]:[password]@[host]:[port]/[database]?schema=public
   ```

3. Test the connection:
   ```bash
   psql postgresql://postgres:postgres@localhost:5432/links_payments
   ```

### Redis Connection Issues

If you can't connect to Redis:

1. Verify Redis is running:
   ```bash
   redis-cli ping
   # Should return: PONG
   ```

2. Check Redis configuration in `.env`:
   ```env
   REDIS_HOST=localhost
   REDIS_PORT=6379
   ```

### Prisma Issues

If you encounter Prisma-related errors:

1. Regenerate Prisma client:
   ```bash
   pnpm db:generate
   ```

2. Reset the database (⚠️ deletes all data):
   ```bash
   cd packages/database
   pnpm prisma migrate reset
   ```

### TypeScript Errors

If you see TypeScript errors:

1. Clean and rebuild:
   ```bash
   pnpm clean
   pnpm install
   pnpm build
   ```

2. Run type checking:
   ```bash
   pnpm type-check
   ```

## Docker Setup (Alternative)

If you prefer using Docker for PostgreSQL and Redis:

1. **Create docker-compose.yml** in the root:

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:16
    ports:
      - '5432:5432'
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: links_payments
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7
    ports:
      - '6379:6379'
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
```

2. **Start services**:
```bash
docker-compose up -d
```

3. **Stop services**:
```bash
docker-compose down
```

## Next Steps

Once setup is complete, you can:

1. **Explore the codebase**
   - Check out the [README.md](README.md) for project structure
   - Review the implementation plan in `.claude/plans/`

2. **Run tests**
   ```bash
   pnpm test
   ```

3. **Build for production**
   ```bash
   pnpm build
   ```

4. **Start implementing features**
   - Begin with authentication
   - Then mobile money simulation
   - Then checkout flow

## Development Tips

### Hot Reload

All Next.js apps support hot reload. Just save your files and changes will appear instantly.

### Database Changes

When you modify the Prisma schema:

```bash
# 1. Update schema.prisma
# 2. Generate new client
pnpm db:generate

# 3. Push changes to database
pnpm db:push

# Or create a migration (recommended for production)
pnpm db:migrate
```

### Adding Dependencies

```bash
# Add to specific workspace
pnpm add <package> --filter @links/web

# Add to root
pnpm add -w <package>

# Add dev dependency
pnpm add -D <package> --filter @links/web
```

### Viewing Logs

Each app logs to the console. Use the turbo dashboard for better visibility:

```bash
pnpm dev --filter=@links/web --filter=@links/api
```

## Getting Help

- Check the [README.md](README.md) for general documentation
- Review the implementation plan for detailed architecture
- Open an issue if you encounter problems

---

Happy coding! 🚀
