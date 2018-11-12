
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminAddCategoryToProduct from '../components/AdminAddCategoryToProduct'
import { fetchCategorys } from '../redux/action-creators/user'
import { getSingleProduct_wCategories, postCategoriesToProducts, getCategoriasProductoIndividual , deleteCategoriaProducto} from '../redux/action-creators/products'


class AdminAddCategoryToProductContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arregloCategorias: [],
            idProducto: 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleAgregarCategorias = this.handleAgregarCategorias.bind(this);
    }
    componentDidMount() {
        this.props.fetchCategorys();
        this.props.getSingleProduct_wCategories(this.props.match.params.id);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.producto.producto_wCategories !== undefined) {
            this.state.idProducto = nextProps.producto.producto_wCategories.id;
        }
        if (nextProps.producto.producto_wCategories !== undefined) {
            for (var i = 0; i < nextProps.producto.producto_wCategories.categorias.length; i++) {
                if (this.state.arregloCategorias.indexOf(nextProps.producto.producto_wCategories.categorias[i].id) < 0) {
                    this.state.arregloCategorias.push(nextProps.producto.producto_wCategories.categorias[i].id)
                }
            }
        }
    }

    handleClick(evt) {
        var categoria = document.querySelector('.botonAgregarCategoria');
        if (this.state.arregloCategorias.indexOf(parseInt(categoria.value)) < 0) {
            this.state.arregloCategorias.push(parseInt(categoria.value))
        }

    }
    handleAgregarCategorias() {
        this.props.postCategoriesToProducts(this.state.idProducto, this.state.arregloCategorias)
    }


    render() {
        { this.props.producto ? console.log(this.props.producto) : null }
        return (
            <div>
                <AdminAddCategoryToProduct
                    listaCategorias={this.props.listaCategorias}
                    handleClick={this.handleClick}
                    handleAgregarCategorias={this.handleAgregarCategorias}
                    arregloCategorias={this.state.arregloCategorias}
                    producto={this.props.producto.producto_wCategories}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {

    return {
        listaCategorias: state.userAdmin.listaCategorias,
        producto: state.products


    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCategorys: function () {
            dispatch(fetchCategorys())
        },
        getSingleProduct_wCategories: function (id) {
            dispatch(getSingleProduct_wCategories(id))
        },
        postCategoriesToProducts: function (id, arr) {
            dispatch(postCategoriesToProducts(id, arr))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminAddCategoryToProductContainer);


{
    /* NO BORRAR POR LAS DUDAS
    arregloCategorias: nextProps.producto.producto_wCategories.categorias
      nextProps.producto.producto_wCategories && this.setState({
  */
}     