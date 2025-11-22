class Mahasiswa {
  constructor(nama, nim, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
    this.status = 'Aktif';
  }

  perkenalan() {
    console.log(`Halo, nama saya ${this.nama} (NIM: ${this.nim}), ` + `dari jurusan ${this.jurusan}.`);
  }

  belajar() {
    console.log(`${this.nama} sedang belajar materi OOP...`);
  }
}

console.log('--- Membuat Objek Mahasiswa ---');

const mhs1 = new Mahasiswa('Tika Anggraeni', '230660221098', 'Sistem Informasi');
const mhs2 = new Mahasiswa('Sarah Nafhika', '10229005', 'Sistem Informasi');

console.log(`Nama Mahasiswa 1: ${mhs1.nama}`);
console.log(`Status Mahasiswa 2: ${mhs2.status}`);

console.log('\n--- Memanggil Method ---');
mhs1.perkenalan();
mhs1.belajar();

console.log('');
mhs2.perkenalan();
mhs2.belajar();
