/**
 * Created by Ray on 16/8/12.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;

//微信接受消息
var WeixinMessageScheme = new base.Schema({
    userid:ObjectId,        //生成二维邀请码的用户ObjectId
    mobile:String,          //生成二维邀请码的用户手机
    shareqrcodeid:ObjectId, //哪个二维码邀请用户的,ObjectId
    tousername:String,      //xml 中微信返回的ToUserName,开发者微信号
    fromusername:String,    //FromUserName,发送方帐号（一个OpenID）
    createtime:String,      //CreateTime,消息创建时间 （整型）
    msgtype:String,         //消息类型
    content:String,         //文本消息内容
    msgid:String,           //消息id，64位整型
    event:String,           //事件类型
    eventkey:String,        //事件KEY值
    ticket:String           //二维码的ticket
});

var WeixinMessageEntity = base.mongoose.model("WeixinMessageEntity",WeixinMessageScheme,"weixinmessage");
exports.WeixinMessageEntity = WeixinMessageEntity;