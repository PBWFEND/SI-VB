// register.js
// --- INPUT DATA ---
const firstName = "Rian";
const lastName = "Rianto";
const nik = "3211062009030001";
const position = "Backend Developer";
let grossSalary = 9500000;
let isPermanent = true;

// --- VALIDASI NIK ---
console.log("Panjang NIK Valid:", nik.length === 16);

// --- PROSES DATA ---
// 1. Ambil inisial nama
const initialFirstName = firstName.slice(0, 1); // Hasil: "R"
const initialLastName = lastName.slice(0, 1);   // Hasil: "R"

// 2. Ambil 4 digit terakhir NIK
const lastNikDigits = nik.slice(-4); // Hasil: "0003"

// 3. Gabungkan semuanya dan ubah ke huruf besar
const employeeID = (initialFirstName + initialLastName + lastNikDigits).toUpperCase(); // Hasil: "RR0003"

// 4. Format Gaji ke format Rupiah
const formattedSalary = `Rp ${grossSalary.toLocaleString('id-ID')}`; // Hasil: "Rp 9.500.000"

// 5. Ubah boolean menjadi teks yang deskriptif
const statusText = isPermanent ? "Karyawan Tetap" : "Karyawan Kontrak"; // Hasil: "Karyawan Tetap"

// 6. Generate Email Perusahaan
const emailPerusahaan = (firstName.toLowerCase() + "." + lastName.toLowerCase() + "@ciptasolusi.digital");

// --- OUTPUT ---
const summary = `
============================================
        DATA PENDAFTARAN KARYAWAN BARU
===================================================

SELAMAT DATANG DI PT. CIPTA SOLUSI DIGITAL!

Berikut adalah ringkasan data Anda:

  Nama Lengkap      : ${(firstName + " " + lastName).toUpperCase()}
  Posisi            : ${position}
  Employee ID       : ${employeeID}
  Email Perusahaan  : ${emailPerusahaan}
  
  Gaji Pokok (Gross): ${formattedSalary}
  Status            : ${statusText}

===================================================
`;

console.log(summary);