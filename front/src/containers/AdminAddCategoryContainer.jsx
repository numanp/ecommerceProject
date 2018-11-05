
import React, { Component } from 'react';
import AdminAddCategory from '../components/AdminAddCategory'
import {connect} from 'react-redux';
import {createCategory} from '../redux/action-creators/user'

class AdminAddCategoryContainer extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(evt){
        //MANEJA FORMULARIO PARA AGREGAR PRODUCTO
        //LA RUTA PIDE UN OBJ.nombre que se agrega a la db.
        evt.preventDefault();
        const categoria = {
            nombre: evt.target.categoriaNueva.value
        }
        this.props.createCategory(categoria);       
    }  
    
    render() {
        return (
            <div>        
                <AdminAddCategory handleSubmit={this.handleSubmit} />
            </div>   
        )
    }
}

function mapStateToProps (state){
    return{ 
    }
}

function mapDispatchToProps(dispatch){
    return{
        createCategory: function (categoria){
            dispatch(createCategory(categoria))
            }
        }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminAddCategoryContainer);