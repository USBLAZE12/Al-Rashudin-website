# Al Rashudin Engineering Website

A professional website for Al Rashudin Engineering, specializing in hydraulic seals, crane components, and industrial parts in UAE.

## Features

- **Modern Design**: Dark industrial theme with orange accents
- **Responsive**: Fully responsive design for all devices
- **Minimal Animations**: Smooth animations using Framer Motion
- **SEO Optimized**: Built with Next.js for optimal performance and SEO
- **Contact Form**: Functional contact form with API backend
- **WhatsApp Integration**: Direct WhatsApp chat button
- **Product Catalog**: Filterable product catalog by category
- **Project Showcase**: Display of recent engineering projects

## Pages

1. **Home**: Hero section, categories, featured products, workflow
2. **About**: Company history, team values, CEO message
3. **Services**: Engineering services offered
4. **Products**: Product catalog with filtering
5. **Projects**: Recent project showcase
6. **Contact**: Contact form and information

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons, Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/USBLAZE12/Al-Rashudin-website.git
cd Al-Rashudin-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts      # Contact form API
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── products/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── about/
│   ├── contact/
│   ├── home/
│   ├── products/
│   ├── projects/
│   ├── services/
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── WhatsAppButton.tsx
public/
└── images/                  # Generated images
```

## Customization

### Update Contact Information

Edit the following files to update contact details:

- `src/components/Header.tsx` - WhatsApp number
- `src/components/Footer.tsx` - Contact details
- `src/components/contact/ContactInfo.tsx` - Contact page details

### Add Products

Edit `src/components/products/ProductsGrid.tsx` to add or modify products.

### Update Content

Each page has its own components in the `src/components/` directory. Edit the relevant component files to update content.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

Build the project and deploy the `.next` folder:

```bash
npm run build
```

## Backend Integration

The contact form API is ready at `/api/contact`. To connect it to a real backend:

1. Update `src/app/api/contact/route.ts`
2. Add your email service (SendGrid, Resend, etc.)
3. Or connect to a database (MongoDB, PostgreSQL, etc.)

## License

This project is proprietary and confidential.

## Support

For support, contact info@alrashudin.com or WhatsApp +971 50 123 4567.