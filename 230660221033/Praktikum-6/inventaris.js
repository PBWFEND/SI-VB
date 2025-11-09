class Product {
    #stock;

    /**
     * @param {string} sku
     * @param {string} name
     * @param {number} price
     * @param {number} initialStock
     */
    constructor(sku, name, price, initialStock) {
        this.sku = sku;
        this.name = name;
        this.price = price;
        this.#stock = initialStock >= 0 ? initialStock : 0;
    }

    /**
     * @param {number} quantity
     */
    addStock(quantity) {
        if (typeof quantity !== 'number' || quantity <= 0) {
            console.warn(`[WARNING] Penambahan stok ${this.name} gagal. Jumlah harus angka positif.`);
            return;
        }
        this.#stock += quantity;
        console.log(`[STOK] ${quantity} unit ${this.name} ditambahkan. Stok baru: ${this.#stock}.`);
    }

    /**
     * @param {number} quantity
     */
    sell(quantity) {
        if (typeof quantity !== 'number' || quantity <= 0) {
            console.warn(`[WARNING] Penjualan ${this.name} gagal. Jumlah harus angka positif.`);
            return false;
        }
        
        if (quantity > this.#stock) {
            console.error(`[ERROR] Penjualan ${this.name} gagal. Stok tidak mencukupi (${this.#stock} unit tersisa).`);
            return false;
        }
        
        this.#stock -= quantity;
        console.log(`[JUAL] ${quantity} unit ${this.name} terjual. Stok sisa: ${this.#stock}.`);
        return true;
    }

    displayInfo() {
        console.log(`\n--- Info Produk (${this.name}) ---`);
        console.log(`SKU: ${this.sku}`);
        console.log(`Harga: Rp ${this.price.toLocaleString('id-ID')}`);
        console.log(`Stok Tersisa: ${this.#stock} unit`); 
    }
}

class Book extends Product {
    /**
     * @param {string} sku
     * @param {string} name
     * @param {number} price
     * @param {number} initialStock
     * @param {string} author
     */
    constructor(sku, name, price, initialStock, author) {
        super(sku, name, price, initialStock);
        this.author = author;
    }

    displayInfo() {
        super.displayInfo(); 
        console.log(`Kategori: Buku`);
        console.log(`Penulis: ${this.author}`);
    }
}

class Electronic extends Product {
    /**
     * @param {string} sku
     * @param {string} name
     * @param {number} price
     * @param {number} initialStock
     * @param {number} warrantyMonths
     */
    constructor(sku, name, price, initialStock, warrantyMonths) {
        super(sku, name, price, initialStock);
        this.warrantyMonths = warrantyMonths;
    }

    displayInfo() {
        super.displayInfo(); 
        console.log(`Kategori: Elektronik`);
        console.log(`Garansi: ${this.warrantyMonths} bulan`);
    }
}

console.log("==================================================");
console.log("             DEMO: SISTEM INVENTARIS");
console.log("==================================================");

const bukuJS = new Book('B001', 'Belajar JavaScript ES6', 150000, 10, 'John Doe');
bukuJS.displayInfo();

const laptop = new Electronic('E002', 'Laptop Gaming X1', 12500000, 5, 24);
laptop.displayInfo();

console.log("\n--- DEMO MANAJEMEN STOK ---");
bukuJS.addStock(5);

bukuJS.sell(3);

bukuJS.sell(15);

laptop.sell(-2);

console.log("\n--- INFO AKHIR ---");
bukuJS.displayInfo();
laptop.displayInfo();
console.log("==================================================");