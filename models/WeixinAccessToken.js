/**
 * 微信公众号接口调用凭据
 */
var base = require('./Base');
var ObjectId = base.ObjectId;

var WeixinAccessTokenScheme = new base.Schema({
    accessToken:String,               //接口调用凭据
    expireTime:{type:Date,default:Date.now}              //过期时间
});

var WeixinAccessTokenEntity = base.mongoose.model('WeixinAccessTokenEntity',WeixinAccessTokenScheme,'weixinAccessToken');

exports.WeixinAccessTokenEntity  = WeixinAccessTokenEntity;
