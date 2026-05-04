import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://haitiannorte.mx";

export const metadata: Metadata = {
  title: {
    default: "Haitian Norte — Maquinaria CNC | Financiamiento Directo",
    template: "%s | Haitian Norte",
  },
  description:
    "Centros de maquinado y tornos CNC con financiamiento directo. 24 MSI, 15% de enganche, aprobación en 48 horas. Soporte técnico en Guadalajara, Jalisco.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Haitian Norte — Maquinaria CNC | Financiamiento Directo",
    description:
      "Centros de maquinado y tornos CNC con financiamiento directo. 24 MSI, 15% enganche, aprobación en 48 horas.",
    url: siteUrl,
    siteName: "Haitian Norte",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Haitian Norte — Maquinaria CNC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haitian Norte — Maquinaria CNC | Financiamiento Directo",
    description:
      "Centros de maquinado y tornos CNC con financiamiento directo.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={poppins.variable}>
      <head>
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5G5699ZJ');`,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5G5699ZJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
