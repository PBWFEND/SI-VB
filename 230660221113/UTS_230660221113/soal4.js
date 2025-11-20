// soal4.js
const dataGaji = [
  { nama: "Andi", divisi: "Finance", gaji: 5000000 },
  { nama: "Budi", divisi: "IT", gaji: 7000000 },
  { nama: "Citra", divisi: "Finance", gaji: 5500000 },
  { nama: "Dewi", divisi: "HR", gaji: 4500000 },
];

// map dengan destructuring pada parameter
const laporanKaryawan = dataGaji.map(({ nama, divisi, gaji }) => ({
  karyawan: nama.toUpperCase(),
  divisi,
  tunjangan: gaji * 0.10
}));

console.log(laporanKaryawan);