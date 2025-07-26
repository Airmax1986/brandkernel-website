// components/Header.tsx
import Link from "next/link";
import GridContainer from "./GridContainer";

export default function Header() {
  return (
    // THE FIX: Vertikales Padding reduziert (py-6 statt py-8) für korrekten oberen Rand
    <header className="absolute top-0 left-0 right-0 z-20 py-6">
      <GridContainer className="items-center text-white text-header font-bold">
        {/* Left: Logo */}
        <div className="col-span-2">
          <Link href="/">BrandKernel</Link>
        </div>

        {/* Center: Main Navigation */}
        <nav className="hidden md:flex col-span-4 items-center justify-center">
          <Link href="/#features" className="hover:text-gray-300 transition-colors">How it works, Features, Pricing, Manifest</Link>
        </nav>

        {/* Right: Secondary Nav & CTA */}
        <div className="hidden md:flex col-span-2 items-center justify-end space-x-8">
          <div className="flex items-center space-x-4">
            <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
            <Link href="/blog" className="hover:text-gray-300 transition-colors">Blog</Link>
          </div>
          {/* THE FIX: Button-Styling komplett entfernt, jetzt reiner Text-Link */ }
          <Link href="/waitlist" className="hover:text-gray-300 transition-colors">
            Join Waitlist
          </Link>
        </div>
      </GridContainer>
    </header>
  );
}
