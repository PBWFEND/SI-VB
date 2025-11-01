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

1. kasir.js
Skrip ini saya buat untuk mempraktikkan penggunaan struktur kendali. Saya menggunakan switch-case untuk menentukan harga menu (Kopi, Teh, Pizza) dan menggunakan serangkaian if-else untuk menerapkan diskon. Saya belajar bagaimana logika bersyarat ini memengaruhi perhitungan total pembayaran.

2. grade_mahasiswa.js
Dalam skrip ini, fokus saya adalah menyusun logika bertingkat. Saya menggunakan if-else if-else untuk menilai skor mahasiswa dan menampilkannya sebagai grade (A, B, C, D, E). Saya juga menyertakan validasi skor agar hasilnya akurat.

3. penjualan.js
Ini adalah bagian yang paling menarik karena saya eksplorasi array method. Saya punya data transaksi, dan saya gunakan:

.filter(): Untuk menyaring dan hanya mendapatkan transaksi produk tertentu (misalnya, 'Mouse').

.map(): Untuk mengubah format array objek menjadi array laporan string yang lebih mudah dibaca.

.reduce(): Tantangan terbesar saya, yaitu menghitung total pendapatan bersih dari semua transaksi menjadi satu nilai tunggal.

4. akun_bank.js
Saya membuat prototipe Object Literal untuk simulasi akun bank. Object akun yang saya buat tidak hanya menyimpan data (saldo, namaPemilik), tetapi juga memiliki fungsi (sebagai method):

setor(): Menambah saldo.

tarik(): Mengurangi saldo. Yang penting, saya menambahkan validasi di sini; penarikan hanya bisa dilakukan jika saldo mencukupi.

💻 Cara Saya Menjalankan
# Contoh menjalankan skrip penjualan
node penjualan.js

# Contoh menjalankan skrip akun bank
node akun_bank.js

Modul Praktikum : https://github.com/PBWFEND/Prak-backend
