const express = require('express');
const app = express();

app.use(express.static('src'));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/src/index.html`);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('app listening on', port);
});
