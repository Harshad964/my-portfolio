# Harshad Shashikant Ayatode — Personal Portfolio

> Premium dark-themed portfolio built with React.js, Vite, Framer Motion & Lucide React.

🌐 **Live Site:** [Deploy on Vercel](#deployment)  
👤 **GitHub:** [https://github.com/Harshad964](https://github.com/Harshad964)

---

## ✨ Features

- 🌙 Premium dark theme with glassmorphism cards
- ⚡ Framer Motion scroll-triggered animations throughout
- 🔤 Animated typewriter effect in hero
- 🎠 Infinite skill marquee strips
- 📸 Profile photo with floating badge overlays
- 🃏 Color-themed project cards
- ⏱ Animated experience timeline
- 📬 Working contact form via FormSubmit
- 📄 Resume download & PDF viewer
- 📱 Fully responsive (mobile-first)
- 🚀 SEO-optimized meta tags

## 🛠 Tech Stack

| Tool | Version |
|------|---------|
| React.js | 19 |
| Vite | 8 |
| Framer Motion | latest |
| Lucide React | latest |
| FormSubmit | (email API) |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/
│   └── hero.png              # Profile photo
├── components/
│   ├── Navbar.jsx            # Animated sticky navbar
│   ├── Hero.jsx              # Hero with typing effect & photo
│   ├── About.jsx             # About section
│   ├── Skills.jsx            # Marquee + categorized skills grid
│   ├── Projects.jsx          # Animated project cards
│   ├── Experience.jsx        # Timeline experience cards
│   ├── Education.jsx         # Education cards
│   ├── Certifications.jsx    # Certification cards with colors
│   ├── Resume.jsx            # Resume download/view
│   ├── Contact.jsx           # Contact form + channels
│   ├── Footer.jsx            # Full footer with links
│   ├── AnimatedSection.jsx   # Reusable scroll animation wrapper
│   └── BrandIcons.jsx        # GitHub/LinkedIn SVG icons
├── data/
│   └── portfolio.js          # 🔑 Single source of truth for all data
├── App.jsx
├── main.jsx
└── index.css                 # Complete CSS design system
public/
└── resume/
    └── Final Resume.pdf
```

## 📦 Deployment (Vercel)

1. Push to GitHub
2. Connect repo on [vercel.com](https://vercel.com)
3. Framework preset: **Vite**
4. Click **Deploy** — done!

The `vercel.json` handles SPA routing automatically.

---

© 2026 Harshad Shashikant Ayatode
