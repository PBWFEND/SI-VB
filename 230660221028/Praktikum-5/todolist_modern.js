// todolist_modern.js

// 1. Inisialisasi data array of objects
let tasks = [
  { id: 1, nama: "Mengerjakan tugas backend", selesai: false },
  { id: 2, nama: "Belajar materi NodeJS", selesai: true },
  { id: 3, nama: "Membuat folder praktikum", selesai: false },
  { id: 4, nama: "Membaca dokumentasi Express", selesai: true },
];

// 2. Tambah tugas (refactor ke arrow function)
const tambahTugas = (namaTugas) => {
  const idBaru = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

  tasks.push({
    id: idBaru,
    nama: namaTugas,
    selesai: false,
  });

  console.log(`Tugas "${namaTugas}" berhasil ditambahkan!`);
};

// Menjalankan fungsi tambah tugas
tambahTugas("Review kode teman");


// 3. Menampilkan semua tugas (refactor: arrow function + destructuring)
console.log("\n--- Daftar Semua Tugas (Modern) ---");

tasks.forEach(({ nama, selesai }) => {
  const status = selesai ? "[✓]" : "[x]";
  console.log(`${status} ${nama}`);
});


// 4. Filter tugas belum selesai (arrow function + implicit return)
console.log("\n--- Tugas yang Belum Selesai (Modern) ---");

const tugasBelumSelesai = tasks.filter(task => !task.selesai);

// Menampilkan hasil filter
tugasBelumSelesai.forEach(({ nama }) => console.log(`- ${nama}`));


// 5. Map daftar nama tugas (arrow function + implicit return)
console.log("\n--- Ringkasan Nama Tugas (Map Modern) ---");

const namaTugas = tasks.map(task => task.nama);

console.log(namaTugas);
