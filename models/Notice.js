/**
 * Created by Ray on 2016/3/4.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;

var NoticeScheme = new base.Schema({
    title:String,               //标题
    content:String,             //内容
    issendmessage:Boolean,     //是否给学生发送短信通知
    shortessage:String,       //短信内容
    courseclassid:ObjectId,
    adminid: ObjectId,        //管理员账号id
    noticetype:String,         //通知类型,n为通知(Notice),m为提醒(Message),默认n
    academyid: ObjectId,      //学院ID
    createtime:{type:Date,default:Date.now}
});

NoticeScheme.index({courseclassid:1},{"background":true})

var NoticeEntity = base.mongoose.model('NoticeEntity',NoticeScheme,'notice');
exports.NoticeEntity  = NoticeEntity;
