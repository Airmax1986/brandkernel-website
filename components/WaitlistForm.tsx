'use client';

import { useState, useCallback } from "react";
import { WaitlistFormProps, WaitlistApiResponse } from '@/types';

/**
 * Enhanced Waitlist Form Component
 * Features: Better error handling, accessibility, loading states, validation
 */
export default function WaitlistForm({ 
  isHidden, 
  variant = 'floating',
  showCounter = true 
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [validationError, setValidationError] = useState("");

  // Email validation
  const validateEmail = useCallback((email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }, []);

  // Handle input change with validation
  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    
    // Clear validation error when user types
    if (validationError) {
      setValidationError("");
    }
    
    // Clear success state when user types
    if (isSuccess) {
      setIsSuccess(false);
      setMessage("");
    }
  }, [validationError, isSuccess]);

  // Handle form submission
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    if (!email.trim()) {
      setValidationError("Email is required");
      return;
    }
    
    if (!validateEmail(email)) {
      setValidationError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setMessage("");
    setValidationError("");

    try {
      const response = await fetch("/api/join-waitlist", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ 
          email: email.trim(),
          source: 'website',
          timestamp: new Date().toISOString()
        }),
      });

      const data: WaitlistApiResponse = await response.json();

      if (response.ok && data.success) {
        setIsSuccess(true);
        setMessage(data.message || "Successfully joined the waitlist!");
        setEmail(""); // Clear email on success
        
        // Track success (could add analytics here)
        console.log('Waitlist signup successful:', data.data);
        
      } else {
        const errorMessage = data.error || data.message || "Failed to join waitlist";
        setMessage(errorMessage);
        console.error('Waitlist API error:', data);
      }
    } catch (error) {
      console.error('Waitlist submission error:', error);
      setMessage("Unable to connect to server. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }, [email, validateEmail]);

  // Container styles based on variant
  const containerStyles = variant === 'floating'
    ? `fixed bottom-12 sm:bottom-4 left-0 right-0 w-full p-4 z-20 transition-opacity duration-300 ${
        isHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`
    : 'w-full max-w-md mx-auto';

  return (
    <div className={containerStyles}>
      <div className={`${variant === 'floating' ? 'container mx-auto flex justify-center items-center gap-x-4' : 'space-y-4'}`}>
        
        {/* Form Label */}
        {variant === 'floating' && (
          <span className="font-semibold text-white" id="waitlist-label">
            Join our Waitlist
          </span>
        )}

        {/* Success State */}
        {isSuccess ? (
          <div 
            className="flex items-center justify-center text-center bg-green-500 text-white px-4 py-2 rounded-md shadow-lg h-[42px] w-[320px]"
            role="status"
            aria-live="polite"
            aria-label="Success message"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path 
                fillRule="evenodd" 
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                clipRule="evenodd" 
              />
            </svg>
            <span>{message}</span>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="flex items-center shadow-lg" noValidate>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="name@mail.com"
                className={`
                  bg-white text-black text-base placeholder:text-gray-500 
                  px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-brand-blue
                  w-64 h-[42px] border-2 transition-colors
                  ${validationError ? 'border-red-500 focus:ring-red-500' : 'border-gray-200'}
                `}
                required
                disabled={isLoading}
                aria-label="Email address"
                aria-describedby={validationError ? "email-error" : variant === 'floating' ? "waitlist-label" : undefined}
                aria-invalid={!!validationError}
              />
              
              {/* Validation Error */}
              {validationError && (
                <div 
                  id="email-error"
                  className="absolute top-full left-0 mt-1 text-red-500 text-sm bg-white px-2 py-1 rounded shadow-lg z-10"
                  role="alert"
                  aria-live="polite"
                >
                  {validationError}
                </div>
              )}
            </div>
            
            <button
              type="submit"
              className={`
                bg-orange-500 text-white p-2 rounded-r-md 
                hover:bg-orange-600 focus:bg-orange-600
                transition-colors h-[42px] min-w-[42px]
                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
                disabled:bg-gray-400 disabled:cursor-not-allowed
                flex items-center justify-center
              `}
              disabled={isLoading || !email.trim()}
              aria-label={isLoading ? "Submitting..." : "Join waitlist"}
            >
              {isLoading ? (
                /* Loading Spinner */
                <svg 
                  className="animate-spin h-5 w-5" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle 
                    className="opacity-25" 
                    cx="12" 
                    cy="12" 
                    r="10" 
                    stroke="currentColor" 
                    strokeWidth="4"
                  />
                  <path 
                    className="opacity-75" 
                    fill="currentColor" 
                    d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : (
                /* Arrow Icon */
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              )}
            </button>
          </form>
        )}

        {/* Counter */}
        {variant === 'floating' && showCounter && (
          <span className="text-orange-400 font-medium">
            247 people already joined
          </span>
        )}
      </div>

      {/* Error Message */}
      {!isSuccess && message && (
        <div 
          className="text-center mt-2 text-sm text-red-400 font-semibold bg-red-50 border border-red-200 rounded px-3 py-2"
          role="alert"
          aria-live="polite"
        >
          {message}
        </div>
      )}
    </div>
  );
}
