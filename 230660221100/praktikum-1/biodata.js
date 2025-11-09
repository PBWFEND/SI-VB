// biodata.js

// 1. Deklarasikan variabel menggunakan const dan let
const namaLengkap = "Marsya Anastasya"; // Ganti dengan nama lengkapmu
const tempatLahir = "Sumedang";
let tanggalLahir = "21 Mei 2005"; // Format bisa disesuaikan
let umur = 20; // Ganti dengan umurmu
let statusMahasiswa = true; // Gunakan boolean (true jika aktif, false jika tidak)

const jurusan = "Sistem Informasi";
const universitas = "UNSAP";

// 2. Gunakan string methods untuk memanipulasi data
const namaBesar = namaLengkap.toUpperCase();
const namaKecil = namaLengkap.toLowerCase();
const asalKota = tempatLahir.slice(0, 5); // Mengambil 5 karakter pertama
const namaRapi = namaLengkap.trim();
const kampusBaru = universitas.replace("UNSAP", "Universitas Sebelas April");

const jalan = "Jl. Empang Gg.Sukaraja No. 08";
const kota = "Sumedang";
const alamatGabung = jalan + ", " + kota;
const alamatTemplate = `${jalan}, ${kota}`;

// 3. Siapkan output menggunakan Template Literals
const biodata = `
=========================================
          BIODATA MAHASISWA
=========================================
Nama Lengkap    : ${namaBesar}
Nama (Kecil)    : ${namaKecil}
Nama Rapi (trim): ${namaRapi}
Tempat Lahir    : ${tempatLahir}
Tanggal Lahir   : ${tanggalLahir}
Umur            : ${umur} tahun
Asal Kota (Slice) : ${asalKota}
Status Aktif    : ${statusMahasiswa}
Jurusan         : ${jurusan}
Universitas     : ${universitas}
Universitas (Edit)    : ${kampusBaru}
Alamat (+)      : ${alamatGabung}
Alamat (Template) : ${alamatTemplate}
=========================================
`;

// 4. Tampilkan output ke konsol
console.log(biodata);
