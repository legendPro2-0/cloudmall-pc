var mongoose = require('mongoose');
var bannerSchema = mongoose.Schema({
    baner: { type: String, required: true, unique: true },
    prompt: { type:String, required: true },
    id:{type:Number, required: true, unique: true},
    connect:{ type: String}
});

var BannerModel = mongoose.model('PcList', bannerSchema,'PcList');

module.exports = BannerModel;