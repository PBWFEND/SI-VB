const dataProduk = [
  { id: 1, nama: "Laptop Asus", harga: 12000000, kategori: "Elektronik" },
  { id: 2, nama: "Buku OOP", harga: 100000, kategori: "Buku" },
  { id: 3, nama: "Mouse Logitech", harga: 350000, kategori: "Elektronik" },
  { id: 4, nama: "Novel 'Bumi'", harga: 85000, kategori: "Buku" },
];

// 1. Menggunakan .filter() untuk mendapatkan produk kategori "Elektronik"
const produkElektronik = dataProduk.filter(produk => produk.kategori === "Elektronik");

// 2. Menggunakan .map() untuk mendapatkan daftar string nama produk
const namaProduk = dataProduk.map(produk => `(ID: ${produk.id}) ${produk.nama}`);

// Menampilkan Output
console.log("--- Output produkElektronik (.filter()) ---");
console.log(produkElektronik);

console.log("\n--- Output namaProduk (.map()) ---");
console.log(namaProduk);