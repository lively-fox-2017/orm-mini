
//
// const express = require('express')
// const app = express()
// const bodyparser = require('body-parser');

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data/data.db');




// app.use(bodyparser.urlencoded({extended: true}))
// app.use(bodyparser.json())


db.serialize((err)=>{

  db.run(`CREATE TABLE IF NOT EXISTS Subjects (id INTEGER AUTO INCREMENT primary key, subject_name TEXT, subject_code TEXT ) `)
  if(err){
    console.log(err)
  }else{
    console.log('jadi');
  }

  db.run(`CREATE TABLE IF NOT EXISTS Teacher (id INTEGER AUTO INCREMENT primary key, first_name TEXT, last_name TEXT, email TEXT, gender TEXT ) `)
  if(err){
    console.log(err)
  }else{
    console.log('jadi2');
  }

  db.run(`CREATE TABLE IF NOT EXISTS Student (id INTEGER AUTO INCREMENT primary key, first_name TEXT, last_name TEXT, email TEXT, gender TEXT ) `)
  if(err){
    console.log(err)
  }else{
    console.log('jadi3');
  }

})

db.run(`INSERT INTO Subjects subject_name, subject_code VALUES ('${MATH}', '${A1}')`)
if(err){
  console.log(err);
}else{
  console.log('bisa');
}
})
