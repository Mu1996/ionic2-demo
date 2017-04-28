/**
 * Created by zjh on 2016/3/4.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var CourseScheme = new base.Schema({
    name: String,//课程名称
    code: String,//课程代码
    tid:String,//创建教师ID
    credit: Number,//学分
    examination: String,//考核方式
    coursenature: String,//课程性质
    coursetype: String,//课程类型
    speciality: String,//专业方向
    year:String,//年级
    term:String,//学期
    createtime:{type:Date,default:Date.now}//创建时间
});
CourseScheme.index({name:1},{"background" : true});//设置索引
var CourseEntity = base.mongoose.model('CourseEntity',CourseScheme,'course');
exports.CourseEntity  = CourseEntity;