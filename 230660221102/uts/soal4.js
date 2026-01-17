// soal4.js
const dataGaji = [
  { nama: "Citra", divisi: "Marketing", gaji: 5000000 },
  { nama: "Andi", divisi: "GA", gaji: 7000000 },
  { nama: "Saputra", divisi: "Marketing", gaji: 5500000 },
  { nama: "Arasyad", divisi: "HRD", gaji: 4500000 },
];

const laporanKaryawan = dataGaji.map(({ nama, divisi, gaji }) => ({
  karyawan: nama.toUpperCase(),
  divisi,
  tunjangan: gaji * 0.1
}));

console.log(laporanKaryawan);