// todolist_refactored.js

// 1. Inisialisasi data array of objects
let tasks = [
  { id: 1, nama: "Mengerjakan tugas backend", selesai: false },
  { id: 2, nama: "Belajar materi NodeJS", selesai: true },
  { id: 3, nama: "Membuat folder praktikum", selesai: false },
  { id: 4, nama: "Membaca dokumentasi Express", selesai: true },
];

// 2. Menambah tugas baru (menggunakan arrow function)
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

// 3. Menampilkan semua tugas menggunakan .forEach()
// Refactor: Menggunakan Arrow Function dan Destructuring ({ nama, selesai })
console.log("\n--- Daftar Semua Tugas (forEach + Destructuring) ---");
tasks.forEach((task) => {
  // Destructuring untuk mendapatkan nama dan selesai
  const { nama, selesai } = task;
  // Tanda centang jika selesai, silang jika belum
  const status = selesai ? "[✓]" : "[x]";
  console.log(`${status} ${nama}`);
});

// 4. Menyaring tugas yang belum selesai menggunakan .filter()
// Refactor: Menggunakan Arrow Function satu baris (Implicit Return)
console.log("\n--- Tugas yang Belum Selesai (Filter + Implicit Return) ---");
const tugasBelumSelesai = tasks.filter(task => task.selesai === false);

// Menampilkan hasil filter (menggunakan arrow function)
tugasBelumSelesai.forEach(task => console.log(`- ${task.nama}`));

// 5. Membuat daftar nama tugas saja menggunakan .map()
// Refactor: Menggunakan Arrow Function satu baris (Implicit Return)
console.log("\n--- Ringkasan Nama Tugas (Map + Implicit Return) ---");
const namaTugas = tasks.map(task => task.nama);
console.log(namaTugas);