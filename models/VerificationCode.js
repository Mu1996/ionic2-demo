/**
 * 验证码
 * Created by yong_pliang on 15/8/13.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;

var VerificationCodeSchema  =new base.Schema({
    mobile:String,//手机号
    code:String,//验证码
    type:Number,//0:注册 1:修改绑定手机 2:修改密码 3:忘记密码
    sendsuccess:{type:Boolean,default:false},
    createtime:{type:Date,default:Date.now},
    expirationtime:Date,//超时时间
    // 为防止代码恶意发送验证码,而与客服端约定生成的具有一定规则的发送token,只有传入合法且数据库中不存在的token才会发送验证码
    //token生成的规则为:ABC-手机号-类别(type)-时间戳(毫秒)
    token:String,
    uid:ObjectId,//注册成功则记录关联的用户账户ID
    used:{type:Boolean,default:false}//是否已使用
});
VerificationCodeSchema.index({mobile:1,uid:1},{"background" : true});//设置索引
var VerificationCodeEntity = base.mongoose.model('VerificationCodeEntity',VerificationCodeSchema,'verificationcode');
exports.VerificationCodeEntity  = VerificationCodeEntity;