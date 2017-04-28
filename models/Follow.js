/**
 * Created by Ray on 16/6/26.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;

var FollowScheme = new base.Schema({
    followerid: ObjectId,           //发起关注的,用户的_id
    followingid: ObjectId,          //被关注者的id
    schoolcode: String,              //学校代码
    teachercode:String,              //被关注的,老师的工号
    courseclassid:ObjectId,         //被关注的,课程的_id
    state:{type:Number,default:1},  //0代表关注中,1代表申请中,2代表拒绝,3代表取消关注
    createtime:{type:Date,default:Date.now} //发起关注的时间
});

FollowScheme.index({tuid:1,courseclassid:1},{'background':true});

var FollowEntity = base.mongoose.model('FollowEntity',FollowScheme,'follow');
exports.FollowEntity = FollowEntity;