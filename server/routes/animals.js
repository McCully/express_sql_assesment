var express = require('express');
var router = express.Router();
var pg = require('pg');
var randomNumber = require('./randNum');
var connect = 'postgres://localhost:5432/Assesment';

router.get('/' ,function(req , res){
  pg.connect(connect, function(err , client, done){
    if (err) {
      console.log('ERROR1: ' , err);
      res.sendStatus(500);
    }
    client.query('SELECT * FROM animals' , function(err , result){
      done();
      if (err) {
        console.log('ERROR2: ' , err);
        res.sendStatus(500);
      }
      res.send(result.rows);
    });
  });
});

router.post('/' , function (req , res){
  var animal = req.body;

  pg.connect(connect , function(err, client , done){
    if(err) {
      console.log("ERROR3: " , err);
      res.sendStatus(500);
    }
    client.query('INSERT INTO animals (species , amount)' + 'VALUES ($1 , $2)' , [animal.species , randomNumber(1 , 100)] , function(err , result){
      done();
      if (err){
        console.log("ERROR4: " , err);
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });
  });
});
module.exports = router;
