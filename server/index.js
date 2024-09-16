const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

let users = {};

try {
  const data = fs.readFileSync('easyStorage.json', 'utf8');
  users = JSON.parse(data);
} catch (err) {
  console.error(err);
}

app.post('/register', (req, res) => {
  const { nickname, email, passwd } = req.body;
  users[nickname] = { email, passwd };
  fs.writeFile('easyStorage.json', JSON.stringify(users), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error registering user');
    } else {
      res.send('User registered successfully');
    }
  });
});

app.post('/login', (req, res) => {
  const { nickname, passwd } = req.body;
  if (users[nickname] && users[nickname].passwd === passwd) {
    res.json({ success: true, message: 'Login successful!' });
  } else {
    res.json({ success: false, message: 'Invalid username or password' });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});