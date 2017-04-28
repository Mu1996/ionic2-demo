/**
 * Created by muyonghui on 16/11/13.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var MessageRecordsScheme = new base.Schema({
    uid:ObjectId,//发送者用户id
    activityid:ObjectId,//活动id
    activitytype:String, //活动类型
    messagecontent:String,//短信内容
    receivermobile:String,//接收者手机
    createtime:{type:Date,default:new Date()}
});
var MessageRecordsEntity = base.mongoose.model('MessageRecordsEntity',MessageRecordsScheme,'messagerecords');
exports.MessageRecordsEntity  = MessageRecordsEntity;