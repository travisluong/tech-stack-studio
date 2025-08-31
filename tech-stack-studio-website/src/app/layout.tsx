import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Stack Studio | Full Stack Web Development",
  description: "Crafting exceptional full-stack web experiences with modern technology and creative vision. Where technical expertise meets artistic innovation.",
  keywords: "full stack development, web development, React, Next.js, TypeScript, modern web applications",
  authors: [{ name: "Tech Stack Studio" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
