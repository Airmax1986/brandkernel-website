import Link from "next/link";

export default function Header() {
  return (
    // 1. Der <header> ist jetzt der vollflächige Container.
    // Er nimmt die volle Breite (w-full) und wendet den Seitenrand (px-page-margin) an.
    <header className="absolute top-0 left-0 right-0 z-20 py-4 w-full px-page-margin">
      
      {/* 2. Innerhalb des Headers erstellen wir einen neuen Container, der die Maximalbreite hat
          und sich zentriert. Dieser innere Container wird unser Grid. */}
      <div className="w-full max-w-[1920px] mx-auto grid grid-cols-8 gap-x-page-gutter items-center text-header font-bold">
        
        {/* Die Grid-Elemente bleiben unverändert */}
        <div className="col-span-2">
          <Link href="/">BrandKernel</Link>
        </div>

        <nav className="hidden md:flex col-span-4 items-center justify-center space-x-6">
          <Link href="/manifest" className="hover:text-gray-300 transition-colors">Manifest</Link>
          <Link href="/approach" className="hover:text-gray-300 transition-colors">Approach</Link>
          <Link href="/how-it-works" className="hover:text-gray-300 transition-colors">How it works</Link>
          <Link href="/features" className="hover:text-gray-300 transition-colors">Features</Link>
          <Link href="/pricing" className="hover:text-gray-300 transition-colors">Pricing</Link>
        </nav>

        <div className="hidden md:flex col-span-2 items-center justify-end space-x-8">
          <div className="flex items-center space-x-4">
            <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
            <Link href="/blog" className="hover:text-gray-300 transition-colors">Blog</Link>
          </div>
          <Link href="/waitlist" className="hover:text-gray-300 transition-colors">
            Join Waitlist
          </Link>
        </div>
      </div>
    </header>
  );
}