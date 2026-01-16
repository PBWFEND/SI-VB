// dashboard_paralel.js

async function getUserDashboardParalel(userId) {
  console.log(`--- MEMUAT DATA USER ID: ${userId} (MODE PARALEL) ---`);

  try {
    // URL
    const urlUser = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const urlPosts = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
    const urlTodos = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;

    // ==== CARA PARALEL ====
    // Fetch user tunggu sendiri, tapi posts & todos berjalan BERSAMAAN
    const respUser = await fetch(urlUser);
    if (!respUser.ok) throw new Error("Gagal mengambil data User");
    const userData = await respUser.json();

    // fetch 2 API sekaligus (paralel)
    const [postsData, todosData] = await Promise.all([
      fetch(urlPosts).then(res => {
        if (!res.ok) throw new Error("Gagal mengambil data Posts");
        return res.json();
      }),
      fetch(urlTodos).then(res => {
        if (!res.ok) throw new Error("Gagal mengambil data Todos");
        return res.json();
      })
    ]);

    // Olah data
    const totalPosts = postsData.length;
    const totalTodos = todosData.length;
    const completedTodos = todosData.filter(todo => todo.completed).length;

    // Tampilan output
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

getUserDashboardParalel(1);