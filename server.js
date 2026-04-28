const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API - musi być PRZED static
app.use('/api/projects', require('./routes/projects'));

// Statyczne pliki (frontend) - z fallthrough: false
app.use(express.static('public', { fallthrough: false }));

// Fallback dla SPA - tylko dla tras bez rozszerzenia
app.use((req, res) => {
    if (!req.path.includes('.')) {
        return res.sendFile(path.join(__dirname, 'public', 'index.html'));
    }
    res.status(404).send('Not found');
});

// Port
const PORT = process.env.PORT || 10000;

// Start serwera
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Parthos V2 Online on port ${PORT}`);
});
