const namaLengkap = "Nazwa Umaira Nanindia Ramdhani";
const tempatLahir = "Sumedang";
let tanggalLahir = "28 Maret 2005";
let umur = 20;
let statusMahasiswa = true;
const jurusan = "Sistem Informasi"
const univesitas = "Universitas Sebelas April"

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
Jurusan         : ${jurusan}
Universitas     : ${univesitas}
=========================================
`;

console.log(biodata);
