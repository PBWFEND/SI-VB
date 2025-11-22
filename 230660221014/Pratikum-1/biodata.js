// biodata.js

// 1. Deklarasikan variabel menggunakan const dan let
const namaLengkap = "Yudi Aditiya Rahman"; // hanya satu nama
const tempatLahir = "Sumedang";
let tanggalLahir = "15 April 2005";
let umur = 20;

let statusMahasiswa = true; // true = aktif, false = tidak aktif

// Tambahan variabel baru (poin 1)
const jurusan = "Sistem Informasi";
const universitas = "Universitas Sebelas April";

// 2. Eksplorasi String Method
const namaUpper = namaLengkap.toUpperCase();           // Semua huruf besar
const namaLower = namaLengkap.toLowerCase();           // Semua huruf kecil
const namaGanti = namaLengkap.replace("Yudi", "Y."); // Ganti sebagian teks
const namaTrimmed = ("   " + namaLengkap + "   ").trim(); // Hilangkan spasi

const jalan = "Jl. Cipadung, Tanjungkerta";
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