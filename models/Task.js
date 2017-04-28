/**
 * Created by TomKK on 2016/4/10.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var TaskSchema = new base.Schema({
    title:String,           //任务的标题
    content:String,         //任务的内容
    images:[{               //任务的附加图片
        filetype:String,
        fileurl:String,
        originalname:String,
        size:{type:Number,default:0},
        uploadtime:{type:Date,default:Date.now},
    }],
    courseclassid: ObjectId,//用于查找task列表 {type:ObjectId,index:true},
    courseclassname:String, //任务所属班级的名称
    createtime:{type:Date,default:Date.now},    //创建时间
    deadline:{type:Date,default:Date.now},      //截止时间
    isclosed:{type:Boolean,default:true},       //是否已经关闭
    istemporary:{type:Boolean,default:true},
    isback:{type:Boolean,default:false}, //是否撤回
    maxscore:Number                             //任务的最大分值
});

var TaskEntity = base.mongoose.model('TaskEntity',TaskSchema,'tasks');
exports.TaskEntity = TaskEntity;