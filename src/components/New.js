import React from 'react';
import { connect } from 'react-redux';
import * as userAction from '../actions/userAction';
import { Link } from 'react-router-dom';

class New extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
  };

  handleFirstName = e => {
    this.setState({
      firstName: e.target.value,
    });
  };

  handleLastName = e => {
    this.setState({
      lastName: e.target.value,
    });
  };

  handleEmail = e => {
    this.setState({
      email: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
    };
    this.props.createUser(user);
  };

  listView(data, index) {
    return (
      <div>
        <div>
          <li key={index}>
            {data.firstName} {data.lastName} | {data.email}
          </li>
        </div>
        <Link to="/users/:id">See More</Link>
        <div>
          <button onClick={e => this.deleteUser(e, index)}>Remove</button>
          <button onClick={e => this.editUser(e, index)}>
            <Link to="/users/:id/edit">Edit</Link>
          </button>
        </div>
      </div>
    );
  }

  deleteUser(e, index) {
    e.preventDefault();
    this.props.deleteUser(index);
  }

  editUser(e, index) {
    e.preventDefault();
    this.props.editUser(index);
  }

  render() {
    return (
      <div>
        <h1>User List Application</h1>
        <hr />

        <div>
          <h3>Add User Form</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={this.handleFirstName}
              value={this.state.firstName}
            />
            <input
              type="text"
              onChange={this.handleLastName}
              value={this.state.lastName}
            />
            <input
              type="text"
              onChange={this.handleEmail}
              value={this.state.email}
            />
            <input type="submit" value="ADD" />
          </form>
          <hr />
          {<ul>{this.props.users.map((user, i) => this.listView(user, i))}</ul>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createUser: user => dispatch(userAction.createUser(user)),
    deleteUser: index => dispatch(userAction.deleteUser(index)),
    editUser: index => dispatch(userAction.editUser(index)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(New);
