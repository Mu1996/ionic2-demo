/**
 * Created by muyonghui on 17/3/8.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;

var OracleHJSJLBScheme = new base.Schema({
    xn:String,
    xq:String,
    kcdm:String,
    kcmc:String,
    kkxy:String,
    sksj:String,
    skdd:String,
    jszgh1:String,
    jsxm1:String,
    xkkh1:String,
    jszgh2:String,
    jsxm2:String,
    xkkh2:String,
    czjl:String,
    xxq:String,
    sksj2:String,
    skdd2:String,
    czlx:String,
    cznr:String,
    bz:String

});


OracleHJSJLBScheme.index({},{"background" : true});//设置索引

var OracleHJSJLBEntity = base.mongoose.model('OracleHJSJLBEntity',OracleHJSJLBScheme,'oraclehjsjlb');
exports.OracleHJSJLBEntity = OracleHJSJLBEntity;