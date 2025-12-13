// --- 1. Class Orang (Parent Class) ---
class Orang {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }

    sapa() {
        console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
    }
}

// --- 2. Class Mahasiswa (Child Class) ---
class Mahasiswa extends Orang {
    // Private field untuk Enkapsulasi
    #sks = 0;

    constructor(nama, umur) {
        // Panggil constructor parent
        super(nama, umur);
    }

    ambilSKS(jumlah) {
        // Validasi input
        if (typeof jumlah !== 'number' || jumlah <= 0) {
            console.log("Jumlah SKS harus angka positif!");
            return;
        }

        // Tambahkan ke #sks
        this.#sks += jumlah;
        console.log(`${this.nama} berhasil mengambil ${jumlah} SKS. Total SKS: ${this.#sks}`);
    }

    lihatSKS() {
        console.log(`Total SKS ${this.nama}: ${this.#sks}`);
    }
}

// --- 3. Demonstrasi Penggunaan (Mencapai Output yang Diharapkan) ---

// 1. Instance Orang
const orang1 = new Orang('Budi', 25);
orang1.sapa(); // Output baris 1

console.log(""); 

// 2. Instance Mahasiswa
const mhs1 = new Mahasiswa('Andi', 20);

// Panggil sapa() dari parent
mhs1.sapa(); // Output baris 2

// Panggil ambilSKS()
mhs1.ambilSKS(3);
mhs1.ambilSKS(4);

// Panggil lihatSKS()
mhs1.lihatSKS();

// Panggilan ambilSKS() yang tidak valid
mhs1.ambilSKS(-2);
mhs1.ambilSKS('lima');
