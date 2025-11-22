// ===============================
// 1. Parent Class: Orang
// ===============================
class Orang {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }

    sapa() {
        console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
    }
}


// ===============================
// 2. Child Class: Mahasiswa (extends Orang)
// ===============================
class Mahasiswa extends Orang {

    #sks = 0; // Private field → Encapsulation

    constructor(nama, umur) {
        super(nama, umur); // wajib dipanggil dulu
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


// ===============================
// 3. DEMONSTRASI
// ===============================

// Instance Orang
const orang1 = new Orang("Budi", 25);
orang1.sapa();

console.log(); // baris kosong

// Instance Mahasiswa
const mhs1 = new Mahasiswa("Andi", 20);
mhs1.sapa();

mhs1.ambilSKS(3);
mhs1.ambilSKS(4);
mhs1.lihatSKS();

mhs1.ambilSKS(-2);
mhs1.ambilSKS("abc");

// Contoh pembuktian enkapsulasi (akan error):
// console.log(mhs1.#sks);  // Uncomment untuk melihat error
