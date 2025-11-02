// mobil_modern.js

// 1. Gunakan 'const' untuk object karena referensinya tidak berubah
const mobil = {
  // --- PROPERTIES ---
  brand: "Toyota",
  model: "Avanza",
  tahun: 2022,
  warna: "Putih",
  jarakTempuh: 5000, 
  mesinMenyala: false,

  // --- METHODS (ES6 Method Shorthand) ---

  // REFACTOR 1: Ubah 'nyalakanMesin: function()' menjadi:
  nyalakanMesin() {
    this.mesinMenyala = true;
    console.log("Mesin telah dinyalakan!");
  },

  matikanMesin() {
    this.mesinMenyala = false;
    console.log("Mesin telah dimatikan.");
  },

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

// --- Interaksi dengan Object (Tetap sama) ---
console.log("--- Menjalankan Interaksi ---");
mobil.nyalakanMesin();
mobil.berkendara(50);
console.log("------------------------------\n");


// --- PRAKTIKUM TAMBAHAN: Demo ES6+ ---

// 2. Demo Destructuring
// Ambil properti 'brand' dan 'jarakTempuh' dari 'mobil'
const { brand, jarakTempuh, warna } = mobil;

console.log("--- Demo Destructuring ---");
console.log(`Brand mobil ini adalah: ${brand}`);
console.log(`Warna: ${warna}, Jarak Tempuh: ${jarakTempuh} km`);
console.log("------------------------------\n");


// 3. Demo Spread Operator (Membuat salinan mobil untuk dijual)
const mobilDijual = {
  ...mobil, // Salin semua properti dari 'mobil'
  harga: 150000000, // Tambah properti baru
  warna: "Silver" // Ubah properti 'warna'
};

console.log("--- Demo Spread Operator ---");
console.log("Data Mobil Asli (Putih):");
console.log(mobil);
console.log("\nData Mobil Dijual (Silver):");
console.log(mobilDijual);
console.log("------------------------------");