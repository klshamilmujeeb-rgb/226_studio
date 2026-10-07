# 226 Studio

A high-fidelity frontend recreation of the [two26.studio](https://two26.studio/) design agency website.

## Features

- **Fluid Scaling System**: Proportional font, padding, and layout scaling based on screen size (`1440px` desktop, `834px` tablet, `550px` mobile landscape, `390px` mobile portrait).
- **Smooth Animations**: Integrated with GSAP, ScrollTrigger, DrawSVG, SplitText, and Lenis smooth scrolling.
- **Pages**:
  - Home (`/`)
  - About us (`/about`)
  - Work archive (`/work`)
  - Case studies (`/work/bagel-bar`, `/work/heygluco`, `/work/lpi`, `/work/merci`, `/work/munchies-and-cream`, `/work/mvp`, `/work/tanti-maria`, `/work/yum-yum`)
  - Let's Talk (`/lets-talk` & `/contact`)
- **Typography**: Localized brand fonts (`MDNichrome` and `Neue Montreal`).

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

The compiled static site will be generated in the `dist/` directory.

### Preview Build

```bash
npm run preview
```
