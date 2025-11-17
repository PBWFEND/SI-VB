const mahasiswa = {
  nama: "Paizal Rizki Nugraha",
  nim: "230660221012",
  jurusan: "Sistem Informasi",
  matkul: [],

  tambahMatkul(namaMatkul) {
    this.matkul.push(namaMatkul);
    console.log(`Mata kuliah "${namaMatkul}" berhasil ditambahkan.`);
  },

  tampilkanInfo() {
    console.log("====== Data Mahasiswa ======");
    console.log(`Nama    : ${this.nama}`);
    console.log(`NIM     : ${this.nim}`);
    console.log(`Jurusan : ${this.jurusan}`);
    console.log("Mata Kuliah:");
    if (this.matkul.length === 0) {
      console.log("  - Belum ada mata kuliah terdaftar");
    } else {
      this.matkul.forEach((mk, index) => {
        console.log(`  ${index + 1}. ${mk}`);
      });
    }
  },
};

console.log(`Nama: ${mahasiswa.nama}`);
console.log(`NIM : ${mahasiswa.nim}\n`);

mahasiswa.tambahMatkul("Big Data (Pilihan)");
mahasiswa.tambahMatkul("Perencanaan Strategi Sistem Informasi");
mahasiswa.tambahMatkul("Digital Starup");
mahasiswa.tambahMatkul("Manajemen Proyek Sistem Informasi");
mahasiswa.tambahMatkul("Analisis & Perancangan Berorientasi Objek");
mahasiswa.tambahMatkul("Tata Kelola Teknologi Informasi");
mahasiswa.tambahMatkul("Pemrograman Berbasis Wb Back End");

console.log();
mahasiswa.tampilkanInfo();
