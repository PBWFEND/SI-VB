/**
 * Fungsi untuk menghitung total pesanan di Kafe Koding.
 * @param {string} kodeMenu - Kode menu yang dipesan (KOPI, TEH, PIZZA).
 * @param {number} jumlah - Jumlah item yang dipesan.
 * @returns {string} Rincian pesanan yang sudah diformat.
 */
function hitungTotalPesanan(kodeMenu, jumlah) {
  let namaMenu = '';
  let hargaSatuan = 0;

  // 1. Menentukan harga satuan dan nama menu menggunakan switch-case
  switch (kodeMenu.toUpperCase()) {
    case 'KOPI':
      namaMenu = 'Kopi';
      hargaSatuan = 25000;
      break;
    case 'TEH':
      namaMenu = 'Teh';
      hargaSatuan = 20000;
      break;
    case 'PIZZA':
      namaMenu = 'Pizza';
      hargaSatuan = 55000;
      break;
    default:
      return `Error: Kode menu "${kodeMenu}" tidak valid.`;
  }

  // 2. Menghitung subtotal
  const subtotal = hargaSatuan * jumlah;

  // 3. Menentukan diskon menggunakan if-else
  let diskon = 0;
  if (subtotal > 100000) {
    diskon = subtotal * 0.15; // Diskon 15%
  } else if (subtotal > 50000) {
    diskon = subtotal * 0.10; // Diskon 10%
  }

  // 4. Menghitung total akhir
  const totalAkhir = subtotal - diskon;

  // Fungsi untuk memformat angka ke dalam format Rupiah
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(angka);
  };

  // 5. Mengembalikan string rincian pesanan
  return `
========================================
         STRUK PEMBAYARAN KAFE KODING
========================================
Menu          : ${namaMenu}
Jumlah        : ${jumlah}
Subtotal      : ${formatRupiah(subtotal)}
Diskon        : ${formatRupiah(diskon)}
----------------------------------------
Total Bayar   : ${formatRupiah(totalAkhir)}
========================================
  `;
}

// --- Contoh Penggunaan ---

// Pesanan 1: Pizza 2 Pcs (Dapat diskon 15%)
console.log(hitungTotalPesanan('PIZZA', 2));

// Pesanan 2: Kopi 3 Pcs (Dapat diskon 10%)
console.log(hitungTotalPesanan('KOPI', 3));

// Pesanan 3: Teh 1 Pcs (Tidak dapat diskon)
console.log(hitungTotalPesanan('TEH', 1));

// Pesanan 4: Kode menu salah
console.log(hitungTotalPesanan('SUSU', 2));