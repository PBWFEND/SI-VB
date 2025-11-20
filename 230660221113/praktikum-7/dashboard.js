// dashboard.js

async function getUserDashboard(userId) {
  console.log(`--- MEMUAT DATA USER ID: ${userId} ---`);

  try {
    // URL sumber data
    const urlUser = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const urlPosts = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
    const urlTodos = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;

    // Ambil profil user
    const respUser = await fetch(urlUser);
    if (!respUser.ok) throw new Error("Gagal mengambil data profil pengguna");
    const userData = await respUser.json();

    // Ambil posts
    const respPosts = await fetch(urlPosts);
    if (!respPosts.ok) throw new Error("Gagal mengambil data postingan");
    const postsData = await respPosts.json();

    // Ambil todos
    const respTodos = await fetch(urlTodos);
    if (!respTodos.ok) throw new Error("Gagal mengambil data todo list");
    const todosData = await respTodos.json();

    // Hitung jumlah postingan dan todo selesai
    const totalPosts = postsData.length;
    const totalTodos = todosData.length;
    const completedTodos = todosData.filter(t => t.completed === true).length;

    // Output ke terminal
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
getUserDashboard(1);
