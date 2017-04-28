var base = require('./Base');
var ObjectId = base.ObjectId;

var ActivityApplyScheme = new base.Schema({//只有报名或关注的学生会生成这张表
    activityid:ObjectId,                     //活动id 外键
    userid:ObjectId,                         //报名者id
    issignin:{type:Boolean,default:false}, //是否签到
    isseedmessage:Boolean,                   //是否发送短信
    createtime:{type:Date,default:Date.now}, //生成这张表的时间时间
    applytime:Date,
    signintime:Date,                         //签到时间
    isattach:{type:Boolean,default:true},     //是否关注
    isapply:Boolean,                         //是否报名
    schoolcode:String
});


ActivityApplyScheme.index({activityid:1},{"background" : true});//设置索引

var ActivityApplyEntity = base.mongoose.model('ActivityApplyEntity',ActivityApplyScheme,'activityapply');
exports.ActivityApplyEntity = ActivityApplyEntity;
