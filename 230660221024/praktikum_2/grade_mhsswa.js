/**
 * Nama  : Ridho Akmal Aulia
 * NPM   : 230660221024
 * Kelas : Sistem Informasi
 * Praktikum 2 - Function & Conditional Logic
 */

// Fungsi menentukan grade
function tentukanGrade(skor) {
  if (skor >= 90 && skor <= 100) {
    return "A (Luar Biasa)";
  } else if (skor >= 80 && skor < 90) {
    return "B (Baik)";
  } else if (skor >= 70 && skor < 80) {
    return "C (Cukup)";
  } else if (skor >= 60 && skor < 70) {
    return "D (Kurang)";
  } else if (skor >= 0 && skor < 60) {
    return "E (Gagal)";
  } else {
    return "Skor tidak valid";
  }
}

// --- Uji Coba Fungsi ---
let nilaiAndi = 95;
let nilaiBudi = 78;
let nilaiCaca = 55;
let nilaiDeni = 105;

console.log("=====================================");
console.log("=== Laporan Grade Mahasiswa ===");
console.log("=====================================");
console.log(`Andi (Nilai: ${nilaiAndi}) -> ${tentukanGrade(nilaiAndi)}`);
console.log(`Budi (Nilai: ${nilaiBudi}) -> ${tentukanGrade(nilaiBudi)}`);
console.log(`Caca (Nilai: ${nilaiCaca}) -> ${tentukanGrade(nilaiCaca)}`);
console.log(`Deni (Nilai: ${nilaiDeni}) -> ${tentukanGrade(nilaiDeni)}`);
console.log("=====================================");