# Professional Portfolio - Youness Akhiat

A high-performance, responsive portfolio landing page built with **React**, **TypeScript**, and **Vite**. This project showcases expertise in LinkedIn Freelancing and AI Systems development.

## 🚀 Key Features

- **Responsive Landing Page**: Optimized for mobile, tablet, and desktop.
- **Bilingual Support (i18n)**: Fully translated in English and French using a custom `LanguageContext`.
- **Modern UI/UX**:
  - Global `GridPattern` background for a technical, clean aesthetic.
  - Smooth scrolling navigation using `react-scroll`.
  - Professional color palette: **Deep Navy** (Primary) and **Dark Orange** (Secondary).
  - Micro-interactions and animations with **Framer Motion**.
- **Performance**: Built with Vite for ultra-fast development and optimized production builds.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Scroll Management**: [react-scroll](https://www.npmjs.com/package/react-scroll)

## 📁 Project Structure

```text
src/
├── components/          # Reusable UI sections
│   ├── ui/              # Atomized UI components (e.g., GridPattern)
│   ├── Header.tsx       # Navigation & Language Toggle
│   ├── Hero.tsx         # Brand Headline & CTA
│   ├── AISystems.tsx    # AI Projects & Technical Stack
│   ├── ...              # Other page sections (About, Skills, Contact)
├── context/
│   └── LanguageContext.tsx # Localization management (EN/FR)
├── lib/
│   └── utils.ts         # Utility functions (cn for Tailwind merge)
├── App.tsx              # Main entry point & Layout wrapper
└── main.tsx             # ReactDOM rendering
```

## ⚙️ Setup & Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/)

### Installation
1. Clone or download the project.
2. Open terminal in the project directory.
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
Start the development server:
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

### Building for Production
```bash
npm run build
```
Production-ready files will be generated in the `dist/` folder.

## 🎨 Customization

### Updating Content
All text content is managed in `src/context/LanguageContext.tsx`. To update headlines, subtitles, or descriptions, modify the `translations` object for both `EN` and `FR` keys.

### Changing Theme Colors
Tailwind colors are used throughout. The primary color is a deep navy/slate, and the secondary highlights are dark orange (`secondary`).

---
*Developed by Youness Akhiat*
