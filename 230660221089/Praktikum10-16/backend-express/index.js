// Import express
const express = require('express');

// Import CORS
const cors = require('cors');

// Inisialisasi aplikasi
const app = express();

// Gunakan CORS
app.use(cors());

// Definisikan port
const port = 3000;

// Route dasar
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Mulai server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});