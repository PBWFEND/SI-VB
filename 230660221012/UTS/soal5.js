const perpustakaan = {
  nama: "Perpustakaan Digital",
  koleksi: ["Buku A", "Buku B"],

  tambahKoleksi(item) {
    this.koleksi.push(item);
    console.log(`Koleksi "${item}" berhasil ditambahkan!`);
  },

  cekKoleksi(item) {
    if (this.koleksi.includes(item)) {
      console.log(`Item '${item}' ada di ${this.nama}.`);
    } else {
      console.log(`Item '${item}' tidak ditemukan di ${this.nama}.`);
    }
  },
};

console.log("--- Menjalankan Interaksi ---");
perpustakaan.tambahKoleksi("Buku C");
perpustakaan.cekKoleksi("Buku A");
perpustakaan.cekKoleksi("Buku Z");
console.log("------------------------------\n");

const { nama, koleksi } = perpustakaan;

console.log("--- Demo Destructuring ---");
console.log(`Nama Perpustakaan: ${nama}`);
console.log(`Jumlah Koleksi: ${koleksi.length}`);
console.log(`Daftar Koleksi: ${koleksi.join(", ")}`);
console.log("------------------------------\n");

const perpustakaanCabang = {
  ...perpustakaan,
  nama: "Perpustakaan Cabang",
  koleksi: [...perpustakaan.koleksi, "Buku D", "Buku E"],
};

console.log("--- Demo Spread Operator ---");
console.log("Data Perpustakaan Asli:");
console.log(perpustakaan);
console.log("\nData Perpustakaan Cabang (hasil salinan & modifikasi):");
console.log(perpustakaanCabang);
console.log("------------------------------");
