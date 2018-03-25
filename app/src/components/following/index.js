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
  getListPosts = () => {
    apiClient
      .listPosts()
      .then(posts => this.setState({ posts: posts.data }))
      .catch(console.error);
  };

  componentDidMount() {}
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
                <th>Access</th>
                <th>Timeline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="id">Name</th>
                <td><Button outline size="sm" color="info">Read her or his Timeline</Button>{' '}</td>
                <td>Mark</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
