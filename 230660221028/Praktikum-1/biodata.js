// biodata.js

// 1. Deklarasi variabel utama
const namaLengkap = "Fitri Cahyani"; 
const tempatLahir = "Sumedang";
let tanggalLahir = "05 November 2004"; 
let umur = 21; 
let statusMahasiswa = true;

// Tambahan variabel sesuai perintah tugas
const jurusan = "Sistem Informasi";
const universitas = "Universitas Sebelas April";

// Variabel alamat
const jalan = "Jl.Rancakalong, No.12, Blok.M";
const kota = "Sumedang";

// 2. String methods - toLowerCase()
const namaBesar = namaLengkap.toUpperCase(); // tetap gunakan ini
const asalKota = tempatLahir.slice(0, 20);
const jurusanKecil = jurusan.toLowerCase();
const universitasKecil = universitas.toLowerCase();

// 3. Gabungkan string alamat
const alamatGabungPlus = jalan + ", " + kota;
const alamatGabungTemplate = `${jalan}, ${kota}`;

// 4. Output dengan Template Literals
const biodata = `
=============================
💡         BIODATA MAHASISWA         
=============================
Nama Lengkap    : ${namaBesar}
Tempat Lahir    : ${tempatLahir}
Tanggal Lahir   : ${tanggalLahir}
Umur            : ${umur} tahun
Asal Kota       : ${asalKota}
Status Aktif    : ${statusMahasiswa}
Jurusan         : ${jurusanKecil}
Universitas     : ${universitasKecil}
Alamat (+)      : ${alamatGabungPlus}
Alamat (\`\`)     : ${alamatGabungTemplate}
=============================
`;

// 5. Tampilkan output ke konsol
console.log(biodata);