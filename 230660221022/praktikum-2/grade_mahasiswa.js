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
    return "Skor tidak valid"; // Kondisi jika skor di luar rentang 0-100
  }
}

// --- Uji Coba Fungsi ---

// 1. Deklarasikan variabel untuk diuji
let nilaiDian = 100;
let nilaiDeyna = 60;
let nilaiPouran = 65;
let nilaiUmay = 100; // Contoh skor tidak valid

// 2. Panggil fungsi dan simpan hasilnya
let gradeDian = tentukanGrade(nilaiDian);
let gradeDeyna = tentukanGrade(nilaiDeyna);
let gradePouran = tentukanGrade(nilaiPouran);
let gradeUmay = tentukanGrade(nilaiUmay);

// 3. Tampilkan hasilnya ke konsol dengan rapi
console.log("--- Laporan Grade Mahasiswa ---");
console.log(`Mahasiswa Andi (Nilai: ${nilaiDian}) mendapatkan grade: ${gradeDian}`);
console.log(`Mahasiswa Budi (Nilai: ${nilaiDeyna}) mendapatkan grade: ${gradeDeyna}`);
console.log(`Mahasiswa Caca (Nilai: ${nilaiPouran}) mendapatkan grade: ${gradePouran}`);
console.log(`Mahasiswa Deni (Nilai: ${nilaiUmay}) mendapatkan grade: ${gradeUmay}`);
console.log("-------------------------------");
