import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Danstar - Empowering the Future of Healthcare Innovation",
    template: "%s | Danstar Healthcare Solutions",
  },
  description:
    "Danstar is revolutionizing healthcare through innovative solutions, advanced technologies, and patient-centered care. Discover how we're shaping the future of medicine.",
  keywords: [
    "healthcare innovation",
    "medical technology",
    "healthcare solutions",
    "patient care",
    "medical advancements",
    "healthcare future",
    "Danstar healthcare",
  ],
  openGraph: {
    title: "Danstar - Leading Healthcare Innovation",
    description:
      "Pioneering the future of healthcare with cutting-edge solutions and patient-focused technologies.",
    url: "https://www.danstarhealth.com",
    siteName: "Danstar",
    images: [
      {
        url: "https://www.danstarhealth.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Danstar Healthcare Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danstar - Empowering Healthcare's Future",
    description: "Transforming healthcare through innovation and technology",
    images: ["https://www.danstarhealth.com/images/twitter-card.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.danstarhealth.com",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
