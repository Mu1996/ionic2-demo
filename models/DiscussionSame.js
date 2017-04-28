var base = require('./Base');
var ObjectId = base.ObjectId;

//教师端的讨论
var DiscussionSameScheme = new base.Schema({
    discussionid:ObjectId,                   //问题Id
    sid:ObjectId,                             //同问学生id
    code:String,                             //同问学生的code
    name:String,                             //同问学生的姓名
    createtime:{type:Date,default:Date.now},   //创建时间
});

DiscussionSameScheme.index({academyid:1},{"background":true});

var DiscussionSameEntity = base.mongoose.model('DiscussionSameEntity',DiscussionSameScheme,'discussionsame');
exports.DiscussionSameEntity = DiscussionSameEntity;