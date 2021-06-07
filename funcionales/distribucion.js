const db = require('../database');

module.exports = class nuevaDistribucion {

    //Constructor 
    constructor(diaDeEntrega, nombreDeColonia, horaInicioEntrega, horaFinalEntrega) {
        this.diaDeEntrega = diaDeEntrega;
        this.nombreDeColonia = nombreDeColonia;
        this.horaInicioEntrega = horaInicioEntrega;
        this.horaFinalEntrega = horaFinalEntrega;
    }
    
    save() {
        return db.execute('INSERT INTO distribucion (diaDeEntrega, nombreDeColonia, horaInicioEntrega, horaFinalEntrega) VALUES (?, ?, ?, ?)',
            [this.diaDeEntrega, this.nombreDeColonia, this.horaInicioEntrega, this.horaFinalEntrega]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM distribucion');
    }

}