const mobil = {
  brand: 'Toyota',
  model: 'Avanza',
  tahun: 2022,
  warna: 'Putih',
  jarakTempuh: 5000,
  mesinMenyala: false,

  nyalakanMesin() {
    this.mesinMenyala = true;
    console.log('Mesin telah dinyalakan!');
  },

  matikanMesin() {
    this.mesinMenyala = false;
    console.log('Mesin telah dimatikan.');
  },

  berkendara(jarak) {
    if (this.mesinMenyala) {
      this.jarakTempuh += jarak;
      console.log(`Mobil berjalan sejauh ${jarak} km.`);
      console.log(`Jarak tempuh sekarang: ${this.jarakTempuh} km.`);
    } else {
      console.log('Error: Mesin belum menyala! Silakan nyalakan terlebih dahulu.');
    }
  },
};

console.log('--- Menjalankan Interaksi ---');
mobil.nyalakanMesin();
mobil.berkendara(50);
console.log('------------------------------\n');

const { brand, jarakTempuh, warna } = mobil;

console.log('--- Demo Destructuring ---');
console.log(`Brand mobil ini adalah: ${brand}`);
console.log(`Warna: ${warna}, Jarak Tempuh: ${jarakTempuh} km`);
console.log('------------------------------\n');

const mobilDijual = {
  ...mobil,
  harga: 150000000,
  warna: 'Silver',
};

console.log('--- Demo Spread Operator ---');
console.log('Data Mobil Asli (Putih):');
console.log(mobil);
console.log('\nData Mobil Dijual (Silver):');
console.log(mobilDijual);
console.log('------------------------------');
