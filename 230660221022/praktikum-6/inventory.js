// Parent Class : Product
class Product {
    // Private field untuk stok
    #stock = 0;

    constructor(sku, name, price, initialStock) {
        this.sku = sku;
        this.name = name;
        this.price = price;

        // Validasi stok awal
        if (typeof initialStock === "number" && initialStock >= 0) {
            this.#stock = initialStock;
        } else {
            console.log("Stok awal tidak valid, diset ke 0");
            this.#stock = 0;
        }
    }

    // Method menambah stok
    addStock(quantity) {
        if (typeof quantity !== "number" || quantity <= 0) {
            console.log("Jumlah stok harus angka positif!");
            return;
        }
        this.#stock += quantity;
        console.log(`Stok ${this.name} bertambah ${quantity}. Total: ${this.#stock}`);
    }

    // Method mengurangi stok (penjualan)
    sell(quantity) {
        if (typeof quantity !== "number" || quantity <= 0) {
            console.log("Jumlah penjualan harus angka positif!");
            return;
        }
        if (quantity > this.#stock) {
            console.log(`Gagal menjual! Stok ${this.name} hanya tersisa ${this.#stock}.`);
            return;
        }

        this.#stock -= quantity;
        console.log(`Berhasil menjual ${quantity} ${this.name}. Sisa stok: ${this.#stock}`);
    }

    // Menampilkan info dasar
    displayInfo() {
        console.log(`Produk: ${this.name}`);
        console.log(`Harga: Rp${this.price}`);
        console.log(`Stok Tersisa: ${this.#stock}`);
    }
}


// Child Class : Book
class Book extends Product {
    constructor(sku, name, price, initialStock, author) {
        super(sku, name, price, initialStock);  // kirim ke Product
        this.author = author;
    }

    // Override
    displayInfo() {
        super.displayInfo(); 
        console.log(`Penulis: ${this.author}`);
    }
}


// Child Class : Electronic
class Electronic extends Product {
    constructor(sku, name, price, initialStock, warrantyMonths) {
        super(sku, name, price, initialStock);  // kirim ke Product
        this.warrantyMonths = warrantyMonths;
    }

    // Override
    displayInfo() {
        super.displayInfo();
        console.log(`Garansi: ${this.warrantyMonths} bulan`);
    }
}

// DEMONSTRASI PROGRAM

// Buku
const book1 = new Book("BK001", "Buku Pemrograman JavaScript", 120000, 10, "Deyna Angeliawati Zahara");
book1.displayInfo();
console.log("");

// Tambah dan jual stok
book1.addStock(5);
book1.sell(3);
book1.sell(20); // gagal
console.log("");

// Elektronik
const laptop = new Electronic("EL999", "Laptop StudentBook", 8500000, 5, 24);
laptop.displayInfo();
console.log("");

laptop.sell(2);
laptop.addStock(10);
