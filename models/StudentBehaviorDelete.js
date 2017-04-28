/**
 * Created by muyonghui on 2017/4/7.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var StudentBehaviorDeleteScheme = new base.Schema({
    behaviorname: String,//规则名称
    score: {type: Number , default: 0},//分数
    description:String,//规则说明
    remark:String,//备注
    courseclasscode:String,//课程班级代码
    courseclassname:String,//课程班级名称
    schoolcode:String,   //学校编码
    studentcode:String,//学号
    studentname:String,//学生姓名
    image:String,//图标URL
    tid:ObjectId,//教师ID
    studentid:ObjectId,//学生ID
    rid:ObjectId,//规则ID
    behaviortype:String,//行为类型，cn=CallName点名，rp=RedPacket红包，rm=remark评价
    courseclassid:ObjectId,//课程ID
    sourceTable:String,//来源数据表
    sourceId:ObjectId,//来源数据ID
    isDeled:Boolean,//是否删除
    modifyTime:Date,//修改时间
    createtime:{type:Date,default:Date.now}//创建时间
});
var StudentBehaviorDeleteEntity = base.mongoose.model('StudentBehaviorDeleteEntity',StudentBehaviorDeleteScheme,'studentbehaviordelete');
exports.StudentBehaviorDeleteEntity  = StudentBehaviorDeleteEntity;