// biodata.js

// 1. Deklarasikan variabel menggunakan const dan let
const namaLengkap = "Nabila Apriliani"; // hanya satu nama
const tempatLahir = "Sumedang";
let tanggalLahir = "17 April 2004";
let umur = 21;

let statusMahasiswa = true; // true = aktif, false = tidak aktif

// Tambahan variabel baru (poin 1)
const jurusan = "Sistem Informasi";
const universitas = "Universitas Sebelas April";

// 2. Eksplorasi String Method
const namaUpper = namaLengkap.toUpperCase();           // Semua huruf besar
const namaLower = namaLengkap.toLowerCase();           // Semua huruf kecil
const namaGanti = namaLengkap.replace("Nabila", "N."); // Ganti sebagian teks
const namaTrimmed = ("   " + namaLengkap + "   ").trim(); // Hilangkan spasi

const jalan = "Jl. Raya Cimalaka No. 45";
const kota  = "Sumedang";
const alamatPlus = jalan + ", " + kota; // Gabungkan alamat

// Siapkan output menggunakan Template Literals

const biodata = `
=========================================
           BIODATA MAHASISWA
=========================================
Nama Lengkap       : ${namaLengkap}
Nama Uppercase     : ${namaUpper}
Nama Lowercase     : ${namaLower}
Nama Replace       : ${namaGanti}
Nama Trimmed       : '${namaTrimmed}'

Tempat Lahir       : ${tempatLahir}
Tanggal Lahir      : ${tanggalLahir}
Umur               : ${umur} tahun

Jurusan            : ${jurusan}
Universitas        : ${universitas}

Alamat (+)         : ${alamatPlus}

Status Mahasiswa   : ${statusMahasiswa ? "Aktif" : "Tidak Aktif"}
=========================================
`;

// 6️⃣ Tampilkan output ke konsol
console.log(biodata);