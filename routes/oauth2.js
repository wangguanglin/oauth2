/**
 *  授权登陆界面
 * @type {[type]}
 */
var express = require('express');
var router = express.Router();
var log = require("./log").logger("oayth2");


/**
 * 
 * @param  {[type]}
 * @param  {[type]}
 * @param  {Object}
 * @return {[type]}
 */
router.get('/authorize',function(req, res, next){
	log.info( req.query);
	var info = {};
	var appInfo = {};
	appInfo.name = req.query.appInfo;
	appInfo.description = "互动小游戏";
	info.loginUserId = req.query.loginUserId;
	info.appInfo= appInfo;

	log.info(info);
	res.render('authorize',info);

});

router.post('/authorize',function(req, res, next){
	
	res.redirect('http://www.baidu.com?access_token=1234567');

});

module.exports = router;