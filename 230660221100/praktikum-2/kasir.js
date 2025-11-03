// kasir.js

function hitungTotalPesanan(kodeMenu, jumlah) {
  let hargaSatuan;
  let namaMenu;

  // --- Tentukan harga satuan berdasarkan kode menu ---
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
      namaMenu = "Menu tidak tersedia";
  }

  // --- Hitung subtotal ---
  const subtotal = hargaSatuan * jumlah;

  // --- Logika diskon ---
  let diskon = 0;
  let persentaseDiskon = 0;

  if (subtotal > 100000) {
    persentaseDiskon = 15;
    diskon = subtotal * 0.15;
  } else if (subtotal > 50000) {
    persentaseDiskon = 10;
    diskon = subtotal * 0.10;
  }

  const totalBayar = subtotal - diskon;

  // --- Format angka ke Rupiah ---
  const formatRupiah = (angka) =>
    "Rp " + angka.toLocaleString("id-ID");

  // --- Return string hasil ---
  return `
--- Struk Pembelian Kafe Koding ---
Menu Dipesan    : ${namaMenu}
Jumlah          : ${jumlah}
Subtotal        : ${formatRupiah(subtotal)}
Diskon (${persentaseDiskon}%)    : - ${formatRupiah(diskon)}
-----------------------------------
Total Bayar     : ${formatRupiah(totalBayar)}
--- Terima Kasih ---
`;
}

// --- Contoh pemanggilan fungsi ---
console.log(hitungTotalPesanan("PIZZA", 2));
