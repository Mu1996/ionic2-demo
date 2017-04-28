var base = require('./Base');
var ObjectId = base.ObjectId;
var ChapterScheme = new base.Schema({
    title:String,
    description:String,
    coursecode: String,//课程编码
    coursename: String,//课程名称
    courseclasscode:String,//课程班级代码
    courseclassid: ObjectId,
    courseid: ObjectId,
    uid:ObjectId,//教师ID
    createtime:{type:Date,default:Date.now}
});
var ChapterEntity = base.mongoose.model('ChapterEntity',ChapterScheme,'chapter');
exports.ChapterEntity  = ChapterEntity;