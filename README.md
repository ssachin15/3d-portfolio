# 3D Interactive Portfolio

A modern, fully responsive 3D portfolio website built with React, TypeScript, Three.js, and GSAP. Features an animated 3D character scene, interactive UI, smooth scroll animations, and a showcase of real projects with dashboard mockups.

**Live Site**: [Deploy with Vercel](https://vercel.com/new/clone?repository-url=https://github.com/ssachin15/3d-portfolio)

![Portfolio Preview](public/images/preview1.png)

---

## ✨ Features

### 🎨 Frontend Experience
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **3D Character Scene**: Interactive animated 3D model with head-tracking animations
- **Smooth Scroll Animations**: GSAP-powered scroll transitions and staggered reveals
- **Custom Cursor**: Fully customizable cursor with interactive states
- **Dark Modern UI**: Clean, professional dark theme with cyan accents

### 📊 Project Showcase
- **Interactive Carousel**: Browse through portfolio projects with arrow navigation
- **Live Dashboard Mockups**: Generated SVG dashboards for:
  - **React Jobs Board** - Job listing and tracking interface
  - **Job Tracker API** - RESTful API backend visualization
- **Project Details**: Each project includes:
  - Title, category, and tech stack
  - Impact highlights and key features
  - Direct links to GitHub repositories
  - Live previews and deployment status

### ⚡ Performance
- **Lazy Loading**: Components load on demand
- **Optimized Builds**: Production-ready Vite build pipeline
- **Analytics Ready**: Vercel Analytics integration

---

## 🛠 Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | CSS3 with CSS Variables |
| **3D Graphics** | Three.js, React Three Fiber, Drei, Postprocessing |
| **Animations** | GSAP 3, ScrollTrigger, ScrollTo |
| **UI Libraries** | React Icons, React Fast Marquee |
| **Analytics** | Vercel Analytics |
| **Build & Deploy** | Vite, Vercel |

---

## 📁 Project Structure

```
3d-portfolio/
├── public/
│   ├── images/                    # Logos, previews, dashboard mockups
│   ├── models/                    # 3D model files (encrypted)
│   └── draco/                     # DRACO decoder for model compression
├── src/
│   ├── assets/                    # SVG icons and local assets
│   ├── components/
│   │   ├── Character/             # 3D scene & character utilities
│   │   │   ├── Scene.tsx          # Three.js setup & rendering
│   │   │   ├── utils/             # Animation, lighting, mouse tracking
│   │   │   └── exports.ts
│   │   ├── styles/                # Component-scoped CSS modules
│   │   ├── About.tsx              # About section
│   │   ├── Career.tsx             # Career/experience section
│   │   ├── Contact.tsx            # Contact/footer section
│   │   ├── Landing.tsx            # Hero section with 3D model
│   │   ├── Navbar.tsx             # Navigation header
│   │   ├── Work.tsx               # Project carousel
│   │   ├── WorkImage.tsx          # Project image/video component
│   │   └── [other sections]
│   ├── context/                   # React Context (LoadingProvider)
│   ├── data/                      # Static content & configuration
│   ├── types/                     # TypeScript type definitions
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                  # Global styles
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ (or 20+)
- **npm** 9+ or **yarn**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ssachin15/3d-portfolio.git
   cd 3d-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
npm run preview
```

---

## 📜 Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint on all files |

---

## 🎯 Key Components

### Landing Section (`Landing.tsx`)
- Hero section with animated text
- 3D character model positioned on the right
- Smooth scroll trigger animations
- Responsive layout for all screen sizes

### Work/Projects Carousel (`Work.tsx`)
- Interactive carousel with 6+ projects
- Dashboard mockups for React Jobs and API
- Project details with impact metrics
- Direct GitHub and live links

### Character 3D Scene (`Character/Scene.tsx`)
- Three.js scene setup with WebGL renderer
- GLTF/GLB model loading with animations
- Mouse-tracking head rotation
- Lighting system with environment HDR mapping
- Resize handling for responsive canvas

### Navigation & UI
- **Navbar**: Sticky header with smooth scroll links
- **Cursor**: Custom cursor with hover states
- **Social Icons**: Quick links to GitHub, LinkedIn, etc.
- **Loading**: Page load progress indicator

---

## 🎨 Customization

### Edit Project Data
Update [src/components/Work.tsx](src/components/Work.tsx) to modify:
- Project titles, descriptions, and categories
- Tech stack and tools
- Project URLs and images
- Impact/feature highlights

### Modify Colors & Themes
CSS variables in [src/index.css](src/index.css):
```css
:root {
  --accentColor: #5eead4;      /* Cyan accent */
  --backgroundColor: #0a0e17;  /* Dark bg */
  --vh: 100svh;                /* Viewport height */
}
```

### Update 3D Character
- Replace model file in [public/models/](public/models/)
- Modify animations in [src/components/Character/utils/animationUtils.ts](src/components/Character/utils/animationUtils.ts)
- Adjust lighting in [src/components/Character/utils/lighting.ts](src/components/Character/utils/lighting.ts)

### Edit Dashboard Images
SVG dashboards are located in [public/images/](public/images/):
- `reactjobs-dashboard.svg` - React Jobs board mockup
- `job-tracker-api.svg` - Backend API visualization

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Go to [vercel.com](https://vercel.com)**:
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite
   - Click "Deploy"

3. **Auto-Deploy**: Future pushes to `main` trigger automatic redeployment

### Alternative: Netlify or GitHub Pages
- **Netlify**: Connect your repo at [netlify.com](https://netlify.com)
- **GitHub Pages**: Set build command to `npm run build` and publish from `dist/`

---

## 📦 Dependencies

### Core
- `react` - UI library
- `typescript` - Type safety
- `vite` - Build tool

### 3D & Animation
- `three` - 3D graphics
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Useful helpers and components
- `gsap` - Animation library
- `@gsap/react` - GSAP React integration

### UI
- `react-icons` - Icon library
- `react-fast-marquee` - Scrolling text component

### Analytics
- `@vercel/analytics` - Deployment analytics

---

## 🐛 Troubleshooting

### 3D Model Not Loading
- Check browser console for errors
- Verify DRACO decoder files in `public/draco/`
- Ensure model file path is correct in `Character/utils/character.ts`

### Animations Not Playing
- Verify GSAP is properly installed: `npm ls gsap`
- Check ScrollTrigger initialization in `MainContainer.tsx`
- Ensure CSS is being applied from `styles/` folder

### Build Errors
- Clear cache: `rm -rf node_modules dist` (or `rmdir /s node_modules dist` on Windows)
- Reinstall: `npm install`
- Run lint: `npm run lint` to check for TypeScript errors

### Performance Issues
- Check bundle size: `npm run build` output
- Disable heavy animations on mobile in `isDesktopView` check
- Consider lazy-loading TechStack component

---

## 📄 License

This project is open source and available under the **MIT License**. Feel free to fork, modify, and use as a template for your own portfolio!

---

## 🔗 Links

- **GitHub**: [ssachin15/3d-portfolio](https://github.com/ssachin15/3d-portfolio)
- **Portfolio**: [Deploy to Vercel](#-deployment)
- **My Work**: Check out the projects in the portfolio!

---

## 🙏 Credits

- Built with **React**, **Three.js**, and **GSAP**
- Inspired by modern portfolio designs
- Dashboard mockups created with SVG

---

## 💬 Questions or Suggestions?

Feel free to open an issue or reach out on GitHub. Happy coding! 🚀
   ```

3. Start the local development server:

   ```bash
   npm run dev
   ```

4. Open the URL shown in the terminal (typically `http://localhost:5173`).

## Available Scripts

- `npm run dev`  
  Starts Vite dev server and exposes host for local network testing.

- `npm run build`  
  Type-checks and builds a production-ready bundle.

- `npm run preview`  
  Serves the production build locally for verification.

- `npm run lint`  
  Runs ESLint checks across the project.

## GSAP License Note

This project uses the standard `gsap` package, including bonus plugins now available in the core package.

- Install dependencies with `npm install`.
- If migrating from older setups, remove `gsap-trial` from your project.

Read official installation guidance here: [GSAP Installation Docs](https://gsap.com/docs/v3/Installation/)

## Customization Guide

You can adapt this portfolio to your own profile by updating the following areas:

- **Content sections**: Edit files in `src/components/` such as `About.tsx`, `Career.tsx`, `WhatIDo.tsx`, and `Work.tsx`.
- **Data source**: Update static values in files under `src/data/`.
- **Styling**: Modify component styles in `src/components/styles/` and global styles in `src/index.css` / `src/App.css`.
- **3D scene behavior**: Adjust scene logic in `src/components/Character/` and related utilities.
- **Animations**: Tweak GSAP utilities under `src/components/utils/`.

## Troubleshooting

- **Blank screen in development**  
  Check browser console for module import errors and verify all dependencies are installed.

- **3D performance issues on low-end devices**  
  Reduce scene complexity and post-processing effects in the character/scene utilities.

- **GSAP plugin errors**  
  Ensure you have the correct plugin package and license configuration for your target environment.

- **TypeScript build failures**  
  Run `npm run build` and address reported type errors before deploying.

## Deployment

1. Create a production build:

   ```bash
   npm run build
   ```

2. Validate locally:

   ```bash
   npm run preview
   ```

3. Deploy the generated `dist/` folder to your hosting provider (for example Vercel, Netlify, or Cloudflare Pages).

## License

This project is open source and available under the [MIT License](LICENSE).
