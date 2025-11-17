// kampus.js

// Parent Class: Orang
class Orang {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  sapa() {
    console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
  }
}

// Child Class: Mahasiswa (mewarisi dari Orang)
class Mahasiswa extends Orang {
  // Private field untuk enkapsulasi
  #sks = 0;

  constructor(nama, umur) {
    // Panggil constructor parent
    super(nama, umur);
  }

  ambilSKS(jumlah) {
    // Validasi input
    if (typeof jumlah !== "number" || jumlah <= 0) {
      console.log("Jumlah SKS harus angka positif!");
      return;
    }

    // Tambah SKS
    this.#sks += jumlah;
    console.log(`${this.nama} berhasil mengambil ${jumlah} SKS. Total SKS: ${this.#sks}`);
  }

  lihatSKS() {
    console.log(`Total SKS ${this.nama}: ${this.#sks}`);
  }
}

// --- Demonstrasi ---

// Instance dari Orang
const orang1 = new Orang("Budi", 25);
orang1.sapa();

console.log(""); // Spasi antar output

// Instance dari Mahasiswa
const mhs1 = new Mahasiswa("Andi", 20);
mhs1.sapa(); // dari parent class
mhs1.ambilSKS(3);
mhs1.ambilSKS(4);
mhs1.lihatSKS();

// Coba input tidak valid
mhs1.ambilSKS(-2);
mhs1.ambilSKS("lima");
