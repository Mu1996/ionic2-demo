/**
 * Created by muyonghui on 16/10/30.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var TicketScheme = new base.Schema({
    activityname: String, //活动名称
    activitydescription: String, //活动详情
    teachername: String, //教师姓名
    schoolcode:String, //学校代码
    userid:ObjectId,//发布者id
    usertype:String,//发布者类型
    activitytime:Date,//活动开始时间
    activitylocationid:ObjectId,//huo动场地id
    activitylocationname: String,//活动场地地点
    seatrow:Number,//场地行数
    seatcol:Number,//场地列数
    selectednum:Number,//已选座位
    notselectednum:Number,//未选座位
    seatnum:Number,//座位总数
    extraseat:Number,//额外 无位座
    notselectedextraseat:Number,//未选 额外座
    seat:[{ //座位信息
        row:Number,// 行
        col:Number,// 列
        ticketrow:Number,//票 实际行
        ticketcol:Number,//票 实际列
        audienceid:ObjectId,//观众id
        audiencename:String,
        audiencetype:String,//观众类型
        academy:String,//学院
        state:{type:Number,default:0}//0 不可选, 可选1 , 2 已选
    }],
    gettickettime: Date,//抢票开始时间
    teacherlimit:Number,//教师限抢票数
    studentlimit:Number,//学生限抢票数
    ismessage:Boolean,//是否发送短信提醒
    createtime:{type:Date,default:new Date()},
    state:{type:Number,default:0} //0 未审核 1 审核通过
});
var TicketEntity = base.mongoose.model('TicketEntity',TicketScheme,'ticket');
exports.TicketEntity  = TicketEntity;