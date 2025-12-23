/**
 * Nama  : Ridho Akmal Aulia
 * NPM   : 230660221024
 * Kelas : Sistem Informasi
 * Praktikum 2 - Case Study: Program Kasir Kafe Sederhana
 */

// Fungsi utama
function hitungTotalPesanan(kodeMenu, jumlah) {
  let namaMenu, hargaSatuan;

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
      break;
  }

  // Hitung subtotal
  let subtotal = hargaSatuan * jumlah;
  let diskon = 0;
  let persenDiskon = 0;

  // Tentukan diskon
  if (subtotal > 100000) {
    persenDiskon = 15;
    diskon = subtotal * 0.15;
  } else if (subtotal > 50000) {
    persenDiskon = 10;
    diskon = subtotal * 0.10;
  }

  let total = subtotal - diskon;

  // Format angka ke format Rupiah
  const rupiah = (angka) =>
    "Rp " + angka.toLocaleString("id-ID");

  // Hasil output
  return `
--- Struk Pembelian Kafe Koding ---
Nama Pelanggan  : Ridho Akmal Aulia
Menu Dipesan    : ${namaMenu}
Jumlah          : ${jumlah}
Subtotal        : ${rupiah(subtotal)}
Diskon (${persenDiskon}%) : - ${rupiah(diskon)}
-----------------------------------
Total Bayar     : ${rupiah(total)}
--- Terima Kasih Telah Berkunjung ---
`;
}

// --- Uji coba fungsi ---
console.log(hitungTotalPesanan("PIZZA", 2));
console.log(hitungTotalPesanan("KOPI", 3));
console.log(hitungTotalPesanan("TEH", 1));
