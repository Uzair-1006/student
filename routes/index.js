var express = require('express');
var router = express.Router();
const Student = require('./Student')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/students/:studentId', function(req, res, next) {
  const studentId = req.params.studentId;
  try{
    if(Student){
      res.render('Student',{Student})
    }
    else{
      res.render('Error',({message:'Student not found'}))
    }
  }
  catch(error){
    console.log(error)
    res.render('Error'({message:"Error retriving student data"}))
  }
})
module.exports = router;
