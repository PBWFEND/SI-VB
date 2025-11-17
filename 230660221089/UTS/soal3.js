const mahasiswa = {
  nama: "Intan Nurdewi Sekarnasih",
  nim: "230660221089",
  jurusan: "Sistem Informasi",
  matkul: [],

  tambahMatkul(namaMatkul) {
    this.matkul.push(namaMatkul);
  },

  tampilkanInfo() {
    console.log(`Nama: ${this.nama}`);
    console.log(`NIM: ${this.nim}`);
    console.log(`Jurusan: ${this.jurusan}`);
    console.log(`Mata Kuliah: ${this.matkul.join(", ")}`);
  }
};

// Langkah demonstrasi
console.log(mahasiswa.nama);
console.log(mahasiswa.nim);

mahasiswa.tambahMatkul("Pemrograman Web");
mahasiswa.tambahMatkul("Basis Data");

mahasiswa.tampilkanInfo();
