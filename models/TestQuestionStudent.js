var base = require('./Base');
var ObjectId = base.ObjectId;
var TestQuestionStudentScheme = new base.Schema({
    testStudentId:ObjectId,//测验ID
    testId:ObjectId,//测验ID
    questionId:ObjectId,//题目ID
    description:String,//描述
    score:Number,//分值
    images:[{
        filetype:String,
        fileurl:String,
        originalname:String,
        size:{type:Number,default:0},
        uploadtime
            :{type:Date,default:Date.now},
    }],
    options:[{
        description:String,//描述
        answer:Boolean,//是否学生提交的答案
        correct:Boolean//是否正确
    }],//选项
    no:Number,//序号
    isRight:Boolean,
    submitTime:Date,//提交时间
    createTime:{type:Date,default:Date.now}
});
var TestQuestionStudentEntity = base.mongoose.model('TestQuestionStudentEntity',TestQuestionStudentScheme,'testQuestionStudent');
exports.TestQuestionStudentEntity  = TestQuestionStudentEntity;