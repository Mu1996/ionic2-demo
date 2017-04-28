/**
 * Created by zjh on 2016/3/4.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var AreaScheme = new base.Schema({
    name: String,//地区名称
    areaid:String,//地区ID
    parentid: String,//所属上级地区ID
    hotkey:String//快捷键
});
var AreaEntity = base.mongoose.model('AreaEntity',AreaScheme,'area');//指定在数据库中的collection名称为area
exports.AreaEntity  = AreaEntity;//导出AreaEntity实体