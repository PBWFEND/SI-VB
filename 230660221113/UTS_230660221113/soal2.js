// soal2.js
// Pengolahan Data Array (ES6+)

const dataProduk = [
  { id: 1, nama: "Laptop Asus", harga: 12000000, kategori: "Elektronik" },
  { id: 2, nama: "Buku OOP", harga: 100000, kategori: "Buku" },
  { id: 3, nama: "Mouse Logitech", harga: 350000, kategori: "Elektronik" },
  { id: 4, nama: "Novel 'Bumi'", harga: 85000, kategori: "Buku" },
];

// 1. Filter produk kategori Elektronik
const produkElektronik = dataProduk.filter(
  (item) => item.kategori === "Elektronik"
);

// 2. Map untuk menghasilkan daftar nama produk dengan format:
const namaProduk = dataProduk.map(
  (item) => `(ID: ${item.id}) ${item.nama}`
);

// Cetak output sesuai instruksi
console.log(produkElektronik);
console.log(namaProduk);