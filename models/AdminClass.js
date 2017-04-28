/**
 * Created by zjh on 2016/3/4.
 * 行政班
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var AdminClassScheme = new base.Schema({
    name: String,//班级名称 必填
    schoolcode:String,//学校编码 必填
    collegename: String,//学院名称 必填
    collegeid: ObjectId,//学院id 必填
    department: String,//系名称
    departmentid: ObjectId, //系id
    major: String,//专业名称
    majorid: ObjectId, //专业ID
    year:Number,//入学年份 必填
    contactstudentname:String,//学生联系人
    contactstudentcode:String,//学生联系人学号
    contactstudentmobile:String,//学生联系人手机号
    contactstudentemail:String,//学生联系人邮箱
    num: {type: Number , default: 0},//班级人数
    regnum:Number,//已注册人数
    administratorid:ObjectId,//管理员id
    creatorid:ObjectId,//创建人id
    modifyid:ObjectId,//修改人id
    assistantids:[],//辅导员id集合
    createtime:{type:Date,default:Date.now},//创建时间
    modifytime:Date,//修改时间
    isdeled:{type:Boolean,default:false},//是否删除
    state:Number  // 0 表示审核中 1 已发布 2 审核不通过
});
var AdminClassEntity = base.mongoose.model('AdminClassEntity',AdminClassScheme,'adminclass');
exports.AdminClassEntity  = AdminClassEntity;//导出ClassEntity实体