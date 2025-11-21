// soal1.js

// Arrow function untuk menghitung grade
const hitungGrade = (nilai) => {
  // Rentang nilai
  if (nilai < 0 || nilai > 100) {
    return "Nilai tidak valid";
  }

  if (nilai >= 90) return "A";
  if (nilai >= 80) return "B";
  if (nilai >= 70) return "C";
  if (nilai >= 60) return "D";
  return "E";  // untuk nilai 0–59
};

// Contoh pemanggilan
console.log(hitungGrade(95));  // Output: A
console.log(hitungGrade(77));  // Output: C
console.log(hitungGrade(105)); // Output: Nilai tidak valid
