const dataGaji = [
  { nama: "Yelly", divisi: "Finance", gaji: 5000000 },
  { nama: "Ambarwaty", divisi: "IT", gaji: 7000000 },
  { nama: "Hermainy", divisi: "Finance", gaji: 5500000 },
  { nama: "Lingga", divisi: "HR", gaji: 4500000 },
];

const laporanKaryawan = dataGaji.map(({ nama, divisi, gaji }) => {
  const tunjangan = gaji * 0.1;

  return {
    karyawan: nama.toUpperCase(),
    divisi: divisi,
    tunjangan: tunjangan,
  };
});

console.log("==========================================");
console.log("    LAPORAN KARYAWAN (NAMA DIPERBARUI)    ");
console.log("==========================================");
console.log(laporanKaryawan);
console.log("==========================================");
