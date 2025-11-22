// =====================================
// 1. Parent Class: Product
// =====================================
class Product {
    #stock = 0; // private → Encapsulation

    constructor(sku, name, price, initialStock = 0) {
        this.sku = sku;
        this.name = name;
        this.price = price;
        this.#stock = initialStock;
    }

    addStock(quantity) {
        if (typeof quantity !== "number" || quantity <= 0) {
            console.log("Penambahan stok harus berupa angka positif!");
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
            console.log(`Gagal menjual! Stok ${this.name} tidak cukup.`);
            return;
        }

        this.#stock -= quantity;
        console.log(`Berhasil menjual ${quantity} unit ${this.name}. Sisa stok: ${this.#stock}`);
    }

    displayInfo() {
        console.log(`Produk: ${this.name}`);
        console.log(`Harga: Rp${this.price}`);
        console.log(`Stok tersedia: ${this.#stock}`);
    }
}



// =====================================
// 2. Child Class: Book
// =====================================
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



// =====================================
// 3. Child Class: Electronic
// =====================================
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



// =====================================
// 4. DEMONSTRASI
// =====================================

// Buku
const buku1 = new Book("BK001", "Algoritma Pemrograman", 85000, 10, "Dani Setiawan");

console.log("\n==== DATA BUKU ====");
buku1.displayInfo();
buku1.addStock(5);
buku1.sell(12);  // gagal
buku1.sell(8);   // berhasil
console.log();


// Elektronik
const laptop = new Electronic("EL001", "Laptop Zenix", 7500000, 5, 24);

console.log("==== DATA ELECTRONIC ====");
laptop.displayInfo();
laptop.sell(2);
laptop.addStock(3);
laptop.sell(10); // gagal
