var toBuserModel = require('../model/toBuser');


//删除 写完
let Delete = (req, res, next) => {
    let body = req.body;
    toBuserModel.findOne({
      _id: body._id
    }).then((data)=>{
      if(data){  
        toBuserModel.deleteOne({  _id: body._id }).then((info)=>{
          res.send({"errcode": 0});
        }).catch((err)=>{
          res.send({"errcode": '没删掉'});
        });
      }else{
        res.send({"errcode":"出错了"})
      }
      })
    };
  
  //添加  写完
  let newuser =  (req, res, next)=> {   
    let body = req.body;
    toBuserModel(body).save().then((info)=>{
      if(info){
        toBuserModel.find().then((datas)=>{
          if(datas){
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

    //查 写完
  let list = (req, res, next) => {
    let data = req.query;
    toBuserModel.find(data).then((datas)=>{
      res.send(datas);
    });
  };
  

  //改 
  let update =  (req, res, next) => {
    let body = req.body;
    toBuserModel.findOneAndUpdate({
        _id: body._id
      },{$set:body}).then((data)=>{
        res.send({"errcode": 0});
      }).catch(()=>{
        res.send({"errcode": -1});
      })
  }
  module.exports = {
    newuser,
    list,
    update,
    Delete
  };
