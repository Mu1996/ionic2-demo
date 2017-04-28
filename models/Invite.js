/**
 * Created by Ray on 16/9/17.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;

var InviteScheme = new base.Schema({
    inviterid:ObjectId,      //发起邀请者id
    inviterheadimage:String,        //发起邀请者头像
    invitername:String,             //发起邀请者的名字
    invitermobile:String,           //发起邀请者的手机
    invitertype:String,             //发起邀请者的类型
    inviteeid:ObjectId,            //被邀请者id
    inviteeheadimage:String,        //被邀请者头像
    inviteename:String,             //被邀请者的名字
    inviteemobile:String,           //被邀请者的手机
    inviteetype:String,             //被邀请者的类型
    convertibility:Boolean,         //对于被邀请者而言,是否符合兑换要求
    state:Number,                    //兑换的状态,0未兑换,1已兑换,2兑换中,3兑换失败
    createtime:{type:Date,default:Date.now},    //该表生成时间
    registertime:Date                       //被邀请的用户注册时间,即userAccount中createtime
});

InviteScheme.index({inviterid:1},{"background":true});

var InviteEntity = base.mongoose.model("InviteEntity",InviteScheme,"invite");
exports.InviteEntity = InviteEntity;