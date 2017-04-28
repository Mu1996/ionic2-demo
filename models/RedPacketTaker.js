var base = require('./Base');
var ObjectId = base.ObjectId;
var RedPacketTakerScheme = new base.Schema({
    redpacketid:ObjectId,
    score: {type: Number, default: 0},//分数
    redpacketnote: String,//附言
    coursecode: String,//课程编码
    coursename: String,//课程名称
    courseclasscode:String,//课程班级代码
    courseclassid: ObjectId,
    courseid: ObjectId,
    teacherid:ObjectId,//教师ID
    isgeted:{type: Boolean, default: false},//是否已经被领取
    studentid:ObjectId,//学生ID
    studentcode:String,//学生code
    studentname:String,//学生姓名
    studentimage:String,//学生头像
    gettime:Date
});

var RedPacketTakerEntity = base.mongoose.model('RedPacketTakerEntity',RedPacketTakerScheme,'redpackettaker');
exports.RedPacketTakerEntity  = RedPacketTakerEntity;