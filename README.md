# LokSujag Clone 🗞️

A pixel-perfect clone of [LokSujag.com](https://loksujag.com) — a Pakistani digital news media platform. Built with React and featuring full bilingual support (English/Urdu).

## 🌐 Live Demo
[Coming Soon]

## ✨ Features

- 🌍 **Bilingual Support** — Seamless switching between English and Urdu
- 🔄 **RTL Layout** — Automatic right-to-left layout for Urdu
- 🅰️ **Urdu Typography** — Noto Naskh Arabic font for authentic Urdu reading experience
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- 🧭 **Multi-Page Navigation** — React Router DOM with dedicated pages
- 🎥 **Video Section** — Embedded YouTube videos with metadata
- ⭐ **Star Rating System** — Interactive rating component
- 🔍 **Search Functionality** — Expandable search bar in navbar
- 📰 **News Cards** — Dynamic article cards with author info
- 🍔 **Hamburger Menu** — Responsive dropdown navigation


## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend framework |
| React Router DOM | Client-side routing |
| i18next + react-i18next | Internationalization engine |
| Bootstrap 5 | Responsive UI components |
| React Icons | Icon library |
| Vite | Build tool & dev server |
| CSS3 | Custom styling & RTL support |


## 🚀 Getting Started

### Prerequisites
- Node.js >= 16
- npm >= 8

### Installation
```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/loksujag-clone.git

# Go into the directory
cd loksujag-clone

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📁 Project Structure
```
react-bilingual-news-portal/
├── public/
│   ├── favicon.png
│   ├── loksuja-logo.png
│   └── img1.png ... img12.png
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── Cards/
│   │   │   ├── Articles.jsx
│   │   │   └── Articles.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   ├── Pages/
│   │   ├── Community/
│   │   │   ├── Community.jsx
│   │   │   └── Community.css
│   │   └── Vedio/
│   │       ├── Vedio.jsx
│   │       └── Vedio.css
│   ├── i18n/
│   │   ├── index.js
│   │   └── locales/
│   │       ├── en.json
│   │       └── urdu.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
## 🌍 How i18n Works

- Translation keys stored in `src/i18n/locales/en.json` and `urdu.json`
- Language switched via navbar **EN / اردو** buttons
- RTL layout auto-applied using `dir` attribute when Urdu is selected
- Any component can access translations with just 2 lines:
```jsx
const { t, i18n } = useTranslation();
{t("anyKey")}
```

## 📸 Screenshots
[Coming Soon]

⭐ **If you found this project helpful, please give it a star!** ⭐


## 👨‍💻 Author
Your Name — [@yourgithub](https://github.com/YOUR_USERNAME)

## 📄 License
This project is for educational purposes only.


