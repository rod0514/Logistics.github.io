# Apex Logistics — Professional Website

A modern, fully responsive logistics company website built with pure HTML, CSS, and JavaScript. Designed for GitHub Pages deployment.

![Apex Logistics](https://img.shields.io/badge/Status-Production%20Ready-00C2A8?style=flat-square)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

## ✨ Features

- **Modern Professional Design** — Clean, corporate aesthetic with blue gradient theme
- **Fully Responsive** — Optimized for desktop, tablet, and mobile
- **Smooth Animations** — Counter animations, scroll reveals, interactive elements
- **Interactive Tracking Demo** — Simulated real-time shipment tracking
- **Contact Form** — Ready for backend integration
- **SEO Friendly** — Semantic HTML, meta tags, proper heading structure
- **Fast & Lightweight** — No frameworks, pure vanilla code
- **Accessible** — Proper contrast, focus states, semantic markup

## 📄 Sections

1. **Hero** — Bold headline, stats counters, live network visual
2. **Trusted By** — Client logo strip
3. **Services** — 6 core logistics services with icons
4. **About / Why Us** — Company highlights + key metrics
5. **Tracking** — Interactive shipment tracker demo
6. **Testimonials** — Client success stories
7. **CTA Banner** — Conversion-focused call to action
8. **Contact** — Form + company details
9. **Footer** — Links and branding

## 🚀 Deploy to GitHub Pages

### Option 1: Quick Deploy

1. Create a new repository on GitHub (e.g. `apex-logistics`)
2. Upload all files from this folder to the repository root
3. Go to **Settings → Pages**
4. Under **Source**, select `Deploy from a branch`
5. Choose `main` (or `master`) branch and `/ (root)` folder
6. Click **Save**
7. Your site will be live at `https://yourusername.github.io/apex-logistics`

### Option 2: Using Git CLI

```bash
# Initialize and push
git init
git add .
git commit -m "Initial commit: Apex Logistics website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/apex-logistics.git
git push -u origin main
```

Then enable GitHub Pages as described above.

## 📁 Project Structure

```
apex-logistics/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # Interactivity & animations
├── assets/             # (Optional) images, icons
└── README.md
```

## 🎨 Customization

### Branding
- Change company name in `index.html` (search for "Apex")
- Update logo SVG colors in the `<svg>` elements
- Modify CSS variables in `css/styles.css` under `:root`

### Colors
```css
--primary: #0A4D8C;       /* Main blue */
--primary-light: #00A3E0; /* Accent blue */
--accent: #00C2A8;        /* Teal accent */
```

### Content
All text content is in `index.html`. Simply edit the sections you need.

### Contact Form
The form currently simulates submission. To connect a real backend:
- Formspree
- Netlify Forms
- Your own API endpoint

## 🛠️ Tech Stack

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter + Space Grotesk)

## 📱 Browser Support

- Chrome, Firefox, Safari, Edge (latest 2 versions)
- Mobile Safari & Chrome

## 📝 License

Free for personal and commercial use. Attribution appreciated but not required.

---

**Built for logistics professionals who value clarity, reliability, and modern design.**
