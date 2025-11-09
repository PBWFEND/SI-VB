const akun = {
    nomorAkun: 'FSK229',
    namaPemilik: 'Yelly Ambarwaty',
    saldo: 600000, 

    /**
     * @param {number} jumlah 
     */
    setor(jumlah) {
        if (typeof jumlah !== 'number' || jumlah <= 0) {
            console.error("Setoran gagal: Jumlah setoran harus berupa angka positif.");
            return;
        }

        this.saldo += jumlah;
        console.log(`Setoran sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil.`);
        console.log(`Saldo baru: Rp ${this.saldo.toLocaleString('id-ID')}.`);
    },

    /**
     * @param {number} jumlah 
     */
    tarik(jumlah) {
        if (typeof jumlah !== 'number' || jumlah <= 0) {
            console.error("Penarikan gagal: Jumlah penarikan harus berupa angka positif.");
            return;
        }

        if (jumlah > this.saldo) {
            console.error("Saldo tidak mencukupi untuk penarikan.");
        } else {
            this.saldo -= jumlah;
            console.log(`Penarikan sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil.`);
            console.log(`Saldo sisa: Rp ${this.saldo.toLocaleString('id-ID')}.`);
        }
    }
};

console.log("========================================");
console.log("       DEMONSTRASI AKUN BANK");
console.log("========================================");

console.log(`Informasi Akun: ${akun.nomorAkun} - ${akun.namaPemilik}`);
console.log(`💰 Saldo Awal: Rp ${akun.saldo.toLocaleString('id-ID')}`);
console.log("----------------------------------------");

console.log("--- Aksi: Setor Tunai Rp 100.000 ---");
akun.setor(100000);
console.log("----------------------------------------");

console.log("--- Aksi: Tarik Tunai Rp 200.000 (Valid) ---");
akun.tarik(200000);
console.log("----------------------------------------");

console.log("--- Aksi: Tarik Tunai Rp 900.000 (Tidak Valid) ---");
akun.tarik(900000);
console.log("----------------------------------------");

console.log(`✅ Saldo Akhir: Rp ${akun.saldo.toLocaleString('id-ID')}`);
console.log("========================================");