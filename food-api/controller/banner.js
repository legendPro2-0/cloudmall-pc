var BannerModel = require('../model/banner');

let bnupdate = (req, res, next) => {
    let body = req.body;
    BannerModel.findOne({
      _id: body._id
    }).then((data)=>{
      if(data){  //删除
        BannerModel.deleteOne({  _id: body._id }).then((info)=>{
          res.send({"errcode": 0});
        }).catch((err)=>{
          res.send({"errcode": '没删掉'});
        });
      }else{
        res.send({"errcode":"出错了"})
      }
      })
    };
  
  
  let bnset =  (req, res, next)=> {   //添加
    let body = req.body;
    console.log(body);
    BannerModel(body).save().then((info)=>{
      if(info){
        console.log(info);
        BannerModel.find().then((datas)=>{
          if(datas){
            console.log(datas);
              res.send({"errcode": 0,"data":datas});
          }else{
            res.send({"errcode":-1});
          }
        })
      }
      else{
        res.send({"errcode": -1});
      }
    }).catch((err)=>{
      res.send({"errcode": -1});
    });
    
  };

  let bnlist = (req, res, next) => {
    let data = req.query;
    BannerModel.find(data).then((datas)=>{
        console.log(datas);
      res.send(datas);
    });
  };
  
  module.exports = {
    bnupdate,
    bnlist,
    bnset
  };
