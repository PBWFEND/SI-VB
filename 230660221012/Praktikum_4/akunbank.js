// akun_bank.js

// 1. Membuat object akun
const akun = {
  nomorAkun: "ACC001",
  namaPemilik: "Julian",
  saldo: 500000,

  // 2a. Method setor
  setor: function (jumlah) {
    this.saldo += jumlah;
    console.log(`Setoran sebesar Rp ${jumlah.toLocaleString("id-ID")} berhasil. Saldo baru: Rp ${this.saldo.toLocaleString("id-ID")}.`);
  },

  // 2b. Method tarik
  tarik: function (jumlah) {
    if (jumlah > this.saldo) {
      console.log("Saldo tidak mencukupi untuk penarikan.");
    } else {
      this.saldo -= jumlah;
      console.log(`Penarikan sebesar Rp ${jumlah.toLocaleString("id-ID")} berhasil. Saldo sisa: Rp ${this.saldo.toLocaleString("id-ID")}.`);
    }
  },
};

// 3. Demonstrasi penggunaan object akun
console.log(`Saldo awal: Rp ${akun.saldo.toLocaleString("id-ID")}`);

akun.setor(50000); // Setor Rp 50.000
akun.tarik(100000); // Tarik Rp 100.000 (valid)
akun.tarik(1000000); // Tarik Rp 1.000.000 (tidak valid)

console.log(`Saldo akhir: Rp ${akun.saldo.toLocaleString("id-ID")}`);
