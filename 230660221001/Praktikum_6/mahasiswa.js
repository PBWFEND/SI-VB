// Praktikum 6 - Dasar Class & Object
// Nama: Ghatan Zalfaa Kautsar
// NPM : 230660221001
// Kelas: SI-VB

// 1. Mendefinisikan Class (Blueprint)
class Mahasiswa {
  // 2. Constructor: berjalan saat instance dibuat
  constructor(nama, nim, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
    this.status = 'Aktif'; // Properti default
  }

  // 3. Method (Perilaku)
  perkenalan() {
    console.log(
      `Halo, nama saya ${this.nama} (NIM: ${this.nim}), dari jurusan ${this.jurusan}.`
    );
  }

  belajar() {
    console.log(`${this.nama} sedang belajar materi OOP...`);
  }
}

// --- Demonstrasi Penggunaan Class ---
console.log('--- Membuat Objek Mahasiswa ---');

const mhs1 = new Mahasiswa('Andi Hermawan', '10119001', 'Informatika');
const mhs2 = new Mahasiswa(
  'Ghatan Zalfaa Kautsar',
  '230660221001',
  'Sistem Informasi'
);

console.log(`Nama Mahasiswa 1: ${mhs1.nama}`);
console.log(`Status Mahasiswa 2: ${mhs2.status}`);

console.log('\n--- Memanggil Method ---');
mhs1.perkenalan();
mhs1.belajar();

console.log('');
mhs2.perkenalan();
mhs2.belajar();
