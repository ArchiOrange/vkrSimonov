var AdminModel = require('../models/admin')
exports.subjects = (req,res) => {
  AdminModel.getAllSubjects((result) => {
  res.render("subjects",{result})
  // res.json(result)

  })
}
exports.addSubject = (req,res) => {
  AdminModel.addSubject(req.query.name, req.query.hours,(data) => {
    res.sendStatus(200);
  })
};
exports.updateSubject = function (req,res) {
  AdminModel.updateSubject(req.query.id, req.query.hours,function (result) {
    res.sendStatus(200);
  })
}
exports.rmSubject = function (req,res) {
  AdminModel.rmSubject(req.query.id,function(result) {
      if(result.affectedRows){
      res.sendStatus(200)
      }else {
        res.send("user not found")
      }
  })
}

  // if(req.body.name){
  //   Chat.getPersonalData(req.body.name,function(err, result, failed) {
  //
  //   if(result[0] == undefined){
  //       req.body.password = Sha1(req.body.password);
  //       Chat.insertDataUser(req.body.name, req.body.password,function(err, result){
  //       console.log(result,err);
  //     });
  //   }
  //   else {
  //     res.send('Логин занят');
  //   }
  //   })
  // }
  // else {
  //   res.render('registration');
  // }
// }
