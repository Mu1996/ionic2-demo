/**
 * Created by muyonghui on 17/3/8.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;

var OracleJXRWBVIEWScheme = new base.Schema({
    zgh:String,
    xm:String,
    bm:String

});


OracleJXRWBVIEWScheme.index({},{"background" : true});//设置索引

var OracleJXRWBVIEWEntity = base.mongoose.model('OracleJXRWBVIEWEntity',OracleJXRWBVIEWScheme,'oraclejxrwbview');
exports.OracleJXRWBVIEWEntity = OracleJXRWBVIEWEntity;