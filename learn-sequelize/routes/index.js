var express = require('express');
var User = require('../models').User;

var router = express.Router();

/* GET home page. */
//promise
router.get('/', function(req, res, next) {
  User.findAll()
    .then((users)=>{
      res.render('sequelize',{users});
    })
    .catch((err)=>{
      console.log(err);
      next(err);
    });
});

//async/await
/*
router.get('/',async(req,res,next)=>{
  try{
    const users = await User.findAll();
    res.render('sequelize',{users});
  }catch(err){
    console.err(err);
    next(err);
  }
});
*/

module.exports = router;
