// Soal 1: Kalkulator Grade Nilai
const hitungGrade = (nilai) => {
  if (nilai < 0 || nilai > 100) {
    return 'Nilai tidak valid';
  } else if (nilai >= 90) {
    return 'A';
  } else if (nilai >= 80) {
    return 'B';
  } else if (nilai >= 70) {
    return 'C';
  } else if (nilai >= 60) {
    return 'D';
  } else {
    return 'E';
  }
};

console.log(`Hasil 95: ${hitungGrade(95)}`);
console.log(`Hasil 95: ${hitungGrade(80)}`);
console.log(`Hasil 77: ${hitungGrade(77)}`);
console.log(`Hasil 60: ${hitungGrade(60)}`);
console.log(`Hasil 59: ${hitungGrade(59)}`);
console.log(`Hasil 105: ${hitungGrade(105)}`);
