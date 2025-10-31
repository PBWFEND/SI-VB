// register.js

// --- INPUT DATA ---
const firstName = 'Brilian';
const lastName = 'Pratama';
const nik = '3204011205990003';
const position = 'Backend Developer';
let grossSalary = 9500000;
let isPermanent = true;

// --- VALIDASI NIK ---
console.log('Panjang NIK Valid:', nik.length === 16);

// --- PROSES DATA ---
const initialFirstName = firstName.slice(0, 1);
const initialLastName = lastName.slice(0, 1);
const lastNikDigits = nik.slice(-4);
const employeeID = (initialFirstName + initialLastName + lastNikDigits).toUpperCase();
const formattedSalary = `Rp ${grossSalary.toLocaleString('id-ID')}`;
const statusText = isPermanent ? 'Karyawan Tetap' : 'Karyawan Kontrak';
const emailPerusahaan = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@ciptasolusi.digital`;

// --- OUTPUT ---
const summary = `
===================================================
        DATA PENDAFTARAN KARYAWAN BARU
===================================================

SELAMAT DATANG DI PT. CIPTA SOLUSI DIGITAL!

Berikut adalah ringkasan data Anda:

  Nama Lengkap      : ${(firstName + ' ' + lastName).toUpperCase()}
  Posisi            : ${position}
  Employee ID       : ${employeeID}
  Email Perusahaan  : ${emailPerusahaan}
  
  Gaji Pokok (Gross): ${formattedSalary}
  Status            : ${statusText}

===================================================
`;

console.log(summary);
