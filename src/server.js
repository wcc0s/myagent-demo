const express = require('express');
const config = require('../config');

const app = express();

app.get('/', (req, res) => {
  res.json({ status: 'ok', version: '1.0.0' });
});

app.get('/health', (req, res) => {
  res.json({ healthy: true, uptime: process.uptime() });
});

app.listen(config.port, config.host, () => {
  console.log(`Server running on ${config.host}:${config.port}`);
});
