/**
 * Created by Tomkk on 2016/4/23.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var InputErrorSchema = new base.Schema({
    mobile:String,
    errorcount:Number,
    lockstarttime:{type:Date,default:Date.now},
    islocked:{type:Boolean,default:false},
    firsterrortime:{type:Date,default:Date.now}
});

var InputErrorEntity = base.mongoose.model('InputErrorEntity',InputErrorSchema,'inputerror');

module.exports = InputErrorEntity;

