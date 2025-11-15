// ----------------------------
// Parent Class: Product
// ----------------------------
class Product {
    #stock; // Private field (encapsulation)

    constructor(sku, name, price, initialStock) {
        this.sku = sku;
        this.name = name;
        this.price = price;

        // Validasi stok awal
        this.#stock = initialStock >= 0 ? initialStock : 0;
    }

    addStock(quantity) {
        if (typeof quantity !== "number" || quantity <= 0) {
            console.log("Jumlah stok harus angka positif!");
            return;
        }

        this.#stock += quantity;
        console.log(`Stok ${this.name} bertambah ${quantity}. Stok sekarang: ${this.#stock}`);
    }

    sell(quantity) {
        if (typeof quantity !== "number" || quantity <= 0) {
            console.log("Jumlah penjualan harus angka positif!");
            return;
        }

        if (quantity > this.#stock) {
            console.log(`Gagal! Stok ${this.name} tidak mencukupi.`);
            return;
        }

        this.#stock -= quantity;
        console.log(`${quantity} unit ${this.name} terjual. Sisa stok: ${this.#stock}`);
    }

    displayInfo() {
        console.log(`Produk: ${this.name}`);
        console.log(`Harga: Rp${this.price}`);
        console.log(`Stok Tersisa: ${this.#stock}`);
    }
}



// ----------------------------
// Child Class: Book
// ----------------------------
class Book extends Product {
    constructor(sku, name, price, initialStock, author) {
        super(sku, name, price, initialStock); // kirim ke parent
        this.author = author;
    }

    displayInfo() {
        super.displayInfo(); // panggil info dasar
        console.log(`Penulis: ${this.author}`);
    }
}



// ----------------------------
// Child Class: Electronic
// ----------------------------
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



// ----------------------------
// DEMONSTRASI PENGGUNAAN
// ----------------------------

// Produk Buku
const buku1 = new Book("BK001", "Pemrograman JavaScript", 120000, 10, "John Doe");

console.log("=== DATA BUKU ===");
buku1.displayInfo();

buku1.sell(3);
buku1.addStock(5);
buku1.sell(20); // stok tidak cukup

console.log("\n");

// Produk Elektronik
const hp1 = new Electronic("EL001", "Smartphone X", 3500000, 5, 24);

console.log("=== DATA ELEKTRONIK ===");
hp1.displayInfo();

hp1.sell(2);
hp1.addStock(10);
hp1.sell(20); // stok tidak cukup
