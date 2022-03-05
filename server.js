const express = require('express');
const requestIp = require('request-ip');

geoip = require('geoip-lite');

var ip = "207.97.227.239";
var geo = geoip.lookup(ip);

const app = express();
app.use(requestIp.mw())
app.post('/error', async(req, res) => {
    console.log(`ip: ${req.ip}, clientIp: ${req.clientIp}`);
  res.header("Access-Control-Allow-Origin", "*");
  res.send('success');
})

app.get('/', async(req, res) => {
  var geo = await geoip.lookup(req.clientIp);
  console.log(geo);
res.send(`ip: ${req.ip}, clientIp: ${req.clientIp}`);
})

app.listen(process.env.PORT || 3000, () => console.log('server works'))