# Tech Stack Studio Website

A modern, vintage-themed website for Tech Stack Studio - a full-stack web development company. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Modern Vintage Design**: Dark theme with golden amber accents
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Subtle Framer Motion animations throughout
- **Interactive Components**: Engaging UI elements and hover effects
- **Professional Pages**: Home, About, Services, and Contact pages
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Built with Next.js best practices for SEO

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & JetBrains Mono (Google Fonts)
- **Build Tool**: Turbopack

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tech-stack-studio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   │   ├── Header.tsx    # Navigation header
│   │   ├── Footer.tsx    # Site footer
│   │   └── Layout.tsx    # Main layout wrapper
│   └── ui/               # UI components
│       └── Logo.tsx      # Company logo component
```

## Design System

### Color Palette
- **Primary Black**: `#000000`
- **Dark Grey**: `#1a1a1a`, `#2a2a2a`
- **Amber Accent**: `#f59e0b`, `#fbbf24`, `#d4af37`
- **Text**: `#ffffff` (primary), `#d1d5db` (secondary)

### Typography
- **Primary Font**: Inter (clean, modern)
- **Mono Font**: JetBrains Mono (code elements)

### Animation Guidelines
- Subtle entrance animations using Framer Motion
- Hover effects on interactive elements
- Smooth page transitions
- Performance-optimized animations

## AI Image Generation

This project includes comprehensive AI image prompts in `AI-IMAGE-PROMPTS.md` for generating:
- Hero section backgrounds
- Service page illustrations
- About page imagery
- Contact page visuals
- Background textures and patterns

Use these prompts with AI tools like Midjourney, DALL-E, or Stable Diffusion to create consistent branded imagery.

## Deployment

### Vercel (Recommended)
1. Push code to GitHub/GitLab
2. Connect repository to Vercel
3. Deploy with default Next.js settings

### Other Platforms
1. Build the project: `npm run build`
2. Upload the `.next` folder and dependencies
3. Set build command to `npm run build`
4. Set start command to `npm run start`

## Performance Features

- **Static Generation**: Pre-rendered pages for better performance
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for faster loads
- **Modern Bundle**: Turbopack for fast builds and hot reloading

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to Tech Stack Studio. All rights reserved.

## Contact

For questions or support:
- Email: hello@techstackstudio.com
- Website: [Your Domain]

---

Built with ❤️ by Tech Stack Studio
