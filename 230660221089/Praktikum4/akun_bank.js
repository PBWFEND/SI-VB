// Fungsi pembantu untuk format mata uang Rupiah
const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(angka);
};

// 1. Membuat Object Literal 'akun'
const akun = {
    // --- PROPERTIES ---
    nomorAkun: 'ACC001',
    namaPemilik: 'Intan Nurdewi Sekarnasih',
    saldo: 500000, // Saldo awal Rp 500.000

    // --- METHODS ---

    /**
     * Menambahkan jumlah ke saldo akun.
     * @param {number} jumlah - Nominal yang disetor.
     */
    setor(jumlah) {
        if (jumlah > 0) {
            this.saldo += jumlah;
            console.log(`✅ Setoran sebesar ${formatRupiah(jumlah)} berhasil.`);
            console.log(`Saldo baru: ${formatRupiah(this.saldo)}.`);
        } else {
            console.log("❌ Setoran dibatalkan: Jumlah harus positif.");
        }
    },

    /**
     * Mengurangi saldo akun dengan validasi ketersediaan dana.
     * @param {number} jumlah - Nominal yang ditarik.
     */
    tarik(jumlah) {
        if (jumlah <= 0) {
            console.log("❌ Penarikan dibatalkan: Jumlah harus positif.");
            return;
        }

        // Validasi saldo
        if (jumlah > this.saldo) {
            console.log(`❌ Saldo tidak mencukupi untuk penarikan sebesar ${formatRupiah(jumlah)}.`);
            console.log(`Saldo saat ini: ${formatRupiah(this.saldo)}.`);
        } else {
            // Saldo mencukupi, lakukan penarikan
            this.saldo -= jumlah;
            console.log(`✅ Penarikan sebesar ${formatRupiah(jumlah)} berhasil.`);
            console.log(`Saldo sisa: ${formatRupiah(this.saldo)}.`);
        }
    },

    /**
     * Menampilkan saldo saat ini.
     */
    tampilkanSaldo() {
        console.log(`Nomor Akun: ${this.nomorAkun} | Pemilik: ${this.namaPemilik}`);
        console.log(`💰 Saldo Saat Ini: ${formatRupiah(this.saldo)}`);
    }
};

// --- Demonstrasi Penggunaan Object ---

console.log("=========================================");
console.log("       SIMULASI TRANSAKSI AKUN BANK      ");
console.log("=========================================");

// Tampilkan saldo awal
console.log("\n--- 1. Saldo Awal ---");
akun.tampilkanSaldo();

// Panggil method setor()
console.log("\n--- 2. Transaksi Setor (Rp 250.000) ---");
akun.setor(250000);

// Panggil method tarik() dengan nominal yang valid
console.log("\n--- 3. Transaksi Tarik Valid (Rp 100.000) ---");
akun.tarik(100000);

// Panggil method tarik() dengan nominal yang melebihi saldo
console.log("\n--- 4. Transaksi Tarik Gagal (Rp 700.000) ---");
akun.tarik(700000);

// Tampilkan saldo akhir
console.log("\n--- 5. Saldo Akhir ---");
akun.tampilkanSaldo();
console.log("=========================================");