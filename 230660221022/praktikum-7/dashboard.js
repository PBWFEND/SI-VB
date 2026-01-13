// dashboard_paralel.js
async function getUserDashboardParalel(userId) {
  console.log(`--- MEMUAT DATA USER ID: ${userId} ---`);

  try {
    // 1. Definisikan URL
    const urlUser = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const urlPosts = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
    const urlTodos = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;

    // 2. FETCH DATA USER (Berurutan / Sequential)
    // Data user diperlukan untuk menampilkan nama, jadi fetch duluan.
    const respUser = await fetch(urlUser);
    if (!respUser.ok) throw new Error("Gagal mengambil data User");
    const userData = await respUser.json();

    // 3. FETCH DATA POSTS & TODOS (Paralel dengan Promise.all)
    const [respPosts, respTodos] = await Promise.all([
      fetch(urlPosts),
      fetch(urlTodos)
    ]);

    // Lakukan pemeriksaan error dan parsing JSON setelah Promise.all selesai
    if (!respPosts.ok) throw new Error("Gagal mengambil data Posts secara paralel");
    if (!respTodos.ok) throw new Error("Gagal mengambil data Todos secara paralel");

    const postsData = await respPosts.json();
    const todosData = await respTodos.json();

    // 4. Pengolahan Data (Logic)
    const totalPosts = postsData.length;
    const totalTodos = todosData.length;

    // Filter todo yang completed = true
    const completedTodos = todosData.filter(todo => todo.completed === true).length;

    // 5. Tampilkan Output
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