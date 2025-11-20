// inventaris.js

// Parent Class: Product
class Product {
  #stock; // Private field untuk stok

  constructor(sku, name, price, initialStock) {
    this.sku = sku;
    this.name = name;
    this.price = price;
    this.#stock = initialStock;
  }

  addStock(quantity) {
    if (typeof quantity !== "number" || quantity <= 0) {
      console.log("Jumlah stok harus angka positif!");
      return;
    }
    this.#stock += quantity;
    console.log(`Stok ${this.name} bertambah ${quantity}. Total: ${this.#stock}`);
  }

  sell(quantity) {
    if (typeof quantity !== "number" || quantity <= 0) {
      console.log("Jumlah penjualan tidak valid!");
      return;
    }
    if (quantity > this.#stock) {
      console.log(`Penjualan gagal! Stok ${this.name} tidak cukup.`);
      return;
    }
    this.#stock -= quantity;
    console.log(`Berhasil menjual ${quantity} ${this.name}. Sisa stok: ${this.#stock}`);
  }

  displayInfo() {
    console.log(`Produk: ${this.name} | Harga: Rp${this.price} | Stok: ${this.#stock}`);
  }
}

// Child Class: Book
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

// Child Class: Electronic
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

// Produk buku
const book1 = new Book("BK001", "Pemrograman JavaScript", 120000, 10, "Andi Budiman");
book1.displayInfo();
book1.sell(3);
book1.addStock(5);
book1.displayInfo();

console.log("");

// Produk elektronik
const laptop = new Electronic("EL001", "Laptop Acer Aspire", 8500000, 5, 24);
laptop.displayInfo();
laptop.sell(2);
laptop.sell(10); // stok tidak cukup
laptop.addStock(3);
laptop.displayInfo();