// kasir.js
function hitungTotalPesanan(kodeMenu, jumlah) {
  let namaMenu;
  let hargaSatuan;

  // Tentukan harga satuan berdasarkan kodeMenu
  switch (kodeMenu.toUpperCase()) {
    case "KOPI":
      namaMenu = "Kopi";
      hargaSatuan = 25000;
      break;
    case "TEH":
      namaMenu = "Teh";
      hargaSatuan = 20000;
      break;
    case "PIZZA":
      namaMenu = "Pizza";
      hargaSatuan = 55000;
      break;
    default:
      namaMenu = "Menu Tidak Dikenal";
      hargaSatuan = 0;
  }

  // Hitung subtotal
  let subtotal = hargaSatuan * jumlah;

  // Tentukan diskon
  let diskonPersen = 0;
  if (subtotal > 100000) {
    diskonPersen = 15;
  } else if (subtotal > 50000) {
    diskonPersen = 10;
  }

  let jumlahDiskon = (subtotal * diskonPersen) / 100;
  let totalBayar = subtotal - jumlahDiskon;

  // Format hasil output
  let hasil = `
--- Struk Pembelian Kafe Koding ---
Menu Dipesan  : ${namaMenu}
Jumlah        : ${jumlah}
Subtotal      : Rp ${subtotal.toLocaleString()}
Diskon (${diskonPersen}%) : Rp ${jumlahDiskon.toLocaleString()}
------------------------------------
Total Bayar   : Rp ${totalBayar.toLocaleString()}
--- Terima Kasih ---
`;

  return hasil;
}

// Contoh pemanggilan fungsi
console.log(hitungTotalPesanan("PIZZA", 2));
