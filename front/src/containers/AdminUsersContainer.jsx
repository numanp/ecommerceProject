import React from 'react';
import { connect } from 'react-redux';
import {
  fetchUsers,
  deleteUser,
  makeUserAdmin,
} from '../redux/action-creators/users';

class AdminUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    return (
      <div className="container">
        <table id="users-table" className="table table-striped">
          <tbody>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Admin</th>
              <th />
            </tr>
          </tbody>
          <tbody>
            {this.props.users.map(user => (
              <tr key={user.id}>
                <td>{user.nombre}</td>
                <td>{user.apellido}</td>
                <td>{user.email}</td>
                <td>{user.admin ? 'si' : 'no'}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={event => this.props.deleteUser(user.id)}
                  >
                    <span
                      className="glyphicon glyphicon-remove"
                      aria-hidden="true"
                    />
                    Borrar
                  </button>
                  {!user.admin && (
                    <button
                      className="btn btn-warning"
                      onClick={event => this.props.makeUserAdmin(user.id)}
                    >
                      <span
                        className="glyphicon glyphicon-pencil"
                        aria-hidden="true"
                      />
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers());
    },
    deleteUser: userId => {
      dispatch(deleteUser(userId));
    },
    makeUserAdmin: userId => {
      dispatch(makeUserAdmin(userId));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminUsers);
