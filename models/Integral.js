/**
 * Created by zibu on 2016/8/11.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;

var IntegralScheme = new base.Schema({
    teacherid: ObjectId,                             //教师的_id
    totalintegral: {type: Number, default: 0},      //教师总积分
    callnamebyscannum: {type: Number, default: 0}, //扫码点名次数
    redpacketovernum: {type: Number, default: 0},  //红包被抢完次数
    invitedteachernum:{type: Number, default: 0},  //邀请的教师数量
    invitedactiveteachernum:{type:Number,default:0}//被邀请的活跃考教师数量
});

IntegralScheme.index({totalintegral:1},{'background':true});

var IntegralEntity = base.mongoose.model('IntegralEntity',IntegralScheme,'integral');
exports.IntegralEntity = IntegralEntity;