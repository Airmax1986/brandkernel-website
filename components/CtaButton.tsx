import Link from 'next/link';
import React from 'react';

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function CtaButton({ href, children, className }: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-block bg-orange-500 text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-orange-600 transition-colors shadow-lg ${className || ''}`}
    >
      {children}
    </Link>
  );
}