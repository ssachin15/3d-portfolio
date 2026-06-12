# 3D Portfolio

A modern, interactive 3D portfolio website showcasing projects and skills with smooth animations and engaging visuals.

**Live Site**: [Deploy with Vercel](#deployment)

---

## 🎯 Features

- Interactive 3D character model on landing page
- Responsive portfolio layout
- Project showcase carousel with live links
- Smooth scroll animations
- Dark modern design
- Custom cursor interactions

---

## 🛠 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Three.js** - 3D graphics
- **GSAP** - Animations
- **Vite** - Build tool
- **CSS3** - Styling

---

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Character/       # 3D model & scene
│   ├── About.tsx
│   ├── Career.tsx
│   ├── Contact.tsx
│   ├── Landing.tsx
│   ├── Navbar.tsx
│   ├── Work.tsx         # Projects carousel
│   └── styles/          # Component styles
├── context/             # Global state
├── data/                # Content
└── App.tsx
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/ssachin15/3d-portfolio.git
cd 3d-portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build

```bash
npm run build
npm run preview
```

---

## 📦 Available Scripts

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

---

## 🌐 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com/new)
3. Import your GitHub repository
4. Click "Deploy"

Auto-deploys on every push to main branch.

---

## 📄 License

MIT License - Feel free to use this as a template!

---

## 🔗 Links

- **GitHub**: [ssachin15/3d-portfolio](https://github.com/ssachin15/3d-portfolio)
- **Portfolio**: [Live Site](https://vercel.com)

---

Built with ❤️ using React & Three.js
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
