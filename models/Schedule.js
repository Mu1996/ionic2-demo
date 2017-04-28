/**
 * Created by Zibu on 2016/4/24.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var ScheduleScheme = new base.Schema({
    schedulename:String,//作息表表名
    schoolcode:String,//学校编码
    am:[{
        name:String,
        begin:String,//开始时间
        end:String//结束时间
    }],//上午作息表时间
    pm:[{
        name:String,
        begin:String,
        end:String
    }],//下午作息表时间
    night:[{
        name:String,
        begin:String,
        end:String
    }]//夜晚作息表时间
});
var ScheduleEntity = base.mongoose.model('ScheduleEntity',ScheduleScheme,'schedule');
exports.ScheduleEntity  = ScheduleEntity;