import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchCategorys} from '../redux/action-creators/user'
import AdminEditProduct from '../components/AdminEditProduct'

class AdminEditProductContainer extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        this.props.fetchCategorys();

    }

    handleSubmit(evt){
        evt.preventDefault();
        const productoAgregar = {
            nombre: evt.target.nombreProducto.value,
            descripcion: evt.target.descripcionProducto.value,
            precio: evt.target.precioProducto.value,
            foto: evt.target.imgProducto.value,
            stock: evt.target.stockProducto.value
        }
    }    

    render() {
        return (
            <div>        
                <AdminEditProduct handleSubmit={this.handleSubmit} listaCategorias={this.props.listaCategorias}/>
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
        fetchCategorys: function (categorias){
            dispatch(fetchCategorys(categorias))
        },
        fetchDataProducto: function(producto){
            dispatch(fetchDataProducto(producto))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminEditProductContainer);