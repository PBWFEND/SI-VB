// penjualan.js
// Analisis Data Transaksi Menggunakan Filter, Map, dan Reduce

// Data Transaksi
const transaksi = [
  { id: 'TRX001', produk: 'Laptop', harga: 12000000, jumlah: 1 },
  { id: 'TRX002', produk: 'Mouse', harga: 150000, jumlah: 2 },
  { id: 'TRX003', produk: 'Keyboard', harga: 750000, jumlah: 1 },
  { id: 'TRX004', produk: 'Monitor', harga: 2500000, jumlah: 1 },
  { id: 'TRX005', produk: 'Mousepad', harga: 50000, jumlah: 3 },
  { id: 'TRX006', produk: 'Mouse', harga: 150000, jumlah: 1 },
];

// Fungsi bantuan untuk memformat angka ke Rupiah
const formatRupiah = (angka) => {
    // PERBAIKAN: Menggunakan backtick (`) untuk template literal
    return `Rp ${angka.toLocaleString('id-ID')}`;
};

// =======================================================
// TUGAS 1 (Filter): Transaksi hanya untuk produk 'Mouse'
// =======================================================
const transaksiMouse = transaksi.filter(item => item.produk === 'Mouse');


// =======================================================
// TUGAS 2 (Map): Transformasi ke Laporan Penjualan (String)
// =======================================================
const laporanPenjualan = transaksi.map(item => {
    const totalHarga = item.harga * item.jumlah;
    // PERBAIKAN: Menggunakan backtick (`) untuk template literal
    return `ID: ${item.id}, Produk: ${item.produk}, Total: ${formatRupiah(totalHarga)}`;
});


// =======================================================
// TUGAS 3 (Reduce): Hitung Total Pendapatan
// =======================================================
// Reduce menerima dua argumen: accumulator (pendapatan) dan nilai saat ini (transaksi).
// Nilai awal (initialValue) dari accumulator diatur ke 0.
const totalPendapatan = transaksi.reduce((pendapatanTotal, itemSaatIni) => {
    // Hitung total harga per transaksi
    const subtotal = itemSaatIni.harga * itemSaatIni.jumlah;
    
    // Tambahkan subtotal ke pendapatanTotal (accumulator)
    return pendapatanTotal + subtotal;
}, 0); // Nilai awal pendapatanTotal adalah 0


// =======================================================
// CETAK SEMUA HASIL
// =======================================================

console.log("-------------------------------------------------");
console.log("1. Transaksi Khusus Produk 'Mouse' (Menggunakan Array.filter()):");
console.log("-------------------------------------------------");
console.log(transaksiMouse);

console.log("\n-------------------------------------------------");
console.log("2. Laporan Penjualan Terformat (Menggunakan Array.map()):");
console.log("-------------------------------------------------");
laporanPenjualan.forEach(laporan => console.log(laporan));

console.log("\n-------------------------------------------------");
console.log("3. Total Pendapatan Keseluruhan (Menggunakan Array.reduce()):");
console.log("-------------------------------------------------");
// PERBAIKAN: Menggunakan backtick (`) untuk template literal
console.log(`Total Pendapatan: ${formatRupiah(totalPendapatan)}`);

console.log("-------------------------------------------------");