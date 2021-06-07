<<<<<<< HEAD
var mysql = require('mysql');
var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'db/tamalesn'
});
connection.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
});
connection.end();
=======
const express = require('express');
const app = express();

const rutasTamales = require('./routes/index');
>>>>>>> 261237b48e49e40681ef00699ad3c9853e738bea
