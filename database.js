var mysql = require('mysql');
var connection = mysql.createConnection({
   host: 'localhost',
   database: 'db/tamalesn',
   user: 'root',
   password: 'root',
   port: 8889
}); 

connection.connect(function(err){
   if(err){
      console.log('Algo salio mal');
   }else{
      console.log('Conexion exitosa');
   } 
}); 
 
 
