/*
用户更新操作历史记录
 */
const base = require('./Base');
const ObjectId = base.ObjectId;
const UserUpdateHistoryScheme = new base.Schema({
    uid:ObjectId,
    mobile: String,//手机(登陆用户名)
    name:String,
    type:String,
    schoolCode:String,
    newSchoolCode:String,
    newCode:String,
    oldCode:String,
    creator:ObjectId,
    createtime:{type:Date,default:Date.now},//创建时间
    endTime:Date  //操作完成时间
});
UserUpdateHistoryScheme.index({mobile:1},{"background" : true});//设置索引
const UserUpdateHistoryEntity = base.mongoose.model('UserUpdateHistoryEntity',UserUpdateHistoryScheme,'userUpdateHistory');//指定在数据库中的collection名称为usersUpdateHistory
exports.UserUpdateHistoryEntity  = UserUpdateHistoryEntity;//导出UserUpdateHistoryEntity实体