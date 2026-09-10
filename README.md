# Keabetswe Mmakola - Portfolio

Personal portfolio website for **Keabetswe Mmakola**, Software Engineer & Cloud/Data Enthusiast based in Johannesburg.

Built with **Astro** for optimal performance, minimal JavaScript overhead, and a clean, responsive developer showcase.

## Tech Stack

- **[Astro](https://astro.build/)** (v5) - Static site generator
- **[Tailwind CSS](https://tailwindcss.com/)** (v4) - Utility-first styling
- **TypeScript** - Type-safe configuration and structure

## Features

- **Profile & About**: Overview of background, journey, and technical focus
- **Skills**: Categorized technical proficiencies (Languages, Frameworks, Cloud & Infrastructure)
- **Projects Showcase**: Featured projects with links, descriptions, and tech tags
- **Public Talks**: Embedded YouTube playlist for talks and presentations
- **GitHub Activity**: Dynamic contribution calendar and activity feed
- **Experience & Education**: Timeline of professional background and learning credentials
- **Config-Driven**: Site content and metadata centralized in `src/config.ts`

## Getting Started

### Prerequisites

- Node.js (v18.17.1 or higher recommended)
- npm / pnpm / yarn

### Installation

```bash
# Clone repository
git clone https://github.com/keammakola/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start local development server (defaults to http://localhost:4321)
npm run dev
```

### Build

```bash
# Generate static production build
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```text
portfolio/
├── public/              # Static assets (images, icons, resume)
├── src/
│   ├── components/      # Astro UI components (Header, Hero, Projects, etc.)
│   ├── pages/
│   │   └── index.astro  # Main portfolio page
│   ├── styles/
│   │   └── global.css   # Global styles and Tailwind configuration
│   └── config.ts        # Site configuration and content data
├── astro.config.mjs     # Astro configuration
├── package.json         # Project scripts and dependencies
└── tsconfig.json        # TypeScript configuration
```

## License

This project is open source and available under the [MIT License](LICENSE.md).
