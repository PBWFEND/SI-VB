// soal4.js

const dataGaji = [
  { nama: "Andi", divisi: "Finance", gaji: 5000000 },
  { nama: "Budi", divisi: "IT", gaji: 7000000 },
  { nama: "Citra", divisi: "Finance", gaji: 5500000 },
  { nama: "Dewi", divisi: "HR", gaji: 4500000 },
];

// Menggunakan .map() dan Destructuring di parameter (Modul 3 & 5)
const laporanKaryawan = dataGaji.map(({ nama, divisi, gaji }) => {
  // Hitung tunjangan 10%
  const tunjangan = gaji * 0.10;

  // Mengembalikan object baru
  return {
    karyawan: nama.toUpperCase(), // Menggunakan String Method .toUpperCase() (Modul 1)
    divisi: divisi,
    tunjangan: tunjangan,
  };
});

// Cetak hasil
console.log("--- Laporan Karyawan (Map & Destructuring) ---");
console.log(laporanKaryawan);