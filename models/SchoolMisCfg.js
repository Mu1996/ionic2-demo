/**
 * Created by zjh on 2016/3/4.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var SchoolMisCfgScheme = new base.Schema({
    schoolname: String,//学校名称
    schoolcode:String,//编码
    entryurl:String,//访问网址
    txtusername:String,//用户名字段名称
    txtpassword:String,//密码字段名称
    txtsecretcode:String//验证码字段名称
});
var SchoolMisCfgEntity = base.mongoose.model('SchoolMisCfgEntity',SchoolMisCfgScheme,'schoolmiscfg');
exports.SchoolMisCfgEntity  = SchoolMisCfgEntity;