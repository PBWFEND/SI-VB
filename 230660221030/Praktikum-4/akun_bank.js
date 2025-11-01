/*
 * File: akun_bank.js
 * Studi Kasus 4: Pengelolaan Akun Bank Sederhana
 */

// 1. Membuat object 'akun'
const akun = {
    nomorAkun: 'SNI281',
    namaPemilik: 'Syifa Nur Insani',
    saldo: 500000,

    /**
     * Method untuk menambahkan sejumlah uang ke saldo.
     * @param {number} jumlah - Jumlah uang yang disetor.
     */
    setor: function(jumlah) {
        if (jumlah <= 0) {
            console.log("Jumlah setoran harus positif.");
            return;
        }
        this.saldo += jumlah;
        console.log(
            `Setoran sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil. Saldo baru: Rp ${this.saldo.toLocaleString('id-ID')}.`
        );
    },

    /**
     * Method untuk menarik sejumlah uang dari saldo.
     * @param {number} jumlah - Jumlah uang yang ditarik.
     */
    tarik: function(jumlah) {
        if (jumlah <= 0) {
            console.log("Jumlah penarikan harus positif.");
            return;
        }

        // Validasi saldo
        if (jumlah > this.saldo) {
            console.log("Saldo tidak mencukupi untuk penarikan.");
        } else {
            this.saldo -= jumlah;
            console.log(
                `Penarikan sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil. Saldo sisa: Rp ${this.saldo.toLocaleString('id-ID')}.`
            );
        }
    }
};

// --- Demonstrasi Penggunaan Object Akun Bank ---

console.log(`Selamat datang, ${akun.namaPemilik} (No. Akun: ${akun.nomorAkun})`);

// 1. Tampilkan saldo awal
console.log(`Saldo awal Anda: Rp ${akun.saldo.toLocaleString('id-ID')}`);
console.log("---------------------------------------------");

// 2. Panggil method setor()
console.log("Melakukan setoran...");
akun.setor(50000);
console.log("---------------------------------------------");

// 3. Panggil method tarik() (nominal valid)
// Saldo sekarang: 500.000 + 50.000 = 550.000
console.log("Melakukan penarikan (valid)...");
akun.tarik(100000);
console.log("---------------------------------------------");

// 4. Panggil method tarik() (nominal melebihi saldo)
// Saldo sekarang: 550.000 - 100.000 = 450.000
console.log("Mencoba penarikan (melebihi saldo)...");
akun.tarik(500000); // Saldo hanya 450.000
console.log("---------------------------------------------");

// 5. Tampilkan saldo akhir
console.log(`Saldo akhir Anda: Rp ${akun.saldo.toLocaleString('id-ID')}`);