/**
 * Created by TomKK on 2016/9/21.
 */
/**
 *
 * Created by TomKK on 2016/9/18.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var AdvertismentAlertSchema = new base.Schema({
    userid:ObjectId,//用户id
    advertismentname:String,//举办活动的名称
    alerttimes:{type:Number,default:1}//已经提醒过的次数
})

var AdvertismentAlertEntity = base.mongoose.model('AdvertismentAlertEntity',AdvertismentAlertSchema,'advertismentalert');
AdvertismentAlertSchema.index({useid:1},{"background":true});
module.exports = AdvertismentAlertEntity;