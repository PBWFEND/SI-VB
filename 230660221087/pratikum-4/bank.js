// akun_bank.js
// Prototipe Object Akun Bank Sederhana

// Fungsi bantuan untuk memformat angka ke Rupiah
const formatRupiah = (angka) => {
    // PERBAIKAN 1: Menggunakan backtick
    return `Rp ${Math.round(angka).toLocaleString('id-ID')}`;
};

// =======================================================
// DEFINISI OBJECT AKUN BANK
// =======================================================
const akun = {
    nomorAkun: 'ACC001',
    namaPemilik: 'Budi Santoso',
    saldo: 500000, // Saldo awal Rp 500.000

    /**
     * Method untuk menambah saldo (Setor Tunai).
     * @param {number} jumlah - Nominal yang akan disetorkan.
     */
    setor(jumlah) {
        if (jumlah <= 0) {
            console.log("❌ Setoran dibatalkan: Jumlah harus lebih dari nol.");
            return;
        }
        
        this.saldo += jumlah;
        // PERBAIKAN 2: Menggunakan backtick
        console.log(`✅ Setoran sebesar ${formatRupiah(jumlah)} berhasil. Saldo baru: ${formatRupiah(this.saldo)}.`);
    },

    /**
     * Method untuk mengurangi saldo (Tarik Tunai).
     * Melakukan validasi apakah saldo mencukupi.
     * @param {number} jumlah - Nominal yang akan ditarik.
     */
    tarik(jumlah) {
        if (jumlah <= 0) {
            console.log("❌ Penarikan dibatalkan: Jumlah harus lebih dari nol.");
            return;
        }

        // Validasi: Cek apakah saldo mencukupi
        if (jumlah > this.saldo) {
            console.log("🛑 Saldo tidak mencukupi untuk penarikan.");
            // PERBAIKAN 3: Memastikan backtick digunakan di seluruh string
            console.log(`   Saldo saat ini: ${formatRupiah(this.saldo)}`);
            return; // Hentikan proses jika saldo kurang
        }

        // Kurangi saldo
        this.saldo -= jumlah;
        // PERBAIKAN 4: Menggunakan backtick
        console.log(`✅ Penarikan sebesar ${formatRupiah(jumlah)} berhasil. Saldo sisa: ${formatRupiah(this.saldo)}.`);
    }
};

// =======================================================
// DEMONSTRASI PENGGUNAAN OBJECT AKUN
// =======================================================

console.log("=================================================");
// PERBAIKAN 5: Menggunakan backtick
console.log(`Simulasi Akun Bank: ${akun.namaPemilik} (${akun.nomorAkun})`);
console.log("=================================================");

// 1. Tampilkan saldo awal.
// PERBAIKAN 6: Menggunakan backtick
console.log(`[STATUS AWAL] Saldo awal: ${formatRupiah(akun.saldo)}`);
console.log("-------------------------------------------------");

// 2. Panggil method setor() dengan nominal tertentu (Rp 50.000).
console.log("--- Melakukan Setor Tunai Rp 50.000 ---");
akun.setor(50000);

// 3. Panggil method tarik() dengan nominal yang valid (Rp 100.000).
console.log("\n--- Melakukan Tarik Tunai Rp 100.000 ---");
akun.tarik(100000);

// 4. Panggil method tarik() dengan nominal yang melebihi saldo (Rp 600.000).
console.log("\n--- Melakukan Tarik Tunai Rp 600.000 (Gagal) ---");
akun.tarik(600000);

// 5. Tampilkan saldo akhir.
console.log("\n-------------------------------------------------");
// PERBAIKAN 7: Menggunakan backtick
console.log(`[STATUS AKHIR] Saldo akhir: ${formatRupiah(akun.saldo)}`);
console.log("=================================================");