import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  renderUsers = () => {
    return this.props.users.map((user, idx) => <li key={idx}>{user.username}</li>)
  }

  render() {

    return (
      <div>
        {this.props.numberOfUsers}
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
