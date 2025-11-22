// dashboard_paralel.js

async function getUserDashboardFast(userId) {
  console.log(`--- MEMUAT DATA USER ID: ${userId} ---`);

  try {
    // URL API
    const urlUser = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const urlPosts = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
    const urlTodos = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;

    // Fetch profil user tetap dilakukan dulu (karena dipakai langsung)
    const respUser = await fetch(urlUser);
    if (!respUser.ok) throw new Error("Gagal mengambil profil pengguna");
    const userData = await respUser.json();

    // Fetch Posts dan Todos secara paralel
    const [respPosts, respTodos] = await Promise.all([
      fetch(urlPosts),
      fetch(urlTodos)
    ]);

    if (!respPosts.ok) throw new Error("Gagal mengambil data postingan");
    if (!respTodos.ok) throw new Error("Gagal mengambil data todo list");

    const postsData = await respPosts.json();
    const todosData = await respTodos.json();

    // Hitung statistik
    const totalPosts = postsData.length;
    const totalTodos = todosData.length;
    const completedTodos = todosData.filter(t => t.completed).length;

    // Output
    console.log("\n=========================================");
    console.log("    DASHBOARD AKTIVITAS PENGGUNA");
    console.log("=========================================");
    console.log(`Nama User    : ${userData.name}`);
    console.log(`Email        : ${userData.email}`);
    console.log(`Total Post   : ${totalPosts} postingan`);
    console.log(`Tugas Selesai: ${completedTodos} / ${totalTodos} tugas`);
    console.log("=========================================");

  } catch (err) {
    console.log("\n[ERROR] Terjadi kesalahan:");
    console.log(err.message);
  }
}

// Jalankan
getUserDashboardFast(1);
