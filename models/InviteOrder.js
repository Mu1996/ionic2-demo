/**
 * Created by zibu on 2016/9/17.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;

var InviteOrderScheme = new base.Schema({
    money: Number,                           //订单总金额
    inviterid: ObjectId,                   //邀请者ID
    invitername: String,                    //邀请者名字
    inviterheadimage:String,                //邀请者头像
    invitermobile:String,                   //邀请者手机号码
    state:Number,                          //是否支付 0未审核未支付 1审核通过未支付 2审核通过已支付

    createtime:{type:Date,default:Date.now},//创建时间
    checktime:{type:Date},//审核时间
    paytime:{type:Date},//支付时间
    invitee:[
        {
            id:ObjectId,                //被邀请者id
            name:String,                 //被邀请者姓名
            mobile:String,               //被邀请的手机号
            headimage:String,            //被邀请的头像
            inviteetype:String                 //被邀请者类型,    用type字段会mongoose报错
        }
    ]
});

InviteOrderScheme.index({inviterid:1},{'background':true});

var InviteOrderEntity = base.mongoose.model('InviteOrderEntity',InviteOrderScheme,'inviteorder');
exports.InviteOrderEntity = InviteOrderEntity;