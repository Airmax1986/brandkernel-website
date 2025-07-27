import Link from "next/link";
import WaitlistForm from "./WaitlistForm";

export default function Footer() {
  return (
    <footer className="relative">
      <WaitlistForm />
      <div className="absolute bottom-2 left-0 right-0 text-center text-xs">
        <div className="inline-flex gap-x-4">
          <Link href="/imprint" className="hover:underline">Imprint</Link>
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <span>© {new Date().getFullYear()} BrandKernel</span>
        </div>
      </div>
    </footer>
  );
}