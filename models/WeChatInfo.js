/**
 * Created by Administrator on 2016/8/10 0010.
 */
/**
 * 微信公众号信息
 */
var base = require('./Base');
var ObjectId = base.ObjectId;

var WeChatInfoScheme = new base.Schema({
    appid:String,           //公众号标识
    access_token:String,       //接口凭据
    refresh_token:String,     //凭据刷新凭据
    exptime:{type:Date,default:Date.now}              //过期时间

});

var WeChatInfoEntity = base.mongoose.model('WeChatInfoEntity',WeChatInfoScheme,'WeChatInfo');

exports.WeChatInfoEntity  = WeChatInfoEntity;
