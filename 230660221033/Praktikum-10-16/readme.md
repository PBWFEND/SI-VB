# Fullstack User Management System (Express.js + Prisma + React)
Aplikasi manajemen user sederhana namun lengkap (Fullstack) yang dibangun sebagai proyek pembelajaran untuk mengimplementasikan RESTful API di sisi backend dan aplikasi Single Page Application (SPA) di sisi frontend.

## Tampilan Aplikasi
<img width="1919" height="967" alt="image" src="https://github.com/user-attachments/assets/0071d322-3b6d-4663-ae69-83f7ec95c74c" />
<img width="1919" height="963" alt="image" src="https://github.com/user-attachments/assets/c03ca51a-2386-4895-8d3e-9252c91a5959" />

## 🚀 Fitur Utama
Autentikasi JWT: Sistem registrasi dan login yang aman menggunakan JSON Web Token.

Manajemen User (CRUD): Fitur lengkap untuk Menampilkan, Menambah, Mengubah, dan Menghapus data user.

Proteksi Halaman: Implementasi Private Routes sehingga halaman admin hanya bisa diakses setelah login.

Validasi Sisi Server: Validasi input menggunakan express-validator untuk memastikan integritas data.

UI/UX Interaktif: Menggunakan Loading States untuk pengambilan data dan Toast Notifications untuk umpan balik aksi user.

## 🛠️ Teknologi yang Digunakan
Backend:

Node.js & Express.js: Framework server-side utama.

Prisma ORM: Sebagai penghubung antara kode Javascript dan database.

MySQL: Database untuk menyimpan data user secara persisten.

Bcrypt.js: Untuk enkripsi password demi keamanan.

Frontend:

React.js (Vite): Library UI utama untuk membangun antarmuka yang reaktif.

React Router: Untuk navigasi antar halaman dan proteksi rute.

Axios: Untuk melakukan request ke API backend.

Bootstrap: Untuk styling antarmuka agar rapi dan responsif.
