import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    "Emoji copying",
    "🎀 Emoji",
    "Free Bow Emoji",
    "Copy and paste Emoji",
    "Emoji symbols",
    "Colorful emojis"
  ],
  icons: {
    icon: '/favicon.svg',
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
        {children}
      </body>
    </html>
  );
}
