const hitungGrade = (nilai) => {
  if (!Number.isFinite(nilai)) return "Nilai tidak valid";

  const n = Number(nilai);

  if (n >= 90 && n <= 100) return "A";
  else if (n >= 80 && n <= 89) return "B";
  else if (n >= 70 && n <= 79) return "C";
  else if (n >= 60 && n <= 69) return "D";
  else if (n >= 0 && n <= 59) return "E";
  else return "Nilai tidak valid";
};

console.log(hitungGrade(95));   // A
console.log(hitungGrade(77));   // C
console.log(hitungGrade(105));  // Nilai tidak valid