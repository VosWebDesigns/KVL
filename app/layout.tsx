import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { siteConfig } from "@/lib/site";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
  fallback: ["Arial Narrow", "Impact", "sans-serif"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "Helvetica Neue", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "nl_NL",
    type: "website",
    images: [{ url: siteConfig.logo, width: 1200, height: 1200, alt: "KVL Automotive logo" }],
  },
  twitter: { card: "summary_large_image", title: siteConfig.title, description: siteConfig.description, images: [siteConfig.logo] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${oswald.variable} ${inter.variable}`}>
      <body>
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <a
          href={siteConfig.whatsappHref}
          className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/50 transition duration-300 ease-cinematic hover:scale-105"
          aria-label="WhatsApp KVL Automotive"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .14 5.36.14 11.94c0 2.1.55 4.16 1.6 5.97L0 24l6.24-1.64a11.94 11.94 0 0 0 5.84 1.49h.01c6.58 0 11.94-5.36 11.94-11.94 0-3.19-1.24-6.19-3.51-8.43ZM12.09 21.84h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.7.97.99-3.61-.23-.37a9.86 9.86 0 0 1-1.52-5.3c0-5.47 4.45-9.92 9.92-9.92a9.86 9.86 0 0 1 7.01 2.91 9.86 9.86 0 0 1 2.9 7.01c0 5.46-4.45 9.9-9.95 9.9Zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" /></svg>
        </a>
        <Footer />
      </body>
    </html>
  );
}
