// biodata.js

// 1. Deklarasikan variabel menggunakan const dan let
const namaLengkap = "Muhammad Andre Nugraha"; 
const tempatLahir = "Tasikmalaya";
let tanggalLahir = "01 Juni 2005"; 
let umur = 20; 
let statusMahasiswa = true; 

// Tambahan variabel baru
const jurusan = "Sistem Informasi";
const universitas = "Universitas Sebelas April";

// 2. Gunakan string methods untuk memanipulasi data
const namaBesar = namaLengkap.toUpperCase();             // Ubah ke huruf besar
const namaKecil = namaLengkap.toLowerCase();             // Ubah ke huruf kecil
const asalKota = tempatLahir.slice(0, 11);                // Ambil 11 huruf pertama
const namaTanpaSpasi = namaLengkap.replace(" ", "");     // Hapus spasi pertama
const tempatTrim = tempatLahir.trim();                   // Hilangkan spasi di awal/akhir jika ada

// 3. Gabungkan string menggunakan + dan Template Literals
const jalan = "Jl. Raya Cipacing No. 27";
const kota = "Tasikmalaya";
const alamatGabung = jalan + ", " + kota; // cara lama (operator +)
const alamatTemplate = `${jalan}, ${kota}`; // cara modern (template literals)

// 4. Siapkan output menggunakan Template Literals
const biodata = `
=========================================
          BIODATA MAHASISWA
=========================================
Nama Lengkap       : ${namaBesar}
Nama Huruf Kecil   : ${namaKecil}
Tempat Lahir       : ${tempatTrim}
Tanggal Lahir      : ${tanggalLahir}
Umur               : ${umur} tahun
Asal Kota (Slice)  : ${asalKota}
Status Atif        : ${statusMahasiswa}
Jurusan            : ${jurusan}
Universitas        : ${universitas}
Alamat ( + )       : ${alamatGabung}
Alamat (Template)  : ${alamatTemplate}
=========================================
`;

// 5. Tampilkan output ke konsol
console.log(biodata);
