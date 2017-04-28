/**
 * Created by zjh on 2016/3/4.
 */
var base = require('./Base');
var objectId = base.ObjectId;
var CourseScheme = new base.Schema({
    _id:ObjectId,
    mobile: String,//手机(登陆用户名)
    password: String,//密码
    name: String,//姓名
    sex: {type: String, default: 0},//0:女 1:男
    province: String,//省名称
    provinceId: String,//省ID
    city: String,//城市名称
    cityId: String,//城市ID
    School: String,//学校名称
    schoolId: String,//学校ID
    college:String,//学员
    department:String,//系
    class:String,//班级
    grade:Number,//年级
    sn:String,//学号
    email:String,//Email
    portraitUri: {type: String, default: ""},//头像
    wxopenId:String,//微信Openid
    ip:{type:String,default:'0.0.0.0'},//ip
    lastLoginTime:Date,//最后登陆时间
    lastActionTime:{type:Date,default:Date.now},//最后活动时间
    createTime:{type:Date,default:Date.now}//创建时间
});
UserTeacherScheme.index({mobile:1},{"background" : true});//设置索引
var UserTeacherEntity = base.mongoose.model('UserTeacherEntity',UserTeacherScheme,'userTeacher');//指定在数据库中的collection名称为userTeacher
exports.UserTeachertEntity  = UserTeacherEntity;//导出UserTeacherEntity实体