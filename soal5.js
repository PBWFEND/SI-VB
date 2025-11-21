// soal5.js

// REFACTOR 1: Ganti 'var' ke 'const' untuk data (Modul 1 & 5)
const data = {
  nama: "Perpustakaan Digital",
  koleksi: ["Buku A", "Buku B"]
};

// REFACTOR 2: Ubah 'function' ke Arrow Function (Modul 5)
const tambahKoleksi = (item) => {
  data.koleksi.push(item);
  // REFACTOR 3: Gunakan Template Literals (Modul 1 & 5)
  console.log(`Koleksi '${item}' berhasil ditambah!`);
};

// REFACTOR 2 & 3: Ubah function ke Arrow Function & gunakan Template Literals
const cekKoleksi = (item) => {
  // Menggunakan .includes() yang lebih modern, daripada .indexOf() !== -1 (Modul 3)
  const ada = data.koleksi.includes(item); // Ganti 'var' ke 'const' (Modul 1 & 5)

  // Conditional Logic (Modul 2)
  if (ada) {
    console.log(`Item '${item}' ada di perpustakaan.`);
  } else {
    console.log(`Item '${item}' tidak ditemukan.`);
  }
};

// Demonstrasi
tambahKoleksi("Buku C");
cekKoleksi("Buku A");
cekKoleksi("Buku Z");