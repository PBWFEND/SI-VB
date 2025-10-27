// todolist_modern.js

const tasks = [
  { nama: "Belajar JavaScript", selesai: false },
  { nama: "Mengerjakan Tugas Kampus", selesai: true },
  { nama: "Membaca Dokumentasi Node.js", selesai: false },
];

// Gunakan Arrow Function di forEach + Destructuring
tasks.forEach(({ nama, selesai }) => {
  const status = selesai ? "[✓]" : "[x]";
  console.log(`${status} ${nama}`);
});

// Filter tugas yang selesai (implicit return)
const tugasSelesai = tasks.filter(task => task.selesai);

// Map untuk buat array pesan baru (implicit return)
const daftarPesan = tasks.map(({ nama, selesai }) =>
  `${selesai ? "✔️" : "❌"} ${nama}`
);

console.log("\n--- Daftar Tugas Selesai ---");
console.log(tugasSelesai);

console.log("\n--- Daftar Pesan ---");
console.log(daftarPesan);
