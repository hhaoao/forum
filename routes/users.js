var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});
router.get('/logout',function(req,res){
	req.session.user=null;
	req,flash('success','登出成功');
	res.redirect('/');
})
module.exports = router;
