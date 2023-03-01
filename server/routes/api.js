// Importing Express Library 
var express = require('express');
// creating a router instance
var router = express.Router();
 
//creating the router       
router.get('/author', (req, res)=>{
    res.json({ 
        "name": "Ana",
        "lastname": "Beristain",
        "twitter": "@anaberi",
        "job": "ITGAM"
       
    });
});
//function(req, res){}) se requiere una funcion para que el get se le de instrucciones 
//exporting the router
module.exports = router;