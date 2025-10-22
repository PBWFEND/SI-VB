const namaLengkap = "Rian Rianto"; // Ganti dengan nama lengkapmu
const tempatLahir = "Sumedang";
let tanggalLahir = "20 September 2003"; // Format bisa disesuaikan
let umur = 21; // Ganti dengan umurmu
let statusMahasiswa = true; // Gunakan boolean (true jika aktif, false jika tidak)

// --- MODIFIKASI PROGRAM: Tambahkan variabel baru ---
const jurusan = "Sistem Informasi";
const universitas = "Universitas Sebelas April";
const jalan = "Jl. Angkrek";
const kota = "Sumedang";
const data_mentah = "   Unsap Hebat   "; // Variabel untuk .trim()

// --- EKSPLORASI METHOD: Gunakan string method lain ---
const namaKecil = namaLengkap.toLowerCase();
const namaGanti = namaLengkap.replace("Rianto", "Pratama");
const dataBersih = data_mentah.trim();

// --- GABUNGKAN STRING: Membuat variabel alamat ---

// 1. Menggunakan operator +
const alamat_plus = jalan + ", " + kota;

// 2. Menggunakan Template Literals (f-string)
const alamat_template = `${jalan}, ${kota}`;


// 3. Siapkan output menggunakan Template Literals
const biodata = `
=========================================
          BIODATA MAHASISWA
=========================================
Nama Lengkap        : ${namaLengkap}
Usia                : ${umur} tahun
Jurusan             : ${jurusan}
Universitas         : ${universitas}
Status Aktif        : ${statusMahasiswa ? 'Ya' : 'Tidak'}

--- Output Metode String ---
1. toLowerCase()    : ${namaKecil}
2. replace()        : ${namaGanti}
3. trim()           : '${dataBersih}'

--- Output Gabung String ---
Alamat (+)          : ${alamat_plus}
Alamat (Template)   : ${alamat_template} 
=========================================


`;

// 4. Tampilkan output ke konsol
console.log(biodata);