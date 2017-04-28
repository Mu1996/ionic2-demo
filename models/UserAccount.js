/**
 * Created by zjh on 2016/3/4.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var UserAccountScheme = new base.Schema({
    mobile: String,//手机(登陆用户名)
    officephone:String,//办公电话
    pwd: String,//密码
    pwdText:String,//明文密码
    name: String,//姓名
    sex: String,//女 男
    type: String,//临时（当前）用户类型 s:学生 t:教师,m:行政管理
    regType:String,//注册用户类型（永久用户类型）s:学生 t:教师,m:行政管理,a:辅导员，customService：客服
    level:Number,//权限  1 校级权限，2院级权限
    setAssistantMaxNum:{type:Number,default:0},  //校级辅导员拥有设置院级辅导员的数目限制
    setAssistantNum:{type:Number,default:0},
    setterid:ObjectId,  //设置院级辅导员的设置者
    code:String,//编号
    nation:String,//民族
    headimage: String,//头像
    schoolcode:String,//学校代码
    schoolname:String,//学校名称
    department:String,//系 (所)
    degree:String,//学历
    graduateschool:String,//毕业院校
    academy: String,//学院
    academyid: ObjectId,//学院ID
    specialty:String,//专业
    birthday:String,//出生日期
    idcard:String,//身份证号
    classname:String,//班级名称
    enrollmentdate:String,//入学日期
    lengthofschool:String,//学制
    grade:String,//年级
    email:String,
    appid:String,
    DSFopenid:String,
    wxopenid:String,
    wxnickname:String,
    wxsex:String,
    wxprovince:String,
    wxcity:String,
    wxcountry:String,
    wxheadimgurl:String,
    wxunionid:String,
    updatetime:Date, //学生修改资料截至时间为此时间延后一天内
    createtime:{type:Date,default:Date.now},//创建时间
    jwcpwd:String,         //记录学生教务处密码 以便测试
    lastLoginTime:Date,  //最后登录时间
    loginnum:{type:Number,default:0},    //登陆次数
    inviteby:ObjectId,   //谁邀请这位用户的
    firstteacherid:ObjectId     //学生第一个扫码点名班级的老师id
});
UserAccountScheme.index({mobile:1},{"background" : true});//设置索引
var UserAccountEntity = base.mongoose.model('UserAccountEntity',UserAccountScheme,'usersaccount');//指定在数据库中的collection名称为usersaccount
exports.UserAccountEntity  = UserAccountEntity;//导出UserAccountEntity实体