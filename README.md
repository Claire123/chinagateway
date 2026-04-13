# ChinaGateway

Your trusted gateway to China - Visa-free travel & world-class healthcare.

## Features

- 🛂 **144-hour Visa Calculator** - Check your eligibility for visa-free transit
- ✈️ **Smart Trip Planner** - Generate personalized itineraries
- 🏥 **Hospital Directory** - Find JCI-certified hospitals with English support
- 📍 **City Guides** - Explore China's top destinations
- 💬 **Community** - Share experiences, ask questions, find travel buddies
- 📱 **PWA Support** - Install as mobile app on iOS/Android

## Tech Stack

- **Framework**: Next.js 14 + React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Database**: Prisma + SQLite (dev) / PostgreSQL (prod)
- **Auth**: NextAuth.js
- **PWA**: next-pwa (Workbox)
- **Deployment**: Vercel

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Deployment

### GitHub + Vercel (Recommended)

1. **Initialize Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create GitHub Repository**
   - Go to https://github.com/new
   - Name: `chinagateway`
   - Create repository

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/chinagateway.git
   git branch -M main
   git push -u origin main
   ```

4. **Deploy to Vercel**
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Click "Deploy"

Done! Your site will be live at `https://chinagateway.vercel.app`

## PWA - Install as Mobile App

### iPhone (iOS 16.4+)
1. Open the website in Safari
2. Tap the Share button
3. Select "Add to Home Screen"
4. Launch like a native app!

### Android (Chrome)
1. Open the website in Chrome
2. Tap menu → "Add to Home Screen"
3. Or accept the "Install App" prompt

### PWA Features
- ✅ Works offline
- ✅ Add to home screen
- ✅ Full-screen display
- ✅ Push notifications (optional)
- ✅ Background sync

## Project Structure

```
chinagateway-web/
├── app/                 # Next.js App Router
│   ├── api/            # API routes
│   ├── about/          # About page
│   ├── community/      # Community page
│   ├── contact/        # Contact page
│   ├── guides/         # City guides
│   ├── healthcare/     # Hospital directory
│   ├── travel/         # Trip planner
│   ├── visa/           # Visa calculator
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── hero.tsx
│   ├── navbar.tsx
│   ├── footer.tsx
│   └── ...
├── lib/                 # Utilities
│   ├── api.ts          # API types & functions
│   └── utils.ts
├── prisma/              # Database schema
├── public/              # Static assets
│   ├── icons/          # PWA icons
│   └── manifest.json   # PWA manifest
├── .github/workflows/   # GitHub Actions
├── next.config.js       # Next.js config (PWA)
└── package.json
```

## Environment Variables

Create `.env.local`:

```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

## Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:studio` - Open Prisma Studio

## License

MIT License - see LICENSE file

## Contact

- Website: https://chinagateway.com
- Email: hello@chinagateway.com
