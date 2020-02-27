const Client = require('mysql-pro');
const db = new Client({
  mysql:{
    host:'localhost',
    port:3306,
    database:'test5',
    user:'root',
    password:''
  }
})

module.exports = db;
