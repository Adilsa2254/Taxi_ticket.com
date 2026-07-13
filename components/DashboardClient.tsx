"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { initialStats, initialOrders, initialDrivers, simulateOrderUpdate, simulateDriverUpdate, simulateStatsUpdate, Stat, Order, Driver } from '../lib/mockData';
import LoginModal from './LoginModal';

// Dynamically import Background3D so it's not rendered on the server (WebGL APIs don't exist in Node)
const Background3D = dynamic(() => import('./Background3D'), { ssr: false });

// Clean, enterprise SaaS design. No blobs, no intense glows.
export default function DashboardClient() {
  const [stats, setStats] = useState<Stat[]>(initialStats);
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [drivers, setDrivers] = useState<Driver[]>(initialDrivers);
  
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrders(prev => simulateOrderUpdate(prev));
      setDrivers(prev => simulateDriverUpdate(prev));
      setStats(prev => simulateStatsUpdate(prev));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setOrders(prev => simulateOrderUpdate(prev));
      setDrivers(prev => simulateDriverUpdate(prev));
      setStats(prev => simulateStatsUpdate(prev));
      setIsRefreshing(false);
    }, 600);
  };

  return (
    <main className="relative min-h-screen bg-[#09090b] text-neutral-200 font-sans selection:bg-yellow-500/30">
      <Background3D />
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />

      {/* Navbar - Minimalist */}
      <nav className="border-b border-white/[0.08] bg-[#09090b]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-yellow-400 rounded-sm flex items-center justify-center">
              <CarIcon className="w-4 h-4 text-black" />
            </div>
            <span className="font-semibold text-white tracking-tight">TaxiTicketing</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-neutral-400">
            <a href="#" className="hover:text-neutral-100 transition-colors">Produk</a>
            <a href="#" className="hover:text-neutral-100 transition-colors">Pelanggan</a>
            <a href="#" className="hover:text-neutral-100 transition-colors">Harga</a>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setIsLoginModalOpen(true)} className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">
              Masuk
            </button>
            <button onClick={() => setIsLoginModalOpen(true)} className="text-sm font-medium bg-white text-black px-4 py-1.5 rounded-md hover:bg-neutral-200 transition-colors shadow-sm">
              Daftar
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Direct, bold, no fluff */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-6">
            Manajemen armada taksi, <br className="hidden md:block"/>
            <span className="text-neutral-500">disederhanakan.</span>
          </h1>
          <p className="text-lg text-neutral-400 mb-8 max-w-xl leading-relaxed">
            Infrastruktur lengkap untuk memantau pesanan, melacak pengemudi, dan menganalisis pendapatan harian. Dibangun untuk efisiensi operasional skala besar.
          </p>
          <div className="flex items-center gap-3">
            <button onClick={() => setIsLoginModalOpen(true)} className="bg-white text-black px-5 py-2.5 rounded-md font-medium text-sm hover:bg-neutral-200 transition-colors flex items-center gap-2 shadow-sm">
              Mulai sekarang <ArrowRightIcon className="w-4 h-4" />
            </button>
            <button className="bg-neutral-900 border border-white/[0.08] text-white px-5 py-2.5 rounded-md font-medium text-sm hover:bg-neutral-800 transition-colors">
              Dokumentasi
            </button>
          </div>
        </div>
      </section>

      {/* App Interface Preview - Stark, UI-focused */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-32">
        <div className="rounded-xl border border-white/[0.08] bg-[#0c0c0e] overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/5">
          
          {/* Header */}
          <div className="border-b border-white/[0.08] bg-[#111113] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-neutral-700" />
                <div className="w-3 h-3 rounded-full bg-neutral-700" />
                <div className="w-3 h-3 rounded-full bg-neutral-700" />
              </div>
              <span className="text-xs font-mono text-neutral-500 ml-2">app.taxiticketing.com/overview</span>
            </div>
            <button onClick={handleRefresh} className="text-neutral-400 hover:text-white transition-colors" title="Sync data">
               <RefreshIcon className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            </button>
          </div>

          <div className="p-6 md:p-8">
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="p-4 rounded-lg bg-[#111113] border border-white/[0.04]">
                  <div className="text-[11px] font-medium text-neutral-500 mb-2 uppercase tracking-wider">{stat.label}</div>
                  <div className="flex items-end gap-3">
                    <span className="text-2xl font-semibold text-white tracking-tight">{stat.value}</span>
                    <span className="text-xs font-medium text-emerald-500 mb-1">{stat.trend}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Orders List */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-white">Pesanan Aktif</h3>
                  <button className="text-xs font-medium text-neutral-400 hover:text-white transition-colors">Lihat semua</button>
                </div>
                <div className="rounded-lg border border-white/[0.04] bg-[#111113] overflow-hidden">
                  <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-[#18181b] border-b border-white/[0.04]">
                      <tr>
                        <th className="px-4 py-3 font-medium text-neutral-400 text-xs uppercase tracking-wider">ID</th>
                        <th className="px-4 py-3 font-medium text-neutral-400 text-xs uppercase tracking-wider">Pelanggan</th>
                        <th className="px-4 py-3 font-medium text-neutral-400 text-xs uppercase tracking-wider w-full">Rute</th>
                        <th className="px-4 py-3 font-medium text-neutral-400 text-xs uppercase tracking-wider text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.04]">
                      {orders.map((order) => (
                        <tr key={order.id} className="hover:bg-white/[0.02] transition-colors">
                          <td className="px-4 py-3 font-mono text-xs text-neutral-500">{order.id}</td>
                          <td className="px-4 py-3 text-neutral-200">{order.customer}</td>
                          <td className="px-4 py-3 text-neutral-400 truncate max-w-[200px] sm:max-w-[300px]">{order.route}</td>
                          <td className="px-4 py-3 text-right">
                            <span className="inline-flex items-center gap-1.5">
                              <span className={`w-1.5 h-1.5 rounded-full ${
                                order.status === 'Selesai' ? 'bg-emerald-500' :
                                order.status === 'Menunggu driver' ? 'bg-yellow-500' : 'bg-blue-500'
                              }`} />
                              <span className="text-xs text-neutral-300">{order.status}</span>
                            </span>
                          </td>
                        </tr>
                      ))}
                      {orders.length === 0 && (
                        <tr>
                          <td colSpan={4} className="px-4 py-8 text-center text-neutral-500">Tidak ada pesanan aktif.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Drivers List */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-white">Status Pengemudi</h3>
                  <span className="text-xs font-mono text-neutral-500">{drivers.length} total</span>
                </div>
                <div className="rounded-lg border border-white/[0.04] bg-[#111113] p-2 space-y-1">
                  {drivers.map((driver) => (
                    <div key={driver.name} className="flex items-center justify-between p-2 rounded-md hover:bg-white/[0.02] transition-colors">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium text-neutral-300">
                            {driver.name.charAt(0)}
                         </div>
                         <div>
                            <div className="text-sm text-neutral-200">{driver.name}</div>
                            <div className="text-xs text-neutral-500">{driver.car}</div>
                         </div>
                      </div>
                      <div className="text-right">
                         <div className="text-xs font-medium text-neutral-300">{driver.state}</div>
                         <div className="text-[10px] text-neutral-500 mt-0.5">★ {driver.rating}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.08] bg-[#09090b]/80 backdrop-blur-md py-8 text-center text-sm text-neutral-500">
        <p>© 2026 TaxiTicketing Inc. Dibangun untuk efisiensi.</p>
      </footer>
    </main>
  );
}

// Minimal Icons
function CarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>
    </svg>
  );
}
function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  );
}
function RefreshIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>
    </svg>
  );
}
