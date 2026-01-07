// soal1.js

/**
 * Arrow Function untuk menghitung grade berdasarkan nilai (Modul 2 & 5)
 * @param {number} nilai - Nilai numerik (0-100).
 * @returns {string} - Grade huruf.
 */
const hitungGrade = (nilai) => {
  if (nilai < 0 || nilai > 100) {
    // Logika percabangan (Conditional Logic - Modul 2)
    return "Nilai tidak valid";
  } else if (nilai >= 90) {
    return "A";
  } else if (nilai >= 80) {
    return "B";
  } else if (nilai >= 70) {
    return "C";
  } else if (nilai >= 60) {
    return "D";
  } else {
    return "E";
  }
};

// Contoh Pengujian
console.log(hitungGrade(95)); // Output: A
console.log(hitungGrade(77)); // Output: C
console.log(hitungGrade(59)); // Output: E
console.log(hitungGrade(105)); // Output: Nilai tidak valid