// BAGIAN 1: DEFINISI OBJEK MAHASISWA
const mahasiswa = {
    // Properti (Data)
    nama: "Budi Santoso",
    nim: "230660221087",
    jurusan: "Sistem Informasi",
    matkul: ["Pemrograman Dasar", "Basis Data", "Struktur Data"],

    // Method untuk menambah mata kuliah
    tambahMatkul: function(namaMatkul) {
        this.matkul.push(namaMatkul);
        console.log(`✅ ${namaMatkul} berhasil ditambahkan.`);
    },

    // Method untuk menampilkan semua informasi
    tampilkanInfo: function() {
        console.log("=========================================");
        console.log("         INFORMASI MAHASISWA             ");
        console.log("=========================================");
        console.log(`Nama      : ${this.nama}`);
        console.log(`NIM       : ${this.nim}`);
        console.log(`Jurusan   : ${this.jurusan}`);
        console.log("Daftar Matkul:");
        this.matkul.forEach((mk, index) => {
            console.log(`  ${index + 1}. ${mk}`);
        });
        console.log("=========================================");
    }
};

// -------------------------------------------------------------

// BAGIAN 2: LANGKAH DEMONSTRASI (Eksekusi Kode)
// A. Tampilkan nama dan nim
console.log("--- A. Tampilkan Nama dan NIM ---");
console.log(`Nama Mahasiswa: ${mahasiswa.nama}`);
console.log(`NIM Mahasiswa : ${mahasiswa.nim}`);

// B. Tambahkan dua mata kuliah baru menggunakan method tambahMatkul()
console.log("\n--- B. Tambahkan Mata Kuliah Baru ---");
mahasiswa.tambahMatkul("Pengembangan Aplikasi Web");
mahasiswa.tambahMatkul("Metode Penelitian");

// C. Tampilkan seluruh informasi dengan method tampilkanInfo()
console.log("\n--- C. Tampilkan Seluruh Informasi ---");
mahasiswa.tampilkanInfo();