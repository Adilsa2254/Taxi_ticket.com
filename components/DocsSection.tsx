"use client";

import React, { useState } from 'react';

const docSections = [
  {
    category: "Pengenalan",
    items: [
      { id: "getting-started", title: "Mulai Cepat" },
      { id: "architecture", title: "Arsitektur Sistem" },
    ]
  },
  {
    category: "API & Integrasi",
    items: [
      { id: "authentication", title: "Autentikasi" },
      { id: "endpoints", title: "REST Endpoints" },
      { id: "webhooks", title: "Webhooks" },
    ]
  },
  {
    category: "SDK",
    items: [
      { id: "nodejs", title: "Node.js SDK" },
      { id: "python", title: "Python SDK" },
    ]
  }
];

export default function DocsSection() {
  const [activeDoc, setActiveDoc] = useState("getting-started");

  return (
    <div className="w-full flex flex-col md:flex-row gap-8 lg:gap-12 min-h-[600px]">
      {/* Sidebar Navigation */}
      <div className="w-full md:w-64 shrink-0 border-r border-white/[0.08] pr-6">
        <div className="sticky top-24 space-y-8">
          {docSections.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">
                {section.category}
              </h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.id}>
                    <button 
                      onClick={() => setActiveDoc(item.id)}
                      className={`text-sm text-left w-full px-3 py-1.5 rounded-md transition-colors ${
                        activeDoc === item.id 
                          ? 'bg-white/[0.05] text-white font-medium' 
                          : 'text-neutral-400 hover:text-white hover:bg-white/[0.02]'
                      }`}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 max-w-3xl pb-20">
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
              {docSections.flatMap(s => s.items).find(i => i.id === activeDoc)?.title || "Dokumentasi"}
            </h1>
            <p className="text-neutral-400 text-lg">
              Pelajari cara mengintegrasikan TaxiTicketing ke dalam aplikasi Anda dengan API dan SDK kami.
            </p>
          </div>

          <div className="prose prose-invert max-w-none text-neutral-300">
            {activeDoc === 'getting-started' && (
              <div className="space-y-6">
                <p>
                  Selamat datang di dokumentasi resmi TaxiTicketing. Platform kami menyediakan infrastruktur yang andal untuk manajemen armada taksi.
                </p>
                <div className="p-4 rounded-lg bg-[#111113] border border-white/[0.08] font-mono text-sm">
                  npm install @taxiticketing/sdk
                </div>
                <h3 className="text-xl font-medium text-white mt-8 mb-4">Kunci API (API Keys)</h3>
                <p>
                  Untuk menggunakan API, Anda memerlukan API Key yang dapat diperoleh dari dashboard utama.
                  Gunakan header <code className="text-yellow-500 bg-yellow-500/10 px-1.5 py-0.5 rounded">Authorization: Bearer YOUR_API_KEY</code> pada setiap permintaan.
                </p>
              </div>
            )}

            {activeDoc === 'authentication' && (
              <div className="space-y-6">
                 <p>Seluruh endpoint API TaxiTicketing diamankan menggunakan bearer token (JWT).</p>
                 <div className="p-4 rounded-lg bg-[#111113] border border-white/[0.08] font-mono text-sm text-neutral-400 overflow-x-auto">
                    <span className="text-pink-500">const</span> <span className="text-blue-400">client</span> = <span className="text-pink-500">new</span> TaxiTicketing(&#123;<br/>
                    &nbsp;&nbsp;apiKey: <span className="text-green-400">'tt_live_xxxxxxxxx'</span><br/>
                    &#125;);
                 </div>
              </div>
            )}

            {activeDoc !== 'getting-started' && activeDoc !== 'authentication' && (
              <div className="space-y-6">
                <div className="p-8 rounded-xl border border-white/[0.08] bg-[#0c0c0e]/50 backdrop-blur-sm text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900 mb-4">
                    <svg className="w-6 h-6 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Konten Sedang Dalam Penulisan</h3>
                  <p className="text-sm text-neutral-500 max-w-xs mx-auto">
                    Dokumentasi untuk bagian ini sedang diperbarui oleh tim kami. Silakan cek kembali nanti.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-16 pt-8 border-t border-white/[0.08] flex justify-between items-center text-sm text-neutral-400">
            <span>Terakhir diperbarui: 15 Juli 2026</span>
            <button className="hover:text-white transition-colors">Usulkan Perubahan</button>
          </div>
        </div>
      </div>
    </div>
  );
}
