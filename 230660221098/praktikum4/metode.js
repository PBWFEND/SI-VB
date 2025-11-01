let kalkulator = {
  angka1: 10,
  angka2: 5,
  tambah: function () {
    return this.angka1 + this.angka2;
  },
  kurang() {
    return this.angka1 - this.angka2;
  },
};

console.log(kalkulator.tambah());
console.log(kalkulator.kurang());
