// soal3.js
const mahasiswa = {
  nama: "Rina",
  nim: "21033001",
  jurusan: "Informatika",
  matkul: ["Algoritma", "Basis Data"],
  tambahMatkul(namaMatkul) {
    if (!namaMatkul || typeof namaMatkul !== "string") {
      console.log("Nama mata kuliah tidak valid.");
      return;
    }
    this.matkul.push(namaMatkul);
    console.log(`Berhasil menambah matkul: ${namaMatkul}`);
  },
  tampilkanInfo() {
    console.log("===== DATA MAHASISWA =====");
    console.log(`Nama   : ${this.nama}`);
    console.log(`NIM    : ${this.nim}`);
    console.log(`Jurusan: ${this.jurusan}`);
    console.log("Mata Kuliah:");
    this.matkul.forEach((m, i) => console.log(`  ${i + 1}. ${m}`));
    console.log("==========================");
  }
};

// Demonstrasi langkah
console.log(`Nama: ${mahasiswa.nama}`);
console.log(`NIM : ${mahasiswa.nim}\n`);

mahasiswa.tambahMatkul("Pemrograman Web");
mahasiswa.tambahMatkul("Keamanan Jaringan");

console.log();
mahasiswa.tampilkanInfo();