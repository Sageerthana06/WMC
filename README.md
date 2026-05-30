# WMC — World Entrepreneurs Export & Import (PVT) LTD

Modern responsive React frontend with glassmorphism UI, dark mode, Framer Motion animations, and frontend image upload.

## Tech Stack

- React.js + Vite
- Tailwind CSS v4
- React Router DOM
- Framer Motion
- React Icons
- React Toastify
- Context API (Theme, Data)
- localStorage for gallery, products, services, and messages

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/products` | Products |
| `/gallery` | Gallery (upload images) |
| `/contact` | Contact (optional image attach) |

## Insert images (frontend)

**Gallery:** open Gallery → use **Insert Gallery Image** → upload JPG/PNG/WebP/GIF (max 2 MB) → title & category → Publish.

**Contact:** optional image attachment on the contact form.

Images are stored in the browser (`localStorage`).

## Build

```bash
npm run build
npm run preview
```
