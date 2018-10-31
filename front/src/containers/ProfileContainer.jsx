import React from 'react';
//import store from '../store'; A IMPORTAR MAS TARDE
import UserProfile from '../components/UserProfile';

export default class ProfileContainer extends React.Component {
    constructor() {
        super();
        this.state = {};
   
    }

    render() {
        var userPerfil =
        {
            userId: 25
        };

        var comprasUsuario = [
        {
            producto: [1,10,15]
         }
        ];
        return <UserProfile userPerfil={userPerfil} comprasUsuario={comprasUsuario}/>;
    }
}
