const hitungGrade = (nilai) => {
  if (nilai < 0 || nilai > 100) return "Nilai tidak valid";

  if (nilai >= 90) return "A";
  if (nilai >= 80) return "B";
  if (nilai >= 70) return "C";
  if (nilai >= 60) return "D";
  return "E";
};

console.log(hitungGrade(95));  // Output: A
console.log(hitungGrade(85));  // Output: B
console.log(hitungGrade(77));  // Output: C
console.log(hitungGrade(65));  // Output: D
console.log(hitungGrade(105)); // Output: Nilai tidak valid
