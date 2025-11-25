// Object
const mahasiswa = {
  nama: "Fitri Cahyani",
  nim: "230660221028",
  jurusan: "Sistem Informasi",
  matkul: ["Pemrograman Web Back End", "Analisis Perancangan Sistem Informasi Berorientasi Object"],

  // Method untuk menambah mata kuliah
  tambahMatkul(namaMatkul) {
    this.matkul.push(namaMatkul);
  },

  // Method untuk menampilkan info lengkap mahasiswa
  tampilkanInfo() {
    console.log("=== Data Mahasiswa ===");
    console.log(`Nama     : ${this.nama}`);
    console.log(`NIM      : ${this.nim}`);
    console.log(`Jurusan  : ${this.jurusan}`);
    console.log("Mata Kuliah:");
    this.matkul.forEach((mk, i) => {
      console.log(`  ${i + 1}. ${mk}`);
    });
  },
};

// Langkah demonstrasi:
console.log(mahasiswa.nama);
console.log(mahasiswa.nim);

// Tambahkan dua mata kuliah baru
mahasiswa.tambahMatkul("Sistem Informasi Enterprise");
mahasiswa.tambahMatkul("Manajemen Proyek Sistem Informasi");
mahasiswa.tambahMatkul("Digital StartUp");

// Tampilkan seluruh data menggunakan method
mahasiswa.tampilkanInfo();
