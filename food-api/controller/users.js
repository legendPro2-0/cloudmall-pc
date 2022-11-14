var UserModel = require('../model/users');
var jwt = require('jsonwebtoken');

let login = (req, res, next) => {
  if( req.body.yzm !== req.session.yzm ){
    res.send({"errcode": -1});   //验证码错误
    return;
  }

  UserModel({
    username: req.body.username
  }).save().then((info)=>{
    jwt.sign({ username : req.body.username }, 'abcdef', function(err, token) {
      res.send({"errcode": 0, token});   //正确
    });
  }).catch((err)=>{
    jwt.sign({ username : req.body.username }, 'abcdef', function(err, token) {
      res.send({"errcode": 0, token});   //正确
    });
  });

};


let yzm = (req, res, next) => {
  let yzm = ''; 
  for(let i=0;i<4;i++){
    yzm += Math.floor(Math.random() * 10);
  }
  req.session.yzm = yzm;
  res.send({ yzm });
};


let info = (req, res, next) => {
  let token = req.headers.token;
  jwt.verify(token, 'abcdef', function(err, decoded) {
    if(err){
      res.json({
        errcode : -1,
        errmsg : 'token错误'
      });
    }
    else{
      res.json({
        errcode : 0,
        errmsg : 'token正确',
        username : decoded.username
      });

    }
  });
};

module.exports = {
  login,
  yzm,
  info
};