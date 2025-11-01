/**
 * File: todolist_modern.js
 * Deskripsi: Versi refactor yang menerapkan Destructuring dan
 * Arrow Function (Implicit Return).
 */

// 1. Inisialisasi data array of objects
let tasks = [
  { id: 1, nama: "Mengerjakan tugas backend", selesai: false },
  { id: 2, nama: "Belajar materi NodeJS", selesai: true },
  { id: 3, nama: "Membuat folder praktikum", selesai: false },
  { id: 4, nama: "Membaca dokumentasi Express", selesai: true },
];

// 2. Menambah tugas baru menggunakan .push()
function tambahTugas(namaTugas) {
  const idBaru = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
  tasks.push({
    id: idBaru,
    nama: namaTugas,
    selesai: false,
  });
  console.log(`Tugas "${namaTugas}" berhasil ditambahkan!`);
}

// Menjalankan fungsi tambah tugas
tambahTugas("Review kode teman");

// 3. Menampilkan semua tugas (REFACTOR: Destructuring)
console.log("\n--- Daftar Semua Tugas ---");
tasks.forEach((task) => {
  // REFACTOR: Menggunakan destructuring { nama, selesai }
  const { nama, selesai } = task;
  
  const status = selesai ? "[✓]" : "[x]";
  console.log(`${status} ${nama}`);
});

// 4. Menyaring tugas yang belum selesai (REFACTOR: Implicit Return)
console.log("\n--- Tugas yang Belum Selesai ---");

// REFACTOR: Arrow function satu baris dengan implicit return
const tugasBelumSelesai = tasks.filter((task) => !task.selesai);

// Menampilkan hasil filter (juga menggunakan implicit return)
tugasBelumSelesai.forEach(task => console.log(`- ${task.nama}`));

// 5. Membuat daftar nama tugas saja (REFACTOR: Implicit Return)
console.log("\n--- Ringkasan Nama Tugas (Map) ---");

// REFACTOR: Arrow function satu baris dengan implicit return
const namaTugas = tasks.map((task) => task.nama);

console.log(namaTugas);