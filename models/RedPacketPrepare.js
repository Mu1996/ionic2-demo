/**
 * Created by Ray on 2016/10/11.
 */
//准备发布的红包，红包暂存,这些数据是暂存前端直接发送红包的初始数据
var base = require('./Base');
var ObjectId = base.ObjectId;
var RedPacketPrepareScheme = new base.Schema({
    uid:ObjectId,               //教师id,
    courseclassid:ObjectId,     //班级id
    question:{
        _id:ObjectId,
        chapterid:ObjectId,
        chaptertitle:String,
        courseclasscode:String,
        courseclassid:ObjectId,
        coursecode:String,
        coursename:String,
        createtime:String,
        description:String,
        options:[{
            _id:String,
            description:String,//描述
            correct:Boolean//是否答案
        }],
        picked:Boolean,
        uid:ObjectId
    },
    redPacket:{
        courseclasscode:String,
        courseclassid:ObjectId,
        coursecode:String,
        courseid:String,
        coursename:String,
        note:String,
        num:String,
        totalscore:String,
        correctGuarantee:{type: Boolean, default: false},//答对保障得分
        rightScore:{type: Number, default: 0},//答对保障得分
        answerScore:{type: Number, default: 0},//参与回答得分
        typename:String
    },
    scoreArray:[],
    createtime:{type:Date,default:Date.now}
});

var RedPacketPrepareEntity = base.mongoose.model('RedPacketPrepareEntity',RedPacketPrepareScheme,'redpacketprepare');
exports.RedPacketPrepareEntity = RedPacketPrepareEntity;