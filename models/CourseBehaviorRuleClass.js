/**
 * Created by zibu on 2016/8/12.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var CourseBehaviorRuleClassScheme = new base.Schema({
    teacherid: ObjectId,    //教师ID
    courseclassid:ObjectId,//课程ID
    classname:String         //所属类名
});
var CourseBehaviorRuleClassEntity = base.mongoose.model('CourseBehaviorRuleClassEntity',CourseBehaviorRuleClassScheme,'coursebehaviorruleclass');
exports.CourseBehaviorRuleClassEntity  = CourseBehaviorRuleClassEntity;