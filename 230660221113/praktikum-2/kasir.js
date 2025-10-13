// kasir.js

function hitungTotalPesanan(kodeMenu, jumlah) {
    let hargaSatuan;
    let namaMenu;

    // Menentukan harga berdasarkan kodeMenu
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
            namaMenu = "Menu tidak dikenal";
            break;
    }

    // Hitung subtotal
    const subtotal = hargaSatuan * jumlah;

    // Hitung diskon
    let diskonPersen = 0;
    if (subtotal > 100000) {
        diskonPersen = 15;
    } else if (subtotal > 50000) {
        diskonPersen = 10;
    }

    const diskon = (subtotal * diskonPersen) / 100;
    const total = subtotal - diskon;

    // Format angka ke rupiah
    const formatRupiah = (angka) => `Rp ${angka.toLocaleString("id-ID")}`;

    // Hasil struk
    const struk = `
--- Struk Pembelian Kafe Koding ---
Menu Dipesan    : ${namaMenu}
Jumlah          : ${jumlah}
Subtotal        : ${formatRupiah(subtotal)}
Diskon (${diskonPersen}%)    : - ${formatRupiah(diskon)}
-----------------------------------
Total Bayar     : ${formatRupiah(total)}
--- Terima Kasih ---
`;

    return struk;
}

// Contoh pemanggilan fungsi
console.log(hitungTotalPesanan("PIZZA", 2));