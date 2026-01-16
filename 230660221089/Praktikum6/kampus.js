// kampus.js

// =====================
// 1. Class Orang (Parent)
// =====================
class Orang {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  sapa() {
    console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
  }
}



// =====================
// 2. Class Mahasiswa (Child) - Inheritance & Encapsulation
// =====================
class Mahasiswa extends Orang {
  #sks = 0; // private field

  constructor(nama, umur) {
    super(nama, umur); // WAJIB sebelum pakai this
  }

  ambilSKS(jumlah) {
    if (typeof jumlah !== "number" || jumlah <= 0) {
      console.log("Jumlah SKS harus angka positif!");
      return;
    }

    this.#sks += jumlah;
    console.log(`${this.nama} berhasil mengambil ${jumlah} SKS. Total SKS: ${this.#sks}`);
  }

  lihatSKS() {
    console.log(`Total SKS ${this.nama}: ${this.#sks}`);
  }
}



// =====================
// 3. Demonstrasi Penggunaan
// =====================

// -- Instance Orang --
const orang1 = new Orang("Budi", 25);
orang1.sapa();
console.log("");


// -- Instance Mahasiswa --
const mhs1 = new Mahasiswa("Andi", 20);
mhs1.sapa(); // method diwarisi dari Orang

// mengambil SKS valid
mhs1.ambilSKS(3);
mhs1.ambilSKS(4);

// menampilkan total
mhs1.lihatSKS();

// mencoba input tidak valid
mhs1.ambilSKS(-2);
mhs1.ambilSKS("abc");

// --- Tes Enkapsulasi (Opsional) ---
// console.log(mhs1.#sks);  // <-- INI AKAN ERROR (harusnya dibiarkan komentar)
