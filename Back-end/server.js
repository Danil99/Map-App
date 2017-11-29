var express = require('express');
var bodyParser = require('body-parser');

var headers = require('./middleware/headers.js');

var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use(headers);

let db = [];

app.post('/addAdress', function (req, res) {
  if(!db.some(el => el.title === req.body.adress)) {
    if(req.body.current) {
      db.shift();
      db.unshift({
        id: Date.now(),
        title: req.body.adress
      });
    } else {
      db.push({
        id: Date.now(),
        title: req.body.adress
      });
    }
  }
  // Если это текущее местоположение, тогда заменяем новым. Если же просто новое, тогда добавляем в конец массива
  res.send(db);
});

app.put('/deleteAdress', function (req, res) {
  db = db.filter(el => el.id !== req.body.id);
  res.send(db);
});

app.post('/getAdress', function (req, res) {
  res.send(db);
});

app.listen('8080', function () {
  console.log('Server is started');
})
