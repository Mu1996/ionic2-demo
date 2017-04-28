/**
 * Created by Ray on 16/8/3.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;

var DiscussionAnswerScheme = new base.Schema({
    discussionid:ObjectId,                           //问题Id
    createtime:{type:Date,default:Date.now},        //创建时间
    userid:ObjectId,                                 //回答者Id,UserAccount
    content:String,                                  //回答内容
    isanonymous:{type:Boolean,default:false},       //是否匿名
    isaward:{type:Boolean,default:false}           //是否被表扬
});

DiscussionAnswerScheme.index({discussionid:1},{"background":true});

var DiscussionAnswerEntity = base.mongoose.model('DiscussionAnswerEntity',DiscussionAnswerScheme,'discussionanswer');
exports.DiscussionAnswerEntity = DiscussionAnswerEntity;