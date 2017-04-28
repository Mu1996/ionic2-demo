/**
 * Created by TomKK on 2016/7/4.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var VoteSchema = new base.Schema({
    author:String,                              //投票的发起者
    adminid:ObjectId,                           //辅导员id,辅导员端用到
    createtime:{type:Date,default:Date.now},    //创建时间
    deadline:{type:Date,default:Date.now},      //截止时间
    isanonymous:Boolean,                        //是否是匿名投票
    courseclassid:ObjectId,                     //班级id
    coursename:String,                          //班级名称
    title:String                                //投票标题
})

var VoteEntity = base.mongoose.model('VoteEntity',VoteSchema,'votes');
exports.VoteEntity  = VoteEntity;//导出UserUpdateHistoryEntity实体