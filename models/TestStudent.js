var base = require('./Base');
var ObjectId = base.ObjectId;
var TestStudentSchema = new base.Schema({
    testId:ObjectId,
    courseClassId: ObjectId,//测验所属班级id
    studentId: ObjectId,//学生id
    schoolCode:String,   //学校编码
    studentCode: String,//学生code
    studentName: String,//学生姓名
    studentHeadImage:String,//学生头像
    title:String,           //测验的标题
    createTime:{type:Date,default:Date.now},    //创建时间
    startTime:Date,      //开始时间
    endTime:Date,      //结束时间
    duration:Number,//限制时长
    state:Number,
    studentState:Number,//学生答题状态：0=未答题， 1=正在答题， 2=答题已完成
    totalNum:Number,//总题目数
    beginTime:Date,//开始答题时间
    finishedTime:Date,//完成时间
    finishedNum:Number,//完成题目数
    rightNum:Number,//正确题目数
    wrongNum:Number,//错误题目数
    fullScore:Number,//满分
    totalScore:{type:Number,default:0}//该学生总得分
});

var TestStudentEntity = base.mongoose.model('TestStudentEntity',TestStudentSchema,'testStudent');
exports.TestStudentEntity = TestStudentEntity;