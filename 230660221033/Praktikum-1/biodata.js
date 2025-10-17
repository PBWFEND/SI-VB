const namaLengkap = "Yelly Ambarwaty";
const tempatLahir = "Sumedang";
let tanggalLahir = "29 Juli 2005";
let umur = 20;
let statusMahasiswa = true;

const programStudi = "Sistem Informasi";
const universitas = "Universitas Sebelas April"; 

const asalKota = tempatLahir.slice(0, 8); 

const jalan = "Jl. Galudra RT/RW 03/01";
const kota = "Sumedang";
const alamatPlus = jalan + ", " + kota;
const alamatTemplate = `${jalan}, ${kota}`;

const biodata = `
=========================================
          BIODATA MAHASISWA
=========================================
Nama Lengkap    : ${namaLengkap}
Tempat Lahir    : ${tempatLahir}
Tanggal Lahir   : ${tanggalLahir}
Umur            : ${umur} tahun
Program Studi   : ${programStudi}
Universitas     : ${universitas}
Asal Kota (Slice) : ${asalKota}
Status Aktif    : ${statusMahasiswa}
Alamat (+)        : ${alamatPlus}
Alamat (Template)  : ${alamatTemplate}
=========================================
`;

console.log(biodata);
