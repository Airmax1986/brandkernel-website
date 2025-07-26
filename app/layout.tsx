import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Import the 'Inter' font
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Initialize the Inter font with the 'latin' subset
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BrandKernel - Stand out with positioning that feels like you",
  description: "We guide you through a deep, personal brand discovery, powered by an empathetic AI brand consultant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply the font's class name to the <body> tag
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
