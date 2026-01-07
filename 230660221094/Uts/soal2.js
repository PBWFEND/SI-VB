const dataProduk = [
  { id: 1, nama: "Laptop Asus", harga: 12000000, kategori: "Elektronik" },
  { id: 2, nama: "Buku OOP", harga: 100000, kategori: "Buku" },
  { id: 3, nama: "Mouse Logitech", harga: 350000, kategori: "Elektronik" },
  { id: 4, nama: "Novel 'Bumi'", harga: 85000, kategori: "Buku" },
];

// 1. Filter kategori Elektronik
const produkElektronik = dataProduk.filter(
  (item) => item.kategori === "Elektronik"
);

// 2. Map untuk format nama produk
const namaProduk = dataProduk.map(
  (item) => `(ID: ${item.id}) ${item.nama}`
);

// Output
console.log(produkElektronik);
console.log(namaProduk);
