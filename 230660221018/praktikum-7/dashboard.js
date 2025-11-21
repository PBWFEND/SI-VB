// dashboard.js

async function getUserDashboard(userId) {
  console.log(`--- MEMUAT DATA USER ID: ${userId} ---`);

  try {
    // 1. Definisikan URL
    const urlUser = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const urlPosts = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
    const urlTodos = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;

    // 2. Fetch Data (Sequential - berurutan)
    const respUser = await fetch(urlUser);
    if (!respUser.ok) throw new Error("Gagal mengambil data User");
    const userData = await respUser.json();

    const respPosts = await fetch(urlPosts);
    if (!respPosts.ok) throw new Error("Gagal mengambil data Posts");
    const postsData = await respPosts.json();

    const respTodos = await fetch(urlTodos);
    if (!respTodos.ok) throw new Error("Gagal mengambil data Todos");
    const todosData = await respTodos.json();

    // 3. Pengolahan Data
    const totalPosts = postsData.length;
    const totalTodos = todosData.length;
    const completedTodos = todosData.filter(todo => todo.completed).length;

    // 4. Output
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

// Jalankan fungsi
getUserDashboard(1);
