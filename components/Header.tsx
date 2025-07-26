// components/Header.tsx
import Link from "next/link";
import GridContainer from "./GridContainer"; // Import the grid

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 py-8">
      <GridContainer className="items-center text-white">
        {/* Left: Logo spans 2 columns */}
        <div className="col-span-2 text-2xl font-bold">
          <Link href="/">BrandKernel</Link>
        </div>

        {/* Center: Main Navigation spans 4 columns */}
        <nav className="hidden md:flex col-span-4 items-center justify-center space-x-8 text-lg">
          <Link href="/#features" className="hover:text-gray-300 transition-colors">How it works, Features, Pricing, Manifest</Link>
        </nav>

        {/* Right: Secondary Nav spans 2 columns */}
        <div className="hidden md:flex col-span-2 items-center justify-end space-x-8 text-lg">
          <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
          <Link href="/blog" className="hover:text-gray-300 transition-colors">Blog</Link>
          <Link href="/waitlist" className="bg-white text-black px-5 py-2 rounded-md font-semibold hover:bg-gray-200 transition-colors">
            Join Waitlist
          </Link>
        </div>
      </GridContainer>
    </header>
  );
}
