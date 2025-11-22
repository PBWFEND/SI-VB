// Parent Class
class Product {
    #stock; // private field

    constructor(sku, name, price, initialStock) {
        this.sku = sku;
        this.name = name;
        this.price = price;
        this.#stock = initialStock;
    }

    addStock(quantity) {
        if (quantity <= 0) {
            console.log("❌ Quantity harus lebih dari 0!");
            return;
        }
        this.#stock += quantity;
        console.log(`✅ Stok ${this.name} bertambah ${quantity}. Total: ${this.#stock}`);
    }

    sell(quantity) {
        if (quantity <= 0) {
            console.log("❌ Quantity penjualan tidak valid!");
            return;
        }

        if (quantity > this.#stock) {
            console.log(`❌ Penjualan gagal! Stok ${this.name} tidak mencukupi.`);
            return;
        }

        this.#stock -= quantity;
        console.log(`✅ ${quantity} unit ${this.name} terjual. Sisa stok: ${this.#stock}`);
    }

    getStock() {
        return this.#stock;
    }

    displayInfo() {
        console.log(`\n--- Product Info ---`);
        console.log(`SKU: ${this.sku}`);
        console.log(`Nama: ${this.name}`);
        console.log(`Harga: Rp${this.price}`);
        console.log(`Stok Tersisa: ${this.#stock}`);
    }
}

// Child Class - Book
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

// Child Class - Electronic
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

// --- Contoh Penggunaan ---
const book1 = new Book("BK001", "JavaScript Handbook", 150000, 10, "Zed");
const laptop = new Electronic("EL001", "Laptop Acer Nitro", 12000000, 5, 24);

// Tampilkan info awal
book1.displayInfo();
laptop.displayInfo();

// Operasi stok
book1.sell(3);
book1.addStock(5);
book1.displayInfo();

laptop.sell(10);   // stok tidak cukup
laptop.sell(2);
laptop.displayInfo();
