import React from 'react';
import store from '../redux/store';
import AdminPromoveUser from '../components/AdminPromoveUser';
import { updateUser } from '../redux/action-creators/user';

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
    this.editUser(this.state.value);
    this.setState({
      value: '',
    });
  }

  editUser(id) {
    store
      .dispatch(updateUser(id))
      .then(id => this.props.history.push(`/users/${id}`));
  }

  render() {
    return (
      <AdminPromoveUser
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        user={this.state.user}
      />
    );
  }
}
