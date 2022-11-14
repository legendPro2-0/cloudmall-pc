
let fs = require('fs');
let path = require('path');
var ShopModel = require('../model/shops');

let update = (req, res, next) => {
 
  let body = req.body;
  let file = req.file;
  
  ShopModel.findOne({
    name: body.name
  }).then((data)=>{
    if(data){  //更新
      if(file){  //修改了fileurl
        fs.unlinkSync(data.fileurl.replace(/http:\/\/localhost:3000/,'./public'));
        fs.renameSync( path.join('./public/uploads' , file.filename) , path.join('./public/uploads' , file.filename + '.jpg') );
        body.fileurl = 'http://localhost:3000/uploads/' + file.filename + '.jpg';
      }
      ShopModel.updateOne({  name: body.name },{ $set: body }).then((info)=>{
        res.send({"errcode": 0});
      }).catch((err)=>{
        res.send({"errcode": -1});
      });
    }
    else{   //添加
      fs.renameSync( path.join('./public/uploads', file.filename) , path.join('./public/uploads', file.filename + '.jpg') );
      let data = {
        ...body,
        fileurl: 'http://localhost:3000/uploads/' + file.filename + '.jpg'
      };
      ShopModel(data).save().then((info)=>{
        if(info){
          res.send({"errcode": 0});
        }
        else{
          res.send({"errcode": -1});
        }
      }).catch((err)=>{
        res.send({"errcode": -1});
      });
    }
  });

};

let list = (req, res, next) => {
  let data = req.query;
  ShopModel.find(data).then((datas)=>{
    res.send(datas);
  });
};

module.exports = {
  update,
  list
};