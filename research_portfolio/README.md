# Matthew Adetoyese - Academic Portfolio

A clean, minimalist academic portfolio website showcasing research in mobile computing, human-computer interaction, and applied AI.

## Features

- **Responsive Design** - Mobile-first approach, optimized for all devices
- **Fast & Lightweight** - Built with Next.js 16 for optimal performance
- **Clean Aesthetic** - Minimalist design inspired by academic institutions
- **Multi-page Portfolio** - Dedicated pages for research, publications, experience, projects, and awards
- **Accessibility** - WCAG compliant with semantic HTML and ARIA labels
- **SEO Optimized** - Proper metadata and structured content

## Pages

- **Home** - Introduction and quick links
- **Research** - Research interests and vision statement
- **Publications** - Journal articles, thesis, and technical articles
- **Experience** - Research, teaching, and professional roles
- **Projects** - Featured mobile applications and systems
- **Awards** - Academic recognition and achievements
- **Contact** - Multiple contact methods and collaboration opportunities

## Tech Stack

- **Framework** - Next.js 16
- **Styling** - Tailwind CSS v4
- **UI Components** - shadcn/ui
- **Deployment** - GitHub Pages

## Getting Started

### Installation

\`\`\`bash
# Clone the repository
git clone <repository-url>
cd matthew-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

The site will be available at `http://localhost:3000`

### Build for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

## Deployment

### Deploy to GitHub Pages

This project is configured for GitHub Pages deployment. See `DEPLOYMENT.md` for detailed instructions.

### Deploy to Other Platforms

This is a standard Next.js app that can be deployed to any platform supporting static sites:
- Netlify
- Self-hosted servers
- Any static hosting service

## Customization

### Update Content

All content is hardcoded in the page files. To customize:

1. Edit page files in `app/` directory
2. Update component content directly
3. Modify metadata in `app/layout.tsx`

### Styling

The site uses Tailwind CSS with custom design tokens defined in `app/globals.css`. To customize colors and typography:

\`\`\`css
/* app/globals.css */
:root {
  --primary: oklch(0.35 0.15 240); /* Update primary color */
  --background: oklch(0.98 0 0); /* Update background */
  /* ... other tokens ... */
}
\`\`\`

### Navigation Links

Update external links (LinkedIn, GitHub, ORCID, etc.) in:
- `components/footer.tsx`
- `app/contact/page.tsx`

## Performance

- Lighthouse score: 95+
- Fully static rendering for fast load times
- Optimized images and fonts
- No external API dependencies

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2025 Matthew Adetoyese. All rights reserved.

## Contact

For questions or inquiries, please visit the [Contact page](https://your-domain.com/contact).
