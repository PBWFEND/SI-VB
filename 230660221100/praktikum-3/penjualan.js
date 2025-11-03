// penjualan.js

// Data transaksi
const transaksi = [
  { id: 'TRX001', produk: 'Laptop', harga: 12000000, jumlah: 1 },
  { id: 'TRX002', produk: 'Mouse', harga: 150000, jumlah: 2 },
  { id: 'TRX003', produk: 'Keyboard', harga: 750000, jumlah: 1 },
  { id: 'TRX004', produk: 'Monitor', harga: 2500000, jumlah: 1 },
  { id: 'TRX005', produk: 'Mousepad', harga: 50000, jumlah: 3 },
  { id: 'TRX006', produk: 'Mouse', harga: 150000, jumlah: 1 },
];

// Tugas 1: Filter transaksi produk 'Mouse'
const transaksiMouse = transaksi.filter(item => item.produk === 'Mouse');

// Tugas 2: Map → buat laporan penjualan
const laporanPenjualan = transaksi.map(item => {
  const total = item.harga * item.jumlah;
  const totalFormat = total.toLocaleString('id-ID');
  return `ID: ${item.id}, Produk: ${item.produk}, Total: Rp ${totalFormat}`;
});

// Tugas 3: Reduce → hitung total pendapatan
const totalPendapatan = transaksi.reduce((acc, item) => {
  return acc + (item.harga * item.jumlah);
}, 0);

// Output ke konsol
console.log("\n=== Transaksi Produk Mouse ===");
console.log(transaksiMouse);

console.log("\n=== Laporan Penjualan (Map) ===");
laporanPenjualan.forEach(l => console.log(l));

console.log("\n=== Total Pendapatan (Reduce) ===");
console.log(`Total Pendapatan: Rp ${totalPendapatan.toLocaleString('id-ID')}`);
