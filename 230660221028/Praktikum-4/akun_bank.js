// akun_bank.js

// 1. Buat object akun
const akun = {
  nomorAkun: "ACC001",
  namaPemilik: "Fitri Cahyani",
  saldo: 500000,

  // 2. Method untuk setor
  setor: function (jumlah) {
    this.saldo += jumlah;
    console.log(`Setoran sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil. Saldo baru: Rp ${this.saldo.toLocaleString('id-ID')}.`);
  },

  // 3. Method untuk tarik
  tarik: function (jumlah) {
    if (jumlah > this.saldo) {
      console.log("Saldo tidak mencukupi untuk penarikan.");
    } else {
      this.saldo -= jumlah;
      console.log(`Penarikan sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil. Saldo sisa: Rp ${this.saldo.toLocaleString('id-ID')}.`);
    }
  }
};

// 4. Demonstrasi penggunaan object akun
console.log("=== Informasi Awal Akun ===");
console.log(`Nomor Akun  : ${akun.nomorAkun}`);
console.log(`Nama Pemilik: ${akun.namaPemilik}`);
console.log(`Saldo Awal  : Rp ${akun.saldo.toLocaleString('id-ID')}`);

console.log("\n=== Transaksi ===");
akun.setor(50000);      // Setor uang
akun.tarik(100000);     // Tarik nominal valid
akun.tarik(1000000);    // Tarik nominal lebih besar dari saldo

console.log("\n=== Saldo Akhir ===");
console.log(`Saldo Akhir : Rp ${akun.saldo.toLocaleString('id-ID')}`);
