var base = require('./Base');
var ObjectId = base.ObjectId;
var RedPacketStudentScheme = new base.Schema({
    redpacketid:ObjectId,
    totalScore: {type: Number, default: 0},//总得分
    redScore: {type: Number, default: 0},//红包得分
    rightScore:{type: Number, default: 0},//答对保障得分
    answerScore:{type: Number, default: 0},//参与回答得分
    redpacketnote: String,//附言
    coursecode: String,//课程编码
    coursename: String,//课程名称
    courseclasscode:String,//课程班级代码
    courseclassid: ObjectId,
    teacherid:ObjectId,//教师ID
    studentid:ObjectId,//学生ID
    question:{
        description:String,//描述
        chapterid:ObjectId,//章节ID
        chaptertitle:String,//章节标题
        options:[{
            description:String,//描述
            correct:Boolean,//是否答案
            cheecked:Boolean,
            isright:Boolean
        }]
    },
    isright:{type: Boolean, default: false},//是否回答正确
    redpackettakerid: ObjectId,
    gettime:Date
});

var RedPacketStudentEntity = base.mongoose.model('RedPacketStudentEntity',RedPacketStudentScheme,'redpacketstudent');
exports.RedPacketStudentEntity  = RedPacketStudentEntity;