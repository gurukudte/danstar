import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import AdmissionPopup from "./components/AdmissionPopup";

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
    default:
      "Danstar Education Consultancy | Top Admission Guidance in Bangalore",
    template: "%s | Danstar Education Consultants",
  },
  description:
    "India's trusted education consultancy specializing in healthcare admissions (Nursing, MBBS, Pharmacy) & career counselling. Get end-to-end admission support for UG/PG courses in Bangalore & across India.",
  keywords: [
    "Admission guidance in Bangalore",
    "UG and PG admission help India",
    "Study in India consultant",
    "Top educational consultancy in Bangalore",
    "Career counselling in Bangalore",
    "Nursing admission consultancy Bangalore",
    "Allied health course admission guidance",
    "Pharmacy admission consultant India",
    "MBBS admission consultant India",
    "Education consultancy near me",
    "Free career counselling Bangalore",
    "Best career assessment India",
    "Healthcare education consultants",
    "MHA admission guidance Bangalore",
    "Paramedical admission help",
  ],
  openGraph: {
    title: "Danstar Education - Premier Admission Consultants in Bangalore",
    description:
      "95% admission success rate for healthcare courses. Expert guidance for Nursing, MBBS, Pharmacy, MHA & allied health courses with psychometric career assessments.",
    url: "https://www.danstareducation.com",
    siteName: "Danstar Education Consultants",
    images: [
      {
        url: "https://www.danstareducation.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Danstar Education Consultants - Admission Experts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danstar Education - Your Admission Success Partners",
    description:
      "From course selection to college admission - we guide you every step of the way",
    images: ["https://www.danstareducation.com/images/twitter-card.jpg"],
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
        <Providers>
          {children}
          <AdmissionPopup />
        </Providers>
      </body>
    </html>
  );
}
