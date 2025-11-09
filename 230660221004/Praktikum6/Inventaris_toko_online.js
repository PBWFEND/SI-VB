// ================================
// 2. Sistem Inventaris Toko Online
// ================================

// ===== Parent Class =====
class Product {
  #stock; // field privat untuk enkapsulasi

  constructor(sku, name, price, initialStock) {
    this.sku = sku;
    this.name = name;
    this.price = price;
    this.#stock = initialStock >= 0 ? initialStock : 0;
  }

  addStock(quantity) {
    if (typeof quantity !== "number" || quantity <= 0) {
      console.log("Jumlah stok harus angka positif!");
      return;
    }
    this.#stock += quantity;
    console.log(`${quantity} stok ditambahkan ke ${this.name}. Total stok: ${this.#stock}`);
  }

  sell(quantity) {
    if (typeof quantity !== "number" || quantity <= 0) {
      console.log("Jumlah penjualan tidak valid!");
      return;
    }
    if (quantity > this.#stock) {
      console.log(`Penjualan gagal! Stok ${this.name} tidak mencukupi.`);
      return;
    }
    this.#stock -= quantity;
    console.log(`${quantity} unit ${this.name} terjual. Sisa stok: ${this.#stock}`);
  }

  displayInfo() {
    console.log(`Produk: ${this.name} | Harga: Rp${this.price} | Stok tersisa: ${this.#stock}`);
  }
}

// ===== Child Class: Book =====
class Book extends Product {
  constructor(sku, name, price, initialStock, author) {
    super(sku, name, price, initialStock);
    this.author = author;
  }

  // Override method displayInfo()
  displayInfo() {
    super.displayInfo();
    console.log(`Penulis: ${this.author}`);
  }
}

// ===== Child Class: Electronic =====
class Electronic extends Product {
  constructor(sku, name, price, initialStock, warrantyMonths) {
    super(sku, name, price, initialStock);
    this.warrantyMonths = warrantyMonths;
  }

  // Override method displayInfo()
  displayInfo() {
    super.displayInfo();
    console.log(`Garansi: ${this.warrantyMonths} bulan`);
  }
}

// ================================
// Demonstrasi Penggunaan
// ================================

console.log("=== SISTEM INVENTARIS TOKO Rian ONLINE ===\n");

// Produk Buku
const buku1 = new Book("BK001", "Pemrograman JavaScript", 95000, 10, "Wasba Nugsaha");
buku1.displayInfo();
buku1.sell(3);
buku1.addStock(5);
buku1.displayInfo();
buku1.sell(20); // stok tidak cukup

console.log("\n------------------------------\n");

// Produk Elektronik
const laptop = new Electronic("EL001", "Laptop Acer Aspire", 7500000, 5, 24);
laptop.displayInfo();
laptop.sell(2);
laptop.sell(10); // stok tidak cukup
laptop.addStock(4);
laptop.displayInfo();
