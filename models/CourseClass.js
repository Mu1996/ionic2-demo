/**
 * Created by zjh on 2016/3/4.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var CourseClassScheme = new base.Schema({
    name: String,//课程班级名称
    code:String,//课程班级代码
    num: {type: Number, default: 0},//选课人数
    signInTotal: {type: Number, default: 0},//点名签到累计次数
    redTotal: {type: Number, default: 0},//红包累计次数
    signRateAvg: {type: Number, default: 0},//平均签到率
    redRateAvg: {type: Number, default: 0},//平均红包参与率
    statsTime:Date,//统计计算时间
    coursecode: String,//课程编码
    fullname: String,//课程全称
    credit: Number,//学分
    hours: Number,//课时
    uid: ObjectId,//教师ID
    schoolcode:String,//学校编码
    academyid: ObjectId,//学院ID
    teachercode:String,//教师编码
    teachername: String,//教师姓名
    classname: String,//选课班级名称
    cover:String,//课程封面
    year:String,//学年
    term:String,//学期
    address:String,//上课地点
    time:String,//上课时间
    week:String,//开课周
    lasttime: {type:Date,default:Date.now},//最后上课时间
    isbindstudentcompleted:{type:Boolean,default:false},//是否绑定学生信息完成
    isdeled:{type:Boolean,default:false},//是否删除
    createtime:{type:Date,default:Date.now},//创建时间
    startDate:Date,//开课日期
    endDate:Date,//结课日期
    calendar: [
        {
            sn: Number,//序号
            day: String,//周几
            day: Number,//周几数字
            begintime: String,//上课开始时间
            endtime: String//上课结束时间
        }
    ],
    property: {type: String, default: "公开"}, //属性 公开 私有 默认公开
    isexample: Boolean,      //是否是由默认数据生成的课程
    signinqrcodeinterval:{type: Number, default: 30},        //签到二维码刷新时间
    isallowedautoaddstudent:{type: Boolean, default: true}   //是否允许直接扫码直接加入班级
});
var CourseClassEntity = base.mongoose.model('CourseClassEntity', CourseClassScheme, 'courseclass');
exports.CourseClassEntity = CourseClassEntity;