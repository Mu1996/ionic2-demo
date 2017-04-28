/**
 * Created by muyonghui on 17/3/8.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;

var OracleXSJBXXBScheme = new base.Schema({
    xh:String,
    xm:String,
    xb:String,
    xzb:String,
    zymc:String,
    xy:String,
    dqszj:String

});


OracleXSJBXXBScheme.index({},{"background" : true});//设置索引

var OracleXSJBXXBEntity = base.mongoose.model('OracleXSJBXXBEntity',OracleXSJBXXBScheme,'oraclexsjbxxb');
exports.OracleXSJBXXBEntity = OracleXSJBXXBEntity;