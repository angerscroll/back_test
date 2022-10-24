import express from 'express';
import db from './persistence/index.js';

const app = express();
let port = process.env.port || 3000;

db.init().then(() => {
  app.listen(port,() => console.log(`Example app listening on port ${port}`));
}).catch(err => {
  console.error(err);
  process.exit(1);
})