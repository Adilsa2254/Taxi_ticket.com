export interface Stat {
  label: string;
  value: string;
  trend: string;
  iconName: 'chart' | 'car' | 'check' | 'wallet';
}

export interface Order {
  id: string;
  customer: string;
  route: string;
  status: 'Sedang dijemput' | 'Menunggu driver' | 'Selesai';
  time: string;
}

export interface Driver {
  name: string;
  car: string;
  state: 'Online' | 'Dalam perjalanan' | 'Istirahat';
  rating: string;
}

// Initial Data
export const initialStats: Stat[] = [
  { label: "Order Aktif", value: "128", trend: "+12%", iconName: 'chart' },
  { label: "Driver Online", value: "42", trend: "+5", iconName: 'car' },
  { label: "Tingkat Selesai", value: "96%", trend: "+2.4%", iconName: 'check' },
  { label: "Pendapatan Hari Ini", value: "Rp 8,4 jt", trend: "+18%", iconName: 'wallet' },
];

export const initialOrders: Order[] = [
  { id: "TX-4821", customer: "Ayu Pratama", route: "Bandara Soekarno-Hatta → SCBD", status: "Sedang dijemput", time: "10:42 AM" },
  { id: "TX-4817", customer: "Bima Santoso", route: "Grogol → Bekasi", status: "Menunggu driver", time: "10:35 AM" },
  { id: "TX-4812", customer: "Nadia Putri", route: "Kota Tua → Kemang", status: "Selesai", time: "10:15 AM" },
];

export const initialDrivers: Driver[] = [
  { name: "Rizky", car: "Avanza B 1234 ZX", state: "Online", rating: "4.9" },
  { name: "Dewi", car: "Xenia B 9876 QW", state: "Dalam perjalanan", rating: "4.8" },
  { name: "Fajar", car: "Xpander B 2468 RT", state: "Istirahat", rating: "4.7" },
];

// Helper to get current time string like "10:45 AM"
const getCurrentTimeStr = () => {
  const d = new Date();
  let hours = d.getHours();
  const minutes = d.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; 
  const mins = minutes < 10 ? '0'+minutes : minutes;
  return `${hours}:${mins} ${ampm}`;
};

// Simulation functions
export const simulateOrderUpdate = (currentOrders: Order[]): Order[] => {
  const newOrderPossibility = Math.random();
  if (newOrderPossibility > 0.7) { // 30% chance of new order
    const id = `TX-${Math.floor(4800 + Math.random() * 100)}`;
    const customers = ["Dian Sastro", "Iko Uwais", "Chelsea Islan", "Reza Rahadian"];
    const routes = ["Sudirman → Blok M", "Kelapa Gading → Senayan", "PIK → Cengkareng", "Depok → Kuningan"];
    const newOrder: Order = {
      id,
      customer: customers[Math.floor(Math.random() * customers.length)],
      route: routes[Math.floor(Math.random() * routes.length)],
      status: "Menunggu driver",
      time: getCurrentTimeStr(),
    };
    return [newOrder, ...currentOrders.slice(0, 3)]; // Keep max 4 to fit UI nicely
  }
  
  // Also 30% chance to update an existing order
  if (Math.random() > 0.7 && currentOrders.length > 0) {
      const updatedOrders = [...currentOrders];
      const idxToUpdate = Math.floor(Math.random() * updatedOrders.length);
      const order = { ...updatedOrders[idxToUpdate] }; // Clone object to trigger react render safely
      
      if (order.status === "Menunggu driver") order.status = "Sedang dijemput";
      else if (order.status === "Sedang dijemput") order.status = "Selesai";
      
      updatedOrders[idxToUpdate] = order;
      return updatedOrders;
  }

  return currentOrders;
};

export const simulateDriverUpdate = (currentDrivers: Driver[]): Driver[] => {
    if (Math.random() > 0.6) {
        const updatedDrivers = [...currentDrivers];
        const idxToUpdate = Math.floor(Math.random() * updatedDrivers.length);
        const driver = { ...updatedDrivers[idxToUpdate] };
        
        const states: ('Online' | 'Dalam perjalanan' | 'Istirahat')[] = ['Online', 'Dalam perjalanan', 'Istirahat'];
        const currentIdx = states.indexOf(driver.state);
        let nextIdx = currentIdx + 1;
        if (nextIdx >= states.length) nextIdx = 0;
        
        driver.state = states[nextIdx];
        updatedDrivers[idxToUpdate] = driver;
        return updatedDrivers;
    }
    return currentDrivers;
};

export const simulateStatsUpdate = (currentStats: Stat[]): Stat[] => {
    // Just fluctuate the active order & drivers online a bit
    if (Math.random() > 0.5) {
        const updated = [...currentStats];
        const stat0 = { ...updated[0] };
        
        // Update active orders
        const activeOrders = parseInt(stat0.value) + (Math.random() > 0.5 ? 1 : -1);
        stat0.value = activeOrders.toString();
        updated[0] = stat0;
        
        return updated;
    }
    return currentStats;
};
