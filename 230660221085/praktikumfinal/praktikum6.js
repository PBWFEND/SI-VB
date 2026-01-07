class Orang {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }

    sapa() {
        console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
    }
}

class Mahasiswa extends Orang {
    #sks = 0; // Private field

    constructor(nama, umur, nim) {
        super(nama, umur);
        this.nim = nim;
    }

    ambilSKS(jumlah) {
        this.#sks += jumlah;
        console.log(`${this.nama} mengambil ${jumlah} SKS. Total SKS sekarang: ${this.#sks}`);
    }
}

const mhs1 = new Mahasiswa("Andi", 20, "230660221085");
mhs1.sapa();
mhs1.ambilSKS(20);