
import React, { Component } from 'react';
import AdminAddCategory from '../components/AdminAddCategory'
import { connect } from 'react-redux';
import { fetchCategorys, createCategory,removeCategory } from '../redux/action-creators/user'

class AdminAddCategoryContainer extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillMount() {
        this.props.fetchCategorys();
    }
    componentDidMount() {
        this.props.fetchCategorys();
    }
    


    handleSubmit(evt){
        //MANEJA FORMULARIO PARA AGREGAR PRODUCTO
        //LA RUTA PIDE UN OBJ.nombre que se agrega a la db.
        evt.preventDefault();
        const categoria = {
            nombre: evt.target.categoriaNueva.value
        }
        this.props.createCategory(categoria);      
        this.props.fetchCategorys(); 

    }  
    
    render() {
        return (
            <div>        
                <AdminAddCategory removeCategory={this.props.removeCategory} handleSubmit={this.handleSubmit} listaCategorias={this.props.listaCategorias} />
            </div>   
        )
    }
}

function mapStateToProps (state){
    return{ 
        listaCategorias: state.userAdmin.listaCategorias
    }
}

function mapDispatchToProps(dispatch){
    return{
        createCategory: function(categoria){
            dispatch(createCategory(categoria))
        },
        fetchCategorys: function (categorias){
           dispatch(fetchCategorys(categorias))
        },
        removeCategory: function(categoriaId){
            dispatch(removeCategory(categoriaId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminAddCategoryContainer);