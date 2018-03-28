//import { NavLink } from 'react-router-dom'
import React from 'react'
import apiClient from "../../services/api-config"
import storage from "../../services/storage"

import {
 UncontrolledAlert, Table, Container, Button
} from 'reactstrap';

export default class Following extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      following: []
    };
  }

  getlistFollowingByUser = (token) => {
    apiClient
      .listFollowingByUser(token)
      .then(followRes => this.setState({ following: followRes.data.following }))
      .catch(console.error);
  };

  componentDidMount() {
    this.getlistFollowingByUser(storage.getToken())

  }
  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <div>
        <UncontrolledAlert color="info">
          Currently you have 124 followers! Great!
        </UncontrolledAlert>

        <Container className="topmed">
          <h2 className="text-right text-secondary pauseFont ">·|following|·</h2>
          <Table striped>
            <thead>
              <tr>
                <th>Name</th>
                <th>Timeline</th>
                <th>City</th>
                <th>Access</th>
              </tr>
            </thead>
            {             
              this.state.following.length ? this.state.following.map((user, index) => 
            <tbody key = {index}>
              <tr>
                <th scope="id">{user.userId.username}</th>
                <td>{user.userId.timelineTitle}</td>
                <td>{user.userId.city}</td>
                <td><Button key={user.userId._id} onClick={this.props.otherUserView} id={user.userId._id} outline size="sm" color="info">Read her or his Timeline</Button></td>
              </tr>
            </tbody>):undefined}
          </Table>
        </Container>
      </div>
    );
  }
}
