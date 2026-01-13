 const tasks = [
    { nama: "Belajar JS", selesai: true },
    { nama: "Mengerjakan UTS", selesai: false },
    { nama: "Push GitHub", selesai: false }
];

// Menggunakan Arrow Function dan Destructuring
console.log("Daftar Tugas:");
tasks.forEach(({ nama, selesai }) => {
    const status = selesai ? "[✓]" : "[x]";
    console.log(`${status} ${nama}`);
});