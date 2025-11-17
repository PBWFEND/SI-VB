// penjualan.js

// 1. Data transaksi
const transaksi = [
  { id: "TRX001", produk: "Laptop", harga: 12000000, jumlah: 1 },
  { id: "TRX002", produk: "Mouse", harga: 150000, jumlah: 2 },
  { id: "TRX003", produk: "Keyboard", harga: 750000, jumlah: 1 },
  { id: "TRX004", produk: "Monitor", harga: 2500000, jumlah: 1 },
  { id: "TRX005", produk: "Mousepad", harga: 50000, jumlah: 3 },
  { id: "TRX006", produk: "Mouse", harga: 150000, jumlah: 1 },
];

// 2. Tugas 1 (Filter)
// Ambil hanya transaksi yang produknya 'Mouse'
const transaksiMouse = transaksi.filter((item) => item.produk === "Mouse");

// 3. Tugas 2 (Map)
// Ubah data transaksi menjadi format string laporan
const laporanPenjualan = transaksi.map((item) => {
  const total = item.harga * item.jumlah;
  return `ID: ${item.id}, Produk: ${item.produk}, Total: Rp ${total.toLocaleString("id-ID")}`;
});

// 4. Tugas 3 (Reduce - Challenge)
// Hitung total pendapatan dari semua transaksi
const totalPendapatan = transaksi.reduce((total, item) => {
  return total + item.harga * item.jumlah;
}, 0);

// 5. Cetak hasil ke konsol
console.log("=== Transaksi Mouse ===");
console.log(transaksiMouse);

console.log("\n=== Laporan Penjualan ===");
laporanPenjualan.forEach((item) => console.log(item));

console.log(`\n=== Total Pendapatan ===`);
console.log(`Rp ${totalPendapatan.toLocaleString("id-ID")}`);
