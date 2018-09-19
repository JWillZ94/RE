const express = require('express');
const http2 = require('http2');
const morgan = require('morgan');
const { PerformanceObserver, performance } = require('perf_hooks');

const app = express();
app.use(morgan('combined'));

const port = process.env.PORT || 5000;

const server = http2.createServer();
server.on('stream', (stream, requestHeaders) => {
  stream.respond({ ':status': 200, 'content-type': 'text/plain' });
  stream.end('hello http2 server');
});

const obs = new PerformanceObserver(items => {
  const entry = items.getEntries()[0];
});

server.listen(port, () => {
  console.log("server up");
});

app.get('/', (req, res) => {
  res.send('index page');
});
