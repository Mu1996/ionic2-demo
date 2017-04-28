var base = require('./Base');
var ObjectId = base.ObjectId;
var RedPacketScheme = new base.Schema({
    typename: String,//类型
    totalscore: {type: Number, default: 0},//总分
    num: {type: Number, default: 1},//个数
    note: String,//附言
    coursecode: String,//课程编码
    coursename: String,//课程名称
    courseclasscode:String,//课程班级代码
    courseclassid: ObjectId,
    courseid: ObjectId,
    teacherid:ObjectId,//教师ID
    question:{
        description:String,//描述
        chapterid:ObjectId,//章节ID
        chaptertitle:String,//章节标题
        questionid:ObjectId, //问题ID
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
        }]//选项
    },
    correctGuarantee:{type: Boolean, default: false},//答对保障得分
    rightScore:{type: Number, default: 0},//答对保障得分
    answerScore:{type: Number, default: 0},//参与回答得分
    participatenum:{type:Number,default:0},//参与次数
    partRate:{type:Number,default:0},//参与率
    studentNum:{type:Number,default:0},//班级人数
    statsTime:Date,//统计计算时间
    endtime:Date,//截止时间
    createtime:{type:Date,default:Date.now}
});

var RedPacketEntity = base.mongoose.model('RedPacketEntity',RedPacketScheme,'redpacket');
exports.RedPacketEntity  = RedPacketEntity;