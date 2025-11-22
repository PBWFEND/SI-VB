// soal2.js
const dataProduk = [
  { id: 1, nama: "Laptop Asus", harga: 12000000, kategori: "Elektronik" },
  { id: 2, nama: "Buku OOP", harga: 100000, kategori: "Buku" },
  { id: 3, nama: "Mouse Logitech", harga: 350000, kategori: "Elektronik" },
  { id: 4, nama: "Novel 'Bumi'", harga: 85000, kategori: "Buku" },
];

// filter untuk kategori Elektronik
const produkElektronik = dataProduk.filter(p => p.kategori === "Elektronik");

// map untuk daftar nama produk sesuai format
const namaProduk = dataProduk.map(p => `(ID: ${p.id}) ${p.nama}`);

// Output
console.log("Produk Elektronik:");
console.log(produkElektronik);
console.log("\nDaftar Nama Produk:");
console.log(namaProduk);