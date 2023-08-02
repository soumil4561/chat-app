require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('./db/mongoose');

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
