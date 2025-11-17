// mahasiswa.js

// 1. Mendefinisikan Class (Blueprint)
class Mahasiswa {
  
  // 2. Constructor: Dijalankan saat 'new Mahasiswa(...)' dipanggil
  constructor(nama, nim, jurusan) {
    // 'this' mengacu pada instance yang akan dibuat
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
    this.status = "Aktif"; // Properti dengan nilai default
  }

  // 3. Method (Perilaku)
  // Ini adalah method yang diminta: 'perkenalan'
  perkenalan() {
    console.log(
      `Halo, nama saya ${this.nama} (NIM: ${this.nim}), ` +
      `dari jurusan ${this.jurusan}.`
    );
  }

  // Method lain
  belajar() {
    console.log(`${this.nama} sedang belajar materi OOP...`);
  }
}

// --- Menggunakan Class ---

console.log("--- Membuat Objek Mahasiswa ---");

// 4. Membuat Instance (Objek Nyata) dari Class
const mhs1 = new Mahasiswa("Andi Hermawan", "10119001", "Informatika");
const mhs2 = new Mahasiswa("Budi Setiawan", "10229005", "Sistem Informasi");

// 5. Memanggil Properti dan Method dari Objek
console.log(`Nama Mahasiswa 1: ${mhs1.nama}`); // Mengakses properti
console.log(`Status Mahasiswa 2: ${mhs2.status}`);

console.log("\n--- Memanggil Method ---");
mhs1.perkenalan(); // Memanggil method
mhs1.belajar();

console.log(""); // Spasi
mhs2.perkenalan();
mhs2.belajar();