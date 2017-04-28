var base = require('./Base');
var ObjectId = base.ObjectId;
var QuestionScheme = new base.Schema({
    description:String,//描述
    coursecode: String,//课程编码
    coursename: String,//课程名称
    courseclasscode:String,//课程班级代码
    courseclassid: ObjectId,
    courseid: ObjectId,
    uid:ObjectId,//教师ID
    chapterid:ObjectId,//章节ID
    chaptertitle:String,//章节标题
    options:[{
        description:String,//描述
        correct:Boolean//是否答案
    }],//选项
    images:[{
        filetype:String,
        fileurl:String,
        originalname:String,
        size:{type:Number,default:0},
        uploadtime
            :{type:Date,default:Date.now},
    }],//选项
    refernumber:{type:Number,default:0} ,   //引用次数
    asnumber:{type:Number,default:0}, //回答次数
    accuracy:{type:Number,default:0},   //正确数
    createtime:{type:Date,default:Date.now}
});
var QuestionEntity = base.mongoose.model('QuestionEntity',QuestionScheme,'question');
exports.QuestionEntity  = QuestionEntity;