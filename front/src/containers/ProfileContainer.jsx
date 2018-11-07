import React from 'react';
//import store from '../store'; A IMPORTAR MAS TARDE
import UserProfile from '../components/UserProfile';

export default class ProfileContainer extends React.Component {
    constructor() {
        super();
        this.state = {};

    }

    render() {
        var userPerfil = {
            userId: 25,
            nombre: 'Diego',
            apellido: 'Fernandez',

        };
        var arregloCompras = [
            {
                idVenta: 1,
                productos: [10, 20, 30],
                fechaVenta: '10:25PM',
                status: 'Completado',
                linkProducto: '#'
            }, {
                idVenta: 3,
                productos: [10, 20, 30],
                fechaVenta: '10:25PM',
                status: 'incompleto',
                linkProducto: '#'
            },
            , {
                idVenta: 4,
                productos: [10, 20, 30],
                fechaVenta: '10:25PM',
                status: 'incompleto',
                linkProducto: '#'
            },
        ]

        var misReviews = [
            {
                reviewId: 1,
                comentario: "Producto muyroducto muyroducto muyroducto muyroducto muyroducto muy bueno 5/5",
                estrellas: 4
            },
            {
                reviewId: 2,
                comentario: "Producto muy malo 1/5Producto muy malo 1/5Producto muy malo 1/5",
                estrellas: 1
            },
            {
                reviewId: 1,
                comentario: "Producto muyroducto muyroducto muyroducto muyroducto muyroducto muy bueno 5/5",
                estrellas: 4
            },
            {
                reviewId: 2,
                comentario: "Producto muy malo 1/5Producto muy malo 1/5Producto muy malo 1/5",
                estrellas: 1
            },

        ]

        //console.log(userPerfil);

        //ARREGLO COMPRAS SERIA EL ARREGLO A ENVIAR CON LA DATA DEL USUARIO Y SUS COMPRAS
        return <UserProfile userPerfil={[userPerfil]} arregloCompras={arregloCompras} misReviews={misReviews} />;
    }
}
