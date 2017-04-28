/**
 * Created by muyonghui on 16/10/30.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var TicketLocationScheme = new base.Schema({
    teacherid:ObjectId,//教师id
    activitylocationname: String,//活动场地名称
    seatrow:Number,//场地行数
    seatcol:Number,//场地列数
    seatnum:Number,//座位总数
    schoolcode:String,
    seat:[{ //座位信息
        row:Number,
        col:Number,
        ticketrow:Number,//票 实际行
        ticketcol:Number,//票 实际列
        state:{type:Number,default:0}//0 不可选, 1 可选, 2 已选

    }],
    createtime:{type:Date,default:new Date()}
});
var TicketLocationEntity = base.mongoose.model('TicketLocationEntity',TicketLocationScheme,'ticketlocation');
exports.TicketLocationEntity  = TicketLocationEntity;