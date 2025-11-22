const hitungGradeTernary = (n) => (
  n < 0 || n > 100 ? "Nilai tidak valid" :
  n >= 90 ? "A" :
  n >= 80 ? "B" :
  n >= 70 ? "C" :
  n >= 60 ? "D" :
  "E"
);

// --- Tambahkan baris-baris ini agar ada output di terminal ---
console.log(`Nilai 85: ${hitungGradeTernary(85)}`);  // Output: B
console.log(`Nilai 95: ${hitungGradeTernary(95)}`);  // Output: A
console.log(`Nilai 50: ${hitungGradeTernary(50)}`);  // Output: E
console.log(`Nilai 101: ${hitungGradeTernary(101)}`); // Output: Nilai tidak valid