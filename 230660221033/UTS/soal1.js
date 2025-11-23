/**
\ * @param {number} nilai 
 * @returns {string} 
 */
const hitungGrade = (nilai) => {
  if (typeof nilai !== "number" || nilai < 0 || nilai > 100) {
    return "Nilai tidak valid";
  }

  if (nilai >= 90) {
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

console.log(hitungGrade(95)); 
console.log(hitungGrade(77)); 
console.log(hitungGrade(80)); 
console.log(hitungGrade(65)); 
console.log(hitungGrade(105)); 
console.log(hitungGrade(29)); 
console.log(hitungGrade(105)); 
