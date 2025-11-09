// mobil_modern.js

// 1. Membuat Object Literal untuk mobil
const mobil = {
  // --- PROPERTIES ---
  brand: "Toyota",
  model: "Avanza",
  tahun: 2022,
  warna: "Putih",
  jarakTempuh: 5000, // dalam kilometer
  mesinMenyala: false,

  // --- METHODS ---
        //Refactor 
  // Method untuk menyalakan mesin
  nyalakanMesin() {
    this.mesinMenyala = true;
    console.log("Mesin telah dinyalakan!");
  },

  // Method untuk mematikan mesin
  matikanMesin() { // Menggunakan sintaks modern
    this.mesinMenyala = false;
    console.log("Mesin telah dimatikan.");
  },

  // Method untuk berkendara, yang akan menambah jarak tempuh
  berkendara(jarak) {
    if (this.mesinMenyala) {
      this.jarakTempuh += jarak; // Menambah jarak tempuh
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
mobil.berkendara(100); // Seharusnya menampilkan error
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
