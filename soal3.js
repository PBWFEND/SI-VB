// soal3.js

// Membuat Object Literal menggunakan const (Modul 4 & 5)
const mahasiswa = {
  // Properties (Modul 4)
  nama: "Annisa Nur Sabariyah",
  nim: "20660221085",
  jurusan: "Sistem Informasi",
  matkul: ["Pemrogaraman Berbasis Back End"], // Array (Modul 3)

  // Method 1: Menambah mata kuliah (Menggunakan Method Shorthand - Modul 4)
  tambahMatkul(namaMatkul) {
    this.matkul.push(namaMatkul); // Menggunakan this (Modul 4) dan .push() (Modul 3)
    console.log(`[INFO] Mata kuliah '${namaMatkul}' berhasil ditambahkan.`);
  },

  // Method 2: Menampilkan seluruh info (Menggunakan Template Literals - Modul 5)
  tampilkanInfo() {
    console.log("\n=========================================");
    console.log("         INFORMASI MAHASISWA");
    console.log("=========================================");
    console.log(`Nama      : ${this.nama}`);
    console.log(`NIM       : ${this.nim}`);
    console.log(`Jurusan   : ${this.jurusan}`);
    console.log(`Matkul    : ${this.matkul.join(", ")}`); // Menampilkan array dengan join
    console.log("=========================================");
  }
};

// Langkah Demonstrasi

// 1. Tampilkan nama dan nim
console.log("Nama Awal:", mahasiswa.nama);
console.log("NIM Awal :", mahasiswa.nim);

// 2. Tambahkan dua mata kuliah baru
mahasiswa.tambahMatkul("Pemrograman Web Backend");
mahasiswa.tambahMatkul("Struktur Data");

// 3. Tampilkan seluruh informasi
mahasiswa.tampilkanInfo();