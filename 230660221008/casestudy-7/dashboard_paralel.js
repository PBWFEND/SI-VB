// dashboard_paralel.js
// Pastikan Node.js >= 18 (fetch global tersedia)

async function getUserDashboardParallel(userId) {
  console.log(`--- MEMUAT DATA USER ID: ${userId} ---`);

  try {
    const urlUser = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const urlPosts = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
    const urlTodos = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;

    // 1. Ambil profil user dulu (kita butuh nama & email untuk tampilan)
    const respUser = await fetch(urlUser);
    if (!respUser.ok) throw new Error(`Gagal mengambil data User (status ${respUser.status})`);
    const userData = await respUser.json();

    // 2. Ambil posts & todos secara paralel (Promise.all)
    const [respPosts, respTodos] = await Promise.all([
      fetch(urlPosts),
      fetch(urlTodos)
    ]);

    if (!respPosts.ok) throw new Error(`Gagal mengambil data Posts (status ${respPosts.status})`);
    if (!respTodos.ok) throw new Error(`Gagal mengambil data Todos (status ${respTodos.status})`);

    const [postsData, todosData] = await Promise.all([
      respPosts.json(),
      respTodos.json()
    ]);

    // 3. Proses data
    const totalPosts = Array.isArray(postsData) ? postsData.length : 0;
    const totalTodos = Array.isArray(todosData) ? todosData.length : 0;
    const completedTodos = Array.isArray(todosData)
      ? todosData.filter(t => t.completed === true).length
      : 0;

    // 4. Tampilkan dashboard
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

// Jalankan contoh
getUserDashboardParallel(1);
