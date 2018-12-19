import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

import config from './config';
import routes from './routes';

const app = express();
const publicPath = path.resolve(__dirname, 'public');

// Secure apps by setting various HTTP headers
app.use(helmet());

// Enable CORS - Cross Origin Resource Sharing
app.use(cors());

// Parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/public', express.static(publicPath, { redirect: false }));
app.get('/favicon.ico', (req, res) => res.status(204));

// Mount all routes
app.use('/', routes);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(config.serverPort);
console.log(`Serving at http://localhost:${config.serverPort}`);

process.on('SIGINT', () => {
  console.log('\nBye bye!');
  process.exit();
});
