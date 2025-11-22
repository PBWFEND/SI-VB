// soal5.js

// Data menggunakan const
const data = {
  nama: "Perpustakaan Digital",
  koleksi: ["Buku A", "Buku B"]
};

// Arrow function
const tambahKoleksi = (item) => {
  data.koleksi.push(item);
  console.log("Koleksi berhasil ditambah!");
};

// Arrow function + template literals
const cekKoleksi = (item) => {
  const ada = data.koleksi.includes(item);

  if (ada) {
    console.log(`Item '${item}' ada di perpustakaan.`);
  } else {
    console.log(`Item '${item}' tidak ditemukan.`);
  }
};

// Eksekusi
tambahKoleksi("Buku C");
cekKoleksi("Buku A");
cekKoleksi("Buku Z");
