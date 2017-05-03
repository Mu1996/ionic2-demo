var express = require('express');
var router = express.Router();
var RestResult = require('../common/RestResult');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.success('test success');
    res.error(RestResult.ILLEGAL_ARGUMENT_ERROR_CODE, "test error");
});

router.post('/postTest', function(req, res, next) {

    var code = req.body.code;

    if (code == "2014210950"){
        res.success('test success');
    }else {
        res.error(RestResult.ILLEGAL_ARGUMENT_ERROR_CODE, "test error");
    }

});

module.exports = router;
