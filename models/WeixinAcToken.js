/**
 * 微信公众号接口调用凭据
 */
var base = require('./Base');
var ObjectId = base.ObjectId;

var WeixinAcTokenScheme = new base.Schema({
    access_token:String,               //接口调用凭据
    exptime:{type:Date,default:Date.now}              //过期时间
});

var WeixinAcTokenEntity = base.mongoose.model('WeixinAcTokenEntity',WeixinAcTokenScheme,'WeixinAcToken');

exports.WeixinAcTokenEntity  = WeixinAcTokenEntity;
