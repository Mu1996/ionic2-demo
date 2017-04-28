/**
 * Created by muyonghui on 16/10/30.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var TicketAudienceScheme = new base.Schema({
    audienceid: ObjectId,//学生id
    activityname: String, //活动名称
    ticketid: ObjectId, //抢票活动id
    activitytime:Date,//活动开始时间
    activitylocationname: String,//活动场地地点
    seatrow:Number,//座位行数
    seatcol:Number,//座位列数
    ticketrow:Number,
    ticketcol:Number,
    gettime:Date,
    audiencename:String,//用户名字
    audiencetype: String,//用户类型
    academy:String,//用户学院
    tickettype:Number// 1 有位座 2 额外无位座
});
var TicketAudienceEntity = base.mongoose.model('TicketAudienceEntity',TicketAudienceScheme,'ticketaudience');
exports.TicketAudienceEntity  = TicketAudienceEntity;