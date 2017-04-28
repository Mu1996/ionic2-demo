/**
 * Created by zjh on 2016/3/4.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var CourseClassTogetherTeacherScheme = new base.Schema({
    courseClassId: ObjectId,//课程班级Id
    courseClassTeacherId: ObjectId,//课程班级创建教师UId
    teacherId: ObjectId,//教师ID
    name: String,//教师姓名
    headImage: String,//教师姓名
    mobile:String,
    isDeled:{type:Boolean,default:false},//是否删除
    createrId:ObjectId,//创建者ID
    createTime:{type:Date,default:Date.now}//创建时间
});
var CourseClassTogetherTeacherEntity = base.mongoose.model('CourseClassTogetherTeacherEntity', CourseClassTogetherTeacherScheme, 'courseClassTogetherTeacher');
exports.CourseClassTogetherTeacherEntity = CourseClassTogetherTeacherEntity;