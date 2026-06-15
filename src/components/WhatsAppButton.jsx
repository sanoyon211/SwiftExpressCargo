"use client";
import React from 'react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/8801715825331"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-6 md:right-8 md:bottom-8 z-50 group pointer-events-auto"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative bg-[#25D366] hover:bg-[#20bd5a] h-14 w-14 rounded-full flex justify-center items-center shadow-[0_4px_14px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:-translate-y-1">
        {/* Custom clean SVG for WhatsApp instead of heavy FontAwesome */}
        <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
          <path d="M12.031 21.493l-3.136-.916-2.585.836.844-2.548-.87-3.04a9.664 9.664 0 01-.131-7.214A9.68 9.68 0 0112.001 2.5a9.682 9.682 0 019.538 11.238 9.68 9.68 0 01-9.508 7.755zm0-17.493a8.18 8.18 0 00-8.031 9.497l-1.077 3.253 3.328-1.075a8.184 8.184 0 008.834.793 8.18 8.18 0 00-3.054-12.468z" />
          <path d="M16.5 14.5c-.3-.2-1.5-.7-1.7-.8-.2-.1-.4-.2-.5.1-.2.3-.6.8-.8 1-.1.2-.3.2-.6.1-.3-.1-1.1-.4-2-1.2-.7-.6-1.2-1.4-1.4-1.7-.1-.3 0-.4.2-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5s.1-.4 0-.5c-.1-.2-.5-1.3-.7-1.8-.2-.5-.4-.4-.5-.4h-.4c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.7s1.1 3.1 1.3 3.3c.2.3 2.2 3.4 5.4 4.8 2.2.9 3 1 3.6.9.7-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.2-.3-.3-.6-.4z" />
        </svg>
      </div>
    </a>
  );
}
