// register.js

// --- INPUT DATA ---
const firstName = "Deyna Angeliawati";
const lastName = "Zahara";
const nik = "3200411205990004";
const position = "Analis Sistem";
let grossSalary = 7500000;
let isPermanent = true;

// ---Validasi NIK ---
console.log("Panjang NIK valid:", nik.length === 16);

// --- PROSES DATA ---

// 1. Ambil inisial nama
const initialFirstName = firstName.slice(0, 1); 
const initialLastName = lastName.slice(0, 1);   

// 2. Ambil 4 digit terakhir NIK
const lastNikDigits = nik.slice(-4); 

// 3. Gabungkan semuanya dan ubah ke huruf besar
const employeeID = (initialFirstName + initialLastName + lastNikDigits).toUpperCase(); 

// 4. Format Gaji ke format Rupiah
const formattedSalary = `Rp ${grossSalary.toLocaleString('id-ID')}`; 

// 5. Ubah boolean menjadi teks yang deskriptif
const statusText = isPermanent ? "Karyawan Tetap" : "Karyawan Kontrak"; 

// 6. Generate email perusahaan (semua huruf kecil)
const emailPerusahaan = `${firstName.toLowerCase().replace(/\s+/g, '')}.${lastName.toLowerCase()}@ciptasolusi.digital`;

// --- OUTPUT ---
const summary = `
===================================================
          DATA PENDAFTARAN KARYAWAN BARU
===================================================
    SELAMAT DATANG DI PT. CIPTA SOLUSI DIGITAL!

  Nama Lengkap      : ${(firstName + " " + lastName).toUpperCase()}
  Posisi            : ${position}
  Employee ID       : ${employeeID}
  Email Perusahaan  : ${emailPerusahaan}
  Gaji Pokok (Gross): ${formattedSalary}
  Status            : ${statusText}

===================================================
`;

console.log(summary);
