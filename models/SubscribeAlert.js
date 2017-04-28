/**
 *
 * Created by TomKK on 2016/9/18.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var SubscibeAlertSchema = new base.Schema({
    userid:ObjectId,//用户id
    alerttimes:{type:Number,default:1}//已经提醒过的次数
})

var SubscibeAlertEntity = base.mongoose.model('SubscibeAlertEntity',SubscibeAlertSchema,'subscibealert');
SubscibeAlertSchema.index({useid:1},{"background":true});
module.exports = SubscibeAlertEntity;