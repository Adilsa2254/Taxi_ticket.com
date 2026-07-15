"use client";

import React, { useState } from 'react';

const pricingPlans = [
  {
    name: "Starter",
    price: "Rp 0",
    period: "/bulan",
    description: "Sempurna untuk bisnis kecil yang baru memulai dengan manajemen armada dasar.",
    features: [
      "Hingga 5 kendaraan",
      "Pelacakan rute dasar",
      "Dashboard analitik standar",
      "Dukungan email",
    ],
    cta: "Mulai Gratis",
    popular: false,
  },
  {
    name: "Pro",
    price: "Rp 499.000",
    period: "/bulan",
    description: "Fitur lanjutan untuk armada yang sedang berkembang dan membutuhkan optimasi.",
    features: [
      "Hingga 50 kendaraan",
      "Pelacakan real-time presisi tinggi",
      "Analitik kustom & laporan ekspor",
      "Manajemen pengemudi & jadwal",
      "Dukungan prioritas 24/7",
    ],
    cta: "Coba Gratis 14 Hari",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Solusi disesuaikan untuk operasi skala besar dan integrasi sistem.",
    features: [
      "Kendaraan tak terbatas",
      "API akses penuh & webhooks",
      "Integrasi sistem kustom",
      "Manajer akun dedikasi",
      "SLA 99.9% uptime jaminan",
    ],
    cta: "Hubungi Sales",
    popular: false,
  }
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="w-full">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">
          Harga yang transparan untuk <br className="hidden md:block"/> skala bisnis Anda
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
          Pilih paket yang sesuai dengan ukuran armada Anda. Tidak ada biaya tersembunyi.
        </p>

        {/* Toggle Biling */}
        <div className="flex items-center justify-center mt-10 gap-4">
          <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-neutral-500'}`}>Bulanan</span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-12 h-6 rounded-full bg-[#18181b] border border-white/[0.08] relative flex items-center px-1 transition-colors hover:bg-[#27272a]"
          >
            <div className={`w-4 h-4 rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`} />
          </button>
          <span className={`text-sm flex items-center gap-2 ${isAnnual ? 'text-white' : 'text-neutral-500'}`}>
            Tahunan <span className="text-[10px] bg-yellow-500/20 text-yellow-500 px-2 py-0.5 rounded-full font-medium">Hemat 20%</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {pricingPlans.map((plan) => (
          <div 
            key={plan.name} 
            className={`relative rounded-2xl border p-8 flex flex-col transition-all duration-300 hover:border-white/[0.2] ${
              plan.popular 
                ? 'border-yellow-500/30 bg-yellow-500/[0.02] shadow-[0_0_30px_-15px_rgba(234,179,8,0.2)]' 
                : 'border-white/[0.08] bg-[#0c0c0e]/50 backdrop-blur-sm'
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="bg-yellow-500 text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  Paling Populer
                </span>
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-lg font-medium text-white mb-2">{plan.name}</h3>
              <p className="text-sm text-neutral-400 h-10">{plan.description}</p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-end gap-1">
                <span className="text-4xl font-semibold text-white tracking-tight">
                  {plan.price === "Custom" ? "Custom" : isAnnual && plan.price !== "Rp 0" ? `Rp 399.000` : plan.price}
                </span>
                {plan.period && (
                  <span className="text-neutral-500 mb-1">{plan.period}</span>
                )}
              </div>
            </div>

            <div className="flex-grow space-y-4 mb-8">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-300">{feature}</span>
                </div>
              ))}
            </div>

            <button className={`w-full py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
              plan.popular
                ? 'bg-yellow-400 text-black hover:bg-yellow-500'
                : 'bg-white/[0.05] text-white hover:bg-white/[0.1] border border-white/[0.08]'
            }`}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 6 9 17l-5-5"/>
    </svg>
  );
}
