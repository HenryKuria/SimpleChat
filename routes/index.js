const express = require('express');
const router = express.Router();
const messages =[];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/messages', (req, res) => {
  res.send(messages)
});

router.post('/messages', (req, res) => {
  try{
    messages.push(req.body);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.send('Error')
  }
});

module.exports = router;
