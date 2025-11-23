const dataProduk = [
  { id: 1, nama: "Laptop Asus", harga: 12000000, kategori: "Elektronik" },
  { id: 2, nama: "Buku OOP", harga: 100000, kategori: "Buku" },
  { id: 3, nama: "Mouse Logitech", harga: 35000, kategori: "Elektronik" },
  { id: 4, nama: "Novel 'Bumi'", harga: 85000, kategori: "Buku" },
];

const produkElektronik = dataProduk.filter(
  (produk) => produk.kategori === "Elektronik"
);

const namaProduk = dataProduk.map(
  (produk) => `(ID: ${produk.id}) ${produk.nama}`
);

console.log("Output Tugas 1 (produkElektronik):");
console.log(produkElektronik);
console.log("\n--------------------------\n");

console.log("Output Tugas 2 (namaProduk):");
console.log(namaProduk);
