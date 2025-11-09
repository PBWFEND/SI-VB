// akun_bank.js

// Membuat object bernama 'akun'
const akun = {
  // --- PROPERTIES ---
  nomorAkun: "ACC001",
  namaPemilik: "Intan Kartika", // ganti dengan namamu sendiri
  saldo: 500000, // saldo awal

  // --- METHODS ---

  // Method untuk setor uang
  setor: function(jumlah) {
    this.saldo += jumlah;
    console.log(`Setoran sebesar Rp ${jumlah.toLocaleString()} berhasil.`);
    console.log(`Saldo baru: Rp ${this.saldo.toLocaleString()}.`);
  },

  // Method untuk tarik uang
  tarik: function(jumlah) {
    if (jumlah > this.saldo) {
      console.log("Saldo tidak mencukupi untuk penarikan.");
    } else {
      this.saldo -= jumlah;
      console.log(`Penarikan sebesar Rp ${jumlah.toLocaleString()} berhasil.`);
      console.log(`Saldo sisa: Rp ${this.saldo.toLocaleString()}.`);
    }
  }
};

// --- DEMONSTRASI PENGGUNAAN OBJEK ---

console.log("--- Informasi Akun ---");
console.log(`Nomor Akun: ${akun.nomorAkun}`);
console.log(`Nama Pemilik: ${akun.namaPemilik}`);
console.log(`Saldo Awal: Rp ${akun.saldo.toLocaleString()}`);
console.log("----------------------\n");

// Melakukan setoran
console.log(">> Melakukan setoran Rp 50.000...");
akun.setor(50000);
console.log("\n");

// Melakukan penarikan dengan saldo cukup
console.log(">> Melakukan penarikan Rp 100.000...");
akun.tarik(100000);
console.log("\n");

// Melakukan penarikan dengan saldo tidak cukup
console.log(">> Mencoba menarik Rp 1.000.000...");
akun.tarik(1000000);
console.log("\n");

// Menampilkan saldo akhir
console.log(`Saldo akhir: Rp ${akun.saldo.toLocaleString()}`);