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
class User {
  constructor(name,surname,patronymic,rank,loadFactor,priority=[],) {
    this.name = name
    this.surname = surname
    this.patronymic = patronymic
    this.rank = rank
    this.loadFactor = loadFactor
  }
}
exports.getAllUsers = function (req,res) {
  AdminModel.getAllUsers(function (data) {
  let users = new Array();
  users.push({
        id: data[0].id,
        name: data[0].name,
        surname: data[0].surname,
        patronymic: data[0].patronymic,
        rank: data[0].rank,
        loadFactor: data[0].load_factor,
        priority: [{
        priority: data[0].priority,
        subjectId: data[0].subjectId,
        subjectName: data[0].subjectName
        }]
  })
  for (var i = 1; i < data.length; i++) {
    if(data[i-1].id == data[i].id){
      users[users.length-1].priority.push({
      priority: data[i].priority,
      subjectId: data[i].subjectId,
      subjectName: data[i].subjectName
      })
    }else{
      users.push({
            id: data[i].id,
            name: data[i].name,
            surname: data[i].surname,
            patronymic: data[i].patronymic,
            rank: data[i].rank,
            loadFactor: data[i].load_factor,
            priority: [{
            priority: data[i].priority,
            subjectId: data[i].subjectId,
            subjectName: data[i].subjectName
            }]
      })
    }
  }
  res.json(users)
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
