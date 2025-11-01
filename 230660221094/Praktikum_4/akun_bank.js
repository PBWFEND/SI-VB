// akun_bank.js

// Membuat objek akun
const akun = {
  nomorAkun: 'ACC001',
  namaPemilik: 'Kikania Zahra',
  saldo: 500000,

  // Method untuk setor uang
  setor: function (jumlah) {
    this.saldo += jumlah;
    console.log(
      `Setoran sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil. Saldo baru: Rp ${this.saldo.toLocaleString('id-ID')}.`
    );
  },

  // Method untuk tarik uang
  tarik: function (jumlah) {
    if (jumlah > this.saldo) {
      console.log('Saldo tidak mencukupi untuk penarikan.');
    } else {
      this.saldo -= jumlah;
      console.log(
        `Penarikan sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil. Saldo sisa: Rp ${this.saldo.toLocaleString('id-ID')}.`
      );
    }
  },
};

// --- Demonstrasi penggunaan object ---
console.log('=== Informasi Akun Bank ===');
console.log(`Nomor Akun   : ${akun.nomorAkun}`);
console.log(`Nama Pemilik : ${akun.namaPemilik}`);
console.log(`Saldo Awal   : Rp ${akun.saldo.toLocaleString('id-ID')}\n`);

// Melakukan transaksi
akun.setor(50000);      // Setor uang
akun.tarik(100000);     // Tarik uang valid
akun.tarik(600000);     // Tarik uang melebihi saldo

// Menampilkan saldo akhir
console.log(`\nSaldo Akhir  : Rp ${akun.saldo.toLocaleString('id-ID')}`);
