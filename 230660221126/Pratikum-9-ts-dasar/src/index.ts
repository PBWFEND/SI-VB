// src/index.ts

// --- 1. Interface (Kontrak Data) ---
// Mendefinisikan bentuk data untuk sebuah Buku
interface Buku {
  id: number;
  judul: string;
  penulis: string;
  tersedia: boolean;
}

// --- 2. Static Typing & Functions ---
// Kita gunakan 'Interface' sebagai tipe data
let inventaris: Buku[] = [];

// Fungsi ini MENGHARUSKAN argumennya berbentuk 'Buku'
function tambahBuku(buku: Buku) {
  inventaris.push(buku);
  console.log(`Buku "${buku.judul}" telah ditambahkan.`);
}

function tampilkanInventaris(daftar: Buku[]) {
  console.log("\n--- Inventaris Perpustakaan ---");
  daftar.forEach(buku => {
    const status = buku.tersedia ? "Tersedia" : "Dipinjam";
    console.log(`[${buku.id}] ${buku.judul} oleh ${buku.penulis} (${status})`);
  });
}

// --- 3. Generics (Fungsi Utility) ---
// Fungsi generik untuk mencari item dalam array berdasarkan propertinya
// T = Tipe item (misal: Buku)
// K = Kunci dari T (misal: 'id' atau 'judul')
function cariItem<T, K extends keyof T>(
  items: T[], 
  key: K, 
  value: T[K]
): T | undefined {
  return items.find(item => item[key] === value);
}


// --- 4. Menjalankan Program ---

// Menggunakan static typing saat membuat data
const buku1: Buku = {
  id: 1,
  judul: "TypeScript in Action: From Fundamentals to Advanced Patterns",
  penulis: "Asher Vale",
  tersedia: true
};

const buku2: Buku = {
  id: 2,
  judul: "Learning TypeScript",
  penulis: "Josh Goldberg",
  tersedia: false
};

// Menjalankan fungsi
tambahBuku(buku1);
tambahBuku(buku2);
tampilkanInventaris(inventaris);

// Menggunakan fungsi Generik
console.log("\n--- Hasil Pencarian Generik ---");
const bukuDitemukan = cariItem<Buku, "id">(inventaris, "id", 2);
// const bukuDitemukan = cariItem(inventaris, "id", 2); // TS juga bisa menebaknya

if (bukuDitemukan) {
  console.log(`Ditemukan buku dengan ID 2: ${bukuDitemukan.judul}`);
}