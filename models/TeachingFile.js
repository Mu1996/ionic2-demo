/**
 * Created by TomKK on 2016/6/27.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var TeachingFilesSchema = new base.Schema({
    courseclassid:ObjectId,                         //班级id
    teachingfiles:[{
        fileurl:{type:String,default:''},           //文件的url
        uploadtime:{type:Date,default:Date.now},    //上传时间
        originalname:String,                        //原始文件名
        filetype:{type:String,default:''},                            //文件的后缀名
        size:{type:Number,default:0},                                //文件的大小
        uploaderid:{type:ObjectId,default:null},                        //上传者id
        isfolder:{type:Boolean,default:false},      //是否是文件夹
        parentfolder:{type:ObjectId,default:null},                       //父文件夹
        isprivate:{type:Boolean,default:false}      //文件是否公开
    }]
})
TeachingFilesSchema.index({courseclassid:1},{"background":true})
var TeachingFileEntity = base.mongoose.model("TeachingFileEntity",TeachingFilesSchema,'teachingfiles');
module.exports = TeachingFileEntity;
