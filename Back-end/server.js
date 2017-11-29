var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var headers = require('./middleware/headers.js');

var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use(headers);

let db;

app.post('/addAdress', function (req, res) {
  new Promise((resolve, reject) => {
    db.collection('adress').findOne({ title: req.body.adress }, function (err, doc) {
      if(err) reject();
      resolve(doc);
    })
    // Ищем введённый адрес
  }).then(doc => {
    if(!doc) {
      // Если адрес не найден, продолжаем
      if(req.body.current) { // Если это текущее местоположение
        db.collection('adress').find().toArray(function (err, docs) {
          if(err) return res.sendStatus(500);
          if(docs.length === 0) {
            // Если массив пустой, то добавляем новый адресс
            db.collection('adress').insert({title: req.body.adress}, function (err, result) {
              if(err) return res.sendStatus(500);
            })
          } else {
            // Иначе просто меняем title
            db.collection('adress').updateOne({}, {title: req.body.adress}, function (err, result) {
              if(err) return res.sendStatus(500);
            })
          }
        })
      } else {
        // Если это не текущее, то просто добавляем в конец массива новый адрес
        db.collection('adress').insert({title: req.body.adress}, function (err, result) {
          if(err) return res.sendStatus(500);
        })
      }
    }
  })
  .then(() => {
    getAdress(res);
  })
  .catch(err => res.sendStatus(500))
});

app.put('/deleteAdress', function (req, res) {
  db.collection('adress').deleteOne({_id: ObjectID(req.body.id)}, function (err, result) {
    if(err) return res.sendStatus(500);
    // Удаляем адрес по ID
    getAdress(res);
  })
});

app.post('/getAdress', function (req, res) {
  getAdress(res);
});

function getAdress(res) {
  db.collection('adress').find().toArray(function (err, docs) {
    if(err) return res.sendStatus(500);
    res.send(docs)
    // Собираем и отправляем весь массив на клиент
  })
}

MongoClient.connect('mongodb://localhost:27017/', function (err, database) {
  if(err) return console.log(err);
  db = database;
  app.listen('8080', function () {
    console.log('Server is started');
  })
})
