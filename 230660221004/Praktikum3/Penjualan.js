/**
 * penjualan.js
 * Skrip Node.js olah data transaksi Array Methods (filter, map, reduce).
 */

const transaksi = [
    { id: 'TRX001', produk: 'Laptop', harga: 12000000, jumlah: 1 },
    { id: 'TRX002', produk: 'Mouse', harga: 150000, jumlah: 2 },
    { id: 'TRX003', produk: 'Keyboard', harga: 750000, jumlah: 1 },
    { id: 'TRX004', produk: 'Monitor', harga: 2500000, jumlah: 1 },
    { id: 'TRX005', produk: 'Mousepad', harga: 50000, jumlah: 3 },
    { id: 'TRX006', produk: 'Mouse', harga: 150000, jumlah: 1 },
];

// Fungsi Bantu: Format uang IDR
const formatUang = (nilai) => {
    // Intl.NumberFormat format Rupiah
    return nilai.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    });
};

// ----------------------------------------------------
// Tugas 1 (Filter): Transaksi produk 'Mouse'
// ----------------------------------------------------
const transaksiMouse = transaksi.filter(item => item.produk === 'Mouse');


// ----------------------------------------------------
// Tugas 2 (Map): Laporan Penjualan
// ----------------------------------------------------
const laporanPenjualan = transaksi.map(item => {
    const totalHarga = item.harga * item.jumlah;
    return `ID: ${item.id}, Produk: ${item.produk}, Total: ${formatUang(totalHarga)}`;
});


// ----------------------------------------------------
// Tugas 3 (Reduce): Total Pendapatan
// ----------------------------------------------------
const totalPendapatan = transaksi.reduce((akumulator, item) => {
    const subtotal = item.harga * item.jumlah;
    return akumulator + subtotal;
}, 0);


// ----------------------------------------------------
// Output Hasil (Direvisi sesuai permintaan)
// ----------------------------------------------------

console.log("=========================================");
console.log("       LAPORAN OLAH DATA TRANSAKSI     ");
console.log("=========================================");

console.log("\n[Penyaringan: Transaksi Produk Mouse (.filter())]");
console.log(transaksiMouse);

console.log("\n[Pemetaan: Laporan Penjualan (.map())]");
laporanPenjualan.forEach(laporan => console.log(laporan));

console.log("\n[Perhitungan Total: Pendapatan Bersih (.reduce())]");
console.log(`Total Pendapatan Bersih: ${formatUang(totalPendapatan)}`);

console.log("=========================================");