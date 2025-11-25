// penjualan.js

// 1. Data transaksi
const transaksi = [
  { id: 'TRX001', produk: 'Laptop', harga: 12000000, jumlah: 1 },
  { id: 'TRX002', produk: 'Mouse', harga: 150000, jumlah: 2 },
  { id: 'TRX003', produk: 'Keyboard', harga: 750000, jumlah: 1 },
  { id: 'TRX004', produk: 'Monitor', harga: 2500000, jumlah: 1 },
  { id: 'TRX005', produk: 'Mousepad', harga: 50000, jumlah: 3 },
  { id: 'TRX006', produk: 'Mouse', harga: 150000, jumlah: 1 },
];

// 2. Filter → ambil transaksi yang produknya "Mouse"
const transaksiMouse = transaksi.filter((item) => item.produk === 'Mouse');

// 3. Map → buat laporan penjualan dalam format string
const laporanPenjualan = transaksi.map((item) => {
  const total = item.harga * item.jumlah;
  return `ID: ${item.id}, Produk: ${item.produk}, Total: Rp ${total.toLocaleString('id-ID')}`;
});

// 4. Reduce → hitung total pendapatan dari semua transaksi
const totalPendapatan = transaksi.reduce((acc, item) => {
  return acc + item.harga * item.jumlah;
}, 0);

// 5. Cetak hasil ke konsol
console.log('=== Transaksi Produk Mouse ===');
console.log(transaksiMouse);

console.log('\n=== Laporan Penjualan ===');
laporanPenjualan.forEach((laporan) => console.log(laporan));

console.log('\n=== Total Pendapatan ===');
console.log(`Rp ${totalPendapatan.toLocaleString('id-ID')}`);
