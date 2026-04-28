const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Statyczne pliki (frontend)
app.use(express.static('public'));

// API
app.use('/api/projects', require('./routes/projects'));

// Fallback dla SPA (Naprawiony błąd SyntaxError)
app.get('*', (req, res) => {
    if (req.path.includes('.')) return res.status(404).send('Not found');
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Port
const PORT = process.env.PORT || 10000;

// Start serwera
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Parthos V2 Online on port ${PORT}`);
});
