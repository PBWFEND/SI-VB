const namaLengkap = 'Tika Anggraeni';
const tempatLahir = 'Sumedang';
let tanggalLahir = '27 Juli 2004';
let umur = 21;
let statusMahasiswa = true;

const namaBesar = namaLengkap.toUpperCase();
const asalKota = tempatLahir.slice(0, 5);

const biodata = `
=========================================
          BIODATA MAHASISWA
=========================================
Nama Lengkap    : ${namaBesar}
Tempat Lahir    : ${tempatLahir}
Tanggal Lahir   : ${tanggalLahir}
Umur            : ${umur} tahun
Asal Kota (Slice) : ${asalKota}
Status Aktif    : ${statusMahasiswa}
=========================================
`;

console.log(biodata);
