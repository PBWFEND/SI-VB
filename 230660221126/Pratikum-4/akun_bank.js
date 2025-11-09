// akun_bank.js
// Program Pengelolaan Akun Bank Sederhana

// --- OBJEK AKUN ---
const akun = {
  nomorAkun: 'ACC001',
  namaPemilik: 'Nabila Apriliani',
  saldo: 500000, // saldo awal

  // Metode setor
  setor: function(jumlah) {
    this.saldo += jumlah;
    console.log(`Setoran sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil. Saldo baru: Rp ${this.saldo.toLocaleString('id-ID')}.`);
  },

  // Metode tarik
  tarik: function(jumlah) {
    if (jumlah > this.saldo) {
      console.log("Saldo tidak mencukupi untuk penarikan.");
    } else {
      this.saldo -= jumlah;
      console.log(`Penarikan sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil. Saldo sisa: Rp ${this.saldo.toLocaleString('id-ID')}.`);
    }
  }
};

// --- SIMULASI PROGRAM ---
console.log("====================================");
console.log("      SISTEM AKUN BANK SEDERHANA");
console.log("====================================");
console.log(`Nomor Akun   : ${akun.nomorAkun}`);
console.log(`Nama Pemilik : ${akun.namaPemilik}`);
console.log(`Saldo Awal   : Rp ${akun.saldo.toLocaleString('id-ID')}`);
console.log("====================================");

// Setor uang
akun.setor(50000);  // contoh: setoran Rp 50.000

// Tarik uang (saldo cukup)
akun.tarik(100000); // contoh: penarikan Rp 100.000

// Tarik uang (saldo tidak cukup)
akun.tarik(1000000); // contoh: penarikan melebihi saldo

// Tampilkan saldo akhir
console.log("====================================");
console.log(`Saldo Akhir  : Rp ${akun.saldo.toLocaleString('id-ID')}`);
console.log("====================================");