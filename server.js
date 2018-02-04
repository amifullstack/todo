const express = require('express');
const path = require('path');

const PORT = 5000;

const app = express();

app.use(express.static('./public'));
app.use('/', (req, res) => {
  res.sendFile(path.resolve('views/index.html'));
});

app.listen(PORT, () => {
  console.log(`We are live at PORT: ${PORT}`);
});
