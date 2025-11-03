let tasks = [
    { id: 1, nama: "Mengerjakan tugas backend", selesai: false},
    { id: 2, nama: "Belajar materi Node JS", selesai: true},
    { id: 3, nama: "Membuat folder praktikum", selesai: false},
    { id: 4, nama: "Membaca dokumentasi Express", selesai: false},
];

const tambahTugas = (namaTugas) => {
    const idBaru = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    tasks.push({
        id: idBaru,
        nama: namaTugas,
        selesai: false,
    });
    console.log(`Tugas "${namaTugas}" berhasil ditambahkan!`);
};

tambahTugas("Review kode teman"); 

console.log("\n--- Daftar Semua Tugas ---");
tasks.forEach((task) => {
    const { nama, selesai } = task;
    const status = selesai ? "[✓]" : "[x]";
    console.log(`${status} ${nama}`);
});

console.log("\n--- Tugas yang Belum Selesai ---");
const tugasBelumSelesai = tasks.filter((task) => !task.selesai);

tugasBelumSelesai.forEach(({ nama }) => console.log(`- ${nama}`));

console.log("\n--- Ringkasan Nama Tugas (Map) ---");
const namaTugas = tasks.map((task) => task.nama);

console.log(namaTugas);