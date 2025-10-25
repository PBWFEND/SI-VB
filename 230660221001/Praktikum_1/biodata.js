// biodata.js

// 1. Deklarasikan variabel menggunakan const dan let
const namaLengkap = "Ghatan Zalfaa Kautsar";
const tempatLahir = "Sumedang";
let tanggalLahir = "19 Januari 2004";
let umur = 21;
let statusMahasiswa = true;

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
Asal Kota (Slice): ${asalKota}
Status Aktif    : ${statusMahasiswa}
=========================================
`;

// 4. Tampilkan output ke konsol
console.log(biodata);
