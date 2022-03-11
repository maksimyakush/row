const express = require('express');
const path = require('path');
const requestIp = require('request-ip');

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));


app.get('/api', (req, res) => {
  console.log('server api');
  return res.json([{name: 'Maksim'}]);
});

app.use(requestIp.mw());
app.use(express.json());






app.listen(3000, () => console.log('server works'));
