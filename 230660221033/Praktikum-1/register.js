const firstName = "Yelly";
const lastName = "Ambarwaty";
const nik = "3204011205990003";
const position = "Backend Developer";
let grossSalary = 9500000;
let isPermanent = true;

console.log(">> Cek Data Awal:");
console.log("   Panjang NIK Valid (Harus 16 digit):", nik.length === 16);
console.log("---------------------------------------------------\n");

// --- PROSES DATA ---

// 1. Pembuatan Employee ID
const initialFirstName = firstName.slice(0, 1);    // Ambil huruf pertama Nama Depan: "B"
const initialLastName = lastName.slice(0, 1);      // Ambil huruf pertama Nama Belakang: "P"
const lastNikDigits = nik.slice(-4);             // Ambil 4 digit terakhir NIK: "0003"

const employeeID = (initialFirstName + initialLastName + lastNikDigits).toUpperCase();

// 2. Formatting Gaji ke format Rupiah
const formattedSalary = `Rp ${grossSalary.toLocaleString('id-ID')}`;

// 3. Konversi Status Boolean ke Teks Deskriptif (Operator Ternary)
const statusText = isPermanent ? "Karyawan Tetap" : "Karyawan Kontrak";

// 4. TANTANGAN EKSTRA: Generate Email Perusahaan
const emailPerusahaan = (
    firstName.toLowerCase() + "." +
    lastName.toLowerCase() +
    "@ciptasolusi.digital"
);


const summary = `===================================================
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
