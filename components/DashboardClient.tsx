"use client";

import React, { useState, useEffect } from 'react';
import { initialStats, initialOrders, initialDrivers, simulateOrderUpdate, simulateDriverUpdate, simulateStatsUpdate, Stat, Order, Driver } from '../lib/mockData';
import LoginModal from './LoginModal';

export default function DashboardClient() {
  const [stats, setStats] = useState<Stat[]>(initialStats);
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [drivers, setDrivers] = useState<Driver[]>(initialDrivers);
  
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdate, setLastUpdate] = useState("1 menit lalu");

  // Simulated Real-time Polling
  useEffect(() => {
    const interval = setInterval(() => {
      setOrders(prev => simulateOrderUpdate(prev));
      setDrivers(prev => simulateDriverUpdate(prev));
      setStats(prev => simulateStatsUpdate(prev));
      setLastUpdate("Baru saja");
    }, 5000); // Polling every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate manual refresh
    setTimeout(() => {
      setOrders(prev => simulateOrderUpdate(prev));
      setDrivers(prev => simulateDriverUpdate(prev));
      setStats(prev => simulateStatsUpdate(prev));
      setLastUpdate("Baru saja");
      setIsRefreshing(false);
    }, 800);
  };

  const getIcon = (iconName: string) => {
      switch (iconName) {
          case 'chart': return <ChartIcon />;
          case 'car': return <CarIcon />;
          case 'check': return <CheckIcon />;
          case 'wallet': return <WalletIcon />;
          default: return <ChartIcon />;
      }
  };

  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500/30 overflow-hidden">
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />

      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto lg:px-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
            <CarIcon className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">Taxi<span className="text-cyan-400">Ticketing</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#" className="hover:text-white transition-colors">Fitur</a>
          <a href="#" className="hover:text-white transition-colors">Solusi</a>
          <a href="#" className="hover:text-white transition-colors">Harga</a>
        </div>
        <div>
          <button onClick={() => setIsLoginModalOpen(true)} className="px-5 py-2.5 text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 backdrop-blur-md">
            Masuk / Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24 lg:px-10 lg:pt-24 lg:pb-32 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Platform Manajemen Taksi #1 di Indonesia
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 max-w-4xl mb-6 leading-tight">
          Kelola armada Anda dengan <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 glow-text">Cerdas & Real-time</span>
        </h1>
        
        <p className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
          Tingkatkan efisiensi operasional taksi Anda. Pantau order, driver, status perjalanan, dan performa harian dalam satu dashboard intuitif yang dirancang untuk pertumbuhan bisnis.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button onClick={() => setIsLoginModalOpen(true)} className="w-full sm:w-auto px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-lg transition-all duration-300 shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2 group">
            Mulai Gratis <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold text-lg transition-all duration-300 backdrop-blur-md">
            Jadwalkan Demo
          </button>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-32 lg:px-10">
        <div className="relative rounded-[2.5rem] border border-white/10 bg-slate-900/50 p-4 md:p-8 backdrop-blur-xl shadow-2xl overflow-hidden group/dashboard hover:border-white/20 transition-colors duration-500">
          
          {/* Subtle gradient overlay on dashboard */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />
          
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 relative z-10">
            <div>
              <h2 className="text-2xl font-bold text-white">Ringkasan Hari Ini</h2>
              <p className="text-sm text-slate-400 mt-1">13 Juli 2026 • Update terakhir {lastUpdate}</p>
            </div>
            <div className="flex gap-2">
               <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-colors">
                  <FilterIcon className="w-4 h-4" />
               </button>
               <button onClick={handleRefresh} className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-colors">
                  <RefreshIcon className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : 'group-hover/dashboard:rotate-180 duration-700'}`} />
               </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 relative z-10">
            {stats.map((stat) => (
              <div key={stat.label} className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-900/20 group/stat flex flex-col justify-between h-32">
                <div className="flex justify-between items-start">
                  <span className="text-sm font-medium text-slate-400">{stat.label}</span>
                  <div className="p-2 rounded-lg bg-white/5 text-cyan-400 group-hover/stat:bg-cyan-500/20 transition-colors">
                    {getIcon(stat.iconName)}
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-3xl font-bold text-white">{stat.value}</span>
                  <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md">
                    {stat.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Grid: Orders & Drivers */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 relative z-10">
            
            {/* Orders */}
            <div className="xl:col-span-2 rounded-2xl bg-slate-950/50 border border-white/5 p-6 flex flex-col h-full transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Order Sedang Berjalan</h3>
                <a href="#" className="text-sm font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1">Lihat semua <ArrowRightIcon className="w-4 h-4" /></a>
              </div>
              <div className="space-y-3 flex-1 relative">
                {orders.length === 0 && <p className="text-slate-400 text-sm">Tidak ada order aktif.</p>}
                {orders.map((ride) => (
                  <div key={ride.id} className="group/ride flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 gap-4 hover:bg-white/10 animate-fade-in-up">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover/ride:border-cyan-500/30 transition-colors">
                        <UserIcon className="w-5 h-5 text-slate-300 group-hover/ride:text-cyan-400 transition-colors" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-white">{ride.customer}</span>
                          <span className="text-xs text-slate-500 px-2 py-0.5 rounded-full bg-white/5 border border-white/5 font-mono">{ride.id}</span>
                        </div>
                        <p className="text-sm text-slate-400 mt-1 flex items-center gap-1">
                          <MapPinIcon className="w-3.5 h-3.5 text-slate-500" />
                          {ride.route}
                        </p>
                      </div>
                    </div>
                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full border transition-colors ${
                        ride.status === 'Selesai' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                        ride.status === 'Menunggu driver' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 
                        'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                      }`}>
                        {ride.status}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">{ride.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Drivers */}
            <div className="rounded-2xl bg-cyan-950/20 border border-cyan-500/10 p-6 flex flex-col h-full relative overflow-hidden group/drivers hover:border-cyan-500/30 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] rounded-full pointer-events-none group-hover/drivers:bg-cyan-500/20 transition-colors duration-700" />
              <div className="flex items-center justify-between mb-6 relative z-10">
                <h3 className="text-lg font-semibold text-white">Status Driver</h3>
                <span className="text-xs font-bold bg-cyan-500/20 text-cyan-300 px-2.5 py-1 rounded-md border border-cyan-500/20">{drivers.filter(d => d.state !== 'Istirahat').length} Aktif</span>
              </div>
              <div className="space-y-4 flex-1 relative z-10">
                {drivers.map((driver) => (
                  <div key={driver.name} className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/5 hover:scale-[1.02]">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-white/10">
                          <span className="font-semibold text-sm text-slate-300">{driver.name.charAt(0)}</span>
                        </div>
                        <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-slate-900 transition-colors duration-500 ${
                          driver.state === 'Online' ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' :
                          driver.state === 'Dalam perjalanan' ? 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]' : 'bg-slate-500'
                        }`} />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-white">{driver.name}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{driver.car}</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                       <div className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded">
                         <StarIcon className="w-3 h-3 fill-amber-400" />
                         {driver.rating}
                       </div>
                       <span className="text-[10px] font-medium text-slate-400 transition-colors">{driver.state}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-5 py-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-sm font-semibold text-cyan-400 transition-colors relative z-10">
                Kelola Semua Armada
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
           <div className="flex items-center gap-2">
             <CarIcon className="w-5 h-5 text-cyan-400" />
             <span className="text-lg font-bold tracking-tight text-white">Taxi<span className="text-cyan-400">Ticketing</span></span>
           </div>
           <p className="text-sm font-medium text-slate-500">© 2026 TaxiTicketing. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

// SVG Icons
function ChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>
    </svg>
  );
}
function CarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>
    </svg>
  );
}
function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>
    </svg>
  );
}
function WalletIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>
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
function FilterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
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
function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  );
}
function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}
