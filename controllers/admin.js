var Admin = require('../models/admin')
exports.subjects = (req,res) => {
  Admin.getAllSubjects((result) => {
  res.json(result)
  })
}
exports.addSubject = (req,res) => {
  Admin.addSubject(req.query.name,req.query.hours,(err,data) => {
    res.json(err)
  })
};
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
