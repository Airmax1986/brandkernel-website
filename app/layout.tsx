import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import WaitlistForm from "@/components/WaitlistForm";
import SiteFooter from "@/components/SiteFooter";

const inter = Inter({ subsets: ["latin"], weight: ["300", "500", "700"] });

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
      <body className="relative">
        <Header />
        <main>{children}</main>
        <SiteFooter />
        <WaitlistForm />
      </body>
    </html>
  );
}