import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserPerfil, fetchUsers } from '../redux/action-creators/users';
import { fetchOrders } from '../redux/action-creators/user';
import UserPerfil from '../components/UserPerfil';
import AdminSingleOrder from '../components/AdminSingleOrder'
import axios from 'axios';

function mapStateToProps(state, ownProps) {
  return {
    userId: ownProps.match.params.userId,
    user: state.user.user,
    orders: state.userAdmin.orders,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: function() {
      dispatch(fetchUsers());
    },
    fetchUserPerfil: function(userId) {
      dispatch(fetchUserPerfil(userId));
    },
    fetchOrders: function() {
      dispatch(fetchOrders());
    },
  };
}

class UserPerfilContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      selectedCarrito: [],
      ordenes: []
    };
    this.handleSubmitID = this.handleSubmitID.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    var carrito = this.props.orders;
  }

  componentDidMount() {
    this.props.fetchUserPerfil(this.props.userId);
    this.props.fetchOrders();
    axios.get('/api/ventas')
    .then( res => this.setState({ ordenes: res.data }))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.orders.length > 0) {
      var ordenesUser = nextProps.orders.filter(function(order) {
        return order.userId == nextProps.userId;
      });
      this.setState({ orders: ordenesUser });
    }
  }

  handleSubmitID (evento) {
    evento.preventDefault()
    let id = evento.target.ID.value
    console.log(id)

    axios.get(`/api/ventas/`)
    .then(res => res.data)
    .then(ordenesTotales => {
        var carrito = []
        for (var i = 0; i < ordenesTotales.length; i++) {
            if (ordenesTotales[i].id == id) {
                carrito.push(JSON.parse(ordenesTotales[i].carro));
            }
        }
        this.setState({ selectedCarrito: carrito[0] })
    })
  }

  render() {
    console.log(this.state.ordenes)
    return (
      <div>
      {
        !!this.state.selectedCarrito && this.state.selectedCarrito.length > 0 ?
        <AdminSingleOrder carrito={this.state.selectedCarrito}/>
        :
        <UserPerfil user={this.props.user} handleSubmitID={this.handleSubmitID} orders={this.state.orders} />
      }
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserPerfilContainer);

// {
//   this.state.selectedCarrito.length > 0 ?
//   <AdminSingleOrder ordenes={this.state.ordenes} carrito={this.state.selectedCarrito}/>
//   :
//   <AdminOrdenes handleSubmitID={this.handleSubmitID}/>
// }
