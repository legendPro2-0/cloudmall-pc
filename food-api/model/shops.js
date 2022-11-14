var mongoose = require('mongoose');
var shopSchema = mongoose.Schema({
    id:{type: Number, required: true},
    name: { type: String, required: true },
    product: { type: String, required: true },
    price: { type: String, required: true },
    type:{type:String, required: true},
});

var ShopModel = mongoose.model('shoplist', shopSchema,'shoplist');

module.exports = ShopModel; 