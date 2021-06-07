exports.get = (request, response, next) => {
    response.render('paginaInicio');
};

exports.getRegistro = (request, response, next) => {
    response.render('registro01');
};
exports.getRegistro02 = (request, response, next) => {
    nuevaDistribucion.fetchAll()
        .then(([rows, fieldData]) => {
            response.render('registro02', {
                distribuciones: rows,
                error: request.session.error !== undefined ? request.session.error : false,
                titulo: "Nuevo Cliente"
            });
        })
        .catch(err => console.log(err));

};

const cliente = new nuevoCliente(request.body.nombre, request.body.apellidos, request.body.telefono, request.body.direccion, request.body.referencia, request.body.email, ID-colonia, request.body.contrasena);

    request.session.error = undefined;
    cliente.save()
        .then(() => {
            response.render('registro03');
        })
        .catch(err => {
            console.log(err);
            request.session.error = "Este correo electrónico ya está registrado";
            response.redirect('registro02');
        });

exports.getLogin = (request, response, next) => {
    response.render('login', {
        error: request.session.error !== undefined ? request.session.error : false,
        titulo: "Iniciar sesion",
    });
};



exports.getInicio = (request, response, next) => {
    response.render('inicio', {
        usuario: nombre,
    });
};
exports.getCompra01 = (request, response, next) => {
    response.render('compra01', {
        usuario: nombre,
    });
};
exports.getCompra02 = (request, response, next) => {
    response.render('compra02', {
        usuario: nombre,
    });
};

exports.getCompra03 = (request, response, next) => {
    response.render('compra03', {
        usuario: nombre,
    });
};

exports.getCompra04 = (request, response, next) => {
    response.render('compra04', {
        usuario: nombre,
    });
};