// Studi Kasus 6 - Inheritance & Encapsulation
// Nama: Ghatan Zalfaa Kautsar
// NPM : 230660221001
// Kelas: SI-VB

// Class Parent
class Orang {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  sapa() {
    console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
  }
}

// Class Child
class Mahasiswa extends Orang {
  #sks = 0; // private field

  constructor(nama, umur) {
    super(nama, umur);
  }

  ambilSKS(jumlah) {
    if (typeof jumlah !== 'number' || jumlah <= 0) {
      console.log('Jumlah SKS harus angka positif!');
      return;
    }
    this.#sks += jumlah;
    console.log(
      `${this.nama} berhasil mengambil ${jumlah} SKS. Total SKS: ${this.#sks}`
    );
  }

  lihatSKS() {
    console.log(`Total SKS ${this.nama}: ${this.#sks}`);
  }
}

// --- Demonstrasi ---
const orang1 = new Orang('Budi', 25);
orang1.sapa();

console.log('');

const mhs1 = new Mahasiswa('Ghatan Zalfaa Kautsar', 21);
mhs1.sapa(); // Inherited method
mhs1.ambilSKS(3);
mhs1.ambilSKS(4);
mhs1.lihatSKS();
mhs1.ambilSKS(-2);
mhs1.ambilSKS('empat');
