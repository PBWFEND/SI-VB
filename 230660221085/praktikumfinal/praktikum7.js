// Memasukkan node-fetch jika menggunakan versi Node lama (Node 18+ sudah punya fetch bawaan)
// const fetch = require('node-fetch'); 

async function getUserDashboard(userId) {
  try {
    console.log("Sedang mengambil data...");

    // 1. Mengambil data Profil, Posts, dan Todos secara paralel (Lebih Cepat)
    const [userRes, postsRes, todosRes] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`),
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
    ]);

    // Validasi jika ada request yang gagal
    if (!userRes.ok) throw new Error("Gagal mengambil data profil user.");

    // 2. Mengubah respon menjadi JSON
    const userData = await userRes.json();
    const postsData = await postsRes.json();
    const todosData = await todosRes.json();

    // 3. Mengolah Data
    const totalPosts = postsData.length;
    const totalTodos = todosData.length;
    
    // Filter tugas yang selesai (completed: true)
    const completedTodos = todosData.filter(todo => todo.completed === true).length;

    // 4. Menampilkan Output sesuai Target di Modul
    console.log("\n=========================================");
    console.log("    DASHBOARD AKTIVITAS PENGGUNA");
    console.log("=========================================");
    console.log(`Nama User    : ${userData.name}`);
    console.log(`Email        : ${userData.email}`);
    console.log(`Total Post   : ${totalPosts} postingan`);
    console.log(`Tugas Selesai: ${completedTodos} / ${totalTodos} tugas`);
    console.log("=========================================");

  } catch (error) {
    console.log("\n[ERROR] Terjadi kesalahan:");
    console.log(error.message);
  }
}

// Jalankan fungsi untuk User ID 1
getUserDashboard(1);