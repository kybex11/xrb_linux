const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

let users = {};

try {
  const usersData = fs.readFileSync('easyStorage.json', 'utf8');
  users = JSON.parse(usersData);
} catch (err) {
  console.error(err);
}

const registerUser = (req, res) => {
  const { nickname, email, passwd } = req.body;
  
  if (users[nickname]) {
    res.json({ success: false, message: 'Nickname already taken'});
  } else {
    users[nickname] = { email, passwd, friends: [] };
    fs.writeFile('easyStorage.json', JSON.stringify(users), (err) => {
      if (err) {
        console.error(err);
        res.json({ success: false, message: 'Failed to register'});
      } else {
        res.json({ success: true, message: 'Registered successfully!'});
      }
    });
  }
};

const loginUser = (req, res) => {
  const { nickname, passwd } = req.body;
  if (users[nickname] && users[nickname].passwd === passwd) {
    res.json({ success: true, message: 'Login successful!' });
  } else {
    res.json({ success: false, message: 'Invalid username or password' });
  }
};

const addFriend = (req, res) => {
  const userNickname = req.body.userNickname;
  const friendNickname = req.body.friendNickname;
  if (!users[userNickname] || !users[friendNickname]) {
    res.json({ success: false, message: 'User or friend not found' });
  } else if (users[userNickname].friends.includes(friendNickname)) {
    res.json({ success: false, message: 'Friend already added' });
  } else {
    users[userNickname].friends.push(friendNickname);
    fs.writeFile('easyStorage.json', JSON.stringify(users), (err) => {
      if (err) {
        res.json({ success: false, message: 'Error adding friend' });
      } else {
        res.json({ success: true, message: 'Friend added successfully' });
      }
    });
  }
};

const getFriends = (req, res) => {
  const nickname = req.params.nickname;
  if (!users[nickname]) {
    res.json({ success: false, message: 'User not found' });
  } else {
    res.json(users[nickname].friends);
  }
};

app.post('/register', registerUser);
app.post('/login', loginUser);
app.post('/addfriends', addFriend);
app.get('/getfriends/:nickname', getFriends);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});