/**
 * Created by MMDZM on 2016/12/5.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;

var NoteScheme = new base.Schema({
    title:String,               //标题
    content:String,             //内容
    courseclassid:ObjectId,   //课程ID
    uid: ObjectId,        //使用者ID
    createtime:{type:Date,default:Date.now}
});


var NoteEntity = base.mongoose.model('NoteEntity',NoteScheme,'note');
exports.NoteEntity  = NoteEntity;
