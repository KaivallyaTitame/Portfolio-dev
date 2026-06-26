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
  title: "Kaivallya Titame | Software Developer | Full Stack & AI | Pune",
  description: "Software Developer specializing in Java, Spring Boot, Angular, and MEAN Stack. 6 months SWE experience at Qualys. B.Tech IT graduate from VIIT Pune. Open to opportunities.",
  keywords: ["Software Developer Pune", "Java Developer", "Spring Boot Developer", "Angular Developer", "MEAN Stack Developer", "Full Stack Developer", "Kaivallya Titame"],
  openGraph: {
    title: "Kaivallya Titame | Software Developer",
    description: "Full Stack & AI developer with industry experience at Qualys. Java, Spring Boot, Angular, MEAN Stack.",
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
