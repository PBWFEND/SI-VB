// biodata.js

// 1. Deklarasikan variabel menggunakan const dan let
const namaLengkap = "Kikania Zahra"; // Ganti dengan nama lengkapmu
const tempatLahir = "Sumedang";
let tanggalLahir = "10 November  2005"; // Format bisa disesuaikan
let umur = 19; // Ganti dengan umurmu
let statusMahasiswa = true; // Gunakan boolean (true jika aktif, false jika tidak)

// Tambahan variabel baru
const jurusan = "Sistem Informasi";
const universitas = "Universitas Sebelas April Sumedang";

// 2. Gunakan string methods untuk memanipulasi data
const namaBesar = namaLengkap.toUpperCase();
const asalKota = tempatLahir.slice(0, 8); // Mengambil 8 karakter pertama

// Eksplorasi method string
const namaKecil = namaLengkap.toLowerCase();
const namaGanti = namaLengkap.replace("Zahra", "Z.");
const namaTrim = "   " + namaLengkap + "   ";
const namaRapi = namaTrim.trim(); // Hilangkan spasi berlebih

// 3. Gabungkan string untuk alamat
const jalan = "Jl. Raya Bandung";
const kota = "Sumedang";

// Menggunakan operator +
const alamatConcat = jalan + ", " + kota;

// Menggunakan Template Literals
const alamatTemplate = `${jalan}, ${kota}`;

// 4. Siapkan output menggunakan Template Literals
const biodata = `
=========================================
          BIODATA MAHASISWA
=========================================
Nama Lengkap       : ${namaBesar}
Tempat Lahir       : ${tempatLahir}
Tanggal Lahir      : ${tanggalLahir}
Umur               : ${umur} tahun
Asal Kota (Slice)  : ${asalKota}
Status Aktif       : ${statusMahasiswa}
Jurusan            : ${jurusan}
Universitas        : ${universitas}

--- Eksplorasi String Method ---
Nama Huruf Kecil   : ${namaKecil}
Nama Diganti       : ${namaGanti}
Nama dengan Spasi  : "${namaTrim}"
Nama setelah Trim  : "${namaRapi}"

--- Perbandingan Alamat ---
Dengan Operator +  : ${alamatConcat}
Dengan Template    : ${alamatTemplate}
=========================================
`;

// 5. Tampilkan output ke konsol
console.log(biodata);
