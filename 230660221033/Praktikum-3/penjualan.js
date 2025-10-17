const transaksi = [
    { id: 'TRX001', produk: 'Laptop', harga: 12000000, jumlah: 1 },
    { id: 'TRX002', produk: 'Mouse', harga: 150000, jumlah: 2 },
    { id: 'TRX003', produk: 'Keyboard', harga: 750000, jumlah: 1 },
    { id: 'TRX004', produk: 'Monitor', harga: 2500000, jumlah: 1 },
    { id: 'TRX005', produk: 'Mousepad', harga: 50000, jumlah: 3 },
    { id: 'TRX006', produk: 'Mouse', harga: 150000, jumlah: 1 },
];

const formatRupiah = (number) => {
    return `Rp ${number.toLocaleString('id-ID')}`;
};

console.log("===================================================");
console.log("          LAPORAN PENGOLAHAN DATA PENJUALAN");
console.log("===================================================\n");


const transaksiMouse = transaksi.filter(item => item.produk === 'Mouse');

console.log("1. Hasil Filter (Transaksi Produk 'Mouse'):");
console.log(transaksiMouse);
console.log("\n---------------------------------------------------\n");

const laporanPenjualan = transaksi.map(item => {
    const totalHarga = item.harga * item.jumlah;
    const totalFormatted = formatRupiah(totalHarga);

    return `ID: ${item.id}, Produk: ${item.produk}, Total: ${totalFormatted}`;
});

console.log("2. Hasil Map (Laporan Penjualan Terformat):");
laporanPenjualan.forEach(laporan => console.log(`- ${laporan}`));
console.log("\n---------------------------------------------------\n");

const totalPendapatan = transaksi.reduce((akumulator, item) => {
    const totalTransaksi = item.harga * item.jumlah;
    return akumulator + totalTransaksi;
}, 0);

const totalPendapatanFormatted = formatRupiah(totalPendapatan);

console.log("3. Hasil Reduce (Total Pendapatan):");
console.log(`Total Pendapatan Keseluruhan: ${totalPendapatanFormatted}`);
console.log("\n===================================================");
