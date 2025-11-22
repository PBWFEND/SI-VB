const mahasiswa = {
  nama: 'Tika Anggraeni',
  nim: '230660221098',
  jurusan: 'Sistem Informasi',
  matkul: ['Big Data', 'Bahasa Inggris'],

  tambahMatkul(namaMatkul) {
    this.matkul.push(namaMatkul);
  },

  tampilkanInfo() {
    console.log(`Nama: ${this.nama}`);
    console.log(`NIM: ${this.nim}`);
    console.log(`Jurusan: ${this.jurusan}`);
    console.log(`Mata Kuliah: ${this.matkul.join(', ')}`);
  },
};

console.log('Nama dan NIM awal:');
console.log(`Nama: ${mahasiswa.nama}, NIM: ${mahasiswa.nim}`);

console.log('\nMenambah mata kuliah...');
mahasiswa.tambahMatkul('Pemrograman');
mahasiswa.tambahMatkul('Basis Data');

console.log('\nInformasi lengkap mahasiswa:');
mahasiswa.tampilkanInfo();
