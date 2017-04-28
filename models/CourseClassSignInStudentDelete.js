/**
 * Created by muyonghui on 2017/4/6.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var CourseClassSignInStudentDeleteScheme = new base.Schema({
    courseclasssigninid: ObjectId,/*签到记录ID*/
    courseclassid: ObjectId,/*课程班级id*/
    studentid:ObjectId,/*学生id*/
    teacherId:ObjectId,/*教师id*/
    schoolcode:String,   //学校编码
    studentcode:String,/*学生学号*/
    studentname:String,/*学生姓名*/
    type:String,//签到类型:presentscan=扫码签到，presenthand=手工补签到、absent=缺勤、late=迟到、leave=请假
    createtime:Date,
    scantoken:String,//签到密文字符串
    //为未注册的用户生成暂时的签到记录
    wxopenid:String,//微信openid
    wxnickname:String,//微信昵称
    wxheadimgurl:String,//微信头像
    isscored:{type:Boolean,default:true},//是否已经计算得分
    isAdopted:{type:Boolean,default:true}//是否被采用的有效记录
});
var CourseClassSignInStudentDeleteEntity = base.mongoose.model('CourseClassSignInStudentDeleteEntity',CourseClassSignInStudentDeleteScheme,'courseclasssigninstudentdelete');
exports.CourseClassSignInStudentDeleteEntity  = CourseClassSignInStudentDeleteEntity;