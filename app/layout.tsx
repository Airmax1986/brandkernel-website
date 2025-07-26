// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // WICHTIG: Importiert alle unsere Stile
import Header from "@/components/Header";

// Lädt die benötigten Schriftgewichte
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

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
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
