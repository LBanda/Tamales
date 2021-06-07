const db = require('../database');

module.exports = class pedido {

    //Constructor 
    constructor(fechaEntrega, estatus, descripcion, tipoDeEntrega, cantidadTotal, costoTotal) {
        this.fechaEntrega = fechaEntrega;
        this.estatus = estatus;
        this.descripcion = descripcion;
        this.tipoDeEntrega = tipoDeEntrega;
        this.cantidadTotal = cantidadTotal;
        this.costoTotal = costoTotal;
    }

    
    save(idPedido) {
        return db.execute('UPDATE pedido SET fechaEntrega = ?, estatus = ?, descripcion = ?, tipoDeEntrega = ?, cantidadTotal = ?, costoTotal = ? WHERE ID-Pedido = ?;',
            [this.fechaEntrega, this.estatus, this.descripcion, this.tipoDeEntrega, this.cantidadTotal, this.costoTotal, idPedido]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM producto');
    }
    static savePedido(idPedido) {
        return db.execute('UPDATE pedido SET fechaEntrega = ?, estatus = ?, descripcion = ?, tipoDeEntrega = ?, cantidadTotal = ?, costoTotal = ? WHERE ID-Pedido = ?;',
            [this.fechaEntrega, this.estatus, this.descripcion, this.tipoDeEntrega, this.cantidadTotal, this.costoTotal, idPedido]
        );
    }

}