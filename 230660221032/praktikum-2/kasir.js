function hitungTotalPesanan(kodeMenu, jumlah) {
  let hargaSatuan;
  let namaMenu;

  // 1. Tentukan harga berdasarkan kode menu
  switch (kodeMenu.toUpperCase()) {
    case 'KOPI':
      hargaSatuan = 25000;
      namaMenu = 'Kopi';
      break;
    case 'TEH':
      hargaSatuan = 20000;
      namaMenu = 'Teh';
      break;
    case 'PIZZA':
      hargaSatuan = 55000;
      namaMenu = 'Pizza';
      break;
    default:
      hargaSatuan = 0;
      namaMenu = 'Menu tidak dikenal';
  }

  // 2. Hitung subtotal
  let subtotal = hargaSatuan * jumlah;

  // 3. Tentukan diskon
  let diskon = 0;
  let keteranganDiskon = '0%';
  
  if (subtotal > 100000) {
    diskon = subtotal * 0.15;
    keteranganDiskon = '15%';
  } else if (subtotal > 50000) {
    diskon = subtotal * 0.1;
    keteranganDiskon = '10%';
  }

  // 4. Hitung total akhir
  let totalAkhir = subtotal - diskon;

  // 5. Kembalikan hasil dengan format 
  return `
--- Struk Pembelian Kafe Koding ---
Menu Dipesan : ${namaMenu}
Jumlah       : ${jumlah}
Subtotal     : Rp ${subtotal.toLocaleString('id-ID')}
Diskon ${keteranganDiskon}   : Rp ${diskon.toLocaleString('id-ID')}
-----------------------------------
Total Akhir  : Rp ${totalAkhir.toLocaleString('id-ID')}
--- Terima Kasih ---
`;
}

// Contoh pemanggilan 
console.log(hitungTotalPesanan('KOPI', 5));
console.log(hitungTotalPesanan('TEH', 2));
console.log(hitungTotalPesanan('PIZZA', 3));
console.log(hitungTotalPesanan('ROTI', 1));
