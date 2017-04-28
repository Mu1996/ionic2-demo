/**
 * Created by zjh on 2016/3/4.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var CourseClassCalendarScheme = new base.Schema({
    _id:ObjectId,//使用课程班ID
    uid:ObjectId,//教师ID
    classname:String,//选课班级名称
    lasttime:Date,//最后上课时间
});
var CourseClassCalendarEntity = base.mongoose.model('CourseClassCalendarEntity',CourseClassCalendarScheme,'courseclasscalendar');
exports.CourseClassCalendarEntity  = CourseClassCalendarEntity;