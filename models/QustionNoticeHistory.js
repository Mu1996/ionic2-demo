/**
 * Created by Administrator on 2016/9/19.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var QuestionNoticeHistoryScheme = new base.Schema({
    noticetime:{type:Date,default:Date.now},
    recipientid:ObjectId,
    recipientname:String,
    noticecontent:String
});
var QuestionNoticeHistoryEntity = base.mongoose.model('QuestionNoticeHistoryEntity',QuestionNoticeHistoryScheme,'questionnoticehistory');
exports.QuestionNoticeHistoryEntity  = QuestionNoticeHistoryEntity;