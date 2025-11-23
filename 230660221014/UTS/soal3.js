// soal3.js

const mahasiswa = {
  nama: "Yudi Aditiya Rahman",
  nim: "230660221014",
  jurusan: "Sistem Informasi",
  matkul: [],

  tambahMatkul(namaMatkul) {
    this.matkul.push(namaMatkul);
    console.log(`Mata kuliah '${namaMatkul}' berhasil ditambahkan.`);
  },

  tampilkanInfo() {
    console.log(`
=== DATA MAHASISWA ===
Nama     : ${this.nama}
NIM      : ${this.nim}
Jurusan  : ${this.jurusan}
Mata Kuliah:
- ${this.matkul.join("\n- ")}
    `);
  }
};

console.log(`Nama: ${mahasiswa.nama}`);
console.log(`NIM : ${mahasiswa.nim}`);

mahasiswa.tambahMatkul("Pemrograman Web");
mahasiswa.tambahMatkul("Basis Data");

mahasiswa.tampilkanInfo();