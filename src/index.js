import express from 'express';
import db from './persistence/index.js';
import {getPuzzles,addPuzzle,updatePuzzle,deletePuzzle} from './routes/puzzle/index.js';
import { updateUser ,addUser } from './routes/user/index.js';

const app = express();
let port = process.env.port || 3300;

app.get('/puzzles', getPuzzles);
app.post('/puzzles', addPuzzle);
app.put('/puzzles:id', updatePuzzle);
app.delete('/puzzles:id', deletePuzzle);


// app.get('/users',getUsers);
app.post('/users',addUser);
app.put('/users:id',updateUser);
// app.delete('/users:id', deleteUser);

app.post('/post',(req,res) => {
  console.log("hi")
  res.json({testData:"test"})
})


db.init().then(() => {
  app.listen(port,() => console.log(`Example app listening on port ${port}`));
}).catch(err => {
  console.error(err);
  process.exit(1);
})
