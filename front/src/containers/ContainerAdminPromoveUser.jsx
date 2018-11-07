import React from 'react';
import axios from 'axios';

export default class PromoveUser extends React.Component {
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
    this.editUser(user);
    this.setState({
      user: '',
    });
  }

  editUser(user) {
    axios.put(`/api/user/admin/${user}`);
    console.log(this.state.user, 'userfront');
    // store.dispatch(updateUser(id));
  }

  render() {
    return (
      <div className="well">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Promover Usuario</legend>
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
                  Haceme admin
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
