// components/SiteFooter.tsx
import Link from "next/link";
import GridContainer from "./GridContainer";
import React from "react";

const SiteFooter = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <footer ref={ref} className="bg-white text-brand-blue py-8">
      <GridContainer>
        <div className="col-span-full flex justify-between items-center text-sm">
          <span>© {new Date().getFullYear()} BrandKernel</span>
          <div className="flex gap-x-6">
            <Link href="/imprint" className="hover:underline">Imprint</Link>
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </GridContainer>
    </footer>
  );
});

SiteFooter.displayName = "SiteFooter";
export default SiteFooter;