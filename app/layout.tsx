import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
 
// ─── Font ────────────────────────────────────────────────────────────────────
// Cambia Inter por la fuente del proyecto.
// Asegúrate de que el nombre coincida con el definido en tailwind.config.js
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
 
// ─── Metadata ────────────────────────────────────────────────────────────────
// Actualiza estos valores al iniciar cada proyecto nuevo.
// NEXT_PUBLIC_SITE_URL debe estar definido en .env.local
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tudominio.com";
 
export const metadata: Metadata = {
  // Title: las páginas hijas usan el template automáticamente.
  // Ejemplo: la página "Nosotros" aparece como "Nosotros | Nombre del Proyecto"
  title: {
    default: "Nombre del Proyecto",
    template: "%s | Nombre del Proyecto",
  },
  description: "Descripción del proyecto. Máximo 160 caracteres para SEO.",
  metadataBase: new URL(siteUrl),
 
  // Open Graph — redes sociales (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: "Nombre del Proyecto",
    description: "Descripción del proyecto.",
    url: siteUrl,
    siteName: "Nombre del Proyecto",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/og-image.png", // 1200x630px — agregar a /public
        width: 1200,
        height: 630,
        alt: "Nombre del Proyecto",
      },
    ],
  },
 
  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "Nombre del Proyecto",
    description: "Descripción del proyecto.",
    images: ["/og-image.png"],
    // creator: "@tuhandle", // descomentar si aplica
  },
 
  // Robots — índexable por defecto, se puede sobreescribir por página
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
 
  // Favicon e íconos — agregar archivos a /public/icons
  icons: {
    icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon-32x32.png",
    apple: "/icons/apple-touch-icon.png",
  },
};
 
// ─── Layout ──────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-primary">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}