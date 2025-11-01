// akun_bank.js

// 1. Membuat Object Literal untuk akun_bank
const akun = {
  // --- PROPERTIES ---
  nomorAkun: "ACC001",
  namaPemilik: "Deyna Angeliawati Zahara",
  saldo: 500000,

  // --- METHODS ---

  // Method untuk setor uang
  setor(jumlah) {
    this.saldo += jumlah; // tambah saldo
    console.log(`Setoran sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil.`);
    console.log(`Saldo baru: Rp ${this.saldo.toLocaleString('id-ID')}\n`);
  },

  // Method untuk tarik uang
  tarik(jumlah) {
    if (jumlah > this.saldo) { // kalau jumlah yang ditarik lebih besar dari saldo
      console.log("Saldo tidak mencukupi untuk penarikan.\n");
    } else {
      this.saldo -= jumlah; // kalau saldo cukup, saldo akan berkurang
      console.log(`Penarikan sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil.`);
      console.log(`Saldo sisa: Rp ${this.saldo.toLocaleString('id-ID')}\n`);
    }
  }
};

// --- DEMONSTRASI PENGGUNAAN ---

console.log("--- Informasi Akun ---");
console.log(`Nomor Akun : ${akun.nomorAkun}`);
console.log(`Nama Pemilik: ${akun.namaPemilik}`);
console.log(`Saldo Awal : Rp ${akun.saldo.toLocaleString('id-ID')}\n`);

// 1. Setor uang
console.log(">> Status Setor Tunai Anda...");
akun.setor(50000);
console.log("\n");

// 2. Tarik uang (valid)
console.log(">> Status Tarik Tunai Anda...");
akun.tarik(100000);
console.log("\n");

// 3. Tarik uang (melebihi saldo)
console.log(">> Status Tarik Tunai Anda...");
akun.tarik(600000);
console.log("\n");

// 4. Tampilkan saldo akhir
console.log(`Saldo Akhir : Rp ${akun.saldo.toLocaleString('id-ID')}`);