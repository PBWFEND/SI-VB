// soal5.js
// UTS - Soal 5: Refactor ke ES6+ (const/let, arrow function, template literals)

// Kode hasil refactor (setara fungsi dengan kode lama)
const data = {
  nama: 'Perpustakaan Digital',
  koleksi: ['Buku A', 'Buku B'],
};

const tambahKoleksi = (item) => {
  if (typeof item !== 'string' || item.trim() === '') {
    console.log('Item tidak valid.');
    return;
  }
  data.koleksi.push(item);
  console.log('Koleksi berhasil ditambah!');
};

const cekKoleksi = (item) => {
  const ada = data.koleksi.indexOf(item) !== -1;
  if (ada) {
    console.log(`Item '${item}' ada di perpustakaan.`);
  } else {
    console.log(`Item '${item}' tidak ditemukan.`);
  }
};

// Demonstrasi
tambahKoleksi('Buku C');
cekKoleksi('Buku A');
cekKoleksi('Buku Z');
