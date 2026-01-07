// soal2.js

// Data Array of Objects (Modul 3 & 4)
const dataProduk = [
  { id: 1, nama: "Laptop Asus", harga: 12000000, kategori: "Elektronik" },
  { id: 2, nama: "Buku OOP", harga: 100000, kategori: "Buku" },
  { id: 3, nama: "Mouse Logitech", harga: 350000, kategori: "Elektronik" },
  { id: 4, nama: "Novel 'Bumi'", harga: 85000, kategori: "Buku" },
];

// 1. Filter produk kategori "Elektronik" (Menggunakan .filter() - Modul 3)
const produkElektronik = dataProduk.filter(produk => produk.kategori === "Elektronik");

// 2. Map daftar string (Menggunakan .map() dan Template Literals - Modul 3 & 5)
const namaProduk = dataProduk.map(produk => {
    return `(ID: ${produk.id}) ${produk.nama}`;
});

// Output
console.log("--- Produk Elektronik (.filter()) ---");
console.log(produkElektronik);

console.log("\n--- Daftar Nama Produk (.map()) ---");
console.log(namaProduk);