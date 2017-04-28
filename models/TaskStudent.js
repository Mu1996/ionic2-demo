/**
 * Created by TomKK on 2016/4/10.
 */
var base = require("./Base");
var ObjectId = base.ObjectId;
//接受一个taskid就可以获取task的全部信息和所有学生的信息
var TaskStudentSchema = new base.Schema({
   taskid:ObjectId, //用于查找接受这条taskid的学生的集合
   title:String,     //该条任务的标题
   content:String,   //任务的内容
    taskimages:[{               //任务的附加图片
        filetype:String,
        fileurl:String,
        originalname:String,
        size:{type:Number,default:0},
        uploadtime:{type:Date,default:Date.now},
    }],
   courseclassstudentid:ObjectId,   //学生在课程班中的id
   courseclassname:String,          //课程班的名字
   issubmit:{type:Number,default:0},   //是否已经提交作业 1:已交，2:迟交 0:未交
   submittime:{type:Date,default:Date.now},  //作业上交时间
   taskscore:{type:Number,default:0},  //作业得分
   name:String,   //学生姓名
   sn:String,     //学生学号
   schoolcode:String,   //学校编码
   studentcode:String,  //学生学号
   deadline:{type:Date,default:Date.now}, //任务截止时间
   work:{type:String,default:''},   //学生作业的文字内容
   images:[{   //附件
      fileurl:{type:String,default:''},   //文件链接
      uploadtime:{type:Date,default:Date.now},  //上传时间
      originalname:String, //原始的名字
      filetype:String,  //文件后缀名
      size:Number //文件大小
   }],
   studentheadimage:String,   //学生的头像
   courseclasscode:String,    //课程班编码
   studentid:ObjectId,  //学生的id
   courseClassId:ObjectId, //课程班id
   studentname:String,  //学生姓名
   studentnamepinyin:String,  //学生姓名的拼音
   isRemark:{type:Boolean,default:false}, //作业是否被评价
   isclosed:{type:Boolean,default:true},  //作业是否被关闭
   maxscore:Number   //该作业的最高分值
});

var TaskStudentEntity = base.mongoose.model('TaskStudentEntity',TaskStudentSchema,'taskstudents');
exports.TaskStudentEntity = TaskStudentEntity;