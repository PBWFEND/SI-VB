let tasks = [
  { id: 1, nama: 'Mengerjakan tugas backend', selesai: false },
  { id: 2, nama: 'Belajar materi NodeJS', selesai: true },
  { id: 3, nama: 'Membuat folder praktikum', selesai: false },
  { id: 4, nama: 'Membaca dokumentasi Express', selesai: true },
];

function tambahTugas(namaTugas) {
  const idBaru = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
  tasks.push({
    id: idBaru,
    nama: namaTugas,
    selesai: false,
  });
  console.log(`Tugas "${namaTugas}" berhasil ditambahkan!`);
}

tambahTugas('Review kode teman');

console.log('\n--- Daftar Semua Tugas ---');
tasks.forEach((task) => {
  const status = task.selesai ? '[✓]' : '[x]';
  console.log(`${status} ${task.nama}`);
});

console.log('\n--- Tugas yang Belum Selesai ---');
const tugasBelumSelesai = tasks.filter((task) => {
  return task.selesai === false;
});

tugasBelumSelesai.forEach((task) => console.log(`- ${task.nama}`));

console.log('\n--- Ringkasan Nama Tugas (Map) ---');
const namaTugas = tasks.map((task) => {
  return task.nama;
});
console.log(namaTugas);
