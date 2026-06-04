# Bali Pool Pros - Professional Pool Service Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Professional pool service website for Bali Pool Pros, offering pool maintenance, cleaning, repair, and installation services throughout Bali.

## 🌊 About

Bali Pool Pros is your premier destination for professional pool service in Bali. This website showcases our comprehensive pool services including:

- Pool Maintenance & Cleaning
- Pool Repair & Emergency Services
- Pool Installation & Construction
- Water Testing & Chemical Balancing
- Equipment Installation & Upgrades

## 🚀 Tech Stack

- **Frontend**: React 19.2.0 + TypeScript
- **Build Tool**: Vite 7.1.9
- **Styling**: Tailwind CSS 4.1.14
- **UI Components**: Radix UI + shadcn/ui
- **Routing**: Wouter 3.3.5
- **Backend**: Express 4.21.2 + Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Passport.js with local strategy
- **State Management**: TanStack Query (React Query)

## 📋 Prerequisites

- Node.js 20.x or higher
- npm or yarn
- PostgreSQL database (optional, for backend features)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ddandanell/pool-pool-network-4.git
   cd pool-pool-network-4
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup** (if using backend features)
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/pool_db
   NODE_ENV=development
   SESSION_SECRET=your-secret-key-here
   ```

4. **Database Setup** (optional)
   ```bash
   npm run db:push
   ```

## 🎯 Development

Start the development servers:

```bash
# Start client dev server (Vite)
npm run dev:client

# Start backend server (Express)
npm run dev

# Or run both concurrently (if configured)
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:5000`
- Backend: `http://localhost:3000` (if running)

## 🏗️ Build

Build the application for production:

```bash
npm run build
```

This will:
1. Build the client-side React app using Vite
2. Bundle the Express server
3. Output everything to the `dist` directory

## 🚀 Production

Run the production build:

```bash
npm start
```

## 📦 Project Structure

```
pool-pool-network-4/
├── client/               # Frontend React application
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── lib/         # Utilities and helpers
│   │   └── hooks/       # Custom React hooks
│   └── index.html       # HTML entry point
├── server/              # Backend Express application
├── shared/              # Shared types and utilities
├── script/              # Build and utility scripts
├── attached_assets/     # Images and media assets
└── dist/                # Production build output
```

## 🌐 Deployment

### Vercel Deployment

This application is optimized for deployment on Vercel:

1. **Connect Repository**
   - Import your GitHub repository to Vercel
   - Vercel will auto-detect the Vite configuration

2. **Build Settings**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables**
   Add any required environment variables in Vercel dashboard:
   - `DATABASE_URL` (if using database)
   - `SESSION_SECRET`
   - `NODE_ENV=production`

4. **Deploy**
   - Push to main branch to trigger automatic deployment
   - Or manually deploy from Vercel dashboard

## 📝 Available Scripts

- `npm run dev:client` - Start Vite development server
- `npm run dev` - Start Express backend server
- `npm run build` - Build for production
- `npm start` - Run production server
- `npm run check` - TypeScript type checking
- `npm run db:push` - Push database schema changes

## 🎨 Features

- ✅ Fully responsive design for all devices
- ✅ SEO optimized with meta tags and structured data
- ✅ Progressive Web App (PWA) ready
- ✅ Fast page loads with Vite
- ✅ Accessible UI components (WCAG compliant)
- ✅ Modern React 19 with TypeScript
- ✅ Tailwind CSS for styling
- ✅ Image optimization
- ✅ Contact form with validation
- ✅ Service area coverage map
- ✅ FAQ sections
- ✅ Blog-ready architecture

## 🔒 Security

- Uses Passport.js for authentication
- Express session management with secure cookies
- Environment variables for sensitive data
- SQL injection protection via Drizzle ORM
- XSS protection via React's built-in escaping

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Bali Pool Pros**
- Website: https://balipoolpros.com
- Email: info@balipoolpros.com
- Phone: +62 823-2301-1656
- WhatsApp: https://wa.me/6282323011656

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

Made with ❤️ for Bali's pool service excellence
