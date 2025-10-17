const namaLengkap = "Paizal Rizki Nugraha";
const tempatLahir = "Sumedang";
let tanggalLahir = "21 Juli 2004";
let umur = 21;
let statusMahasiswa = true;
const jurusan = "Sistem Informasi";
const universitas = "     Universitas Sebelas April Sumedang     ";

const namaBesar = namaLengkap.toUpperCase();
const asalKota = tempatLahir.slice(0, 20);
const jurusanKecil = jurusan.toLowerCase();
const uni = universitas.trim();
const jurusanGanti = jurusan.replace("Sistem Informasi", "SI");

const jalan = "Jl. Pangaroan";
const kota = "Sumedang";
const alamat1 = jalan + ", " + kota;
const alamat2 = `${jalan}, ${kota}`;

const biodata = `
=========================================
          BIODATA MAHASISWA
=========================================
Nama Lengkap        : ${namaBesar}
Tempat Lahir        : ${tempatLahir}
Tanggal Lahir       : ${tanggalLahir}
Umur                : ${umur} tahun
Asal Kota (Slice)   : ${asalKota}
Status Aktif        : ${statusMahasiswa}
Jurusan             : ${(jurusanKecil, jurusanGanti)}
Universitas         : ${uni}
Alamat (+)          : ${alamat1}
Alamat (Template)   : ${alamat2}
=========================================
`;

console.log(biodata);
