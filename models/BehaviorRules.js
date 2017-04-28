/**
 * Created by zjh on 2016/3/14.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var BehaviorRulesScheme = new base.Schema({
    name: String,//规则名称
    score: {type: Number , default: 0},//分数
    remark:String,//说明
    icon:String,//图标URL
    type:{type: String , default:'t'},//规则类型，t=教师自有，s=系统自带
    isdel:Boolean,//是否删除
    uid:ObjectId//教师ID
});
var BehaviorRulesEntity = base.mongoose.model('BehaviorRulesEntity',BehaviorRulesScheme,'behaviorrules');
exports.BehaviorRulesEntity  = BehaviorRulesEntity;