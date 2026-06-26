import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaivallya Titame | Software Developer & Freelancer | Pune",
  description: "2026 B.Tech IT graduate from VIIT Pune. Java, Spring Boot, Angular, MEAN Stack developer. 6 months at Qualys. Available for placements and freelance projects in Pune.",
  keywords: ["Java Developer Pune", "Spring Boot Developer", "Angular Developer", "MEAN Stack Freelancer", "Software Developer Pune", "Kaivallya Titame"],
  openGraph: {
    title: "Kaivallya Titame | Software Developer",
    description: "Java, Spring Boot, Angular Developer. Qualys intern. Available for placements and freelance.",
    url: "https://kaivallyatitame.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className="min-h-screen bg-[#08101F] text-white font-sans">
        {children}
      </body>
    </html>
  );
}
