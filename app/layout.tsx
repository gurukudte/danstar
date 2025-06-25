import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { GA_TRACKING_ID } from "@/lib/gtag";
import Script from "next/script";
import { AppLayout } from "./AppLayout";
import Image from "next/image";

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
    "best career counselling in bangalore",
    "career consultant in bangalore",
    "career counselling in bangalore for students",
    "career guidance in bangalore",
    // Study Abroad Keywords
    "study abroad consultants bangalore",
    "best consultancy in bangalore for abroad studies",
    "consultancy for abroad studies in bangalore",
    "best overseas consultancy in bangalore",

    // Education Consultants
    "best admission consultants in bangalore",
    "education counsellor in bangalore",
    "best educational consultants in bangalore",
    "top education consultants in bangalore",
    "best education counsellor in bangalore",
    "higher education consultants in bangalore",
    "higher studies consultancy in bangalore",

    // India-wide Education
    "education consultants in india",
    "best education consultants in india",

    // MBBS Admissions
    "mbbs admission consultants in india",
    "best mbbs admission consultants in india",
    "mbbs admission consultants in bangalore",
    "mbbs consultant in bangalore",
    "mbbs abroad consultants in bangalore",

    // Career Guidance
    "best career after 12th in india",
    "best career in india after 12th",
    "best career options after 12th in india",

    // Nursing & BBA
    "bsc nursing colleges in bangalore with fees",
    "bsc nursing fees bangalore",
    "bba admission in bangalore",
    "bba colleges in bangalore direct admission",
  ],
  openGraph: {
    title: "Danstar Education - Premier Admission Consultants in Bangalore",
    description:
      "95% admission success rate for healthcare courses. Expert guidance for Nursing, MBBS, Pharmacy, MHA & allied health courses with psychometric career assessments.",
    url: "https://www.danstar.in",
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
    canonical: "https://www.danstar.in",
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
        {/* ✅ Google Site Verification for SEO */}
        <meta
          name="google-site-verification"
          content="DHh84Qx8_Vwrd_j1du7cULIa94GV4Y5KmNnqJ1HPRkQ"
        />

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

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-FMSBFW9BMC"
        />
        <Script id="ga-new-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FMSBFW9BMC');
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1397752228092607');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <Image
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1397752228092607&ev=PageView&noscript=1"
            alt=""
            unoptimized
            priority
          />
        </noscript>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>

        {/* GTM Fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* GA Fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
