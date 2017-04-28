/**
 * Created by zjh on 2016/3/14.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var CourseBehaviorRulesScheme = new base.Schema({
    name: String,//规则名称
    namepinyin: String,//名称首字母
    score: {type: Number , default: 0},//分数
    description:String,//说明
    image:String,//图标URL
    type:{type: String , default:'t'},//规则类型，t=教师自有，s=系统自带
    behaviortype:String,//行为类型，cn=CallName点名，rp=RedPacket红包，rm=remark评价
    isdel:Boolean,//是否删除
    uid:ObjectId,//教师ID
    rid:ObjectId,//规则ID
    courseclassid:ObjectId,//课程ID
    lasttime:{type:Date,default:Date.now},//最后使用时间
    lastchangetime:{type:Date,default:Date.now},//最后修改时间
    ntimes: {type: Number , default: 0},//使用次数
    createtime:{type:Date,default:Date.now},//创建时间
    classname:String//所属类名
});
var CourseBehaviorRulesEntity = base.mongoose.model('CourseBehaviorRulesEntity',CourseBehaviorRulesScheme,'coursebehaviorrules');
exports.CourseBehaviorRulesEntity  = CourseBehaviorRulesEntity;