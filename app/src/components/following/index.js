//import { NavLink } from 'react-router-dom'
import React from 'react'
import apiClient from "../../services/api-config"

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
/* 5aafaac91ca9687a2d6bb1b5 */
  getlistFollowingByUser = (id) => {
    apiClient
      .listFollowingByUser(id)
      .then(followRes => this.setState({ following: followRes.data.following }))
      .catch(console.error);
  };

  componentDidMount() {
    this.getlistFollowingByUser("5aafaa281ca9687a2d6bb1b4")

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
              this.state.following.length  ? this.state.following.map((user, index) => {
            <tbody>
              <tr key = {user.userId._id}>
                <th scope="id">{user.userId.username}</th>
                <td>{user.userId.timelineTitle}</td>
                <td>{user.userId.city}</td>
                <td><Button key={user.userId._id} id='following' outline size="sm" color="info">Read her or his Timeline</Button></td>
              </tr>
            </tbody>}):undefined}
          </Table>
        </Container>
      </div>
    );
  }
}
