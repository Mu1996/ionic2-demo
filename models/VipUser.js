/**
 * Created by muyonghui on 16/11/13.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var VipUserScheme = new base.Schema({
    uid:ObjectId,//用户id
    viplevel:String,//vip等级
    messagenum:Number,//可发送短信条数
    sentnum:Number,//已发送短信条数
    starttime:Date,//vip失效时间
    endtime:Date,//vip生效时间
    state:String,//vip状态
    createtime:{type:Date,default:new Date()}
});
var VipUserEntity = base.mongoose.model('VipUserEntity',VipUserScheme,'vipuser');
exports.VipUserEntity  = VipUserEntity;