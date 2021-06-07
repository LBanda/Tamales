/* var mysql = require('mysql');
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
connection.end(); */

const path = require('path');

const express = require('express');
const app = express();

app.use(express.static("public"));


app.get("/", (req, res) => {
   res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/schedule", (req, res) => {
   //Pedir dias disponibles de la bd
   //Ordenamos por dia de la semana
   //Pasar la data al html
   res.sendFile(path.join(__dirname, "views", "entregas.html")); // ./views/entregas.html
});

app.get("/delivery", (req, res) => {
   res.sendFile(path.join(__dirname, "views", "compra1.html")); // ./views/entregas.html
})

app.set("port", 500);
app.listen(app.get("port"), () => {
   console.log("Server running...");
});
