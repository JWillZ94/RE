import express from 'express';
import http2 from 'http2';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import { PerformanceObserver, performance } from 'perf_hooks';

const app = express();

// Server =================================

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

// Middleware =============================

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes =================================

app.get('/', (req, res) => {
  res.send('index page');
});
