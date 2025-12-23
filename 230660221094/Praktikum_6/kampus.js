// ----------------------------
// Class Orang (Parent Class)
// ----------------------------
class Orang {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }

    sapa() {
        console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
    }
}


// ----------------------------
// Class Mahasiswa (Child Class)
// ----------------------------
class Mahasiswa extends Orang {

    // Private field SKS
    #sks = 0;

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


// ----------------------------
// Demonstrasi Penggunaan
// ----------------------------

// Instance Orang
const orang1 = new Orang("Budi", 25);
orang1.sapa();

console.log(); // baris kosong agar sesuai contoh output

// Instance Mahasiswa
const mhs1 = new Mahasiswa("Andi", 20);
mhs1.sapa();

// Pengambilan SKS valid
mhs1.ambilSKS(3);
mhs1.ambilSKS(4);

// Lihat total SKS
mhs1.lihatSKS();

// Ambil SKS tidak valid
mhs1.ambilSKS(-2);
mhs1.ambilSKS("a");
