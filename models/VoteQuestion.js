/**
 * Created by TomKK on 2016/7/4.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var VoteQuestionSchema = new base.Schema({
    title:String,                                       //投票问题的标题
    ismulti:Boolean,                                    //是否是多选题目
    voteid:ObjectId,                                    //所属的投票Id
    options:[{content:String,id:Number,label:String}]   //问题的选项 包含内容，第几个选项id，和前缀
});

var VoteQuestionEntity = base.mongoose.model('VoteQuestionEntity',VoteQuestionSchema,'votequestions');
exports.VoteQuestionEntity = VoteQuestionEntity;