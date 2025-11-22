const dataGaji = [
  { nama: "Andi", divisi: "Finance", gaji: 5000000 },
  { nama: "Budi", divisi: "IT", gaji: 7000000 },
  { nama: "Citra", divisi: "Finance", gaji: 5500000 },
  { nama: "Dewi", divisi: "HR", gaji: 4500000 },
];

const laporanKaryawan = dataGaji.map(({ nama, divisi, gaji }) => {
  return {
    karyawan: nama.toUpperCase(),
    divisi: divisi,
    tunjangan: gaji * 0.10
  };
});

console.log(laporanKaryawan);
