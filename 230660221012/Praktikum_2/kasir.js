// kasir.js

function hitungTotalPesanan(kodeMenu, jumlah) {
  let hargaSatuan;
  let namaMenu;

  // 2. Menentukan harga satuan dan nama menu dengan switch-case
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
  }

  // 3. Hitung subtotal
  const subtotal = hargaSatuan * jumlah;

  // 4. Logika diskon dengan if-else
  let diskonPersen = 0;
  if (subtotal > 100000) {
    diskonPersen = 15;
  } else if (subtotal > 50000) {
    diskonPersen = 10;
  }

  const diskon = (subtotal * diskonPersen) / 100;
  const totalBayar = subtotal - diskon;

  // 5. Kembalikan string struk terformat
  return `
--- Struk Pembelian Kafe Koding ---
Menu Dipesan    : ${namaMenu}
Jumlah          : ${jumlah}
Subtotal        : Rp ${subtotal.toLocaleString("id-ID")}
Diskon (${diskonPersen}%)    : - Rp ${diskon.toLocaleString("id-ID")}
-----------------------------------
Total Bayar     : Rp ${totalBayar.toLocaleString("id-ID")}
--- Terima Kasih ---
`;
}

// Contoh pemanggilan fungsi
console.log(hitungTotalPesanan("PIZZA", 2));
console.log(hitungTotalPesanan("KOPI", 1));
console.log(hitungTotalPesanan("TEH", 4));
console.log(hitungTotalPesanan("NASI", 3)); // kode tidak valid
