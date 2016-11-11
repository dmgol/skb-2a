import express from 'express';
import cors from 'cors';
import XRegExp from 'xregexp';

import extractName from './extractName';

const app = express();


function checkParam(p) {
  return p << 0; // eslint-disable-line
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

const regex = new XRegExp('^\\s*([\\p{L}\']+)\\s*([\\p{L}\']*)\\s*([\\p{L}\']*)$');

function fSurname(sname) {
  return `${sname.substr(0, 1).toUpperCase()}${sname.substr(1).toLowerCase()}`;
}

function fInitials(name) {
  return `${name.substr(0, 1).toUpperCase()}.`;
}

function convertFullname(fullname) {
  const m = regex.exec(fullname);
  console.log(m);
  if (m) {
    if (!m[2]) return fSurname(m[1]);
    if (!m[3]) return `${fSurname(m[2])} ${fInitials(m[1])}`;
    return `${fSurname(m[3])} ${fInitials(m[1])} ${fInitials(m[2])}`;
  }
  return 'Invalid fullname';
}

app.get('/task2b', (req, res) => {
  console.log(req.query);
  const name = convertFullname(req.query.fullname);
  console.log(`name = ${name}`);
  res.send(name);
});

app.get('/task2c', (req, res) => {
  console.log(req.query);
  const name = extractName(req.query.username);
  console.log(`name = ${name}`);
  res.send(`@${name}`);
});

app.listen(3000, () => console.log('app listening on port 3000'));

