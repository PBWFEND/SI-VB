// todolist_modern.js
// Refactoring kode todolist.js menggunakan Arrow Function dan Destructuring (ES6+)

// 1. Inisialisasi data array of objects
let tasks = [
  { id: 1, nama: "Mengerjakan tugas backend", selesai: false },
  { id: 2, nama: "Belajar materi NodeJS", selesai: true },
  { id: 3, nama: "Membuat folder praktikum", selesai: false },
  { id: 4, nama: "Membaca dokumentasi Express", selesai: true },
];

// 2. Menambah tugas baru menggunakan .push()
// Menggunakan Arrow Function untuk fungsi reguler (Opsional, tapi praktik baik)
const tambahTugas = (namaTugas) => {
  const idBaru = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
  tasks.push({
    id: idBaru,
    nama: namaTugas,
    selesai: false,
  });
  // PERBAIKAN 1: Menggunakan backtick (`) untuk template literal
  console.log(`Tugas "${namaTugas}" berhasil ditambahkan!`);
};

// Menjalankan fungsi tambah tugas
tambahTugas("Review kode teman");

// 3. Menampilkan semua tugas menggunakan .forEach()
console.log("\n--- Daftar Semua Tugas ---");
// Refactor 1: Menggunakan Arrow Function
// Refactor 2: Menggunakan Destructuring pada parameter task
tasks.forEach(({ nama, selesai }) => {
  // kita bisa langsung menggunakan 'nama' dan 'selesai' tanpa 'task.'
  const status = selesai ? "[✓]" : "[x]";
  // PERBAIKAN 2: Menggunakan backtick (`) untuk template literal
  console.log(`${status} ${nama}`);
});

// 4. Menyaring tugas yang belum selesai menggunakan .filter()
console.log("\n--- Tugas yang Belum Selesai ---");
// Refactor 3 (Tantangan Ekstra): Arrow Function satu baris dengan implicit return
const tugasBelumSelesai = tasks.filter(task => !task.selesai);
// Sama dengan: tasks.filter((task) => { return task.selesai === false; });

// Menampilkan hasil filter (Menggunakan Arrow Function sederhana)
// PERBAIKAN 3: Menggunakan backtick (`) untuk template literal
tugasBelumSelesai.forEach(task => console.log(`- ${task.nama}`));

// 5. Membuat daftar nama tugas saja menggunakan .map()
console.log("\n--- Ringkasan Nama Tugas (Map) ---");
// Refactor 4 (Tantangan Ekstra): Arrow Function satu baris dengan implicit return
const namaTugas = tasks.map(task => task.nama);
// Sama dengan: tasks.map((task) => { return task.nama; });

console.log(namaTugas);