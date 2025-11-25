// Arrow function untuk menghitung grade berdasarkan nilai
const hitungGrade = (nilai) => {
  // validasi input: harus number dan antara 0 - 100
  if (typeof nilai !== 'number' || Number.isNaN(nilai) || nilai < 0 || nilai > 100) {
    return "Nilai tidak valid";
  }

  if (nilai >= 90) return "A";
  if (nilai >= 80) return "B";
  if (nilai >= 70) return "C";
  if (nilai >= 60) return "D";
  return "E"; // 0 - 59
};

// Pemanggilan/Pengujian
console.log(hitungGrade(60));   // Output: D
console.log(hitungGrade(50));   // Output: E
console.log(hitungGrade(111));  // Output: Nilai tidak valid

