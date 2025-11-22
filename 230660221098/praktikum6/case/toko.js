class Product {
  #stock;

  constructor(sku, name, price, initialStock) {
    this.sku = sku;
    this.name = name;
    this.price = price;
    this.#stock = initialStock;
  }

  addStock(quantity) {
    if (typeof quantity !== 'number' || quantity <= 0) {
      console.log('❌ Jumlah stok yang ditambahkan harus angka positif!');
      return;
    }
    this.#stock += quantity;
    console.log(`✅ Stok ${this.name} berhasil ditambah ${quantity}. Total stok: ${this.#stock}`);
  }

  sell(quantity) {
    if (typeof quantity !== 'number' || quantity <= 0) {
      console.log('❌ Jumlah penjualan harus angka positif!');
      return;
    }
    if (quantity > this.#stock) {
      console.log(`❌ Penjualan gagal! Stok ${this.name} tidak mencukupi.`);
      return;
    }
    this.#stock -= quantity;
    console.log(`💰 Berhasil menjual ${quantity} ${this.name}. Sisa stok: ${this.#stock}`);
  }

  displayInfo() {
    console.log(`\n📦 Produk: ${this.name}`);
    console.log(`   SKU   : ${this.sku}`);
    console.log(`   Harga : Rp ${this.price.toLocaleString('id-ID')}`);
    console.log(`   Stok  : ${this.#stock}`);
  }
}

class Book extends Product {
  constructor(sku, name, price, initialStock, author) {
    super(sku, name, price, initialStock);
    this.author = author;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`   Penulis: ${this.author}`);
  }
}

class Electronic extends Product {
  constructor(sku, name, price, initialStock, warrantyMonths) {
    super(sku, name, price, initialStock);
    this.warrantyMonths = warrantyMonths;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`   Garansi: ${this.warrantyMonths} bulan`);
  }
}

const buku1 = new Book('BK001', 'Belajar JavaScript', 85000, 10, 'Tika Anggraeni');
const laptop = new Electronic('EL001', 'Laptop ASUS', 8500000, 5, 24);

buku1.displayInfo();
laptop.displayInfo();

console.log('\n=== Transaksi Buku ===');
buku1.sell(3);
buku1.addStock(5);
buku1.sell(12);
buku1.displayInfo();

console.log('\n=== Transaksi Elektronik ===');
laptop.sell(2);
laptop.addStock(3);
laptop.sell(7);
laptop.displayInfo();
