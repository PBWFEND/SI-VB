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

// Tugas 1 (Filter): Hanya transaksi produk 'Mouse'
const transaksiMouse = transaksi.filter(item => item.produk === 'Mouse');

// Tugas 2 (Map): Membuat laporan penjualan
const laporanPenjualan = transaksi.map(item => {
  const total = item.harga * item.jumlah;
  return `ID: ${item.id}, Produk: ${item.produk}, Total: Rp ${total.toLocaleString('id-ID')}`;
});

// Tugas 3 (Reduce - Challenge): Hitung total pendapatan
const totalPendapatan = transaksi.reduce((acc, item) => acc + (item.harga * item.jumlah), 0);

// Cetak hasil ke konsol
console.log("--- Transaksi Mouse ---");
console.log(transaksiMouse);

console.log("\n--- Laporan Penjualan ---");
laporanPenjualan.forEach(item => console.log(item));

console.log("\n--- Total Pendapatan ---");
console.log(`Rp ${totalPendapatan.toLocaleString('id-ID')}`);