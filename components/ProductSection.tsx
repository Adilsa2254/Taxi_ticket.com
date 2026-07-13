import React from 'react';

export default function ProductSection() {
  const features = [
    {
      title: "Automated Dispatch",
      description: "Sistem cerdas secara otomatis mencarikan pengemudi terdekat dengan algoritma rute optimal untuk mengurangi waktu tunggu pelanggan.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
      )
    },
    {
      title: "Real-time Tracking",
      description: "Lacak posisi setiap armada Anda di peta secara langsung (live). Dapatkan visibilitas 100% terhadap pergerakan aset Anda.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
      )
    },
    {
      title: "Dynamic Pricing",
      description: "Atur harga secara dinamis berdasarkan jam sibuk, cuaca, atau tingkat permintaan di area tertentu untuk memaksimalkan pendapatan.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      )
    },
    {
      title: "Driver Analytics",
      description: "Pantau performa pengemudi, tingkat penyelesaian pesanan, dan ulasan pelanggan untuk memastikan kualitas layanan terbaik.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
      )
    },
    {
      title: "Fleet Maintenance",
      description: "Jadwalkan dan lacak perbaikan kendaraan. Dapatkan pengingat otomatis untuk servis rutin berdasarkan jarak tempuh.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
      )
    },
    {
      title: "Secure Payments",
      description: "Integrasi pembayaran digital yang aman. Dukungan untuk kartu kredit, e-wallet, dan manajemen pencairan dana pengemudi.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
      )
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, idx) => (
        <div key={idx} className="p-6 rounded-xl border border-white/[0.08] bg-[#0c0c0e] hover:bg-[#111113] transition-colors group">
          <div className="w-10 h-10 rounded-lg bg-[#18181b] border border-white/[0.04] flex items-center justify-center mb-5 text-neutral-400 group-hover:text-yellow-400 transition-colors shadow-sm">
            {feature.icon}
          </div>
          <h3 className="text-lg font-medium text-white mb-2">{feature.title}</h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
