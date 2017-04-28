/**
 * Created by TomKK on 2016/9/22.
 */
var base = require('./Base');
var ObjectId = base.ObjectId;
var AdvertismentSchema = new base.Schema({
    advertismentname:String,//举办活动的名称
    imgurl:[],
    isactivated:{type:Boolean,default:true},
    usertypes:[],
    schools:[]
})

var AdvertismentEntity = base.mongoose.model('AdvertismentEntity',AdvertismentSchema,'advertisment');
AdvertismentSchema.index({useid:1},{"background":true});
module.exports = AdvertismentEntity;