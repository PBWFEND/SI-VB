// =======================================================
// Praktikum 5 - JavaScript Modern (ES6+)
// Nama  : Ghatan Zalfaa Kautsar
// NPM   : 230660221001
// Kelas : SI-VB
// File  : todolist_modern.js
// =======================================================

const todoList = [];

// Fungsi untuk menambahkan tugas baru
const tambahTugas = (tugas) => {
  if (tugas.trim() === '') {
    console.log('Tugas tidak boleh kosong!');
    return;
  }

  todoList.push({
    id: Date.now(),
    nama: tugas,
    selesai: false,
  });

  console.log(`Tugas "${tugas}" berhasil ditambahkan!`);
  tampilkanTugas();
};

// Fungsi untuk menampilkan seluruh tugas
const tampilkanTugas = () => {
  console.log('\n=== Daftar Tugas ===');
  if (todoList.length === 0) {
    console.log('Belum ada tugas.');
    return;
  }

  todoList.forEach((tugas, index) => {
    const status = tugas.selesai ? '✅ Selesai' : '❌ Belum';
    console.log(`${index + 1}. ${tugas.nama} - ${status}`);
  });
};

// Fungsi untuk menyelesaikan tugas berdasarkan ID
const selesaikanTugas = (id) => {
  const tugas = todoList.find((item) => item.id === id);
  if (tugas) {
    tugas.selesai = true;
    console.log(`Tugas "${tugas.nama}" telah diselesaikan.`);
  } else {
    console.log('Tugas tidak ditemukan!');
  }
  tampilkanTugas();
};

// Fungsi untuk menghapus tugas
const hapusTugas = (id) => {
  const index = todoList.findIndex((item) => item.id === id);
  if (index !== -1) {
    console.log(`Tugas "${todoList[index].nama}" telah dihapus.`);
    todoList.splice(index, 1);
  } else {
    console.log('Tugas tidak ditemukan!');
  }
  tampilkanTugas();
};

// Contoh penggunaan
tambahTugas('Mengerjakan laporan praktikum 5');
tambahTugas('Membuat diagram sistem penjualan beras (APBO)');
tambahTugas('Review materi JavaScript Modern');

selesaikanTugas(todoList[0].id);
hapusTugas(todoList[1].id);
