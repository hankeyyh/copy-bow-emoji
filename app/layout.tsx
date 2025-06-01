import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Copy Bow Emoji",
  description: "Copy the Bow Emoji",
  keywords: [
    "Bow Emoji",
    "Copy Bow Emoji", 
    "Copy Paste Bow Emoji",
    "bow copy and paste",
    "Emoji copying",
    "🎀 Emoji",
    "Copy and paste Emoji",
  ],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "Copy Bow Emoji 🎀",
    description: "Copy the Cute Bow Emoji!",
    url: "https://copybowemoji.com", // 请替换为您的实际域名
    siteName: "Copy Bow Emoji",
    images: [
      {
        url: "/og-image.png", // 您需要创建这个图片
        width: 1200,
        height: 630,
        alt: "Copy Bow Emoji 🎀",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Copy Bow Emoji 🎀",
    description: "Copy the Cute Bow Emoji!",
    images: ["/og-image.png"], // 您需要创建这个图片
    creator: "@yuhanyang123", // 请替换为您的Twitter用户名
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    'fb:app_id': '566658096180103', // 临时使用的示例App ID
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
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3200349185946749"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
