var base = require('./Base');
var ObjectId = base.ObjectId;
var CourseClassSignInStudentScheme = new base.Schema({
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
    isAdopted:{type:Boolean,default:true},//是否被采用的有效记录
    //为请假功能设置的字段
    remark:String, //表示点名type类型的说明 "a"表示辅导员设置的请假 "n"表示正常生成
    leavestudentid:ObjectId // 对应请假数据
});
var CourseClassSignInStudentEntity = base.mongoose.model('CourseClassSignInStudentEntity',CourseClassSignInStudentScheme,'courseclasssigninstudent');
exports.CourseClassSignInStudentEntity  = CourseClassSignInStudentEntity;