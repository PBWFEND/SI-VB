// fetch_user.js

// URL dari API (endpoint untuk user dengan ID 1)
const API_URL = 'https://jsonplaceholder.typicode.com/users/1';

/**
 * Fungsi ini mengambil data pengguna dari API menggunakan async/await.
 */
async function ambilDataPengguna() {
  console.log("Mengambil data...");

  try {
    // 1. Await: Menjeda eksekusi sampai 'fetch' selesai
    const response = await fetch(API_URL);

    // 2. Cek apakah request berhasil (HTTP status 200-299)
    if (!response.ok) {
      // Jika server merespons dengan error (misal: 404 Not Found)
      throw new Error(`Gagal mengambil data, status: ${response.status}`);
    }

    // 3. Await: Menjeda eksekusi sampai proses .json() selesai
    // .json() juga asinkron karena perlu membaca dan mem-parsing data
    const data = await response.json();

    // 4. Jika berhasil, tampilkan data yang relevan
    console.log("\n--- Data Pengguna Ditemukan ---");
    console.log(`Nama    : ${data.name}`);
    console.log(`Email   : ${data.email}`);
    console.log(`Alamat  : ${data.address.street}, ${data.address.city}`);
    console.log(`Telepon : ${data.phone}`);

  } catch (error) {
    // 5. Blok catch: Menangkap error jaringan atau error dari 'throw'
    console.error("\nTerjadi Kesalahan!");
    console.error(error.message);
  }
}

// Panggil fungsi async yang sudah kita buat
ambilDataPengguna();

console.log("... Baris ini akan tampil lebih dulu!");
