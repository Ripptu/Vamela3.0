# VAMELA - Strategisches Webdesign

Dies ist der Source Code für die VAMELA Website.

## 🚀 Installation & Start

1. **Node.js installieren**: Stelle sicher, dass du [Node.js](https://nodejs.org/) installiert hast (Version 18+ empfohlen).
2. **Projekt entpacken**: Lade den Code herunter und entpacke ihn in einen Ordner.
3. **Terminal öffnen**: Navigiere im Terminal in den Projektordner.
4. **Abhängigkeiten installieren**:
   ```bash
   npm install
   ```
5. **Entwicklungsserver starten**:
   ```bash
   npm run dev
   ```
   Die Website läuft nun unter `http://localhost:5173`.

## 📦 Build für Produktion

Um die Website für den Live-Betrieb zu bauen:

```bash
npm run build
```

Der optimierte Code liegt dann im `dist`-Ordner und kann auf jedem Webserver (Vercel, Netlify, Apache, Nginx) gehostet werden.

## 🛠 Tech Stack

- **Framework**: React + Vite
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Sprache**: TypeScript

## 🌍 Deployment

Am einfachsten ist das Deployment über [Vercel](https://vercel.com) oder [Netlify](https://netlify.com):
1. Lade den Code auf GitHub hoch.
2. Verknüpfe das Repo mit Vercel/Netlify.
3. Fertig! (Build Command: `npm run build`, Output Directory: `dist`)
