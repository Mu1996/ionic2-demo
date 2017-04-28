var base = require('./Base');
var ObjectId = base.ObjectId;
var TestSchema = new base.Schema({
    title:String,           //测验的标题
    courseClassId: ObjectId,//测验所属班级id
    courseClassName:String, //测验所属班级的名称
    courseId: ObjectId,//测验所属课程的Id
    teacherID:ObjectId,//教师ID
    createTime:{type:Date,default:Date.now},    //创建时间
    startTime:Date,      //开始时间
    endTime:Date,      //截止时间
    duration:Number,//限制时长
    state:{type:Number,default:0},//测验的状态：0=未开始， 1=开始可以答题， 2=测验进行中（取消，改在testStudent中新增studentState进行标示）， 3=已完成（取消，改在testStudent中新增studentState进行标示），4=已结束
    isStarted:{type:Boolean,default:false},       //是否开始
    isDeleted:{type:Boolean,default:false},       //是否删除
    totalNum:Number,//总题目数
    fullScore:Number//满分
});

var TestEntity = base.mongoose.model('TestEntity',TestSchema,'test');
exports.TestEntity = TestEntity;