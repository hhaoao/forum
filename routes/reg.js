var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
	res.render('reg',{
		title:'用户注册',
		body:"index1"
	});
})

module.exports = router;
