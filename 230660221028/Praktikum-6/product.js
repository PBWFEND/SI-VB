// product.js

// Parent Class: Product
class Product {
  // private field untuk stok (enkapsulasi)
  #stock = 0;

  constructor(sku, name, price, initialStock = 0) {
    this.sku = sku;
    this.name = name;
    this.price = price;

    // validasi initialStock
    if (typeof initialStock === "number" && initialStock >= 0) {
      this.#stock = initialStock;
    } else {
      this.#stock = 0;
    }
  }

  // Methods
  addStock(quantity) {
    if (typeof quantity !== "number" || quantity <= 0) {
      console.log("addStock gagal: quantity harus angka positif!");
      return;
    }
    this.#stock += quantity;
    console.log(`${this.name} - Stok bertambah ${quantity}. Stok sekarang: ${this.#stock}`);
  }

  sell(quantity) {
    if (typeof quantity !== "number" || quantity <= 0) {
      console.log("sell gagal: quantity harus angka positif!");
      return;
    }
    if (quantity > this.#stock) {
      console.log(`sell gagal: Stok tidak mencukupi (${this.#stock}).`);
      return;
    }
    this.#stock -= quantity;
    console.log(`${this.name} - Terjual ${quantity}. Sisa stok: ${this.#stock}`);
  }

  // display info dasar (name, price, stok tersisa)
  displayInfo() {
    console.log(`SKU: ${this.sku}`);
    console.log(`Nama: ${this.name}`);
    console.log(`Harga: Rp ${this.price.toLocaleString('id-ID')}`);
    console.log(`Stok Tersisa: ${this.#stock}`);
  }
}


// Child Class: Book (menambahkan author)
class Book extends Product {
  constructor(sku, name, price, initialStock = 0, author = "Unknown") {
    super(sku, name, price, initialStock);
    this.author = author;
  }

  // override displayInfo: panggil super lalu tampilkan author
  displayInfo() {
    super.displayInfo();
    console.log(`Penulis: ${this.author}`);
  }
}


// Child Class: Electronic (menambahkan warrantyMonths)
class Electronic extends Product {
  constructor(sku, name, price, initialStock = 0, warrantyMonths = 0) {
    super(sku, name, price, initialStock);
    this.warrantyMonths = warrantyMonths;
  }

  // override displayInfo: panggil super lalu tampilkan warranty
  displayInfo() {
    super.displayInfo();
    console.log(`Masa Garansi: ${this.warrantyMonths} bulan`);
  }
}

// -----------------------
// Demonstrasi penggunaan
// -----------------------

console.log("=== Demo Sistem Inventaris Toko Online ===\n");

// buat instance Book
const buku1 = new Book("B-001", "Belajar NodeJSP", 125000, 10, "Sinta");
console.log("--- Info Buku ---");
buku1.displayInfo();
console.log("");

// jual 3 buku
buku1.sell(3);

// coba jual melebihi stok
buku1.sell(20);

// tambah stok
buku1.addStock(15);

// tampilkan info lagi
console.log("\n--- Info Buku (setelah transaksi) ---");
buku1.displayInfo();

console.log("\n-----------------\n");

// buat instance Electronic
const elec1 = new Electronic("E-100", "Headphone Wireless", 450000, 5, 12);
console.log("--- Info Electronic ---");
elec1.displayInfo();
console.log("");

// jual 2 unit
elec1.sell(2);

// coba input invalid
elec1.sell(-1);
elec1.addStock(0);

// tampilkan akhir
console.log("\n--- Info Electronic (setelah transaksi) ---");
elec1.displayInfo();
