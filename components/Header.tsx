import Link from "next/link";

export default function Header() {
  return (
    // Der äußere <header> erstreckt sich über die volle Breite
    <header className="absolute top-0 left-0 right-0 z-20 w-full">
      {/* 
        Dieser innere Container ist der Flex-Container.
        - max-w-[1920px] & mx-auto: Zentriert auf >1920px Bildschirmen.
        - px-page-margin: Wendet den 1.5rem Rand an.
        - flex & justify-between: Schiebt die äußeren Elemente an den Rand.
      */}
      <div className="flex items-center justify-between w-full max-w-[1920px] mx-auto px-page-margin py-4 text-header font-bold">
        
        {/* Gruppe 1: Logo (wird ganz nach links geschoben) */}
        <div>
          <Link href="/">BrandKernel</Link>
        </div>

        {/* Gruppe 2: Zentrale Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/manifest" className="hover:text-gray-300 transition-colors">Manifest</Link>
          <Link href="/approach" className="hover:text-gray-300 transition-colors">Approach</Link>
          <Link href="/how-it-works" className="hover:text-gray-300 transition-colors">How it works</Link>
          <Link href="/features" className="hover:text-gray-300 transition-colors">Features</Link>
          <Link href="/pricing" className="hover:text-gray-300 transition-colors">Pricing</Link>
        </nav>

        {/* Gruppe 3: Rechte Navigation (wird ganz nach rechts geschoben) */}
        <div className="hidden md:flex items-center space-x-8">
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