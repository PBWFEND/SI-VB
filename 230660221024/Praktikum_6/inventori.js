// Studi Kasus 6 - Sistem Inventaris Toko Online
// Nama: Ghatan Zalfaa Kautsar
// NPM : 230660221001
// Kelas: SI-VB

// Parent Class
class Product {
  #stock = 0;

  constructor(sku, name, price, initialStock) {
    this.sku = sku;
    this.name = name;
    this.price = price;
    this.#stock = initialStock;
  }

  addStock(quantity) {
    if (quantity <= 0) {
      console.log('Jumlah stok harus lebih dari 0.');
      return;
    }
    this.#stock += quantity;
    console.log(
      `Stok ${this.name} bertambah ${quantity}. Total stok: ${this.#stock}`
    );
  }

  sell(quantity) {
    if (quantity > this.#stock) {
      console.log(`Penjualan gagal! Stok ${this.name} tidak mencukupi.`);
      return;
    }
    this.#stock -= quantity;
    console.log(`${quantity} ${this.name} terjual. Sisa stok: ${this.#stock}`);
  }

  displayInfo() {
    console.log(
      `Nama: ${this.name}\nHarga: Rp ${this.price}\nStok Tersisa: ${
        this.#stock
      }`
    );
  }
}

// Child Class - Buku
class Book extends Product {
  constructor(sku, name, price, initialStock, author) {
    super(sku, name, price, initialStock);
    this.author = author;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Penulis: ${this.author}`);
  }
}

// Child Class - Elektronik
class Electronic extends Product {
  constructor(sku, name, price, initialStock, warrantyMonths) {
    super(sku, name, price, initialStock);
    this.warrantyMonths = warrantyMonths;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Garansi: ${this.warrantyMonths} bulan`);
  }
}

// --- Demonstrasi ---
console.log('=== SISTEM INVENTORI TOKO ONLINE ===\n');

const buku1 = new Book(
  'BK001',
  'Pemrograman Berbasis Objek',
  85000,
  10,
  'A. Saputra'
);
buku1.displayInfo();
buku1.sell(3);
buku1.addStock(5);
console.log('');

const laptop = new Electronic('EL001', 'Laptop Asus ROG', 15000000, 5, 24);
laptop.displayInfo();
laptop.sell(2);
laptop.sell(10);
laptop.addStock(3);
