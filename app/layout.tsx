import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

// Diese Zeilen waren in der letzten Version fehlerhaft oder fehlten
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
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        {/* Der Footer wird jetzt auf jeder Seite einzeln hinzugefügt, nicht mehr hier. */}
      </body>
    </html>
  );
}