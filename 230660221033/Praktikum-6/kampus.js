class Orang {
    /**
     * @param {string} nama
     * @param {number} umur
     */
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }

    sapa() {
        console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
    }
}

class Mahasiswa extends Orang {
    #sks = 0;

    /**
     * @param {string} nama
     * @param {number} umur
     */
    constructor(nama, umur) {
        super(nama, umur);
    }

    /**
     * @param {number} jumlah
     */
    ambilSKS(jumlah) {
        if (typeof jumlah !== 'number' || jumlah <= 0) {
            console.error(`Jumlah SKS harus angka positif!`);
            return;
        }

        this.#sks += jumlah;
        console.log(`${this.nama} berhasil mengambil ${jumlah} SKS. Total SKS: ${this.#sks}`);
    }

    lihatSKS() {
        console.log(`Total SKS ${this.nama}: ${this.#sks}`);
    }
}

console.log("========================================");
console.log("           DEMO: ORANG & MAHASISWA");
console.log("========================================");

const budi = new Orang('Budi', 25);
budi.sapa();

console.log(""); 
const andi = new Mahasiswa('Andi', 20);

andi.sapa();

andi.ambilSKS(3);
andi.ambilSKS(4);

andi.lihatSKS();

andi.ambilSKS(-5); 
andi.ambilSKS(0); 

console.log("----------------------------------------");