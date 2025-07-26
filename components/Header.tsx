// components/Header.tsx
import Link from "next/link";
import GridContainer from "./GridContainer";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 py-8">
      {/* THE FIX: Using the custom 'text-header' size and 'font-bold' */}
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
          {/* THE FIX: Grouping "About" and "Blog" together */}
          <div className="flex items-center space-x-4">
            <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
            <Link href="/blog" className="hover:text-gray-300 transition-colors">Blog</Link>
          </div>
          <Link href="/waitlist" className="bg-white text-black px-5 py-2 rounded-md hover:bg-gray-200 transition-colors">
            Join Waitlist
          </Link>
        </div>
      </GridContainer>
    </header>
  );
}
