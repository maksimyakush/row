const express = require('express');

const app = express();
app.post('/error', async(req, res) => {
    console.log(req.clientIp);
  res.header("Access-Control-Allow-Origin", "*");
  res.send('success');
})

app.get('/', async(req, res) => {
  console.log(req.ip);
  res.send(req.ip);
})

app.listen(process.env.PORT || 3000, () => console.log('server works'))