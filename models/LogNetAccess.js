/**
 * 活动表
 */
var base = require('./Base');
var ObjectId = base.ObjectId;

var LogNetAccessScheme = new base.Schema({
    IP:String,               //客户端IP地址
    originalUrl:String,             //访问地址
    referer:String,             //引用地址
    body:String,           //请求参数
    userAgent:String,       //客户端浏览器类型
    acceptEncoding:String,          //客户端浏览器编码类型，gzip为压缩传输
    method:String,           //请求类型 post | get
    loginUserId:String,           //用户ID
    createTime:{type:Date,default:Date.now},       //访问时间
});

var LogNetAccessEntity = base.mongoose.model('LogNetAccessEntity',LogNetAccessScheme,'logNetAccess');
exports.LogNetAccessEntity  = LogNetAccessEntity;
