// kampus.js
// Implementasi Class Inheritance dan Private Field

// =======================================================
// CLASS ORANG (Parent Class)
// =======================================================
class Orang {
    /**
     * Constructor untuk inisialisasi properti nama dan umur.
     * @param {string} nama
     * @param {number} umur
     */
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }

    /**
     * Method untuk menyapa dan mencetak informasi dasar.
     */
    sapa() {
        console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
    }
}

// =======================================================
// CLASS MAHASISWA (Child Class)
// Mewarisi properti dan method dari Orang
// =======================================================
class Mahasiswa extends Orang {
    // Private Field untuk menyimpan total SKS. Hanya dapat diakses di dalam class ini.
    #sks = 0;

    /**
     * Constructor Mahasiswa.
     * Memanggil super() untuk inisialisasi properti parent (nama, umur).
     * @param {string} nama
     * @param {number} umur
     */
    constructor(nama, umur) {
        // Memanggil constructor parent (Orang)
        super(nama, umur);
    }

    /**
     * Method untuk menambahkan jumlah SKS yang diambil.
     * Melakukan validasi input.
     * @param {number} jumlah - Jumlah SKS yang akan ditambahkan.
     */
    ambilSKS(jumlah) {
        // Validasi: jumlah harus berupa angka dan lebih besar dari 0.
        if (typeof jumlah !== 'number' || jumlah <= 0) {
            console.log("Jumlah SKS harus angka positif!");
            return;
        }

        this.#sks += jumlah;
        console.log(`${this.nama} berhasil mengambil ${jumlah} SKS. Total SKS: ${this.#sks}`);
    }

    /**
     * Method untuk menampilkan total SKS saat ini.
     */
    lihatSKS() {
        console.log(`Total SKS ${this.nama}: ${this.#sks}`);
    }
}

// =======================================================
// DEMONSTRASI PENGGUNAAN
// =======================================================

console.log("=====================================");
console.log("DEMO PEWARISAN & ENKAPSULASI (SKS)");
console.log("=====================================");

// 1. Instance Orang
const orang1 = new Orang("Budi", 25);
orang1.sapa(); // Output: Halo, nama saya Budi, umur saya 25 tahun.

console.log("\n--- Instance Mahasiswa ---");

// 2. Instance Mahasiswa
const mhs1 = new Mahasiswa("Andi", 20);

// Panggil method sapa() dari Parent (Orang)
mhs1.sapa(); // Output: Halo, nama saya Andi, umur saya 20 tahun.

// Panggil ambilSKS()
mhs1.ambilSKS(3); // Valid
mhs1.ambilSKS(4); // Valid
mhs1.ambilSKS(0); // Tidak Valid
mhs1.ambilSKS(-5); // Tidak Valid
mhs1.ambilSKS("delapan"); // Tidak Valid

// Panggil lihatSKS()
mhs1.lihatSKS(); // Output: Total SKS Andi: 7


/*
// (Opsional) Coba akses private field #sks dari luar class
// Jika kode ini dijalankan di Node.js modern, akan menghasilkan SyntaxError: Private field '#sks' must be declared in an enclosing class
// atau Undefined jika diakses dari luar lingkup class.
console.log("\n--- Akses Private Field (Harusnya Gagal/Error) ---");
try {
    console.log(mhs1.#sks); // Baris ini akan menyebabkan error saat kompilasi/runtime
} catch (e) {
    console.log(`Gagal mengakses private field: ${e.message}`);
}
*/