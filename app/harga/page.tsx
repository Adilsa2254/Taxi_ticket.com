"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import PricingSection from '../../components/PricingSection';

const Background3D = dynamic(() => import('../../components/Background3D'), { ssr: false });

export default function PricingPage() {
  return (
    <main className="relative min-h-screen bg-[#09090b] text-neutral-200 font-sans selection:bg-yellow-500/30">
      <Background3D />
      
      {/* Navbar - Minimalist */}
      <nav className="border-b border-white/[0.08] bg-[#09090b]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-yellow-400 rounded-sm flex items-center justify-center">
              <CarIcon className="w-4 h-4 text-black" />
            </div>
            <span className="font-semibold text-white tracking-tight">TaxiTicketing</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm text-neutral-400">
            <Link href="/produk" className="hover:text-neutral-100 transition-colors">Produk</Link>
            <Link href="/pelanggan" className="hover:text-neutral-100 transition-colors">Pelanggan</Link>
            <Link href="/harga" className="text-white font-medium transition-colors">Harga</Link>
            <Link href="/dokumentasi" className="hover:text-neutral-100 transition-colors">Dokumentasi</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium bg-white text-black px-4 py-1.5 rounded-md hover:bg-neutral-200 transition-colors shadow-sm">
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-20">
         <PricingSection />
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.08] bg-[#09090b]/80 backdrop-blur-md py-8 text-center text-sm text-neutral-500 mt-20">
        <p>© 2026 TaxiTicketing Inc. Dibangun untuk efisiensi.</p>
      </footer>
    </main>
  );
}

function CarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>
    </svg>
  );
}
