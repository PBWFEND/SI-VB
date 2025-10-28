/**
 * kasir.js
 * Script Node.js untuk menghitung total pesanan dengan diskon menggunakan switch-case dan if-else.
 */

/**
 * Menghitung total pesanan berdasarkan kode menu dan jumlah,
 * termasuk penerapan diskon.
 * * @param {string} kodeMenu - Kode menu yang dipesan (KOPI, TEH, PIZZA).
 * @param {number} jumlah - Jumlah barang yang dipesan.
 * @returns {string} - Rincian pesanan dalam bentuk string terformat.
 */
function hitungTotalPesanan(kodeMenu, jumlah) {
    let hargaSatuan = 0;
    let namaMenu = "Menu Tidak Dikenal";
    const kode = kodeMenu.toUpperCase(); // Pastikan kode konsisten (case-insensitive)

    // 1. Menentukan harga satuan menggunakan switch-case
    switch (kode) {
        case 'KOPI':
            hargaSatuan = 25000;
            namaMenu = "Kopi";
            break;
        case 'TEH':
            hargaSatuan = 20000;
            namaMenu = "Teh";
            break;
        case 'PIZZA':
            hargaSatuan = 55000;
            namaMenu = "Pizza";
            break;
        default:
            hargaSatuan = 0;
            namaMenu = "Menu Tidak Ada";
    }

    // Hitung Subtotal
    const subtotal = hargaSatuan * jumlah;
    let diskonPersen = 0;

    // 2. Menentukan diskon menggunakan if-else
    if (subtotal > 100000) {
        diskonPersen = 0.15; // 15%
    } else if (subtotal > 50000) {
        diskonPersen = 0.10; // 10%
    } else {
        diskonPersen = 0;
    }

    const nilaiDiskon = subtotal * diskonPersen;
    const totalBayar = subtotal - nilaiDiskon;

    // Fungsi helper untuk format mata uang IDR
    const formatUang = (nilai) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(nilai).replace('IDR', 'Rp');
    };

    // 3. Mengembalikan string terformat (Template Literals)
    const output = `
--- Struk Pembelian Kafe Koding ---
Menu Dipesan    : ${namaMenu}
Jumlah          : ${jumlah}
Subtotal        : ${formatUang(subtotal)}
Diskon (${diskonPersen * 100}%)    : - ${formatUang(nilaiDiskon)}
-----------------------------------
Total Bayar     : ${formatUang(totalBayar)}
--- Terima Kasih ---
`;

    return output;
}

// --- Contoh Penggunaan Fungsi ---

// Contoh 1: PIZZA (2 buah) -> Subtotal 110.000 (Diskon 15%)
console.log("Kasus 1: PIZZA 2 buah (Diskon 15%)");
console.log(hitungTotalPesanan("PIZZA", 2));

console.log("\n" + "=".repeat(40) + "\n");

// Contoh 2: KOPI (2 buah) + TEH (1 buah) -> Subtotal 70.000 (Diskon 10%)
console.log("Kasus 2: KOPI 3 buah (Diskon 10%)");
console.log(hitungTotalPesanan("KOPI", 3));

console.log("\n" + "=".repeat(40) + "\n");

// Contoh 3: TEH (1 buah) -> Subtotal 20.000 (Tanpa Diskon)
console.log("Kasus 3: TEH 1 buah (Tanpa Diskon)");
console.log(hitungTotalPesanan("TEH", 1));

console.log("\n" + "=".repeat(40) + "\n");

// Contoh 4: Menu tidak ada
console.log("Kasus 4: Menu tidak ada (Diskon 0%)");
console.log(hitungTotalPesanan("SUSHI", 5));