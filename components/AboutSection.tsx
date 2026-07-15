"use client";

import React from 'react';

const teamMembers = [
  {
    name: "Alex Chandra",
    role: "Founder & CEO",
    bio: "Mantan eksekutif logistik yang mendedikasikan dirinya untuk memodernisasi infrastruktur transportasi."
  },
  {
    name: "Sarah Wijaya",
    role: "Chief Technology Officer",
    bio: "Arsitek sistem dengan pengalaman 10 tahun membangun sistem terdistribusi berskala besar."
  },
  {
    name: "Michael Chen",
    role: "Head of Product",
    bio: "Fokus pada menciptakan pengalaman pengguna yang intuitif tanpa mengorbankan fungsionalitas kompleks."
  }
];

export default function AboutSection() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="text-center mb-24 mt-10">
        <h1 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-6">
          Membangun masa depan <br className="hidden md:block"/> mobilitas perkotaan
        </h1>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
          TaxiTicketing didirikan dengan satu tujuan sederhana: memberikan perangkat lunak tingkat korporat 
          kepada operator taksi dari semua ukuran. Kami percaya perangkat lunak operasional tidak harus usang atau sulit digunakan.
        </p>
      </div>

      {/* Stats or Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-32">
        <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#0c0c0e] text-center">
          <div className="text-3xl font-semibold text-white mb-1">50M+</div>
          <div className="text-xs text-neutral-500 uppercase tracking-wider">Perjalanan Selesai</div>
        </div>
        <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#0c0c0e] text-center">
          <div className="text-3xl font-semibold text-white mb-1">12K+</div>
          <div className="text-xs text-neutral-500 uppercase tracking-wider">Pengemudi Aktif</div>
        </div>
        <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#0c0c0e] text-center">
          <div className="text-3xl font-semibold text-white mb-1">99.9%</div>
          <div className="text-xs text-neutral-500 uppercase tracking-wider">Uptime Server</div>
        </div>
        <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#0c0c0e] text-center">
          <div className="text-3xl font-semibold text-white mb-1">24/7</div>
          <div className="text-xs text-neutral-500 uppercase tracking-wider">Dukungan Tim</div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-3xl mx-auto mb-32">
        <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-6">Misi Kami</h2>
        <div className="prose prose-invert prose-lg text-neutral-400 max-w-none">
          <p>
            Industri transportasi tradisional telah lama terabaikan oleh kemajuan teknologi perangkat lunak. 
            Banyak operator taksi lokal berjuang untuk bersaing dengan raksasa ride-hailing karena kurangnya 
            infrastruktur teknologi yang memadai.
          </p>
          <p>
            Di TaxiTicketing, kami menyeimbangkan arena persaingan. Kami membangun infrastruktur cloud yang kuat, 
            algoritma pelacakan waktu nyata yang canggih, dan dasbor analitik mendalam—semuanya dikemas dalam 
            antarmuka yang indah dan sangat responsif.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 border-b border-white/[0.08] pb-6">
          <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight">Tim Inti</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="group">
              <div className="w-full aspect-square rounded-2xl bg-neutral-900 border border-white/[0.04] mb-6 overflow-hidden flex items-center justify-center relative">
                 {/* Mock Image Placeholder */}
                 <svg className="w-20 h-20 text-neutral-800 transition-transform group-hover:scale-110 duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                 </svg>
                 <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] to-transparent opacity-50" />
              </div>
              <h3 className="text-lg font-medium text-white">{member.name}</h3>
              <div className="text-yellow-500 text-sm mb-3">{member.role}</div>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Careers CTA */}
      <div className="mt-32 border-t border-white/[0.08] pt-16 text-center max-w-2xl mx-auto">
        <h3 className="text-2xl font-medium text-white tracking-tight mb-4">Bergabung dengan kami</h3>
        <p className="text-neutral-400 mb-8">
          Kami selalu mencari talenta teknik, desain, dan bisnis yang luar biasa. 
          Bantu kami membangun masa depan mobilitas.
        </p>
        <button className="bg-white text-black px-6 py-2.5 rounded-lg font-medium hover:bg-neutral-200 transition-colors shadow-sm text-sm">
          Lihat Lowongan Terbuka
        </button>
      </div>

    </div>
  );
}
