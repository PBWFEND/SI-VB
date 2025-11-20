// soal3.js
const mahasiswa = {
  nama: "Muhammad Andre Nugraha",
  nim: "230660221113",
  jurusan: "Sistem Informasi",
  matkul: ["Basis Data", "Pemrograman Web"],

  tambahMatkul(namaMatkul) {
    if (!namaMatkul || typeof namaMatkul !== 'string') return;
    this.matkul.push(namaMatkul);
  },

  tampilkanInfo() {
    console.log("=== Informasi Mahasiswa ===");
    console.log(`Nama   : ${this.nama}`);
    console.log(`NIM    : ${this.nim}`);
    console.log(`Jurusan: ${this.jurusan}`);
    console.log("Mata Kuliah:");
    this.matkul.forEach((m, i) => console.log(`  ${i + 1}. ${m}`));
    console.log("===========================");
  }
};

// Demonstrasi langkah-langkah
console.log(`Nama: ${mahasiswa.nama}`);
console.log(`NIM : ${mahasiswa.nim}`);

mahasiswa.tambahMatkul("Sistem Operasi");
mahasiswa.tambahMatkul("Rekayasa Perangkat Lunak");

mahasiswa.tampilkanInfo();