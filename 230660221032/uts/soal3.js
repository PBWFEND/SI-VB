// soal3.js

// membuat obeject mahasiswa
const mahasiswa = {
  nama: "Deyna Angeliawati Zahara",
  nim: "230660221032",
  jurusan: "Sistem Informasi",
  matkul: [],

// membuat methode
  tambahMatkul(namaMatkul) {
    this.matkul.push(namaMatkul);
  },

  tampilkanInfo() {
    console.log("_____DATA MAHASISWA_____");
    console.log(`Nama     : ${this.nama}`);
    console.log(`NIM      : ${this.nim}`);
    console.log(`Jurusan  : ${this.jurusan}`);
    console.log("Mata Kuliah:");
    this.matkul.forEach((mk, i) => {
      console.log(`  ${i + 1}. ${mk}`);
    });
  }
};

// Demonstrasi
console.log(mahasiswa.nama); // Tampilkan nama
console.log(mahasiswa.nim);  // Tampilkan nim
console.log("");

mahasiswa.tambahMatkul("Pemrograman Web");
mahasiswa.tambahMatkul("Basis Data");

mahasiswa.tampilkanInfo();
