/**
 * 活动表
 */
var base = require('./Base');
var ObjectId = base.ObjectId;

var ActivityScheme = new base.Schema({
    title:String,               //标题
    content:String,             //内容
    address:String,             //活动地点
    adminid:ObjectId,           //管理员id   外键
    academyidlist:[{            //活动 接受学院列表 外键
        academyid: ObjectId     //学院ID
    }],
    adminclassidlist:[{         //预留 行政班ID 列表 外键
        adminclassid:ObjectId   //行政班id
    }],
    manageridlist:[{            //指定学生拥有开始签到的能力
        managerid:ObjectId      //学生管理员id
    }],
    isneedapply:{type:Boolean,default:false},        //是否需要报名
    isneedsignin:{type:Boolean,default:false},       //是否需要签到
    isneedmessage:{type:Boolean,default:false},      //是否需要短信通知
    limitapplynum:Number,       //限制报名人数
    showapplynum:Number,       //是否显示报名人数
    schoolcode:String,          //学校代号
    createtime:{type:Date,default:Date.now},       //活动创建时间
    startapplytime:{type:Date,default:Date.now},   //开始报名时间
    endapplytime:{type:Date,default:Date.now},     //结束报名时间
    starttime:Date,                                  //活动开始时间 只用来显示
    istop:{type:Boolean,default:false},             //是否置顶
    state:{type:Number,default:0}, //活动发布状态 0:待审 1:正常 2:结束
    level:Number, // 1 院级 2 校级 3 跨校级
});

ActivityScheme.index({schoolcode:1},{"background":true});

var ActivityEntity = base.mongoose.model('ActivityEntity',ActivityScheme,'activity');
exports.ActivityEntity  = ActivityEntity;
