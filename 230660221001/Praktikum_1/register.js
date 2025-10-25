// register.js

// --- INPUT DATA ---
const firstName = "Ghatan";
const lastName = "Kautsar";
const nik = "3278021901040005";
const position = "Backend Developer";
let grossSalary = 9500000;
let isPermanent = true;

// --- PROSES DATA ---
// 1. Ambil inisial nama
const initialFirstName = firstName.slice(0, 1);
const initialLastName = lastName.slice(0, 1);

// 2. Ambil 4 digit terakhir NIK
const lastNikDigits = nik.slice(-4);

// 3. Gabungkan semuanya dan ubah ke huruf besar
const employeeID = (initialFirstName + initialLastName + lastNikDigits).toUpperCase();

// 4. Format gaji ke format Rupiah
const formattedSalary = `Rp ${grossSalary.toLocaleString('id-ID')}`;

// 5. Ubah boolean menjadi teks deskriptif
const statusText = isPermanent ? "Karyawan Tetap" : "Karyawan Kontrak";

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

===================================================
`;

console.log(summary);

// Tantangan Ekstra (Opsional)
// 1. Validasi panjang NIK
console.log("Panjang NIK Valid:", nik.length === 16);

// 2. Generate Email Perusahaan
const emailPerusahaan = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@ciptasolusi.digital`;
console.log("Email Perusahaan :", emailPerusahaan);
