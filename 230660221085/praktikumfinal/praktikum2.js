function hitungTotalPesanan(kodeMenu, jumlah) {
    let hargaSatuan = 0;
    let namaMenu = "";

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
            return "Menu tidak tersedia";
    }

    let subtotal = hargaSatuan * jumlah;
    let diskonPersen = 0;

    if (subtotal > 100000) {
        diskonPersen = 15;
    } else if (subtotal > 50000) {
        diskonPersen = 10;
    }

    let potongan = (diskonPersen / 100) * subtotal;
    let totalAkhir = subtotal - potongan;

    return `
--- Struk Pembelian Kafe Koding ---
Menu Dipesan    : ${namaMenu}
Jumlah          : ${jumlah}
Subtotal        : Rp ${subtotal.toLocaleString('id-ID')}
Diskon          : ${diskonPersen}% (Rp ${potongan.toLocaleString('id-ID')})
Total Akhir     : Rp ${totalAkhir.toLocaleString('id-ID')}
-----------------------------------`;
}

console.log(hitungTotalPesanan("PIZZA", 2));