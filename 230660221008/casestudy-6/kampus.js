// 1. Parent Class: Orang
class Orang {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }
  
  sapa() {
    console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
  }
}

// 2. Child Class: Mahasiswa mewarisi Orang
class Mahasiswa extends Orang {
  // Private field untuk enkapsulasi SKS
  #sks = 0;

  constructor(nama, umur) {
    // Panggil constructor parent
    super(nama, umur);
  }

  // Method ambil SKS
  ambilSKS(jumlah) {
    if (typeof jumlah !== "number" || jumlah <= 0) {
      console.log("Jumlah SKS harus angka positif!");
      return;
    }

    this.#sks += jumlah;
    console.log(`${this.nama} berhasil mengambil ${jumlah} SKS. Total SKS: ${this.#sks}`);
  }

  // Method lihat SKS (read-only)
  lihatSKS() {
    console.log(`Total SKS ${this.nama}: ${this.#sks}`);
  }
}

// --- DEMO PENGGUNAAN ---
const orang1 = new Orang("Budi", 25);
orang1.sapa();

console.log("");

const mhs1 = new Mahasiswa("Andi", 20);
mhs1.sapa();           // dari parent class
mhs1.ambilSKS(3);
mhs1.ambilSKS(4);
mhs1.lihatSKS();

// Contoh invalid
mhs1.ambilSKS(-5);
mhs1.ambilSKS("abc");

// Tes akses langsung ke private field (harus error):
// console.log(mhs1.#sks);  // <-- ERROR