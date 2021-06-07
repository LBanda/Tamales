<<<<<<< HEAD
=======
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
>>>>>>> a3f26770ad7e2fe35a19863e225dd5c19d1a4072

const express = require('express');
const app = express();

const rutasTamales = require('./routes/index');
<<<<<<< HEAD
=======

>>>>>>> a3f26770ad7e2fe35a19863e225dd5c19d1a4072
