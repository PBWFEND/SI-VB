for (let i = 0; i < buah.length; i++) {
  console.log(`Buah ke-${i + 1}: ${buah[i]}`);
}

buah.forEach(function (item, index) {
  console.log(`Elemen ${item} ada di indeks ${index}`);
});
