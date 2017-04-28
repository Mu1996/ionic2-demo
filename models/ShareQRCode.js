/**
 * Created by Ray on 16/8/11.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;

//分享的二维码图片
var ShareQRCodeScheme = new base.Schema({
    createtime:{type:Date,default:Date.now},    //创建时间
    endtime:Date,                               //二维码失效时间
    userid: ObjectId,                           //用户id
    wxnickname: String,                         //微信名称
    sharecodeimage:String,                      //分享合成的图片,相对地址
    qrcodeimage:String,                         //分享的二维码,相对地址
    wxheadimage:String,                         //用户头像,相对地址
    mobile:String,                              //手机号
    sceneid:String,                              //场景id,递增
    ticket:String                                 //微信生成二维码的ticket
});

var ShareQRCodeEntity = base.mongoose.model('ShareQRCodeEntity',ShareQRCodeScheme,'shareqrcode');
exports.ShareQRCodeEntity = ShareQRCodeEntity;