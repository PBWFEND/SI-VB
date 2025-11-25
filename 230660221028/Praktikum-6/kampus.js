// kampus.js

// 1. Class Orang (Parent Class)
class Orang {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  sapa() {
    console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
  }
}

// 2. Class Mahasiswa mewarisi Orang
class Mahasiswa extends Orang {
  // Private field SKS
  #sks = 0;

  constructor(nama, umur) {
    super(nama, umur); // panggil constructor Orang
  }

  // 5. Method ambilSKS()
  ambilSKS(jumlah) {
    if (typeof jumlah !== "number" || jumlah < 0) {
      console.log("Jumlah SKS harus angka positif!");
      return;
    }

    this.#sks += jumlah;
    console.log(`${this.nama} berhasil mengambil ${jumlah} SKS. Total SKS: ${this.#sks}`);
  }

  // 6. Method lihatSKS()
  lihatSKS() {
    console.log(`Total SKS ${this.nama}: ${this.#sks}`);
  }
}

// 7. Demonstrasi Penggunaan

// Instance Orang
const orang1 = new Orang("Budi", 25);
orang1.sapa();
console.log("");

// Instance Mahasiswa
const mhs1 = new Mahasiswa("Andi", 20);
mhs1.sapa(); // dari parent

// Tes ambil SKS
mhs1.ambilSKS(3);
mhs1.ambilSKS(4);
mhs1.ambilSKS(-2);  // tidak valid
mhs1.ambilSKS("abc"); // tidak valid

// Lihat total SKS
mhs1.lihatSKS();