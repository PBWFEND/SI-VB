// akun_bank.js

// 1. Membuat object akun
const akun = {
  nomorAkun: 'MRS021',
  namaPemilik: 'Marsya Anastasya',
  saldo: 1000000, // saldo awal

  // 2. Method untuk setor uang
  setor: function (jumlah) {
    this.saldo += jumlah;
    console.log(
      `Setoran sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil. Saldo baru: Rp ${this.saldo.toLocaleString('id-ID')}.`
    );
  },

  // 3. Method untuk tarik uang
  tarik: function (jumlah) {
    if (jumlah > this.saldo) {
      console.log('❌ Saldo tidak mencukupi untuk penarikan.');
    } else {
      this.saldo -= jumlah;
      console.log(
        `✅ Penarikan sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil. Saldo sisa: Rp ${this.saldo.toLocaleString('id-ID')}.`
      );
    }
  },
};

// 4. Demonstrasi penggunaan object akun
console.log('=== AKUN BANK ===');
console.log(`Nomor Akun   : ${akun.nomorAkun}`);
console.log(`Nama Pemilik : ${akun.namaPemilik}`);
console.log(`Saldo Awal   : Rp ${akun.saldo.toLocaleString('id-ID')}`);

console.log('\n--- Transaksi ---');
akun.setor(1000000);      // setor uang
akun.tarik(100000);     // tarik uang valid
akun.tarik(2000000);    // tarik uang melebihi saldo

console.log('\n--- Saldo Akhir ---');
console.log(`Saldo akhir: Rp ${akun.saldo.toLocaleString('id-ID')}`);
