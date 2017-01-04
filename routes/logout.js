var express = require('express');
var router = express.Router();

router.get('/logout',function (req,res) {
	res.render('logout',{
		title:'退出'
	});
})
module.exports = router;
