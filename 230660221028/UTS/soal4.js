const dataGaji = [
  { nama: "Deyna Angeliawati Zahara", divisi: "Analys", gaji: 5000000 },
  { nama: "Nabila Apriliani", divisi: "Developer", gaji: 7000000 },
  { nama: "Dian Erwin", divisi: "Project Manager", gaji: 600000 },
  { nama: "Yudi Aditya Rahman", divisi: "Programing", gaji: 5500000 },
  { nama: "Jajang Komara", divisi: "Desain Grafis", gaji: 6500000 },
];

// map() + destructuring
const laporanKaryawan = dataGaji.map(({ nama, divisi, gaji }) => {
  return {
    karyawan: nama.toUpperCase(),      // nama besar semua
    divisi: divisi,
    tunjangan: gaji * 0.1,              // 10% dari gaji
  };
});

// Cetak hasil
console.log(laporanKaryawan);