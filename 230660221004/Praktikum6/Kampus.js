// ================================
// Inheritance & Encapsulation
// Mahasiswa sebagai Pewaris dari Orang
// ================================

// Parent class
class Orang {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  sapa() {
    console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
  }
}

// Child class
class Mahasiswa extends Orang {
  // Field privat (benar-benar tidak bisa diakses dari luar)
  #sks = 0;

  constructor(nama, umur) {
    // wajib panggil parent constructor dulu
    super(nama, umur);
  }

  ambilSKS(jumlah) {
    // Validasi jumlah SKS
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

// ================================
// Demonstrasi penggunaan
// ================================

// Instance dari Orang
const orang1 = new Orang("Wasba Nugsaha", 25);
orang1.sapa();

console.log(); // spasi

// Instance dari Mahasiswa
const mhs1 = new Mahasiswa("Rian Rianto", 20);
mhs1.sapa(); // method dari parent

mhs1.ambilSKS(3);
mhs1.ambilSKS(4);
mhs1.lihatSKS();

mhs1.ambilSKS(-2);   // tidak valid
mhs1.ambilSKS("dua"); // tidak valid

// (Opsional) bukti enkapsulasi
// console.log(mhs1.#sks); // ❌ Error: Private field '#sks' must be declared in an enclosing class
