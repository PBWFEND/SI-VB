/**
 * * @param {string} kodeMenu 
 * @param {number} jumlah 
 * @returns {string} 
 */

function hitungTotalPesanan(kodeMenu, jumlah) {
    let hargaSatuan = 0;
    let namaMenu = "Menu Tidak Ditemukan";
    let diskonPersen = 0;

    switch (kodeMenu.toUpperCase()) {
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
    }

    const subtotal = hargaSatuan * jumlah;

    if (subtotal > 100000) {
        diskonPersen = 0.15; 
    } else if (subtotal > 50000) {
        diskonPersen = 0.10; 
    } else {
        diskonPersen = 0; 
    }

    const diskonNominal = subtotal * diskonPersen;
    const totalBayar = subtotal - diskonNominal;

    const formatRupiah = (number) => {
        return `Rp ${number.toLocaleString('id-ID')}`;
    };

    const output = `--- Struk Pembelian Kafe Koding ---
Menu Dipesan    : ${namaMenu}
Jumlah          : ${jumlah}
Subtotal        : ${formatRupiah(subtotal)}
Diskon (${diskonPersen * 100}%)    : - ${formatRupiah(diskonNominal)}
-----------------------------------
Total Bayar     : ${formatRupiah(totalBayar)}
--- Terima Kasih ---
`;

    return output;
}


// Contoh 1: PIZZA 2x (Subtotal 110.000, Diskon 15%)
console.log("Kasus 1: Pizza 2x (Diskon 15%)");
console.log(hitungTotalPesanan("PIZZA", 2));

// Contoh 2: KOPI 3x (Subtotal 75.000, Diskon 10%)
console.log("Kasus 2: Kopi 3x (Diskon 10%)");
console.log(hitungTotalPesanan("KOPI", 3));

// Contoh 3: TEH 1x (Subtotal 20.000, Tanpa Diskon)
console.log("Kasus 3: Teh 1x (Tanpa Diskon)");
console.log(hitungTotalPesanan("TEH", 1));

// Contoh 4: Kode Menu Salah (Subtotal 0)
console.log("Kasus 4: Kode Menu Salah");
console.log(hitungTotalPesanan("SUSHI", 5));