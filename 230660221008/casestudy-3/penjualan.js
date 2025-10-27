// penjualan.js

// Data transaksi (diberikan di soal)
const transaksi = [
  { id: 'TRX001', produk: 'Laptop', harga: 12000000, jumlah: 1 },
  { id: 'TRX002', produk: 'Mouse', harga: 150000, jumlah: 2 },
  { id: 'TRX003', produk: 'Keyboard', harga: 750000, jumlah: 1 },
  { id: 'TRX004', produk: 'Monitor', harga: 2500000, jumlah: 1 },
  { id: 'TRX005', produk: 'Mousepad', harga: 50000, jumlah: 3 },
  { id: 'TRX006', produk: 'Mouse', harga: 150000, jumlah: 1 },
];

/**
 * Utility: format angka jadi rupiah (mis: 15850000 -> "Rp 15.850.000")
 */
function formatRupiah(number) {
  return 'Rp ' + number.toLocaleString('id-ID');
}

/* ===== TUGAS 1: Filter =====
   Buat array transaksiMouse yang hanya berisi transaksi untuk produk 'Mouse'
*/
const transaksiMouse = transaksi.filter(item => item.produk === 'Mouse');

/* ===== TUGAS 2: Map =====
   Buat array laporanPenjualan berisi string:
   "ID: [id], Produk: [produk], Total: Rp [harga * jumlah]"
*/
const laporanPenjualan = transaksi.map(item => {
  const total = item.harga * item.jumlah;
  return `ID: ${item.id}, Produk: ${item.produk}, Total: ${formatRupiah(total)}`;
});

/* ===== TUGAS 3: Reduce =====
   Hitung total pendapatan dari semua transaksi
*/
const totalPendapatan = transaksi.reduce((acc, item) => {
  return acc + (item.harga * item.jumlah);
}, 0);

/* ===== CETAK HASIL ===== */
console.log('--- Transaksi Mouse (Filter) ---');
console.log(transaksiMouse);
console.log('\n--- Laporan Penjualan (Map) ---');
laporanPenjualan.forEach(line => console.log(line));
console.log('\n--- Total Pendapatan (Reduce) ---');
console.log(formatRupiah(totalPendapatan));