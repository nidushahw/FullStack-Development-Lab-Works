var express = require('express');
var bodyParser = require("body-parser")
var router = express.Router();


router.use(bodyParser.urlencoded({ extended: true}));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res) {
  var firstName = req.body.Firstname;
  var lastName = req.body.Lastname;
  console.log(firstName);
  console.log(lastName);
  res.send('Responce');

});

module.exports = router;