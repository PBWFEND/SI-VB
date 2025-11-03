const mobil = {
    brand: "Toyota",
    model: "Avanza",
    tahun: 2022,
    warna: "Putih",
    jarakTempuh: 5000,
    mesinMenyala: false,

    nyalakanMesin: function() {
        this.mesinMenyala = true;
        console.log("Mesin telah dinyalakan!");
    },

    matikanMesin() {
        this.mesinMenyala = false;
        console.log("Mesin telah dimatikan.");
    },

    berkendara(jarak) {
        if(this.mesinMenyala) {
            this.jarakTempuh += jarak;
            console.log(`Mobil berjalan sejauh ${jarak} km.`);
            console.log(`Jarak tempuh sekarang: ${this.jarakTempuh} km.`);
        } else {
            console.log("Error: Mesin belum menyala! Silahkan nyalakan terlebih dahulu.");
        }
    }
};

console.log("--- Informasi Awal Mobil ---");
console.log(`Brand: ${mobil.brand}`);
console.log(`Model: ${mobil.model}`);
console.log(`Jarak Tempuh: ${mobil.jarakTempuh} km`);
console.log("-----------------------------\n");

console.log(">> Mencoba berkendara...");
mobil.berkendara(100);
console.log("\n");

console.log(">> Menyalakan mesin...");
mobil.nyalakanMesin();
console.log(">> Mencoba berkendara lagi...");
mobil.berkendara(50);
console.log("\n");

console.log(">> Mematikan mesin...");
mobil.matikanMesin();
console.log(`Status mesin menyala: ${mobil.mesinMenyala}`);
