const db = require('../database');
const encrypt = require('bcryptjs');

module.exports = class nuevoCliente {

    //Constructor 
    constructor(nombre, apellidos, direccion, colonia, email, referencia, telefono, idDistribucion, password ) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.direccion = direccion;
        this.colonia = colonia;
        this.email = email;
        this.idDistribucion = idDistribucion;
        this.password = password;
        this.telefono = telefono;
        this.zona = zona;
        this.referencia = referencia;

    }

   
    save() {
        
        return encrypt.hash(this.password, 10)
            .then((password) => {
                return db.execute('INSERT INTO cliente (nombre, apellidos, direccion, colonia, correoElectronico, referenciaDomicilio, telefono, contraseña) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                    [this.nombre, this.apellidos,  this.direccion, this.colonia, this.referencia, this.email, this.referencia, this.telefono, this.idDistribucion, this.password]
                );
            })
            .catch(err => {
                console.log(err);
                throw Error("El correo electrónico ingresado ya está registrado. Favor de ingresar uno nuevo o iniciar sesión.");
            });


    }

    static fetchAll() {
        return db.execute('SELECT * FROM cliente');
    }
    static fetchOne(email) {
        return db.execute('SELECT * FROM cliente WHERE correoElectronico = ?', [email]);
    }
    static login(correoElectronico, password) {
        return db.execute('SELECT * FROM cliente WHERE ');
    }

}