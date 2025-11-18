// 1. Parent Class Product
class Product {
  #stock = 0; // private field

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
      console.log("Jumlah penjualan harus angka positif!");
      return;
    }
    if (quantity > this.#stock) {
      console.log(`Gagal menjual ${this.name}: stok tidak cukup!`);
      return;
    }
    this.#stock -= quantity;
    console.log(`Berhasil menjual ${quantity} ${this.name}. Sisa stok: ${this.#stock}`);
  }

  displayInfo() {
    console.log(`SKU: ${this.sku}`);
    console.log(`Nama: ${this.name}`);
    console.log(`Harga: Rp ${this.price.toLocaleString('id-ID')}`);
    console.log(`Sisa Stok: ${this.#stock}`);
  }
}

// 2. Child Class: Book
class Book extends Product {
  constructor(sku, name, price, initialStock, author) {
    super(sku, name, price, initialStock);
    this.author = author;
  }

  // Override displayInfo()
  displayInfo() {
    super.displayInfo(); // panggil info dasar dari Product
    console.log(`Penulis: ${this.author}`);
  }
}

// 3. Child Class: Electronic
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

// --- DEMO ---
const buku1 = new Book("BK001", "Pemrograman JS", 120000, 10, "Andi");
const hp1 = new Electronic("EL001", "Smartphone X", 3500000, 5, 24);

buku1.displayInfo();
buku1.sell(3);
buku1.addStock(5);
console.log("");

hp1.displayInfo();
hp1.sell(10); // stok tidak cukup
hp1.sell(2);
