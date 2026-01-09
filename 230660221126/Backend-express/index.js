// Import express
const express = require('express');

// Import CORS
const cors = require('cors');

// Import body parser
const bodyParser = require('body-parser');

// Inisialisasi aplikasi
const app = express();

// Gunakan CORS
app.use(cors());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

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