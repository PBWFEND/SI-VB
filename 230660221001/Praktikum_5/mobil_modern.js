// =======================================================
// Praktikum 5 - JavaScript Modern (ES6+)
// Nama  : Ghatan Zalfaa Kautsar
// NPM   : 230660221001
// Kelas : SI-VB
// File  : mobil_modern.js
// =======================================================

class Mobil {
  constructor(merk, warna, tahun) {
    this.merk = merk;
    this.warna = warna;
    this.tahun = tahun;
  }

  nyalakanMesin() {
    console.log(`Mobil ${this.merk} berwarna ${this.warna} telah dinyalakan!`);
  }

  infoMobil() {
    return `Merk: ${this.merk}, Warna: ${this.warna}, Tahun: ${this.tahun}`;
  }
}

class MobilSport extends Mobil {
  constructor(merk, warna, tahun, kecepatanMaksimum) {
    super(merk, warna, tahun);
    this.kecepatanMaksimum = kecepatanMaksimum;
  }

  balapan() {
    console.log(
      `Mobil sport ${this.merk} sedang balapan dengan kecepatan ${this.kecepatanMaksimum} km/jam!`
    );
  }
}

// Contoh penggunaan
const mobil1 = new Mobil("Toyota Avanza", "Putih", 2020);
const mobilSport1 = new MobilSport("Lamborghini Aventador", "Hitam", 2024, 350);

mobil1.nyalakanMesin();
console.log(mobil1.infoMobil());

mobilSport1.nyalakanMesin();
mobilSport1.balapan();
