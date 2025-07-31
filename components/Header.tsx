'use client';

import Link from "next/link";
import { useState } from "react";
import { HeaderProps, NavigationItem } from '@/types';

/**
 * Header Component with responsive navigation
 * Features: Mobile hamburger menu, accessibility support, keyboard navigation
 */
export default function Header({ variant = 'default', fixed = true }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation structure
  const mainNavigation: NavigationItem[] = [
    { href: "/manifest", label: "Manifest" },
    { href: "/approach", label: "Approach" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" }
  ];

  const secondaryNavigation: NavigationItem[] = [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Dynamic header styles based on variant
  const headerClasses = `
    ${fixed ? 'fixed' : 'absolute'} top-0 left-0 right-0 z-50 w-full
    ${variant === 'transparent' ? 'bg-transparent' : 'bg-white/95 backdrop-blur-sm'}
    transition-all duration-300
  `;

  return (
    <header className={headerClasses}>
      {/* Main header container */}
      <div className="flex items-center justify-between w-full max-w-[1920px] mx-auto px-page-margin py-4 text-header font-bold">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link 
            href="/" 
            className="text-xl font-bold text-brand-blue hover:opacity-80 transition-opacity"
            aria-label="BrandKernel - Go to homepage"
          >
            BrandKernel
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
          {mainNavigation.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className="hover:text-brand-blue hover:underline transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded-sm px-2 py-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Secondary Navigation & CTA */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex items-center space-x-4">
            {secondaryNavigation.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="hover:text-brand-blue hover:underline transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded-sm px-2 py-1"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link 
            href="/waitlist" 
            className="bg-brand-blue text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
          >
            Join Waitlist
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span 
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
              }`}
            />
            <span 
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span 
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="px-page-margin py-6 space-y-4">
          {/* Main Navigation */}
          <div className="space-y-3">
            {mainNavigation.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className="block py-2 text-lg hover:text-brand-blue hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded-sm"
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <hr className="border-gray-200" />

          {/* Secondary Navigation */}
          <div className="space-y-3">
            {secondaryNavigation.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className="block py-2 text-lg hover:text-brand-blue hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded-sm"
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="pt-4">
            <Link 
              href="/waitlist"
              className="block w-full bg-brand-blue text-white text-center py-3 px-4 rounded-full hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
              onClick={closeMobileMenu}
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
