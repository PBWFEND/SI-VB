const dataGaji = [
  { nama: "Rian", divisi: "Finance", gaji: 9000000 },
  { nama: "Budi", divisi: "IT", gaji: 100000 },
  { nama: "Cira", divisi: "Finance", gaji: 5700000 },
  { nama: "Dina", divisi: "HR", gaji: 4900000 },
];

const laporanKaryawan = dataGaji.map(({ nama, divisi, gaji }) => ({
  karyawan: nama.toUpperCase(),
  divisi,
  tunjangan: gaji * 0.1,
}));

console.log(laporanKaryawan);
