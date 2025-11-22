const mahasiswa = {
  nama: "Citra Dewi",
  nim: "19870021",
  jurusan: "Sistem Informasi",
  matkul: ["Analisis & Desain Sistem", "Jaringan Komputer"], 

  tambahMatkul(namaMatkulBaru) {
    this.matkul.push(namaMatkulBaru);
    console.log(`\n✅ Mata kuliah "${namaMatkulBaru}" berhasil ditambahkan.`);
  },

  tampilkanInfo() {
    console.log("==========================================");
    console.log("           DETAIL DATA MAHASISWA          ");
    console.log("==========================================");
    console.log(`Nama      : ${this.nama}`);
    console.log(`NIM       : ${this.nim}`);
    console.log(`Jurusan   : ${this.jurusan}`);
    console.log(`Daftar Mata Kuliah (${this.matkul.length}):`);

    this.matkul.forEach((mk, index) => {
      console.log(`  - ${index + 1}. ${mk}`);
    });
    console.log("==========================================");
  },
};


console.log(`\n1. Tampilan Nama dan NIM Awal:`);
console.log(`Nama: ${mahasiswa.nama}`);
console.log(`NIM : ${mahasiswa.nim}`);

console.log("\n2. Menambahkan dua mata kuliah baru...");
mahasiswa.tambahMatkul("Pemrograman Berorientasi Objek");
mahasiswa.tambahMatkul("Tata Kelola TI");

console.log("\n3. Memanggil tampilkanInfo() untuk seluruh data:");
mahasiswa.tampilkanInfo();
