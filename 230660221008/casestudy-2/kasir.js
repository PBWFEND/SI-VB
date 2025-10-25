// kasir.js

/**
 * Fungsi untuk memformat angka jadi format rupiah, mis: 110000 -> "Rp 110.000"
 * @param {number} amount
 * @returns {string}
 */
function formatRupiah(amount) {
  // pakai Intl.NumberFormat agar otomatis pakai pemisah ribuan sesuai lokal
  return "Rp " + new Intl.NumberFormat('id-ID').format(amount);
}

/**
 * hitungTotalPesanan
 * @param {string} kodeMenu - kode menu seperti "KOPI", "TEH", "PIZZA" (case-insensitive)
 * @param {number} jumlah - jumlah pesanan (harus bilangan bulat >= 0)
 * @returns {string} - string struk terformat
 */
function hitungTotalPesanan(kodeMenu, jumlah) {
  // validasi sederhana
  if (typeof kodeMenu !== "string") {
    return "Error: kodeMenu harus berupa string.";
  }
  if (!Number.isFinite(jumlah) || jumlah < 0) {
    return "Error: jumlah harus berupa angka >= 0.";
  }

  // normalisasi kodeMenu supaya case-insensitive
  const kode = kodeMenu.trim().toUpperCase();

  // switch-case untuk menentukan harga satuan dan nama menu
  let namaMenu;
  let hargaSatuan;

  switch (kode) {
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
      namaMenu = "Menu Tidak Ditemukan";
      hargaSatuan = 0;
  }

  // hitung subtotal
  const subtotal = hargaSatuan * jumlah;

  // logika diskon (if-else)
  // Catatan: soal menyebut "di atas Rp 100.000" -> interpretasi: strictly greater (> 100000)
  let diskonPersen = 0;
  if (subtotal > 100000) {
    diskonPersen = 15;
  } else if (subtotal > 50000) {
    diskonPersen = 10;
  } else {
    diskonPersen = 0;
  }

  // hitung nominal diskon dan total akhir
  const nominalDiskon = Math.round((subtotal * diskonPersen) / 100);
  const totalBayar = subtotal - nominalDiskon;

  // buat string struk rapi
  const lines = [
    "--- Struk Pembelian Kafe Koding ---",
    `Menu Dipesan    : ${namaMenu}`,
    `Jumlah          : ${jumlah}`,
    `Harga Satuan    : ${formatRupiah(hargaSatuan)}`,
    `Subtotal        : ${formatRupiah(subtotal)}`,
    `Diskon (${diskonPersen}%)    : - ${formatRupiah(nominalDiskon)}`,
    "-----------------------------------",
    `Total Bayar     : ${formatRupiah(totalBayar)}`,
    "--- Terima Kasih ---"
  ];

  return lines.join("\n");
}

// --- Contoh pemanggilan / uji coba ---
console.log(hitungTotalPesanan("PIZZA", 2));
console.log("\n");
console.log(hitungTotalPesanan("KOPI", 1));
console.log("\n");
console.log(hitungTotalPesanan("teh", 3)); // lowercase test
console.log("\n");
console.log(hitungTotalPesanan("unknown", 5)); // menu tidak ada