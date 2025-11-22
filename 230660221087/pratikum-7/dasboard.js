// dashboard_paralel.js
// Mengambil data dashboard pengguna secara paralel menggunakan Promise.all()

async function getUserDashboardParalel(userId) {
  console.log(`--- MEMUAT DATA USER ID: ${userId} SECARA PARALEL ---`);

  try {
    // 1. Definisikan URL
    const urlUser = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const urlPosts = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
    const urlTodos = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;

    // 2. Fetch Data User (Sequential - Karena data user diperlukan untuk menampilkan nama)
    const respUser = await fetch(urlUser);
    if (!respUser.ok) throw new Error("Gagal mengambil data User");
    const userData = await respUser.json();

    // 3. Fetch Data Posts dan Todos SECARA PARALEL
    // Gunakan Promise.all() untuk menjalankan dua atau lebih promise secara bersamaan.
    const [respPosts, respTodos] = await Promise.all([
      fetch(urlPosts), // Promise 1: Mengambil Posts
      fetch(urlTodos)  // Promise 2: Mengambil Todos
    ]);

    // 4. Validasi dan Parse Data Posts dan Todos
    if (!respPosts.ok) throw new Error("Gagal mengambil data Posts (Paralel)");
    if (!respTodos.ok) throw new Error("Gagal mengambil data Todos (Paralel)");
    
    const postsData = await respPosts.json();
    const todosData = await respTodos.json();

    // 5. Pengolahan Data (Logic)
    const totalPosts = postsData.length;
    const totalTodos = todosData.length;
    
    // Filter todo yang completed = true
    const completedTodos = todosData.filter(todo => todo.completed === true).length;

    // 6. Tampilkan Output
    console.log("\n=========================================");
    console.log("    DASHBOARD AKTIVITAS PENGGUNA (PARALEL)");
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

// Jalankan fungsi
getUserDashboardParalel(1);