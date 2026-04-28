const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Serwowanie Twojego HTMLa jako strony głównej
app.use(express.static('public'));

// API dla projektów
app.use('/api/projects', require('./routes/projects'));

// Każdy inny adres kieruje do strony głównej
app.get('(.*)', (req, res) => { ... })
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Parthos V2 Online on port ${PORT}`);
});
