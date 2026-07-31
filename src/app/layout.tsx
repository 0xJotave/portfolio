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
  metadataBase: new URL("https://0xjotave.me"),
  title: "0xJotave | Back-end Engineer",
  description:
    "Portfólio de João Victor Moura Barbosa - Back-end Engineer especializado em Java, Spring Boot e TypeScript.",
  openGraph: {
    title: "0xJotave | Back-end Engineer",
    description:
      "Portfólio de João Victor Moura Barbosa - Back-end Engineer especializado em Java, Spring Boot e TypeScript.",
    url: "https://0xjotave.me",
    siteName: "0xJotave",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "0xJotave - Back-end Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "0xJotave | Back-end Engineer",
    description:
      "Portfólio de João Victor Moura Barbosa - Back-end Engineer especializado em Java, Spring Boot e TypeScript.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}