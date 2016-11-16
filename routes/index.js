var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//实现简单的api
router.get('/api/articles.json',function(req, res, next){
		var err;

		var ret = {
			user_id:'1111',
			user_name:'Wang Guanglin'
		};
	
		if(err) return res.apiError(err);

		res.apiSuccess({articles : ret});

});

module.exports = router;
