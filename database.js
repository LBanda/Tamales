
var mysql = require('mysql');
var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'db/tamalesn',
   port: 3000
}); 

connection.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion exitosa');
   }
}); 

 
