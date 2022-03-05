const express = require('express');
const requestIp = require('request-ip');

const app = express();
app.use(requestIp.mw())
app.post('/error', async(req, res) => {
    console.log(`ip: ${req.ip}, clientIp: ${req.clientIp}`);
  res.header("Access-Control-Allow-Origin", "*");
  res.send('success');
})

app.get('/', async(req, res) => {
  console.log(req.ip);
res.send(`ip: ${req.ip}, clientIp: ${req.clientIp}`);
})

app.listen(3000, () => console.log('server works'))