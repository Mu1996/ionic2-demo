var base = require('./Base');
var ObjectId = base.ObjectId;
var TestQuestionScheme = new base.Schema({
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
        correct:Boolean//是否答案
    }],//选项
    createtime:{type:Date,default:Date.now}
});
var TestQuestionEntity = base.mongoose.model('TestQuestionEntity',TestQuestionScheme,'testQuestion');
exports.TestQuestionEntity  = TestQuestionEntity;