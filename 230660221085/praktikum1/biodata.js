// biodata.js

// 1. Deklarasikan variabel menggunakan const dan let
const namaLengkap = "Annisa Nur Sabariyah";
const tempatLahir = "Sumedang";
let tanggalLahir = "1 Februari 2004";
let umur = 20;4
let statusMahasiswa = true;

// Variabel baru
const jurusan = "Sistem Infromasi";
const universitas = "Universitas Sebelas April";

// 2. Gunakan string methods untuk memanipulasi data
const namaBesar = namaLengkap.toUpperCase();         // Huruf besar semua
const namaKecil = namaLengkap.toLowerCase();         // Huruf kecil semua
const asalKota = tempatLahir.slice(0, 5);            // Mengambil 5 karakter pertama
const jurusanRapi = jurusan.replace("Informatika", "Komputer"); // Contoh replace
const universitasTrim = "   " + universitas + "   "; // Tambahkan spasi di awal dan akhir
const universitasBersih = universitasTrim.trim();    // Hapus spasi berlebih

// 3. Gabungkan string (alamat) menggunakan operator + dan Template Literals
const jalan = "Jl. Konjengkang Sumedang";
const kota = "Sumedang";
const alamatGabung = jalan + ", " + kota;            // Menggabungkan dengan operator +
const alamatTemplate = `${jalan}, ${kota}`;          // Menggabungkan dengan template literal

// 4. Siapkan output menggunakan Template Literals
const biodata = `
=========================================
          BIODATA MAHASISWA
=========================================
Nama Lengkap      : ${namaBesar}
Nama Huruf Kecil  : ${namaKecil}
Tempat Lahir      : ${tempatLahir}
Tanggal Lahir     : ${tanggalLahir}
Umur              : ${umur} tahun
Asal Kota (Slice) : ${asalKota}
Jurusan Asli      : ${jurusan}
Jurusan Replace   : ${jurusanRapi}
Universitas (Asli): "${universitasTrim}" (dengan spasi)
Universitas Trim  : "${universitasBersih}" (tanpa spasi)
Alamat (+)        : ${alamatGabung}
Alamat (Template) : ${alamatTemplate}
Status Aktif      : ${statusMahasiswa}
=========================================
`;

// 5. Tampilkan output ke konsol
console.log(biodata);
