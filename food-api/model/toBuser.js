var mongoose = require('mongoose');
var toBuserSchema = new  mongoose.Schema({
    id:{type:Number, required: true, unique: true},
    email: { type: String, required: true, unique: true },
});

var toBuserModel = mongoose.model('toBuser', toBuserSchema,'toBuser');

module.exports = toBuserModel;