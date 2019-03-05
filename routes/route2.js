var express = require('express');
var router = express.Router();
var allColors = require("../colors.json");



router.get('/all', function( req, res, next){
    res.send(allColors);
});

router.get('/:color', function(req, res, next){
    var color = getColorName(req.params.color.toLowerCase().toString(), res);
    res.send(color);
});


function getColorName(colorName, res){
    for(var i = 0; i < allColors.colors.length; i++){
        if(allColors.colors[i].color === colorName){
        return allColors.colors[i];

    }
    }
    return res.status(404).send('Error 404 Not found');
}
module.exports = router;
