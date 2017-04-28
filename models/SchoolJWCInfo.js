/**
 * Created by muyonghui on 16/8/1.
 */

var base = require('./Base');
var ObjectId = base.ObjectId;
var SchoolJWCInfoScheme = new base.Schema({
    schoolname: String,//学校名称
    schoolcode:String,//编码
    entryurl:String,//访问网址
    username:String,//用户名
    code:String,//用户学号工号
    usertype:String,//用户类型
    mobile:String,//电话
    jwcusername:String,//教务处账号
    jwcpassword:String,//教务处密码
});
var SchoolJWCInfoEntity = base.mongoose.model('SchoolJWCInfoEntity',SchoolJWCInfoScheme,'schooljwcinfo');
exports.SchoolJWCInfoEntity  = SchoolJWCInfoEntity;