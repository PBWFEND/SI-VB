// biodata.js

// 1. Deklarasikan variabel menggunakan const dan let
const namaLengkap = "Deyna Angeliawati Zahara"; // Ganti dengan nama lengkapmu
const tempatLahir = "Sumedang";
let tanggalLahir = "30 Desember 2004"; // Format bisa disesuaikan
let umur = 20; // Ganti dengan umurmu
let statusMahasiswa = true; // Gunakan boolean (true jika aktif, false jika tidak)
const jurusan = "Sistem Informasi"
const universitas = " Sebelas April Sumedang " 

// 2. Gunakan string methods untuk memanipulasi data
const namaBesar = namaLengkap.toUpperCase(); // Mengembalikan karakter jadi huruf besar semua
const asalKota = tempatLahir.slice(0, 10); // Mengambil 5 karakter pertama

// Tugas, modifikasi (menambahkan jurusan dan universitas)
const jurusansaya = jurusan.toLowerCase(); // Mengembalikan karakter jadi huruf kecil semua
const universitassaya = universitas.trim(); // Menghapus spasi di awal dan di akhir

// Tugas, Menambahkan alamat 
let jalan = "Jl. Prabu Geusan Ulun";
let kota = "Sumedang";

let alamat = jalan + ", " + kota; // alamat dengan menggunakan operator +


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
Jurusan         : ${jurusansaya}
Universitas     : ${universitassaya}
Alamat          : ${jalan}, ${kota}
=========================================
`;

// 4. Tampilkan output ke konsol
console.log(biodata);
console.log("Alamat dengan operator + :", alamat);