// kampus.js

// 1. Mendefinisikan Class (Blueprint)
// Class Orang (Parentclass)
class orang {

// 2. Constrcutor
    constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

// 3. Methode (Perilaku)
    sapa() {
    console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
  }
}

// Class Mahasiswa (Subclass)
class Mahasiswa extends orang {
    // Private field
    #sks = 0;

    constructor(nama, umur) {
        super(nama, umur); // panggil constructor Orang
    }

    ambilSKS(jumlah) {
        // Validasi jumlah harus angka dan >= 0
        if (typeof jumlah !== "number" || jumlah < 0) {
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

// Demonstrasi Penggunaan

// Instance Orang
const orang1 = new orang("Budi", 25);
orang1.sapa();

console.log("");

// Instance Mahasiswa
const mhs1 = new Mahasiswa("Andi", 20);

// Memanggil method dari parent
mhs1.sapa();

// Memanggil ambilSKS
mhs1.ambilSKS(3);
mhs1.ambilSKS(4);

// Lihat total SKS
mhs1.lihatSKS();

// Contoh input tidak valid
mhs1.ambilSKS(-2);
mhs1.ambilSKS("abc");
