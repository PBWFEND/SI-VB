/**
 * akun_bank.js
 * Prototipe object JavaScript untuk mengelola akun bank
 * dengan fungsi setor dan tarik tunai.
 */

// Fungsi bantu untuk memformat angka menjadi mata uang Rupiah (IDR)
const formatUang = (nilai) => {
    return nilai.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    });
};

// 1. Buat object 'akun' dengan properti yang diminta
const akun = {
    nomorAkun: 'ACC001',
    namaPemilik: 'Rian Rianto',
    saldo: 10500000, // Saldo awal Rp 10.500.000

    // 2. Tambahkan method setor
    setor: function(jumlah) {
        if (jumlah <= 0) {
            console.log("❌ Setoran harus lebih dari Rp 0.");
            return;
        }
        this.saldo += jumlah;
        console.log(`✅ Setoran sebesar ${formatUang(jumlah)} berhasil.`);
        console.log(`   Saldo baru: ${formatUang(this.saldo)}.`);
    },

    // 3. Tambahkan method tarik
    tarik: function(jumlah) {
        if (jumlah <= 0) {
            console.log("❌ Penarikan harus lebih dari Rp 0.");
            return;
        }

        // Validasi: Cek saldo mencukupi
        if (jumlah > this.saldo) {
            console.log(`⛔ Saldo tidak mencukupi untuk penarikan sebesar ${formatUang(jumlah)}.`);
            console.log(`   Saldo saat ini: ${formatUang(this.saldo)}.`);
        } else {
            this.saldo -= jumlah;
            console.log(`✅ Penarikan sebesar ${formatUang(jumlah)} berhasil.`);
            console.log(`   Saldo sisa: ${formatUang(this.saldo)}.`);
        }
    },

    // Method bantu untuk menampilkan status
    tampilkanStatus: function() {
        console.log("-----------------------------------------");
        console.log(`AKUN: ${this.nomorAkun} - ${this.namaPemilik}`);
        console.log(`SALDO SAAT INI: ${formatUang(this.saldo)}`);
        console.log("-----------------------------------------");
    }
};

// ----------------------------------------------------
// DEMONSTRASI PENGGUNAAN OBJECT
// ----------------------------------------------------

console.log(">>> DEMONSTRASI OPERASI AKUN BANK <<<");

// Tampilkan saldo awal
console.log("\n[Kondisi Awal]");
akun.tampilkanStatus();

// Panggil method setor()
console.log("\n[Operasi 1: Setor Tunai Rp 150.000]");
akun.setor(150000);

// Panggil method tarik() dengan nominal yang valid
console.log("\n[Operasi 2: Tarik Tunai Rp 200.000]");
akun.tarik(200000);

// Panggil method tarik() dengan nominal yang melebihi saldo (Saldo saat ini: 450.000)
console.log("\n[Operasi 3: Tarik Tunai Rp 500.000 (Gagal)]");
akun.tarik(500000);

// Panggil method tarik() lagi dengan nominal valid (Verifikasi Saldo Sisa)
console.log("\n[Operasi 4: Tarik Tunai Rp 50.000]");
akun.tarik(50000);

// Tampilkan saldo akhir
console.log("\n[Kondisi Akhir]");
akun.tampilkanStatus();