// kasir.js

function hitungTotalPesanan(kodeMenu, jumlah) {
    let hargaSatuan;
    let namaMenu;

    // Menentukan harga berdasarkan kode menu
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
            break;
    }

    // Hitung subtotal
    let subtotal = hargaSatuan * jumlah;
    let diskon = 0;
    let persentaseDiskon = 0;

    // Logika diskon
    if (subtotal > 100000) {
        persentaseDiskon = 15;
        diskon = subtotal * 0.15;
    } else if (subtotal > 50000) {
        persentaseDiskon = 10;
        diskon = subtotal * 0.10;
    }

    // Total akhir
    let totalBayar = subtotal - diskon;

    // Format angka ke rupiah
    const formatRupiah = (angka) => {
        return angka.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
    };

    // Buat struk
    let struk = `
--- Struk Pembelian Kafe Koding ---
Menu Dipesan    : ${namaMenu}
Jumlah          : ${jumlah}
Subtotal        : ${formatRupiah(subtotal)}
Diskon (${persentaseDiskon}%)    : - ${formatRupiah(diskon)}
-----------------------------------
Total Bayar     : ${formatRupiah(totalBayar)}
--- Terima Kasih ---
    `;

    return struk;
}

// Contoh pemanggilan fungsi
console.log(hitungTotalPesanan("PIZZA", 2));
