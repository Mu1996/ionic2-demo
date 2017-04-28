/**
 * Created by Ray on 16/4/9.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;

var NoticeStudentScheme = new base.Schema({
    title:String,                               //标题
    content:String,                             //内容
    noticeid: ObjectId,                       //记录任务id建索引
    courseclassstudentid:ObjectId,          //记录学生信息id建索引
    adminclassstudentid:ObjectId,           //行政班学生信息id
    courseclassname:String,                   //课程名
    adminclassname: String,                   //行政班名
    schoolcode:String,                        //学校编号根据这两者来查
    studentcode:String,                       //学号
    year:String,                               //学年
    term:String,                               //学期
    createtime:{type:Date,default:Date.now},//创建时间
    isreaded:{type:Boolean,default:false}, //是否阅读
    readtime: Date ,                          //最后阅读时间
    noticetype:String,                       //通知类型,n为通知(Notice),m为提醒(Message),默认n
    studentnamepinyin:String
});


NoticeStudentScheme.index({noticeid:1,courseclassstudentid:1},{"background" : true});//设置索引

var NoticeStudentEntity = base.mongoose.model('NoticeStudentEntity',NoticeStudentScheme,'noticestudent');
exports.NoticeStudentEntity = NoticeStudentEntity;
