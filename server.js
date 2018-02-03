const express = require('express');
const path = require('path');

const PORT = 5000;

const app = express();

app.use(express.static('./dist'));
app.use('/', (req, res) => {
  res.sendFile(path.resolve('client/index.html'));
});

app.listen(PORT, () => {
  console.log(`We are live at PORT: ${PORT}`);
});
