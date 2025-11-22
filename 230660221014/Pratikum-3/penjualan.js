// penjualan.js
// Program Pengolahan Data Penjualan E-Commerce

// --- DATA TRANSAKSI ---
const transaksi = [
  { id: 'TRX001', produk: 'Laptop', harga: 12000000, jumlah: 1 },
  { id: 'TRX002', produk: 'Mouse', harga: 150000, jumlah: 2 },
  { id: 'TRX003', produk: 'Keyboard', harga: 750000, jumlah: 1 },
  { id: 'TRX004', produk: 'Monitor', harga: 2500000, jumlah: 1 },
  { id: 'TRX005', produk: 'Mousepad', harga: 50000, jumlah: 3 },
  { id: 'TRX006', produk: 'Mouse', harga: 150000, jumlah: 1 },
];

// ================================
// 🔹 TUGAS 1: FILTER
// Membuat array baru hanya untuk produk 'Mouse'
// ================================
const transaksiMouse = transaksi.filter(item => item.produk === 'Mouse');

// Cetak hasil filter
console.log("=== TUGAS 1: Transaksi Produk 'Mouse' ===");
console.log(transaksiMouse);
console.log("\n");

// ================================
// 🔹 TUGAS 2: MAP
// Membuat laporan penjualan terformat
// ================================
const laporanPenjualan = transaksi.map(item => {
  const total = item.harga * item.jumlah;
  return `ID: ${item.id}, Produk: ${item.produk}, Total: Rp ${total.toLocaleString('id-ID')}`;
});

// Cetak hasil map
console.log("=== TUGAS 2: Laporan Penjualan ===");
laporanPenjualan.forEach(laporan => console.log(laporan));
console.log("\n");

// ================================
// 🔹 TUGAS 3: REDUCE (Challenge)
// Hitung total pendapatan dari semua transaksi
// ================================
const totalPendapatan = transaksi.reduce((total, item) => {
  return total + (item.harga * item.jumlah);
}, 0);

// Cetak hasil reduce
console.log("=== TUGAS 3: Total Pendapatan ===");
console.log(`Total Pendapatan: Rp ${totalPendapatan.toLocaleString('id-ID')}`);
console.log("=====================================");