// mobil.js

// --- Membuat Object Literal untuk Mobil ---
const mobil = {
  brand: "Toyota",
  model: "Avanza",
  tahun: 2022,
  warna: "Putih",
  jarakTempuh: 5000, // dalam kilometer
  mesinMenyala: false,

  // Method untuk menyalakan mesin
  nyalakanMesin: function() {
    this.mesinMenyala = true;
    console.log("Mesin telah dinyalakan!");
  },

  // Method untuk mematikan mesin (ES6 method syntax)
  matikanMesin() {
    this.mesinMenyala = false;
    console.log("Mesin telah dimatikan.");
  },

  // Method untuk berkendara
  berkendara(jarak) {
    if (this.mesinMenyala) {
      this.jarakTempuh += jarak;
      console.log(`Mobil berjalan sejauh ${jarak} km.`);
      console.log(`Jarak tempuh sekarang: ${this.jarakTempuh} km.`);
    } else {
      console.log("Error: Mesin belum menyala! Silakan nyalakan terlebih dahulu.");
    }
  }
};

// --- Interaksi dengan Object Mobil ---

// Menampilkan properti awal
console.log("--- Informasi Awal Mobil ---");
console.log(`Brand: ${mobil.brand}`);
console.log(`Model: ${mobil.model}`);
console.log(`Jarak Tempuh: ${mobil.jarakTempuh} km`);
console.log("-----------------------------\n");

// Mencoba berkendara saat mesin mati
console.log(">> Mencoba berkendara...");
mobil.berkendara(100);
console.log("\n");

// Menyalakan mesin dan berkendara lagi
console.log(">> Menyalakan mesin...");
mobil.nyalakanMesin();
console.log(">> Mencoba berkendara lagi...");
mobil.berkendara(50);
console.log("\n");

// Mematikan mesin
console.log(">> Mematikan mesin...");
mobil.matikanMesin();
console.log(`Status mesin menyala: ${mobil.mesinMenyala}`);
