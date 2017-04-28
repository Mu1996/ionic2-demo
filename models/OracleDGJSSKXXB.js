/**
 * Created by muyonghui on 17/3/8.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;

var OracleDGJSSKXXBScheme = new base.Schema({
    xkkh:String,
    xh:String,
    jszgh:String,
    jsxm:String,
    bm:String,
    sknr:String,
    bjmc:String,
    syzxs:String,
    syqzz:String,
    cdbs:String,
    rs:String,
    sksj:String,
    skdd:String,
    zyfx:String

});


OracleDGJSSKXXBScheme.index({},{"background" : true});//设置索引

var OracleDGJSSKXXBEntity = base.mongoose.model('OracleDGJSSKXXBEntity',OracleDGJSSKXXBScheme,'oracledgjsskxxbs');
exports.OracleDGJSSKXXBEntity = OracleDGJSSKXXBEntity;