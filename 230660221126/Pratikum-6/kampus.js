// kampus.js
// Studi Kasus 6 - Bagian 1: Pewarisan & Enkapsulasi

// === Kelas Induk ===
class Orang {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  sapa() {
    console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
  }
}

// === Kelas Anak ===
class Mahasiswa extends Orang {
  #sks = 0; // field privat

  constructor(nama, umur) {
    super(nama, umur);
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

// --- Penggunaan ---
const orang1 = new Orang("Nabila Apriliani", 21);
orang1.sapa();

console.log("");

const mhs1 = new Mahasiswa("Nabila Apriliani", 21);
mhs1.sapa();              // pewarisan dari Orang
mhs1.ambilSKS(3);         // valid
mhs1.ambilSKS(4);         // valid
mhs1.lihatSKS();          // tampilkan total SKS
mhs1.ambilSKS(-2);        // invalid
mhs1.ambilSKS("tiga");    // invalid

// (Opsional) Coba akses field privat — akan error
// console.log(mhs1.#sks); // ❌ Error