// biodata.js

// 1. Deklarasikan variabel menggunakan const dan let
const namaLengkap = "Reina Anatasya Kusumah Putri"; // Ganti dengan nama lengkapmu
const tempatLahir = "Sumedang";
let tanggalLahir = "31 Mei 2004"; // Format bisa disesuaikan
let umur = 21; // Ganti dengan umurmu
let statusMahasiswa = true; // Gunakan boolean (true jika aktif, false jika tidak)

// 2. Gunakan string methods untuk memanipulasi data
const namaBesar = namaLengkap.toUpperCase();
const asalKota = tempatLahir.slice(0, 5); // Mengambil 5 karakter pertama

// 3. Siapkan output menggunakan Template Literals
const biodata = `
=========================================
          BIODATA MAHASISWA
=========================================
Nama Lengkap    : ${namaBesar}
Tempat Lahir    : ${tempatLahir}
Tanggal Lahir   : ${tanggalLahir}
Umur            : ${umur} tahun
Asal Kota (Slice) : ${asalKota}
Status Aktif    : ${statusMahasiswa}
=========================================
`;

// 4. Tampilkan output ke konsol
console.log(biodata);
