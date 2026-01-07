// --- 1. Mendefinisikan Interface ---
// Ini berfungsi sebagai "kontrak" untuk bentuk data Buku
interface Buku {
  id: number;
  judul: string;
  penulis: string;
  tersedia: boolean;
}

// --- 2. Mengelola Data dengan Array ---
const inventaris: Buku[] = [];

// Fungsi untuk menambah buku
function tambahBuku(buku: Buku): void {
  inventaris.push(buku);
  console.log(`Buku "${buku.judul}" telah ditambahkan.`);
}

// Fungsi untuk menampilkan semua buku
function tampilkanInventaris(items: Buku[]): void {
  console.log("\n--- Daftar Inventaris Buku ---");
  items.forEach((item) => {
    const status = item.tersedia ? "Tersedia" : "Dipinjam";
    console.log(`${item.id}. ${item.judul} oleh ${item.penulis} [${status}]`);
  });
}

// --- 3. Menggunakan Generics ---
// Fungsi ini bisa mencari item apa saja dalam array berdasarkan kunci tertentu
function cariItem<T, K extends keyof T>(items: T[], key: K, value: T[K]): T | undefined {
  return items.find(item => item[key] === value);
}

// --- 4. Menjalankan Program ---

// Membuat data buku baru
const buku1: Buku = {
  id: 1,
  judul: "TypeScript in Action",
  penulis: "Asher Vale",
  tersedia: true
};

const buku2: Buku = {
  id: 2,
  judul: "Learning TypeScript",
  penulis: "Josh Goldberg",
  tersedia: false
};

// Eksekusi fungsi
tambahBuku(buku1);
tambahBuku(buku2);
tampilkanInventaris(inventaris);

// Demo penggunaan Generics
console.log("\n--- Hasil Pencarian Generik ---");
const bukuDitemukan = cariItem<Buku, "id">(inventaris, "id", 2);

if (bukuDitemukan) {
  console.log(`Ditemukan buku dengan ID 2: ${bukuDitemukan.judul}`);
}