import Link from 'next/link';
import React from 'react';

interface PathButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function PathButton({ href, children }: PathButtonProps) {
  return (
    <Link
      href={href}
      className="block w-full text-center border-2 border-white text-white font-bold py-4 px-8 rounded-md text-2xl hover:bg-white hover:text-brand-blue transition-colors"
    >
      {children}
    </Link>
  );
}