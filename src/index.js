import express from 'express';
import cors from 'cors';

const app = express();


function checkParam(p) {
  return p << 0;
}

app.use(cors());
app.get('/task2a', (req, res) => {
  console.log(req.query);
  const a = checkParam(req.query.a);
  const b = checkParam(req.query.b);
  const sum = a + b;
  console.log(`a=${a}, b=${b}, sum=${sum}`);
  res.send(sum.toString());
});

app.listen(3000, () => console.log('app listening on port 3000'));

