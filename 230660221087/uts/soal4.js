const dataGaji = [
  { nama: "Andi", divisi: "Finance", gaji: 5000000 },
  { nama: "Budi", divisi: "IT", gaji: 7000000 },
  { nama: "Citra", divisi: "Finance", gaji: 5500000 },
  { nama: "Dewi", divisi: "HR", gaji: 4500000 },
];

// Menggunakan .map() dengan destructuring untuk membuat laporanKaryawan
const laporanKaryawan = dataGaji.map(({ nama, divisi, gaji }) => {
  // Hitung tunjangan (10% dari gaji)
  const tunjangan = gaji * 0.10; 
  
  return {
    // nama diubah menjadi huruf besar semua menggunakan .toUpperCase()
    karyawan: nama.toUpperCase(), 
    divisi: divisi,
    tunjangan: tunjangan,
  };
});

// Mencetak hasil laporanKaryawan
console.log("--- Laporan Karyawan ---");
console.log(laporanKaryawan);