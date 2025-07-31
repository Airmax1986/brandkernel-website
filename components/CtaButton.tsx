import Link from 'next/link';
import React from 'react';
import { CtaButtonProps } from '@/types';

/**
 * CTA Button Component with multiple variants and sizes
 * Supports internal and external links with proper accessibility
 */
export default function CtaButton({ 
  href, 
  children, 
  className = '',
  variant = 'primary',
  size = 'md'
}: CtaButtonProps) {
  // Base styles that apply to all variants
  const baseStyles = `
    inline-block text-center font-semibold 
    rounded-full transition-all duration-200 ease-in-out 
    hover:scale-105 active:scale-95
    focus:outline-none focus:ring-2 focus:ring-offset-2
    shadow-lg hover:shadow-xl
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
  `;

  // Size variants
  const sizeStyles = {
    sm: 'py-2 px-6 text-sm',
    md: 'py-4 px-8 text-xl',
    lg: 'py-5 px-10 text-2xl'
  };

  // Color variants
  const variantStyles = {
    primary: `
      text-white
      bg-gradient-to-r from-orange-500 via-fuchsia-500 to-purple-600
      hover:from-orange-600 hover:via-fuchsia-600 hover:to-purple-700
      focus:ring-purple-500
    `,
    secondary: `
      text-brand-blue border-2 border-brand-blue
      bg-transparent hover:bg-brand-blue hover:text-white
      focus:ring-brand-blue
    `,
    outline: `
      text-gray-700 border-2 border-gray-300
      bg-transparent hover:bg-gray-50 hover:border-gray-400
      focus:ring-gray-500
    `
  };

  // Combine all styles
  const combinedStyles = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  // Check if it's an external link
  const isExternal = href.startsWith('http') || href.startsWith('//');

  // External link
  if (isExternal) {
    return (
      <a
        href={href}
        className={combinedStyles}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={typeof children === 'string' ? children : 'External link'}
      >
        {children}
      </a>
    );
  }

  // Internal link using Next.js Link
  return (
    <Link
      href={href}
      className={combinedStyles}
      aria-label={typeof children === 'string' ? children : 'Navigation link'}
    >
      {children}
    </Link>
  );
}
