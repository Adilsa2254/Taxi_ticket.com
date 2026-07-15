"use client";

import React from 'react';

const testimonials = [
  {
    quote: "TaxiTicketing telah mentransformasi cara kami mengelola armada 500+ kendaraan kami. Efisiensi operasional meningkat secara drastis sejak hari pertama.",
    author: "Budi Santoso",
    role: "Direktur Operasional, TransNusa",
    avatar: "BS"
  },
  {
    quote: "Pelacakan real-time dan analitik yang disediakan sangat akurat. Kami berhasil mengurangi waktu tunggu pelanggan hingga 30%.",
    author: "Siti Rahma",
    role: "Manager Logistik, CityCab",
    avatar: "SR"
  },
  {
    quote: "Platform paling stabil yang pernah kami gunakan. Integrasi API sangat mulus dan tim support sangat responsif 24/7.",
    author: "Andi Wijaya",
    role: "CTO, Express Ride",
    avatar: "AW"
  }
];

const companies = [
  "TransNusa", "CityCab", "Express Ride", "BlueB", "GrabIt", "GoTrans"
];

export default function CustomersSection() {
  return (
    <div className="w-full">
      <div className="text-center mb-20">
         <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">
           Dipercaya oleh <br className="hidden md:block"/> perusahaan mobilitas terdepan
         </h2>
         <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
           Dari startup taksi lokal hingga operator skala nasional, mereka mengandalkan infrastruktur kami setiap harinya.
         </p>
      </div>

      {/* Trusted By Logos (Mockup) */}
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 mb-24">
         {companies.map((company, index) => (
           <div key={index} className="text-xl font-bold font-mono tracking-wider text-neutral-400">
             {company}
           </div>
         ))}
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((testimonial, idx) => (
          <div 
            key={idx} 
            className="p-8 rounded-2xl border border-white/[0.08] bg-[#0c0c0e]/50 backdrop-blur-sm flex flex-col transition-colors hover:bg-white/[0.02]"
          >
            <div className="flex-grow">
              <svg className="w-8 h-8 text-yellow-500/50 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-neutral-300 text-sm leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
            </div>
            
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium text-neutral-300">
                {testimonial.avatar}
              </div>
              <div>
                <div className="text-sm font-medium text-white">{testimonial.author}</div>
                <div className="text-xs text-neutral-500">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-24 rounded-2xl border border-white/[0.08] bg-yellow-500/[0.02] p-10 md:p-16 text-center max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-4">
          Siap untuk meningkatkan efisiensi Anda?
        </h3>
        <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
          Bergabung dengan puluhan operator lainnya yang telah mempercayakan infrastruktur armadanya kepada kami.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-neutral-200 transition-colors shadow-sm">
          Jadwalkan Demo
        </button>
      </div>
    </div>
  );
}
