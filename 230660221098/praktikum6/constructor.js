class Mobil {
  constructor(warnaMobil) {
    this.warna = warnaMobil;
  }

  klakson() {
    console.log(`Mobil ${this.warna} berbunyi: Biip!`);
  }
}

const mobilMerah = new Mobil('Merah');
mobilMerah.klakson();
