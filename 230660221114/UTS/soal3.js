const mahasiswa = {
  nama: "Talitha Ardelia Ivana",
  nim: "230660221114",
  jurusan: "Sistem Informasi",
  matkul: [],

  tambahMatkul(namaMatkul) {
    this.matkul.push(namaMatkul);
  },

  tampilkanInfo() {
    console.log(`Nama: ${this.nama}`);
    console.log(`NIM: ${this.nim}`);
    console.log(`Jurusan: ${this.jurusan}`);
    console.log(`Mata Kuliah: ${this.matkul}`);
  }
};

// Langkah pada demonstrasi
console.log(mahasiswa.nama);
console.log(mahasiswa.nim);

mahasiswa.tambahMatkul("Pemrograman Web");
mahasiswa.tambahMatkul("Basis Data");

mahasiswa.tampilkanInfo();
