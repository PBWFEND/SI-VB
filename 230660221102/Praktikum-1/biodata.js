// biodata.js

// 1. Deklarasikan variabel menggunakan const dan let
const namaLengkap = "Jajang komara"; // Ganti dengan nama lengkapmu
const tempatLahir = "Sumedang";
let tanggalLahir = "16 Juni 2004"; // Format bisa disesuaikan
let umur = 21; // Ganti dengan umurmu
let statusMahasiswa = true; // Gunakan boolean (true jika aktif, false jika tidak)
const jurusan = "Sistem Informasi";
const universitas = "Universitas Sebelas April";
let jalan = "Ds Bakanjati 03/04 Tanjungkerta";
let kota = "Sumedang";

// 2. Gunakan string methods untuk memanipulasi data
const namaBesar = namaLengkap.toUpperCase();
const asalKota = tempatLahir.slice(0, 10); // Mengambil 5 karakter pertama
const univKecil = universitas.toLowerCase();
const alamat = jalan + "," + kota;

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
Jurusan         : ${jurusan}
Universitas     : ${univKecil}
Alamat          : ${alamat}
=========================================
`;

// 4. Tampilkan output ke konsol
console.log(biodata);
