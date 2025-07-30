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
      className={`
        inline-block w-full text-center py-4 px-8 
        rounded-full 
        text-white font-semibold text-xl 
        bg-gradient-to-r from-orange-500 via-fuchsia-500 to-purple-600 
        transition-transform duration-200 ease-in-out hover:scale-105 
        shadow-lg
        ${className || ''}
      `}
    >
      {children}
    </Link>
  );
}