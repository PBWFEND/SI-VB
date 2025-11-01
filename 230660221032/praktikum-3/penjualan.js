// penjualan.js

// Inisialisasi data array 
const transaksi = [
  { id: 'TRX001', produk: 'Laptop', harga: 12000000, jumlah: 1 },
  { id: 'TRX002', produk: 'Mouse', harga: 150000, jumlah: 2 },
  { id: 'TRX003', produk: 'Keyboard', harga: 750000, jumlah: 1 },
  { id: 'TRX004', produk: 'Monitor', harga: 2500000, jumlah: 1 },
  { id: 'TRX005', produk: 'Mousepad', harga: 50000, jumlah: 3 },
  { id: 'TRX006', produk: 'Mouse', harga: 150000, jumlah: 1 },
];

// 1. Membuat array baru yang hanya berisi transaksi untuk produk 'Mouse' menggunakan .filter()
console.log("\n--- Transaksi Mouse (Fliter) ---");
const transaksiMouse = transaksi.filter((transaksi) => {
  return transaksi.produk === 'Mouse';
});
console.log(transaksiMouse);

// 2. Membuat array baru laporan penjualan (array string) dengan menggunakan .map()
console.log("\n--- Laporan Penjualan (Map) ---");
const laporanPenjualan = transaksi.map((transaksi) => {
  const total = transaksi.harga * transaksi.jumlah;
  return `ID: ${transaksi.id}, Produk: ${transaksi.produk}, Total: Rp ${total.toLocaleString('id-ID')}`;
});
console.log(laporanPenjualan);

// 3. Reduce: Hitung total pendapatan
console.log("\n--- Total Pendapatan ---");
const totalPendapatan = transaksi.reduce((acc, transaksi) => {
  return acc + (transaksi.harga * transaksi.jumlah);
}, 0);

console.log(`Total Pendapatan: Rp ${totalPendapatan.toLocaleString('id-ID')}`);