const mahasiswa = {
  nama: "Nazwa Umaira Nanindia Ramdhani",
  nim: "230660221008",
  jurusan: "Sistem Informasi",
  matkul: ["Pemrograman Berbasis Web Back-End", "Analisis Perancangan Sistem Berorientasi Objek"],

  tambahMatkul(namaMatkul) {
    if (!namaMatkul || typeof namaMatkul !== "string") {
      console.log("Nama mata kuliah tidak valid.");
      return;
    }
    this.matkul.push(namaMatkul);
    console.log(`Matkul "${namaMatkul}" berhasil ditambahkan.`);
  },

  tampilkanInfo() {
    console.log("\n--- Informasi Mahasiswa ---");
    console.log(`Nama   : ${this.nama}`);
    console.log(`NIM    : ${this.nim}`);
    console.log(`Jurusan: ${this.jurusan}`);
    console.log("Mata Kuliah:");
    if (this.matkul.length === 0) {
      console.log("  (Belum ada mata kuliah terdaftar)");
    } else {
      this.matkul.forEach((m, i) => {
        console.log(`  ${i + 1}. ${m}`);
      });
    }
    console.log("---------------------------\n");
  }
};

// 1. Tampilkan nama dan NIM
console.log(`Nama: ${mahasiswa.nama}`);
console.log(`NIM : ${mahasiswa.nim}`);

// 2. Tambahkan dua mata kuliah baru
mahasiswa.tambahMatkul("Manajemen Proyek Sistem Informasi");
mahasiswa.tambahMatkul("Big Data");

// 3. Tampilkan seluruh informasi
mahasiswa.tampilkanInfo();