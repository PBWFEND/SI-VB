// kasir.js
// Studi Kasus 2: Program Kasir Kafe Sederhana

/**
 * Fungsi untuk menghitung total pesanan, menerapkan diskon, dan mengembalikan struk terformat.
 * @param {string} kodeMenu - Kode menu yang dipesan (KOPI, TEH, PIZZA).
 * @param {number} jumlah - Jumlah barang yang dipesan.
 * @returns {string} Struk pesanan yang terformat.
 */
function hitungTotalPesanan(kodeMenu, jumlah) {
    let hargaSatuan = 0;
    let namaMenu = "";

    // B.1. Gunakan switch-case untuk menentukan harga satuan
    switch (kodeMenu.toUpperCase()) {
        case "KOPI":
            hargaSatuan = 25000;
            namaMenu = "Kopi";
            break;
        case "TEH":
            hargaSatuan = 20000;
            namaMenu = "Teh";
            break;
        case "PIZZA":
            hargaSatuan = 55000;
            namaMenu = "Pizza";
            break;
        default:
            hargaSatuan = 0;
            namaMenu = "Menu Tidak Dikenal";
            // Jika menu tidak dikenal, langsung keluar
            return `Kode Menu "${kodeMenu}" tidak valid. Mohon masukkan KOPI, TEH, atau PIZZA.`;
    }

    // Hitung Subtotal
    const subtotal = hargaSatuan * jumlah;

    let diskonPersen = 0;
    let nilaiDiskon = 0;

    // B.2. Gunakan if-else untuk logika diskon
    // Penting: Logika harus dimulai dari diskon terbesar agar tidak terjadi tumpang tindih
    if (subtotal > 100000) {
        diskonPersen = 0.15; // 15%
    } else if (subtotal > 50000) {
        diskonPersen = 0.10; // 10%
    } else {
        diskonPersen = 0; // Tidak ada diskon
    }

    nilaiDiskon = subtotal * diskonPersen;
    const totalBayar = subtotal - nilaiDiskon;

    // Fungsi utilitas untuk memformat angka menjadi Rupiah
    const formatRupiah = (angka) => {
        // Menggunakan spasi non-breaking (&nbsp; atau karakter spasi khusus) atau format Rupiah bawaan.
        // Di konsol Node.js, toLocaleString adalah cara terbaik.
        return `Rp ${Math.round(angka).toLocaleString('id-ID')}`;
    };

    // Tentukan teks diskon untuk ditampilkan di struk
    // Di sini kita pastikan formatnya mengikuti contoh (- Rp XXX.XXX)
    const diskonRupiah = formatRupiah(nilaiDiskon);
    const diskonText = diskonPersen > 0 ? `- ${diskonRupiah.substring(3).trim()}` : "Rp 0";
    
    // Perbaikan: Menyesuaikan tata letak untuk output konsol yang lebih rapi (menggunakan spasi konsisten)
    const struk = `
--- Struk Pembelian Kafe Koding ---
Menu Dipesan    : ${namaMenu}
Jumlah          : ${jumlah}
Subtotal        : ${formatRupiah(subtotal).substring(3).trim()}
Diskon (${diskonPersen * 100}%)    : ${diskonText}
-----------------------------------
Total Bayar     : ${formatRupiah(totalBayar)}
--- Terima Kasih ---
`;

    return struk;
}

// --- CONTOH PENGGUNAAN FUNGSI (Untuk menghasilkan output yang diminta) ---

console.log("==========================================");
console.log("Contoh Kasus 1: PIZZA (2x) -> Diskon 15%");
console.log("==========================================");
console.log(hitungTotalPesanan("PIZZA", 2));
// Subtotal 110.000 (diskon 15%)

console.log("\n==========================================");
console.log("Contoh Kasus 2: KOPI (3x) -> Diskon 10%");
console.log("==========================================");
console.log(hitungTotalPesanan("KOPI", 3));
// Subtotal 75.000 (diskon 10%)

console.log("\n==========================================");
console.log("Contoh Kasus 3: TEH (1x) -> Tanpa Diskon");
console.log("==========================================");
console.log(hitungTotalPesanan("TEH", 1));
// Subtotal 20.000 (tanpa diskon)

console.log("\n==========================================");
console.log("Contoh Kasus 4: Menu yang tidak ada");
console.log("==========================================");
console.log(hitungTotalPesanan("SUSHI", 5));