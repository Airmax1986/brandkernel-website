// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import FooterController from "@/components/FooterController";

const inter = Inter({ subsets: ["latin"], weight: ["300", "500", "700"] });

export const metadata = { /* ... */ };

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
        <FooterController />
      </body>
    </html>
  );
}