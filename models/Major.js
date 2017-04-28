/**
 * Created by zjh on 2016/3/4.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var MajorScheme = new base.Schema({
    name: String,//专业名称
    address:String,//专业地址
    academyid: ObjectId,//学院ID
    state:Number // 0 表示审核中 1 已发布 2 审核不通过
});
var MajorEntity = base.mongoose.model('MajorEntity',MajorScheme,'major');//指定在数据库中的collection名称为major
exports.MajorEntity  = MajorEntity;//导出MajorEntity实体