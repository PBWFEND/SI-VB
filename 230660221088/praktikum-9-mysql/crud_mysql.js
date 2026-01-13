// crud_mysql.js
import mysql from 'mysql2/promise';

// Konfigurasi koneksi ke MySQL lokal (default XAMPP)
const dbConfig = {
  host: 'localhost',
  user: 'root',       // User default XAMPP/Laragon/ServBay
  password: '',       // Password default XAMPP/Laragon/ServBay (kosong)
  database: 'praktikum_db' // Database yang kita buat
};

async function mainMySQL() {
  console.log("--- DEMO MYSQL (LOKAL) ---");
  let connection;

  try {
    // Buat koneksi
    connection = await mysql.createConnection(dbConfig);
    console.log("Berhasil terhubung ke database MySQL.");

    // 1. CREATE
    console.log("\n[CREATE] Menambahkan tugas...");
    // Tanda '?' adalah 'placeholder' untuk keamanan (mencegah SQL Injection)
    await connection.execute(
      'INSERT INTO todos (tugas, selesai) VALUES (?, ?), (?, ?)',
      ['Belajar MySQL', false, 'Mengerjakan Modul 9', true]
    );

    // 2. READ
    console.log("\n[READ] Membaca semua tugas...");
    const [rows] = await connection.execute('SELECT * FROM todos');
    console.log(rows);

    // 3. UPDATE
    console.log("\n[UPDATE] Mengubah 'Belajar MySQL'...");
    await connection.execute(
      'UPDATE todos SET selesai = ? WHERE tugas = ?',
      [true, 'Belajar MySQL']
    );

    // 4. DELETE
    console.log("\n[DELETE] Menghapus 'Mengerjakan Modul 9'...");
    await connection.execute(
      'DELETE FROM todos WHERE tugas = ?',
      ['Mengerjakan Modul 9']
    );

    // 5. READ (Final)
    console.log("\n[READ] Hasil akhir:");
    const [finalRows] = await connection.execute('SELECT * FROM todos');
    console.log(finalRows);

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    // 5. Tutup koneksi
    if (connection) {
      await connection.end();
      console.log("\nKoneksi ke database ditutup.");
    }
  }
}

mainMySQL();