// Data transaksi penjualan
const transaksi = [
  { id: 'TRX001', produk: 'Laptop', harga: 12000000, jumlah: 1 },
  { id: 'TRX002', produk: 'Mouse', harga: 150000, jumlah: 2 },
  { id: 'TRX003', produk: 'Keyboard', harga: 750000, jumlah: 1 },
  { id: 'TRX004', produk: 'Monitor', harga: 2500000, jumlah: 1 },
  { id: 'TRX005', produk: 'Mousepad', harga: 50000, jumlah: 3 },
  { id: 'TRX006', produk: 'Mouse', harga: 150000, jumlah: 1 },
];

// --- Tugas 1 (Filter) ---
// Membuat array baru yang hanya berisi transaksi produk 'Mouse'
const transaksiMouse = transaksi.filter(item => item.produk === 'Mouse');

// --- Tugas 2 (Map) ---
// Mengubah setiap objek transaksi menjadi string laporan penjualan
const laporanPenjualan = transaksi.map(item => {
  const totalHarga = item.harga * item.jumlah;
  return `ID: ${item.id}, Produk: ${item.produk}, Total: Rp ${totalHarga.toLocaleString('id-ID')}`;
});

// --- Tugas 3 (Reduce) ---
// Menghitung total pendapatan dari semua transaksi
const totalPendapatan = transaksi.reduce((akumulator, itemSekarang) => {
  return akumulator + (itemSekarang.harga * itemSekarang.jumlah);
}, 0); // Nilai awal akumulator adalah 0

// --- Cetak Hasil ke Konsol ---

console.log("--- 🖱️ Transaksi Mouse ---");
console.log(transaksiMouse);
console.log("\n"); // Memberi jarak antar output

console.log("--- 🧾 Laporan Penjualan ---");
// Mencetak setiap item laporan dalam baris baru agar rapi
laporanPenjualan.forEach(laporan => console.log(laporan));
console.log("\n"); // Memberi jarak antar output

console.log("--- 💰 Total Pendapatan ---");
console.log(`Total seluruh pendapatan: Rp ${totalPendapatan.toLocaleString('id-ID')}`);