const mysql = require('mysql2/promise');

// Konfigurasi koneksi ke database
const dbConfig = {
    host: 'localhost',
    user: 'root',      // Default user XAMPP
    password: '',      // Default password XAMPP kosong
    database: 'praktikum_db'
};

async function main() {
    let connection;
    try {
        // Membuat Koneksi
        connection = await mysql.createConnection(dbConfig);
        console.log("--- BERHASIL TERHUBUNG KE MYSQL ---");

        // 1. CREATE (Menambahkan Data)
        console.log("\n[CREATE] Menambahkan data...");
        await connection.execute(
            'INSERT INTO todos (tugas, selesai) VALUES (?, ?)',
            ['Belajar Database Nodejs', false]
        );

        // 2. READ (Membaca Data)
        console.log("\n[READ] Daftar Tugas:");
        const [rows] = await connection.execute('SELECT * FROM todos');
        console.table(rows); // Menggunakan console.table agar lebih rapi

        // 3. UPDATE (Mengubah Data)
        console.log("\n[UPDATE] Mengubah status tugas...");
        await connection.execute(
            'UPDATE todos SET selesai = ? WHERE tugas = ?',
            [true, 'Belajar Database Nodejs']
        );

        // 4. DELETE (Menghapus Data)
        console.log("\n[DELETE] Menghapus data...");
        // Contoh menghapus jika sudah selesai (opsional)
        // await connection.execute('DELETE FROM todos WHERE selesai = ?', [true]);

        console.log("\n--- OPERASI CRUD SELESAI ---");

    } catch (error) {
        console.error("Terjadi Error:", error.message);
    } finally {
        if (connection) await connection.end();
    }
}

main();