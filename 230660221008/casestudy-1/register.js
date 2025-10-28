// --- INPUT DATA ---
const namaDepan = "Nazwa";
const namaBelakang = "Ramdhani";
const nik = "3204011205990003";
const posisi = "Backend Developer";
let gajiPokok = 9500000;
let apakahPermanen = true;

// --- PROSES DATA ---
// 1. Ambil inisial nama
const inisialNamaDepan = namaDepan.slice(0, 1); // Hasil: "B"
const inisialNamaBelakang = namaBelakang.slice(0, 1);   // Hasil: "P"

// 2. Ambil 4 digit terakhir NIK
const angkaTerakhirNik = nik.slice(-4); // Hasil: "0003"

// 3. Gabungkan semuanya dan ubah ke huruf besar
const employeeID = (inisialNamaDepan + inisialNamaBelakang + angkaTerakhirNik).toUpperCase(); // Hasil: "BP0003"

// 4. Format Gaji ke format Rupiah
// toLocaleString('id-ID') adalah cara bawaan JavaScript untuk format angka Indonesia

const formatGaji = `Rp ${gajiPokok.toLocaleString('id-ID')}`; // Hasil: "Rp 9.500.000"

// 5. Ubah boolean menjadi teks yang deskriptif

const statusKaryawanTetap = apakahPermanen ? "Karyawan Tetap" : "Karyawan Kontrak"; // Hasil: "Karyawan Tetap"
// Ini menggunakan operator ternary, versi singkat dari if-else.

// Hasilkan Email
const emailPerusahaan = (namaDepan.toLowerCase() + "." + namaBelakang.toLowerCase() + "@ciptasolusi.digital");

const register = `
=========================================
    DATA PENDAFTARAN KARYAWAN BARU
=========================================
SELAMAT DATANG DI PT. CIPTA SOLUSI DIGITAL!

Berikut adalah ringkasan data Anda:

Nama Lengkap      : ${(namaDepan + " " + namaBelakang).toUpperCase()}
Posisi            : ${posisi}
Employee ID       : ${employeeID}

Gaji Pokok (Gross): ${formatGaji}
Status Aktif      : ${statusKaryawanTetap}
Email Karyawan    : ${emailPerusahaan}

=========================================
`;
console.log(register);
console.log("Panjang NIK Valid:", nik.length === 16);