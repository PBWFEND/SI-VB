const mahasiswa = {
    nama: "Muhammad Panji Adhitya",
    nim: "230660221088",
    jurusan: "Sistem Informasi",
    matkul: [],

    tambahmatkul: function (namaMatkul) {
        this.matkul.push(namaMatkul);
    },

    tampilkanInfo: function () {
        console.log(`=== DATA MAHASISWA ===`);
        console.log(`Nama       : ${this.nama}`);
        console.log(`Nim        : ${this.nim}`);
        console.log(`Jurusan    : ${this.jurusan}`);
        console.log(`Mata Kuliah:`);

        if (this.matkul.length ===0) {
            console.log("Belum ada Mata Kuliah");
        } else {
            this.matkul.forEach((mk, index) => {
                console.log(` ${index + 1}. ${mk}`);
            });
        }
        console.log("==========");
    },
    
};

console.log(mahasiswa.nama);
console.log(mahasiswa.nim);

mahasiswa.tambahmatkul("Pemrograman Web");
mahasiswa.tambahmatkul("Basis Data");

mahasiswa.tampilkanInfo();