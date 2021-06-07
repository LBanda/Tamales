const db = require('../database');

module.exports = class pedidoProducto {

    //Constructor 
    constructor(idProducto, idPedido, cantidadPorProducto) {
        this.idProducto = idProducto;
        this.idPedido = idPedido;
        this.cantidadPorProducto = cantidadPorProducto;
    }

    save() {
        return db.execute('INSERT INTO pedidoproducto (ID_Producto, ID-Pedido, cantidadPorProducto) VALUES (?, ?, ?)',
            [this.idProducto, this.idPedido, this.cantidadPorProducto]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM pedidoproducto');
    }

    static delete(id) {
        return db.execute('DELETE FROM pedidoproducto WHERE id = ?', [id]);
    }

}