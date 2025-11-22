// inventaris.js
// Studi Kasus 6 - Bagian 2: Sistem Inventaris Toko Online

// === Kelas Induk ===
class Product {
  #stock;

  constructor(sku, name, price, initialStock) {
    this.sku = sku;
    this.name = name;
    this.price = price;
    this.#stock = initialStock;
  }

  addStock(quantity) {
    if (typeof quantity !== "number" || quantity <= 0) {
      console.log("Jumlah stok harus berupa angka positif!");
      return;
    }
    this.#stock += quantity;
    console.log(`Stok ${this.name} bertambah ${quantity}. Total stok: ${this.#stock}`);
  }

  sell(quantity) {
    if (quantity > this.#stock) {
      console.log(`Penjualan gagal: stok ${this.name} tidak mencukupi!`);
      return;
    }
    this.#stock -= quantity;
    console.log(`Penjualan ${quantity} unit ${this.name} berhasil. Sisa stok: ${this.#stock}`);
  }

  displayInfo() {
    console.log(`Nama Produk: ${this.name}`);
    console.log(`Harga       : Rp ${this.price.toLocaleString('id-ID')}`);
    console.log(`Stok Tersisa: ${this.#stock}`);
  }
}

// === Kelas Anak 1 ===
class Book extends Product {
  constructor(sku, name, price, initialStock, author) {
    super(sku, name, price, initialStock);
    this.author = author;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Penulis     : ${this.author}`);
  }
}

// === Kelas Anak 2 ===
class Electronic extends Product {
  constructor(sku, name, price, initialStock, warrantyMonths) {
    super(sku, name, price, initialStock);
    this.warrantyMonths = warrantyMonths;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Garansi     : ${this.warrantyMonths} bulan`);
  }
}

// --- Penggunaan ---
console.log("=== SISTEM INVENTARIS TOKO ONLINE ===\n");

const buku1 = new Book("BK001", "Pemrograman JavaScript", 120000, 10, "Nabila Apriliani");
buku1.displayInfo();
console.log("");
buku1.sell(3);
buku1.addStock(5);
buku1.displayInfo();

console.log("\n-----------------------------\n");

const laptop = new Electronic("EL001", "AXIOO HYPE 5", 8500000, 5, 24);
laptop.displayInfo();
console.log("");
laptop.sell(2);
laptop.sell(10); // stok tidak cukup
laptop.addStock(3);
laptop.displayInfo();