var express = require('express');
var router = express.Router();

const database = ['make a dinner','wash the dishes'];
router.put('/task*', (req, res) =>{
  database.push(req.query.key);
  //zeby zobacyzc efekty
  res.send(database);
});
router.delete('/task/:index', (req, res) =>{
  if(database.length <= req.params.index) {
    res.statusCode = 404;
    return res.send('Error 404: No task found');
  }
  database.splice(req.params.index, 1);
  //zeby zobaczyc nasze efekty
  res.send(database);
  res.json(true);
});
router.get('/tasks', (req, res) =>{
  res.send(database);
});
router.post('/test', (req, res) => {
  console.log(req.body);
  res.status(200).send();
})
module.exports = router;
module.esports = database;
