/**
 * Created by zjh on 2016/3/4.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var CollegeScheme = new base.Schema({
    name: String,//学院名称
    schoolcode:String,//学校编码
    sn:String,//编码
    type: String//类型：c=学院,u=外校，m=管理部门
});
var CollegeEntity = base.mongoose.model('CollegeEntity',CollegeScheme,'college');//指定在数据库中的collection名称为collage
exports.CollegeEntity  = CollegeEntity;//CollageEntity