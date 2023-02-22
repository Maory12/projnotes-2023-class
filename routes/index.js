
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let iconSet=[ "🍕","🥐","🍷"];
  let icon = iconSet[ Math.floor(Math.random()*3)];
  res.render('index', { title: 'DWII-2023A', icon});
});
router.get('/author', (req, res)=>{ 
  //creating a view-mode
let author = {
  "name": "Ana",
        "lastname": "Beristain",
        "twitter": "@anaberi",
        "job": "ITGAM"
 };
 //sending the view-model to be rendered by a view 
 res.render('author',author);
});

module.exports = router;
