/**
 * Created by Ray on 16/8/3.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;

//教师端的讨论
var DiscussionScheme = new base.Schema({
    title:String,                                //提问标题
    content:String,                             //提问内容
    createtime:{type:Date,default:Date.now},   //创建时间
    courseclassid:ObjectId,                     //讨论所在班级 id
    userid:ObjectId,                            //提问用户id,userAccountId,
    isanonymous:{type:Boolean,default:false}, //是否匿名
    isreaded:{type:Boolean,default:false},    //教师是否阅读了这个讨论
    istop:{type:Boolean,default:false},       //是否置顶
    isessence:{type:Boolean,default:false},    //是否精华
    isaward:{type:Boolean,default:false},     //是否被表扬
    isprivatelitter:{type:Boolean,default:false},  //是否为私信
    receiverid:ObjectId,                         //私信对象id
    samecount:{type:Number}                     //同问次数
});

DiscussionScheme.index({academyid:1},{"background":true});

var DiscussionEntity = base.mongoose.model('DiscussionEntity',DiscussionScheme,'discussion');
exports.DiscussionEntity = DiscussionEntity;