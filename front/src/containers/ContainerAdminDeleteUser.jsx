import React from 'react';
import store from '../redux/store';
import { removeUser } from '../redux/action-creators/user';
import { connect } from 'react-redux';

class DeleteUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      user: value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    var user = this.state.user;
    this.props.removeUser(user);
    this.setState({
      user: '',
    });
  }

  //   removeUser(user) {
  //     console.log(this.state.user, 'userfront');
  //     store.dispatch(removeUser(user));
  //   }

  render() {
    return (
      <div className="well">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Eliminar Usuario</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">User</label>
              <div className="col-xs-10">
                <input
                  value={this.state.user}
                  onChange={this.handleChange}
                  className="form-control"
                  type="text"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button type="submit" className="btn btn-success">
                  Eliminar usuario
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    removeUser: user => {
      dispatch(removeUser(user));
    },
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(DeleteUser);
