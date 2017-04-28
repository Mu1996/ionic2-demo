var base = require('./Base');
var ObjectId = base.ObjectId;
var CourseClassSignInScheme = new base.Schema({
    courseclassid: ObjectId,
    teacherid:ObjectId,//教师id
    begintime:Date,//开始时间
    endtime:Date,//结束时间
    academyId:ObjectId,//学院ID
    classstudentnum:Number,//班级人数（不包括未注册人数）
    signinstudentnum:Number,//实到人数
    regsigninnum:Number,//已注册签到人数
    unregsigninnum:Number,//未注册签到人数
    unsigninnum:Number,//未签到人数
    latenum:Number,//迟到人数
    absentnum:Number,//缺勤人数
    leavenum:Number,//请假人数
    recordCount:Number,//记录总数
    signInRate:Number,//签到率
    sumtime:Date,//统计时间
    issended:{type:Boolean,default:false},//是否已经发送消息提醒
    type:{type:String,default:'code'},//签到类型：code=扫描签到、hand=手工签到
    tokens:[{//保存token的数组
        code:String,
        createtime:Date
    }]
});
var CourseClassSignInEntity = base.mongoose.model('CourseClassSignInEntity',CourseClassSignInScheme,'courseclasssignin');
exports.CourseClassSignInEntity  = CourseClassSignInEntity;