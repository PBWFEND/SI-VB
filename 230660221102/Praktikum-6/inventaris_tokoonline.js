// --- 1. Parent Class: Product ---
class Product {
    // Private Field untuk Enkapsulasi Stok
    #stock;

    constructor(sku, name, price, initialStock) {
        this.sku = sku;
        this.name = name;
        this.price = price;
        // Inisialisasi private field
        this.#stock = initialStock > 0 ? initialStock : 0;
        
        // Validasi dasar
        if (typeof price !== 'number' || price < 0) {
            console.error(`Peringatan: Harga ${name} tidak valid.`);
        }
    }

    /**
     * Menambah stok barang (simulasi pembelian/restock).
     * @param {number} quantity - Jumlah yang akan ditambahkan.
     */
    addStock(quantity) {
        if (typeof quantity !== 'number' || quantity <= 0) {
            console.log(`[${this.name}] Gagal restock: Kuantitas harus angka positif.`);
            return;
        }
        this.#stock += quantity;
        console.log(`[${this.name}] Stok berhasil ditambah ${quantity}. Total stok baru: ${this.#stock}`);
    }

    /**
     * Mengurangi stok barang (simulasi penjualan).
     * @param {number} quantity - Jumlah yang akan dijual.
     */
    sell(quantity) {
        if (typeof quantity !== 'number' || quantity <= 0) {
            console.log(`[${this.name}] Gagal jual: Kuantitas penjualan harus angka positif.`);
            return false;
        }

        // Validasi Enkapsulasi: Stok tidak boleh negatif
        if (quantity > this.#stock) {
            console.log(`[${this.name}] Gagal jual: Stok tidak mencukupi (${this.#stock} tersedia).`);
            return false;
        }

        this.#stock -= quantity;
        console.log(`[${this.name}] Berhasil menjual ${quantity} unit. Sisa stok: ${this.#stock}`);
        return true;
    }

    /**
     * Menampilkan informasi dasar produk.
     */
    displayInfo() {
        console.log("--- Detail Produk ---");
        console.log(`SKU: ${this.sku}`);
        console.log(`Nama Produk: ${this.name}`);
        console.log(`Harga: Rp ${this.price.toLocaleString('id-ID')}`);
        // Mengakses private field dari dalam class
        console.log(`Stok Tersisa: ${this.#stock} unit`);
    }
}

// --- 2. Child Class: Book (Buku) ---
class Book extends Product {
    constructor(sku, name, price, initialStock, author) {
        // Panggil constructor Parent
        super(sku, name, price, initialStock);
        this.author = author; // Properti tambahan
    }

    /**
     * Override displayInfo() untuk menambahkan info Penulis.
     */
    displayInfo() {
        // Panggil method Parent untuk info dasar
        super.displayInfo(); 
        console.log(`Penulis: ${this.author}`); // Info tambahan
    }
}

// --- 3. Child Class: Electronic (Elektronik) ---
class Electronic extends Product {
    constructor(sku, name, price, initialStock, warrantyMonths) {
        // Panggil constructor Parent
        super(sku, name, price, initialStock);
        this.warrantyMonths = warrantyMonths; // Properti tambahan
    }

    /**
     * Override displayInfo() untuk menambahkan info Garansi.
     */
    displayInfo() {
        // Panggil method Parent untuk info dasar
        super.displayInfo();
        console.log(`Masa Garansi: ${this.warrantyMonths} bulan`); // Info tambahan
    }
}

// ===================================
// D E M O N S T R A S I P E N G G U N A A N
// ===================================

console.log("=========================================");
console.log("      DEMO SISTEM INVENTARIS TOKO");
console.log("=========================================");

// 1. Buat instance produk
const buku1 = new Book('BOK001', 'Filosofi Teras', 95000, 10, 'Henry Manampiring');
const hp1 = new Electronic('ELE005', 'Smartphone Z', 4500000, 5, 12);

console.log("\n--- Info Awal Produk Buku ---");
buku1.displayInfo(); 

// 2. Demonstrasi Encapsulation dan Method (Jual/Beli)

console.log("\n--- Operasi Stok Buku (Enkapsulasi) ---");

// a. Penjualan berhasil
buku1.sell(3); 

// b. Penjualan gagal (Stok kurang)
buku1.sell(15); 

// c. Penambahan stok (Restock)
buku1.addStock(10);

// d. Penjualan ulang
buku1.sell(15);

// e. Demonstrasi validasi input negatif
buku1.sell(-1);
buku1.addStock(0);

console.log("\n--- Info Akhir Produk Buku ---");
buku1.displayInfo();

console.log("\n--- Info Produk Elektronik (Inheritance & Override) ---");
hp1.displayInfo();

console.log("\n--- Operasi Stok Elektronik ---");
hp1.addStock(3);
hp1.sell(5);
hp1.displayInfo();