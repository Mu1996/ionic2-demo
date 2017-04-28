/**
 * Created by TomKK on 2016/7/4.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var VoteStudentSchema = new base.Schema({
    voteid:ObjectId,                        //所属vote的id
    questionid:ObjectId,                    //对应问题的id
    schoolcode:String,                      //学校代码
    studentcode:String,                     //学号
    finishtime:{type:Date,default:Date.now},//结束时间
    options:[]                              //问题选项
});

var VoteStudentEntity = base.mongoose.model('VoteStudentEntity',VoteStudentSchema,'votestudents');
exports.VoteStudentEntity = VoteStudentEntity;
