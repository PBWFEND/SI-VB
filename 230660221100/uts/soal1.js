const hitungGrade = (nilai) => {
  if (nilai < 0 || nilai > 100) {
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

// Contoh output
console.log(hitungGrade(95)); // A
console.log(hitungGrade(77)); // C
console.log(hitungGrade(105)); // Nilai tidak valid
