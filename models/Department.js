/**
 * Created by Ray on 16/7/9.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var DepartmentScheme = new base.Schema({
    departmentname:String,            //系名称
    academyid:ObjectId,      //学院ID
    state:Number // 0 表示审核中 1 已发布 2 审核不通过
});
var DepartmentEntity = base.mongoose.model('DepartmentEntity',DepartmentScheme,'department');
exports.DepartmentEntity = DepartmentEntity;