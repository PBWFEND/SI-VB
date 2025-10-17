const namaLengkap = "     Muhammad Panji Adhitya";
const tempatLahir = "Sumedang";
let tanggalLahir = "19 September 2004";
let umur = 21;
let statusMahasiswa = true;
const jurusan = "Sistem Informasi";
const universitas = "Universitas Sebelas April Sumedang";

const namaBesar = namaLengkap.toUpperCase(); 
const namaRapih = namaLengkap.trim()
const asalKota = tempatLahir.slice(0, 8);
const jurusanKecil = jurusan.toLowerCase();
const kotaGanti = tempatLahir.replace("Sumedang", "Narogong")

const jalan = "jl.Sukamantri";
const kota =  "Sumedang";
const alamatGabung = jalan + ", " + kota;
const alamatTemplate = `${jalan}, ${kota}`;



const biodata = `
=========================================
          BIODATA MAHASISWA
=========================================
Nama Lengkap    : ${namaBesar, namaRapih}
Tempat Lahir    : ${tempatLahir, kotaGanti}
Tanggal Lahir   : ${tanggalLahir}
Umur            : ${umur} tahun
Asal Kota (Slice) : ${asalKota}
Status Aktif    : ${statusMahasiswa}
Jurusan         : ${jurusanKecil}
Universitas     : ${universitas}

Alamat (Gabung)     : ${alamatGabung}
Alamat (Template)   : ${alamatTemplate}
=========================================
`;
console.log(biodata);