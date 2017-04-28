/**
 * Created by Administrator on 2016/8/9 0009.
 */
/**
 * 微信第三方接口调用凭据
 */
var base = require('./Base');
var ObjectId = base.ObjectId;

var CATokenScheme = new base.Schema({
    component_access_token:String,               //接口调用凭据
    exptime:{type:Date,default:Date.now}              //过期时间
});

var CATokenEntity = base.mongoose.model('CATokenEntity',CATokenScheme,'CAtoken');

exports.CATokenEntity  = CATokenEntity;
