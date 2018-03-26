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
      .then(followRes => this.setState({ following: followRes.data }))
      .catch(console.error);
  };

  componentDidMount() {
    //this.getlistFollowingByUser("5aafaac91ca9687a2d6bb1b5")

  }
  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <div>
        <UncontrolledAlert color="info">
          Actually you have 124 followers! Great!
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
          
            <tbody>
              <tr>
                <th scope="id">Mark</th>
                <td>Men of the Moon</td>
                <td>Barcelona</td>
                <td><Button id='following' outline size="sm" color="info">Read her or his Timeline</Button></td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
