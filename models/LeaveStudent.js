/**
 * Created by muyonghui on 2017/4/13.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;

var LeaveStudentScheme = new base.Schema({
    title:String, //默认 学生名+时间+"请假申请"
    reason:String, // 请假原因
    type:String, // 请假类型 事假or病假
    studentid:ObjectId,
    mobile:String, /*学生手机*/
    schoolcode:String,   //学校编码
    academyid:ObjectId, // 学院id
    studentcode:String, /*学生学号*/
    studentname:String, /*学生姓名*/
    images:[{               // 证明的附加图片
        filetype:String,
        fileurl:String,
        originalname:String,
        size:{type:Number,default:0},
        uploadtime:{type:Date,default:Date.now},
    }],
    auid:ObjectId, //申请受理者 辅导员id
    aname:String, //申请受理者 受理辅导员name
    state:{type:Number,default:0}, // 0 申请中 1 申请通过 2 申请失败
    createtime:{type:Date,default:Date.now},  //请假创建时间
    handletime:{type:Date,default:Date.now},  //请假处理时间
    starttime:{type:Date,default:Date.now},   //请假开始时间
    endtime:{type:Date,default:Date.now},     //请假结束时间
});

LeaveStudentScheme.index({studentid:1},{"background":true});

var LeaveStudentEntity = base.mongoose.model('LeaveStudentEntity',LeaveStudentScheme,'leavestudent');
exports.LeaveStudentEntity  = LeaveStudentEntity;
