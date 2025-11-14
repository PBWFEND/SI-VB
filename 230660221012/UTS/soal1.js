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

console.log(hitungGrade(91));
console.log(hitungGrade(84));
console.log(hitungGrade(72));
console.log(hitungGrade(67));
console.log(hitungGrade(58));
console.log(hitungGrade(101));
