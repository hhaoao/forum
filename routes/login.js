var express = require('express');
var router = express.Router();

router.get('/login',function (req,res) {
	res.render('login',{
		title:'登录'
	});
})
router.post('/login',function (req,res) {
	var md5=crypto.createHash('md5');
	var password=md5.update(req.body.password).digest('base64');
	User.get(req.body.username,function (err,user) {
		if(!user){
			req.flash('error','用户不存在');
			return res.redirect('/login');
		}
		if(user.password !=password){
			req.flash('error','用户口令错误');
			return res.redirect('/login');
		}
		req.session.user=user;
		req.flash('success','登录成功');
		res.redirect('/');
	});
});
module.exports = router;
