var express = require('express');
var router = express.Router();

router.get('/',function (req,res,next) {
	res.render('post',{
		title:'用户登录'
	});
	next();
})
module.exports = router;
