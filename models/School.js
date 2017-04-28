/**
 * Created by zjh on 2016/3/4.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var SchoolScheme = new base.Schema({
    name: String,//学校名称
    code:String,//编码
    hot:String,//是否热门学校
    city: String,//城市名称
    citycode: String,//城市ID
    needVerify:Boolean//是否需要校验用户信息
});
var SchoolEntity = base.mongoose.model('SchoolEntity',SchoolScheme,'school');
exports.SchoolEntity  = SchoolEntity;