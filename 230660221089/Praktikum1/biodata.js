// biodata.js

// 1. Deklarasikan variabel menggunakan const dan let
const namaLengkap = "Intan Nurdewi Sekarnasih"; // Ganti dengan nama lengkapmu
const tempatLahir = "Medan";
let tanggalLahir = "21 oktober 2004"; // Format bisa disesuaikan
let umur = 20; // Ganti dengan umurmu
let statusMahasiswa = true; // Gunakan boolean (true jika aktif, false jika tidak)

// Modifikasi Program Menambahkan Variiabel Baru
const programStudi = "Sistem Informasi"; // 💡 FIX: Changed 'programstudi' to 'programStudi' for consistency with output template and common practice.
const universitas = "Universitas Sebelas April";

// 2. Gunakan string methods untuk memanipulasi data
const namaBesar = namaLengkap.toUpperCase();
const namaRapih = namaLengkap.trim();
const asalKota = tempatLahir.slice(0, 8); // Mengambil karakter dari index 0 sampai sebelum index 8

const jurusanKecil = programStudi.toLowerCase();

const kotaGanti = tempatLahir.replace("Medan"); 

const jalan = "Jl. Budi Asih"; // Added capitalization for better presentation
const kota = "Sumedang";
const alamatPlus = jalan + ", " + kota; 
const alamatTemplate = `${jalan}, ${kota}`;

// 3. Siapkan output menggunakan Template Literals
const biodata = `
=========================================
          BIODATA MAHASISWA
=========================================
Nama Lengkap    : ${namaBesar}
Tempat Lahir    : ${tempatLahir}
Tanggal Lahir   : ${tanggalLahir}
Umur            : ${umur} tahun
Program Studi   : ${programStudi} 
Universitas     : ${universitas}
Asal Kota (Slice) : ${asalKota}
Status Aktif    : ${statusMahasiswa}
Alamat (+)      : ${alamatPlus}
Alamat (Template)   : ${alamatTemplate}
=========================================
`;

// 4. Tampilkan output ke konsol
console.log(biodata);