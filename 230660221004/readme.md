Repositori Praktikum SI-VB
🧑‍💻 Penjelasan Praktikum JavaScript/Node.js
Selamat datang di repository praktikum saya! Di sini, saya mengumpulkan beberapa script yang saya buat untuk mendalami konsep-konsep dasar hingga menengah dalam pemrograman JavaScript menggunakan lingkungan Node.js. Praktikum ini berfokus pada kontrol alir, manipulasi data array, dan object-oriented programming dasar.

🛠️ Persiapan Lingkungan
Saya memastikan sistem saya telah terpasang Node.js agar semua skrip ini dapat saya jalankan langsung dari terminal.

Bash

# Perintah yang saya gunakan untuk cek versi
node -v
📋 Skrip yang Saya Buat
Setiap file di repository ini memiliki tujuan eksplorasi yang spesifik:
🔹A. Praktikum1
1. biodata.js

Pada skrip ini saya membuat program sederhana untuk menampilkan biodata mahasiswa dengan memanfaatkan berbagai fitur dasar JavaScript, terutama string method dan template literals.
Beberapa hal yang saya eksplorasi dalam file ini:

.Deklarasi Variabel (const & let)

Saya menggunakan const untuk data yang tidak berubah (nama, tempat lahir, jurusan, universitas), serta let untuk data yang sifatnya bisa berubah (umur, tanggal lahir, status aktif).

Hal ini melatih pemahaman saya tentang immutable vs mutable variable di JavaScript modern.

. Eksplorasi String Method
Saya mencoba beberapa method bawaan JavaScript:
.toLowerCase() → mengubah teks menjadi huruf kecil
.replace() → mengganti bagian tertentu dari string
.trim() → menghapus spasi di awal & akhir string
Ini membantu saya memahami bagaimana memanipulasi string secara efektif.
. Menggabungkan String
Saya mencoba 2 cara penggabungan string:
Operator +
Cara lama, tetapi masih relevan di beberapa kasus.
Template Literals (ES6)
Cara modern dengan menggunakan backtick (`), lebih rapi dan mudah dibaca.

. Pembuatan Output Biodata
Saya menggunakan template literals multi-baris untuk membuat tampilan biodata yang rapi.
Output mencakup:
Identitas (nama, usia, jurusan, universitas)
Status mahasiswa menggunakan operator ternary
Hasil eksplorasi string method
Perbandingan metode penggabungan string
Akhirnya, seluruh data dicetak dengan console.log().

2. register.js
Skrip ini mensimulasikan proses registrasi karyawan baru. Di dalamnya saya mempraktikkan:
Validasi NIK dengan mengecek panjang digit.
Manipulasi string untuk membuat Employee ID (ambil inisial nama + 4 digit terakhir NIK).
Format gaji ke Rupiah menggunakan toLocaleString('id-ID').
Konversi boolean ke status pekerjaan (Tetap/Kontrak).
Generate email perusahaan otomatis.
Template literals untuk membuat ringkasan data yang rapi di konsol.
File ini melatih penggunaan string method, operator ternary, dan formatting output di JavaScript.

🔹B. Praktikum2
1. kasir.js
Skrip ini saya buat untuk mempraktikkan penggunaan struktur kendali. Saya menggunakan switch-case untuk menentukan harga menu (Kopi, Teh, Pizza) dan menggunakan serangkaian if-else untuk menerapkan diskon. Saya belajar bagaimana logika bersyarat ini memengaruhi perhitungan total pembayaran.
2. grade_mahasiswa.js
Dalam skrip ini, fokus saya adalah menyusun logika bertingkat. Saya menggunakan if-else if-else untuk menilai skor mahasiswa dan menampilkannya sebagai grade (A, B, C, D, E). Saya juga menyertakan validasi skor agar hasilnya akurat.

🔹C. Praktikum3
1. penjualan.js
Ini adalah bagian yang paling menarik karena saya eksplorasi array method. Saya punya data transaksi, dan saya gunakan:
.filter(): Untuk menyaring dan hanya mendapatkan transaksi produk tertentu (misalnya, 'Mouse').
.map(): Untuk mengubah format array objek menjadi array laporan string yang lebih mudah dibaca.
.reduce(): Tantangan terbesar saya, yaitu menghitung total pendapatan bersih dari semua transaksi menjadi satu nilai tunggal.

2. todolist.js

Skrip ini saya gunakan untuk mempraktikkan manipulasi data array of objects dalam sebuah sistem To-Do List sederhana. Konsep yang saya pelajari:
push() — Menambahkan tugas baru dengan ID otomatis.
forEach() — Menampilkan seluruh tugas dengan indikator selesai/belum.
filter() — Menyaring tugas yang belum selesai.
map() — Membuat ringkasan berupa daftar nama tugas saja.

🔹D. Praktikum4
1. akun_bank.js
Saya membuat prototipe Object Literal untuk simulasi akun bank. Object akun yang saya buat tidak hanya menyimpan data (saldo, namaPemilik), tetapi juga memiliki fungsi (sebagai method):
setor(): Menambah saldo.
tarik(): Mengurangi saldo. Yang penting, saya menambahkan validasi di sini; penarikan hanya bisa dilakukan jika saldo mencukupi.

2. mobil.js
File ini saya gunakan untuk mempraktikkan Object Literal di JavaScript, lengkap dengan properti dan method. Tujuan utamanya adalah memahami bagaimana objek dapat menyimpan data sekaligus perilaku.

Konsep yang saya pelajari:
Properti objek (brand, model, warna, jarakTempuh, mesinMenyala)
Method objek menggunakan function dan sintaks modern:
nyalakanMesin() — mengubah status mesin menjadi aktif
matikanMesin() — mematikan mesin
berkendara(jarak) — menambah jarak tempuh hanya jika mesin menyala
this untuk mengakses properti internal objek
Simulasi interaksi: menampilkan data awal, mencoba berkendara saat mesin mati (error), menyalakan mesin, berkendara, dan mematikan mesin
File ini membantu memahami konsep dasar OOP versi sederhana pada JavaScript.

🔹E.Praktikum5
1. mobil_modern.js

File ini adalah versi modern dari object mobil dengan penerapan fitur ES6+. Tujuannya untuk mempraktikkan penulisan kode yang lebih ringkas, efisien, dan mengikuti standar JavaScript terbaru.

Konsep yang saya pelajari:
ES6 Method Shorthand
Method pada object ditulis tanpa kata function, sehingga lebih bersih:
nyalakanMesin(), matikanMesin(), berkendara().
Destructuring Object
Mengambil properti langsung dari object ke dalam variabel:
const { brand, jarakTempuh, warna } = mobil;
Spread Operator (...)
Membuat salinan object mobil dan menambahkan/mengubah properti baru tanpa mengubah data asli.

Simulasi Interaksi
Menyalakan mesin, berkendara, lalu menampilkan hasil destructuring dan data mobil yang disalin.
File ini memperkuat pemahaman tentang fitur modern JavaScript dan manipulasi object tingkat lanjut.

2. todolist.js
File ini saya gunakan untuk mempraktikkan manipulasi array of objects menggunakan method modern seperti .push(), .forEach(), .filter(), dan .map().
Konsep yang saya pelajari:
Menambah data baru
Menggunakan .push() untuk memasukkan tugas baru dengan ID otomatis.
forEach + Destructuring
Menampilkan seluruh tugas dalam format rapi:
status selesai → [✓], belum → [x].
filter() dengan arrow function
Menyaring hanya tugas yang belum selesai menggunakan sintaks satu baris:

const tugasBelumSelesai = tasks.filter(task => !task.selesai);
map()
Mengambil daftar nama tugas saja sebagai ringkasan.

G. Praktikum 8 
— Supabase (Cloud)

Integrasi JavaScript/Node.js dengan backend cloud Supabase.

File: crud_supabase.js

Fitur:

Koneksi ke Supabase via API URL & API Key

CRUD:

INSERT — tambah data

SELECT — baca data

UPDATE — edit data

DELETE — hapus data

Menjalankan query pada tabel todos

Saya belajar:

Konsep backend tanpa server (Serverless DB)

Auth, table editor, dan SQL cloud Supabase

Membuat API Key & pengaturan RLS

Cara kerja client library @supabase/supabase-js

 — MySQL Lokal (XAMPP)

Latihan CRUD dengan database lokal.

File: crud_mysql.js

Fitur:

Connect ke MySQL via mysql2/promise

Query parameterized (?) → mencegah SQL Injection

Operasi:

INSERT

SELECT

UPDATE

DELETE

Saya belajar:

Membuat database baru di phpMyAdmin

Membuat tabel manual menggunakan SQL:

CREATE TABLE todos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tugas TEXT NOT NULL,
  selesai BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


Menjalankan Node.js dengan database lokal

🔹📝 Tugas UTS – JavaScript / Node.js
Folder UTS/ berisi lima soal yang harus diselesaikan menggunakan konsep dari modul 1–5 dengan fokus pada logika, bukan hafalan sintaks.
1. soal1.js – Kalkulator Grade Nilai
Saya membuat arrow function hitungGrade() untuk menentukan grade huruf berdasarkan rentang nilai.
Termasuk validasi agar nilai di luar 0–100 menghasilkan pesan “Nilai tidak valid”.
2. soal2.js – Pengolahan Data Array
Menggunakan:

.filter() → mengambil produk kategori Elektronik
.map() → membuat daftar nama produk dengan format tertentu
ini menguatkan penggunaan method array modern.

3. soal3.js – Object Literal & Methods
Membuat object mahasiswa yang memiliki:
Properti dasar (nama, nim, jurusan)
Array matkul
Method tambahMatkul() dan tampilkanInfo()
Bagian ini melatih penggabungan data dan fungsi dalam satu object.

4. soal4.js – Destructuring & Map
Saya membuat array laporanKaryawan menggunakan .map() dengan destructuring di parameternya.
Output berisi object baru dengan:
karyawan: nama kapital semua
divisi: tetap
tunjangan: 10% dari gaji
ini membantu memahami transformasi data menggunakan ES6.

5. soal5.js – Refactor Kode ke ES6+
Saya melakukan refactor dari gaya ES5 ke ES6:
Mengganti var → const/let
Mengubah function → arrow function
Mengganti string biasa → template literals
ini memperkuat kebiasaan menulis kode modern dan bersih.

💻 Cara Saya Menjalankan
// Contoh menjalankan skrip Biodata
node Biodata.js
// Contoh menjalankan skrip register
node register.js
// Contoh menjalankan skrip grade_mahasiswa
node grade_mahasiswa.js
// Contoh menjalankan skrip Penjualan
node Penjualan.js
// Contoh menjalankan skrip todolist
node todolist.js
// Contoh menjalankan skrip akun bank
node akun_bank.js
// Contoh menjalankan skrip Mobil.
node Mobil.js
// Contoh menjalankan skrip Mobil_modern
node Mobil_modern.js
// Contoh menjalankan skrip todolis_modern
node todolist_modern.js
// Contoh menjalankan skrip crud_supabase.js
node crud_supabase.js
// Contoh menjalankan skrip crud_mysql.js
node crud_mysql.js


// Contoh menjalankan skrip UTS
1. node soal1.js
2. node soal2.js
3. node soal3.js
4. node soal4.js
5. node soal5.js

Modul Praktikum : https://github.com/PBWFEND/Prak-backend
