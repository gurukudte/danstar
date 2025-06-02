import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import AdmissionPopup from "./components/AdmissionPopup";
import { GA_TRACKING_ID } from "@/lib/gtag";
import Script from "next/script";

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
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GA_TRACKING_ID}');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
          <AdmissionPopup />
        </Providers>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
      </body>
    </html>
  );
}
