// todolist_modern.js

// Data awal daftar tugas
const tasks = [
  { nama: "Belajar JavaScript", selesai: true },
  { nama: "Mengerjakan Tugas Kampus", selesai: false },
  { nama: "Olahraga Pagi", selesai: true },
  { nama: "Belanja Mingguan", selesai: false },
];

// 🔹 Menampilkan semua tugas (gunakan destructuring)
console.log("=== Daftar Tugas ===");
tasks.forEach(({ nama, selesai }) => {
  const status = selesai ? "[✓]" : "[x]";
  console.log(`${status} ${nama}`);
});

// 🔹 Filter tugas yang sudah selesai (arrow function 1 baris)
const tugasSelesai = tasks.filter(task => task.selesai);

console.log("\n=== Tugas yang Sudah Selesai ===");
tugasSelesai.forEach(({ nama }) => console.log(`- ${nama}`));

// 🔹 Map untuk membuat array nama tugas dengan status (arrow function + implicit return)
const daftarStatus = tasks.map(({ nama, selesai }) => 
  `${nama} - ${selesai ? "Selesai" : "Belum Selesai"}`
);

console.log("\n=== Daftar Status Tugas ===");
daftarStatus.forEach(status => console.log(status));
