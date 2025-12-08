// soal3.js
// UTS - Soal 3: Object Literal & Methods

const mahasiswa = {
  nama: 'Ridho Akmal Aulia',
  nim: '230660221024',
  jurusan: 'Sistem Informasi',
  matkul: ['Dasar Pemrograman', 'Basis Data'],

  tambahMatkul(namaMatkul) {
    if (typeof namaMatkul !== 'string' || namaMatkul.trim() === '') {
      console.log('Nama mata kuliah tidak valid.');
      return;
    }
    this.matkul.push(namaMatkul);
    console.log(`Matkul "${namaMatkul}" berhasil ditambahkan.`);
  },

  tampilkanInfo() {
    console.log('=== Informasi Mahasiswa ===');
    console.log(`Nama   : ${this.nama}`);
    console.log(`NIM    : ${this.nim}`);
    console.log(`Jurusan: ${this.jurusan}`);
    console.log('Matkul :');
    this.matkul.forEach((m, idx) => console.log(`  ${idx + 1}. ${m}`));
    console.log('===========================');
  },
};

// Demonstrasi sesuai langkah
console.log(`Nama : ${mahasiswa.nama}`);
console.log(`NIM  : ${mahasiswa.nim}`);

mahasiswa.tambahMatkul('Pemrograman Berbasis Web');
mahasiswa.tambahMatkul('Struktur Data');

mahasiswa.tampilkanInfo();
