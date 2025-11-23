// register.js

// --- INPUT DATA ---
const firstName = "Brilian";
const lastName = "Pratama";
const nik = "3204011205990003";
const position = "Backend Developer";
let grossSalary = 9500000;
let isPermanent = true;

// F.1. Validasi NIK: Tambahkan console.log untuk memberitahu apakah panjang NIK valid (harus 16 digit).
console.log("Panjang NIK Valid:", nik.length === 16); 
// Outputnya akan menjadi 'true' atau 'false'

// --- PROSES DATA ---

// 1. Ambil inisial nama
const initialFirstName = firstName.slice(0, 1); // Hasil: "B"
const initialLastName = lastName.slice(0, 1);   // Hasil: "P"

// 2. Ambil 4 digit terakhir NIK
const lastNikDigits = nik.slice(-4); // Hasil: "0003"

// 3. Gabungkan semuanya dan ubah ke huruf besar
const employeeID = (initialFirstName + initialLastName + lastNikDigits).toUpperCase(); // Hasil: "BP0003"

// 4. Format Gaji ke format Rupiah
// toLocaleString('id-ID') adalah cara bawaan JavaScript untuk format angka Indonesia
const formattedSalary = `Rp ${grossSalary.toLocaleString('id-ID')}`; // <--- PERBAIKAN DI SINI
// Hasil: "Rp 9.500.000"

// 5. Ubah boolean menjadi teks yang deskriptif
const statusText = isPermanent ? "Karyawan Tetap" : "Karyawan Kontrak"; 
// Hasil: "Karyawan Tetap"
// Ini menggunakan operator ternary, versi singkat dari if-else.

// F.2. Generate Email Perusahaan
// Format: namadepan.namabelakang@ciptasolusi.digital (semua huruf kecil)
const emailPerusahaan = (firstName.toLowerCase() + "." + lastName.toLowerCase() + "@ciptasolusi.digital");
// Hasil: "brilian.pratama@ciptasolusi.digital"


// --- OUTPUT ---

const summary = `
===================================================
      DATA PENDAFTARAN KARYAWAN BARU
===================================================

SELAMAT DATANG DI PT. CIPTA SOLUSI DIGITAL!

Berikut adalah ringkasan data Anda:

  Nama Lengkap      : ${(firstName + " " + lastName).toUpperCase()}
  Posisi            : ${position}
  Employee ID       : ${employeeID}
  
  Gaji Pokok (Gross): ${formattedSalary}
  Status            : ${statusText}

  Email Perusahaan  : ${emailPerusahaan}
  
===================================================
`;

// Tampilkan ringkasan ke konsol
console.log(summary);