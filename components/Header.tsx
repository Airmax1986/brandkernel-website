// components/Header.tsx
import Link from "next/link";
import GridContainer from "./GridContainer";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 py-4">
      {/* THE FIX: Textfarbe von text-white auf text-black geändert */}
      <GridContainer className="items-center text-black text-header font-bold">
        {/* Left: Logo */}
        <div className="col-span-2">
          <Link href="/">BrandKernel</Link>
        </div>

        {/* Center: Main Navigation */}
        <nav className="hidden md:flex col-span-4 items-center justify-center">
          <Link href="/#howitworks" className="hover:text-gray-600 transition-colors">Approach,</Link>
          <Link href="/#howitworks" className="hover:text-gray-600 transition-colors">How it works,</Link>
          <Link href="/#howitworks" className="hover:text-gray-600 transition-colors">Features,</Link>
          <Link href="/#howitworks" className="hover:text-gray-600 transition-colors">Pricing</Link>
        </nav>

        {/* Right: Secondary Nav & CTA */}
        <div className="hidden md:flex col-span-2 items-center justify-end space-x-8">
          <div className="flex items-center space-x-4">
            <Link href="/about" className="hover:text-gray-600 transition-colors">About,</Link>
            <Link href="/blog" className="hover:text-gray-600 transition-colors">Blog,</Link>
          <Link href="/waitlist" className="hover:text-gray-600 transition-colors">Join Waitlist</Link>
          </Link>
        </div>
      </GridContainer>
    </header>
  );
}