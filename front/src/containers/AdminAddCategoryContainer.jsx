import React, { Component } from 'react';
import AdminAddCategory from '../components/AdminAddCategory';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/action-creators/user';
import { bindActionCreators } from 'redux';

class AdminAddCategoryContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.fetchCategorys();
  }
  componentWillMount() {
    this.props.fetchCategorys();
  }

  handleSubmit(evt) {
    //MANEJA FORMULARIO PARA AGREGAR PRODUCTO
    //LA RUTA PIDE UN OBJ.nombre que se agrega a la db.
    evt.preventDefault();
    const categoria = evt.target.categoriaNueva.value;
    this.props.createCategory(categoria);
  }

  render() {
    return (
      <div>
        {
          <AdminAddCategory
            removeCategory={this.props.removeCategory}
            handleSubmit={this.handleSubmit}
            listaCategorias={this.props.listaCategorias}
          />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    listaCategorias: state.userAdmin.listaCategorias,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
  // {
  //     createCategory: function(categoria){
  //         dispatch(createCategory(categoria))
  //     },
  //     fetchCategorys: function (categorias){
  //        dispatch(fetchCategorys(categorias))
  //     },
  //     removeCategory: function(categoriaId){
  //         dispatch(removeCategory(categoriaId))
  //     }
  // }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminAddCategoryContainer);
