// Data menggunakan 'const' karena tidak akan di-assign ulang
const data = {
  nama: "Perpustakaan Digital",
  koleksi: ["Buku A", "Buku B"]
};

// Arrow Function untuk method tambahKoleksi
const tambahKoleksi = (item) => {
  data.koleksi.push(item);
  console.log("Koleksi berhasil ditambah!");
};

// Arrow Function untuk method cekKoleksi
const cekKoleksi = (item) => {
  // Menggunakan 'const' untuk variabel di dalam fungsi
  const ada = data.koleksi.includes(item); // ES7: Menggunakan .includes() lebih modern dari .indexOf() !== -1
  
  if (ada) {
    // Menggunakan template literals
    console.log(`Item '${item}' ada di perpustakaan.`);
  } else {
    // Menggunakan template literals
    console.log(`Item '${item}' tidak ditemukan.`);
  }
};

// --- Demonstrasi ---
tambahKoleksi("Buku C");
cekKoleksi("Buku A");
cekKoleksi("Buku Z");