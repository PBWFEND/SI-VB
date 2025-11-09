// kasir.js
// Program Kasir Kafe Sederhana - "Kafe Koding"

// --- Fungsi Utama ---
function hitungTotalPesanan(kodeMenu, jumlah) {
  let namaMenu;
  let hargaSatuan;

  // --- Tentukan harga satuan berdasarkan kodeMenu ---
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

  // --- Hitung subtotal ---
  const subtotal = hargaSatuan * jumlah;

  // --- Tentukan diskon ---
  let diskonPersen = 0;
  if (subtotal > 100000) {
    diskonPersen = 15;
  } else if (subtotal > 50000) {
    diskonPersen = 10;
  }

  const nilaiDiskon = (subtotal * diskonPersen) / 100;
  const totalBayar = subtotal - nilaiDiskon;

  // --- Format ke Rupiah ---
  const formatRupiah = (angka) => `Rp ${angka.toLocaleString("id-ID")}`;

  // --- Buat struk output ---
  const struk = `
--- Struk Pembelian Kafe Koding ---
Menu Dipesan    : ${namaMenu}
Jumlah          : ${jumlah}
Subtotal        : ${formatRupiah(subtotal)}
Diskon (${diskonPersen}%)    : - ${formatRupiah(nilaiDiskon)}
-----------------------------------
Total Bayar     : ${formatRupiah(totalBayar)}
--- Terima Kasih ---
`;

  return struk;
}

// --- Contoh Pemanggilan Fungsi ---
console.log(hitungTotalPesanan("PIZZA", 2));
console.log(hitungTotalPesanan("KOPI", 3));
console.log(hitungTotalPesanan("TEH", 1));
