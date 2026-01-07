const transaksi = [
    { id: 'TRX001', produk: 'Laptop', harga: 12000000, jumlah: 1 },
    { id: 'TRX002', produk: 'Mouse', harga: 150000, jumlah: 2 },
    { id: 'TRX003', produk: 'Keyboard', harga: 750000, jumlah: 1 },
    { id: 'TRX004', produk: 'Monitor', harga: 2500000, jumlah: 1 },
    { id: 'TRX005', produk: 'Mousepad', harga: 50000, jumlah: 3 },
    { id: 'TRX006', produk: 'Mouse', harga: 150000, jumlah: 1 },
];

// Tugas 1: Filter Mouse
const transaksiMouse = transaksi.filter(t => t.produk === 'Mouse');

// Tugas 2: Map laporan
const laporanPenjualan = transaksi.map(t => 
    `ID: ${t.id}, Produk: ${t.produk}, Total: Rp ${(t.harga * t.jumlah).toLocaleString('id-ID')}`
);

console.log("Transaksi Mouse:", transaksiMouse);
console.log("Laporan Penjualan:", laporanPenjualan);