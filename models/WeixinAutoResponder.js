/**
 * Created by Ray on 16/8/15.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;

//微信自动回复消息
var WeixinAutoResponderScheme = new base.Schema({
    keywords:[],         //对于发送过来的关键字
    msgtype:String,     //返回的消息类型,微信文档上的https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140543&token=&lang=zh_CN
    articlecount:Number,    //返回的item数量,微信文档上的
    articles:[
        {
            mediaid:String,     //媒体id,微信文档上的,从永久素材那里获取过来,https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1444738730&token=&lang=zh_CN
            title:String,       //标题
            description:String, //简要描述
            picurl:String,      //缩略题url
            url:String          //点击链接地址
        }

    ],
    content:String      //msgtype消息类型为text的,回复的文字内容
});

var WeixinAutoResponderEntity = base.mongoose.model("WeixinAutoResponderEntity",WeixinAutoResponderScheme,"weixinautoresponder")
exports.WeixinAutoResponderEntity = WeixinAutoResponderEntity;