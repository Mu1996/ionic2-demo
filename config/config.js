var mongoose = require('mongoose');//引入mongoose库
mongoose.connect('mongodb://localhost:27017/thumbclass');//本地

exports.mongoose = mongoose;//导出mongoose对象

//配置需要登陆认证的访问路径
exports.needLoginUrlRegs = [
    /^(\/)+app(\/)+status(\/)+compose_status/,
    /^(\/)+iv1(\/)+rule/,
    /^(\/)+iv1(\/)+crawler(\/)getLoginPage/,

];
