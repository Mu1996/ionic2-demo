/**
 * Created by muyonghui on 17/3/8.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;

var OracleJSXXBScheme = new base.Schema({
    zgh:String,
    xm:String,
    bm:String

});


OracleJSXXBScheme.index({},{"background" : true});//设置索引

var OracleJSXXBEntity = base.mongoose.model('OracleJSXXBEntity',OracleJSXXBScheme,'oraclejsxxb');
exports.OracleJSXXBEntity = OracleJSXXBEntity;