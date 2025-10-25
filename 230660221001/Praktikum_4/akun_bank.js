// akun_bank.js

// --- Membuat Object Literal untuk Akun Bank ---
const akun = {
  nomorAkun: "ACC001",
  namaPemilik: "Ghatan Zalfaa Kautsar",
  saldo: 500000, // saldo awal

  // Method untuk setor
  setor(jumlah) {
    this.saldo += jumlah;
    console.log(`Setoran sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil. Saldo baru: Rp ${this.saldo.toLocaleString('id-ID')}.`);
  },

  // Method untuk tarik
  tarik(jumlah) {
    if (jumlah > this.saldo) {
      console.log("Saldo tidak mencukupi untuk penarikan.");
    } else {
      this.saldo -= jumlah;
      console.log(`Penarikan sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil. Saldo sisa: Rp ${this.saldo.toLocaleString('id-ID')}.`);
    }
  }
};

// --- Demonstrasi Penggunaan Object ---
console.log(`Saldo awal: Rp ${akun.saldo.toLocaleString('id-ID')}`);

// Setor sejumlah uang
akun.setor(100000);

// Tarik sejumlah uang yang valid
akun.tarik(200000);

// Tarik sejumlah uang melebihi saldo
akun.tarik(500000);

// Tampilkan saldo akhir
console.log(`Saldo akhir: Rp ${akun.saldo.toLocaleString('id-ID')}`);
