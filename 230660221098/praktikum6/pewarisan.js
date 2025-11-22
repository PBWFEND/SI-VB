class Kendaraan {
  constructor(roda) {
    this.roda = roda;
  }

  berjalan() {
    console.log(`Kendaraan ini berjalan dengan ${this.roda} roda.`);
  }
}

class Motor extends Kendaraan {
  constructor(tipe) {
    super(2);
    this.tipe = tipe;
  }
}

const motorBebek = new Motor('Bebek');
motorBebek.berjalan();
