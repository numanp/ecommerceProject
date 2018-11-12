import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserPerfil, fetchUsers } from '../redux/action-creators/users';
import { fetchOrders } from '../redux/action-creators/user';
import UserPerfil from '../components/UserPerfil';

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
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    var carrito = this.props.orders;
  }

  componentDidMount() {
    this.props.fetchUserPerfil(this.props.userId);
    this.props.fetchOrders();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.orders.length > 0) {
      var ordenesUser = nextProps.orders.filter(function(order) {
        return order.userId == nextProps.userId;
      });
      this.setState({ orders: ordenesUser });
    }
  }

  render() {
    return (
      <div>
        <UserPerfil user={this.props.user} orders={this.state.orders} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserPerfilContainer);
