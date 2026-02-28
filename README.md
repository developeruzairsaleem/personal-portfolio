# Personal Portfolio

A modern, responsive developer portfolio built with Next.js, Tailwind CSS, and Framer Motion. Use it as a template to showcase your own projects and skills.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

## Features

- Single-page portfolio with smooth scroll navigation
- Animated sections with Framer Motion (fade-in, stagger effects)
- Working contact form powered by [Resend](https://resend.com) (3,000 free emails/month)
- Fully responsive — looks great on mobile and desktop
- Dark theme with green accent
- SEO-friendly with Next.js App Router
- Tests with Jest + React Testing Library

## Tech Stack

| Category     | Technology                        |
| ------------ | --------------------------------- |
| Framework    | Next.js 16 (App Router)          |
| Language     | TypeScript                        |
| Styling      | Tailwind CSS v4                   |
| Animations   | Framer Motion                     |
| Email        | Resend                            |
| Testing      | Jest + React Testing Library      |
| Deployment   | Vercel                            |

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn / pnpm)

### Installation

```bash
# Clone the repo
git clone https://github.com/developeruzairsaleem/personal-portfolio.git
cd personal-portfolio

# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Environment Variables

| Variable         | Description                          | Required |
| ---------------- | ------------------------------------ | -------- |
| `RESEND_API_KEY`  | API key from [resend.com](https://resend.com) | No (falls back to console logging in dev) |

## Customizing for Your Own Use

1. **Update personal info** — Edit `src/app/page.tsx` with your name, bio, and links
2. **Replace projects** — Swap out the project cards with your own work
3. **Change images** — Replace files in `public/images/` with your own photos
4. **Update contact email** — Change the recipient email in `src/app/api/contact/route.ts`
5. **Adjust colors** — Modify the green accent (`#22c55e`) in `page.tsx` and `globals.css`

## Scripts

```bash
npm run dev        # Start development server
npm run build      # Production build
npm start          # Start production server
npm run lint       # Run ESLint
npm test           # Run tests
npm run test:watch # Run tests in watch mode
```

## Project Structure

```
├── public/
│   └── images/          # Profile photos and assets
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts    # Contact form API endpoint
│   │   ├── __tests__/
│   │   │   └── page.test.tsx   # Unit tests
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Main portfolio page
├── .env.local.example          # Environment variable template
├── package.json
└── tsconfig.json
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repo at [vercel.com](https://vercel.com)
3. Add your `RESEND_API_KEY` in Vercel environment settings
4. Deploy — zero config needed

Or use the CLI:

```bash
npx vercel --prod
```

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## Author

**Uzair Saleem** — Full-Stack SaaS Developer

- Email: uzairsaleemdev@gmail.com
- LinkedIn: [linkedin.com/in/uzair-saleem-5a399825a](https://linkedin.com/in/uzair-saleem-5a399825a)
- GitHub: [github.com/developeruzairsaleem](https://github.com/developeruzairsaleem)
