//import { NavLink } from 'react-router-dom'
import React from 'react'
import apiClient from "../../services/api-config"

import {
  Button, Badge
} from 'reactstrap';

export default class Following extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    following: [],
    }
  }

  getListPosts = () => {

    apiClient
      .listPosts()
      .then(posts => this.setState({ posts: posts.data }))
      .catch(console.error)
  }

  getListPostsByGroup = (id) => {
    apiClient
      .listPostsByGroup(id)
      .then(posts => this.setState({ posts: posts.data }))
      .catch(console.error)
  }

  getListPostsByUser = (id) => {

    apiClient
      .listPostsByUser(id)
      .then(posts => this.setState({ posts: posts.data }))
      .catch(console.error)
  }
  search = (word) => {

    apiClient
      .search(word)
      .then(posts => this.setState({ posts: posts.data }))
      .catch(console.error)
  }


  componentDidMount() {
   
  }
  componentWillReceiveProps(nextProps) {
    
  }

  render() {
    return (
      <div>
        <Button color="primary" outline>
          Followers <Badge color="secondary">124</Badge>
        </Button>
      </div>
     
    );
  }
}
