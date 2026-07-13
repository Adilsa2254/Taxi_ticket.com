"use client";

import React, { useState } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onClose();
      alert("Berhasil masuk!");
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-sm p-6 bg-[#0c0c0e] border border-white/[0.08] rounded-xl shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-neutral-500 hover:text-white rounded-md transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>

        <div className="mb-6">
          <h2 className="text-lg font-medium text-white">Masuk ke akun Anda</h2>
          <p className="text-sm text-neutral-400 mt-1">Masukkan detail untuk mengakses dashboard.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1.5">Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-[#111113] border border-white/[0.08] rounded-md text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-400 transition-colors"
              placeholder="admin@taxiticketing.com"
            />
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-1.5">
               <label className="block text-sm font-medium text-neutral-300">Password</label>
            </div>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-[#111113] border border-white/[0.08] rounded-md text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-400 transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full py-2 px-4 bg-white hover:bg-neutral-200 text-black text-sm font-medium rounded-md transition-colors mt-2 flex items-center justify-center h-9 shadow-sm"
          >
            {isLoading ? (
              <svg className="animate-spin h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            ) : "Lanjutkan"}
          </button>
        </form>
      </div>
    </div>
  );
}
