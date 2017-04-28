/**
 * Created by zjh on 2016/3/4.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var CourseClassStudentScheme = new base.Schema({
    courseclassid:ObjectId,//课程班级ID
    tuid:ObjectId,//教师ID
    suid:ObjectId,//学生ID
    schoolcode:String,//学校编码
    teachercode:String,//教师编码
    teachername:String,//教师姓名
    studentcode:String,//学生编码
    studentname:String,//学生姓名
    studentnamepinyin:String,//学生姓名首字母
    courseclasscode:String,//课程ID
    courseclassname:String,//课程班级名称
    major: String,//专业
    classname: String,//班级名称
    score:String,//成绩
    credit: Number,//该门课程获得的总学分
    pointaverage: Number,//绩点
    year:String,//学年
    term:String,//学期
    isFreeListening:Boolean,//是否免听
    rednum:{type:Number,default:0},//参与红包次数
    totalscore:{type:Number,default:0},//总分
    interanum:{type:Number,default:0},//参与互动次数
    signInTotal:{type:Number,default:0},//所在班级点名总次数
    signInCount:{type:Number,default:0},//签到次数
    absenceCount:{type:Number,default:0},//缺勤次数
    attendRate:{type:Number,default:0},//签到率
    signInScore:{type:Number,default:0},//点名得分总和
    redTotal:{type:Number,default:0},//所在班级发红包总次数
    redCount:{type:Number,default:0},//参加红包次数
    redScore:{type:Number,default:0},//参与红包得分总数
    redRate:{type:Number,default:0},//参与红包率
    otherCount:{type:Number,default:0},//其他互动总次数
    otherScore:{type:Number,default:0},//其他互动总得分
    statsTime:Date,//统计计算时间
    ranking:Number,//班级排名
    lastscore:Number,//最后一次获得分数
    lasttime:Date,//最后一次交互时间
    lastclasstime:Date,//最后上课时间
    remark:String,//备注
    studentheadimage:String,//学生头像
    teacherheadimage:String,//教师头像
    email:String,
    mobile:String,
    isdeled:{type:Boolean,default:false},//是否删除
    isexample: Boolean,      //是否是由默认数据生成的课程的学生
    addtime:Date
});
var CourseClassStudentEntity = base.mongoose.model('CourseClassStudentEntity',CourseClassStudentScheme,'courseclassstudent');
exports.CourseClassStudentEntity  = CourseClassStudentEntity;