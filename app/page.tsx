const stats = [
  { label: "Order aktif", value: "128" },
  { label: "Driver online", value: "42" },
  { label: "Tingkat selesai", value: "96%" },
  { label: "Pendapatan hari ini", value: "Rp 8,4 jt" },
];

const rides = [
  {
    id: "TX-4821",
    customer: "Ayu Pratama",
    route: "Bandara Soekarno-Hatta → SCBD",
    status: "Sedang dijemput",
  },
  {
    id: "TX-4817",
    customer: "Bima Santoso",
    route: "Grogol → Bekasi",
    status: "Menunggu driver",
  },
  {
    id: "TX-4812",
    customer: "Nadia Putri",
    route: "Kota Tua → Kemang",
    status: "Selesai",
  },
];

const drivers = [
  { name: "Rizky", car: "Avanza B 1234 ZX", state: "Online" },
  { name: "Dewi", car: "Xenia B 9876 QW", state: "Dalam perjalanan" },
  { name: "Fajar", car: "Xpander B 2468 RT", state: "Istirahat" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-8 lg:px-10">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-950/20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <span className="inline-flex rounded-full bg-cyan-400/15 px-3 py-1 text-sm font-medium text-cyan-300">
                Taxi Management Platform
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-white lg:text-6xl">
                Kelola pemesanan taxi online dalam satu dashboard.
              </h1>
              <p className="text-sm leading-7 text-slate-300 lg:text-base">
                Pantau order, driver, status perjalanan, dan performa harian secara realtime.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:w-[420px]">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                  <div className="text-sm text-slate-400">{stat.label}</div>
                  <div className="mt-2 text-2xl font-semibold text-white">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Order terbaru</h2>
              <span className="text-sm text-slate-400">Live update</span>
            </div>
            <div className="space-y-4">
              {rides.map((ride) => (
                <div key={ride.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="text-sm text-slate-400">{ride.id}</div>
                      <div className="mt-1 font-medium text-white">{ride.customer}</div>
                    </div>
                    <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-sm text-cyan-300">
                      {ride.status}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-300">{ride.route}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
              <h2 className="text-xl font-semibold text-white">Driver aktif</h2>
              <div className="mt-5 space-y-4">
                {drivers.map((driver) => (
                  <div key={driver.name} className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                    <div>
                      <div className="font-medium text-white">{driver.name}</div>
                      <div className="text-sm text-slate-400">{driver.car}</div>
                    </div>
                    <div className="text-sm text-emerald-300">{driver.state}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6">
              <h2 className="text-xl font-semibold text-white">Fitur utama</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                <li>• Booking pelanggan</li>
                <li>• Dispatch driver otomatis</li>
                <li>• Tracking status perjalanan</li>
                <li>• Ringkasan pendapatan</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
