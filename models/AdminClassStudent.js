/**
 * Created by zjh on 2016/3/4.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var AdminClassStudentScheme = new base.Schema({
    adminclassid:ObjectId,//班级ID
    academyid:ObjectId,//学院id
    adminclassname:String,//班级名称
    schoolcode:String,//学校编码
    studentcode:String,//学生编码
    studentname:String,//学生姓名
    studentnamepinyin:String,//学生姓名首字母
    studentid:ObjectId,//学生ID
    remark:String,//备注
    studentheadimage:String,//学生头像
    isdeled:{type:Boolean,default:false},//是否删除
    year:String,//学年
    term:String,//学期
    mobile:String//手机号码
});
var AdminClassStudentEntity = base.mongoose.model('AdminClassStudentEntity',AdminClassStudentScheme,'adminclassstudent');
exports.AdminClassStudentEntity  = AdminClassStudentEntity;