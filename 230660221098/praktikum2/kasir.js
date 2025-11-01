// kasir.js

function hitungTotalPesanan(kodeMenu, jumlah) {
  let namaMenu;
  let hargaSatuan;

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
      namaMenu = 'Menu Tidak Dikenal';
      hargaSatuan = 0;
  }

  const subtotal = hargaSatuan * jumlah;

  let diskonPersen = 0;
  if (subtotal > 100000) {
    diskonPersen = 15;
  } else if (subtotal > 50000) {
    diskonPersen = 10;
  }

  const jumlahDiskon = (subtotal * diskonPersen) / 100;
  const totalBayar = subtotal - jumlahDiskon;

  const formatRupiah = (angka) => `Rp ${angka.toLocaleString('id-ID')}`;

  return `
--- Struk Pembelian Kafe Koding ---
Menu Dipesan    : ${namaMenu}
Jumlah          : ${jumlah}
Subtotal        : ${formatRupiah(subtotal)}
Diskon (${diskonPersen}%)   : - ${formatRupiah(jumlahDiskon)}
-----------------------------------
Total Bayar     : ${formatRupiah(totalBayar)}
--- Terima Kasih ---
`;
}

console.log(hitungTotalPesanan('PIZZA', 2));
