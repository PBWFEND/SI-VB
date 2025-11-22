const API_URL = 'https://jsonplaceholder.typicode.com/users/1';

async function ambilDataPengguna() {
  console.log('Mengambil data...');

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Gagal mengambil data, status: ${response.status}`);
    }

    const data = await response.json();

    console.log('\n--- Data Pengguna Ditemukan ---');
    console.log(`Nama    : ${data.name}`);
    console.log(`Email   : ${data.email}`);
    console.log(`Alamat  : ${data.address.street}, ${data.address.city}`);
    console.log(`Telepon : ${data.phone}`);
  } catch (error) {
    console.error('\nTerjadi Kesalahan!');
    console.error(error.message);
  }
}

ambilDataPengguna();

console.log('... Baris ini akan tampil lebih dulu!');
