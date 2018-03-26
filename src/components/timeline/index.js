//import { NavLink } from 'react-router-dom'
import React from 'react'
import apiClient from "../../services/api-config"
import { Button, Container } from 'reactstrap';
import Nofound from "./../../img/nofound.svg";

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    posts: [],
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
    if (this.props.filter === 'ownPostsTimeline') this.getListPostsByUser('5aafaa281ca9687a2d6bb1b4')
    else if (this.props.filter === 'followPostTimeline') this.getListPostsByGroup('5aafaa281ca9687a2d6bb1b4')
    else if (this.props.filter === 'allPostTimeline') this.getListPosts()
    else if (this.props.filter === 'searchPost') this.search(this.props.search)
    else if (this.props.filter === 'userTimeline') this.getListPostsByUser(this.props.userView)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.filter === 'ownPostsTimeline') this.getListPostsByUser('5aafaa281ca9687a2d6bb1b4')
    else if (nextProps.filter === 'followPostTimeline') this.getListPostsByGroup('5aafaa281ca9687a2d6bb1b4')
    else if (nextProps.filter === 'allPostTimeline') this.getListPosts()
    else if (nextProps.filter === 'searchPost') this.search(this.props.search)
    else if (nextProps.filter === 'userTimeline') this.getListPostsByUser(this.props.userView)}

  render() {
    return <div>
        <div className="container topmed">
          <div className="row">
            <h2 className="col-md-12 text-center text-secondary pauseFont ">
              {this.props.header}
            </h2>
          </div>


          {
            this.state.posts.length > 0 ?
            <div className="row">
              <div className="col-md-12 text-right">
                {this.props.filter === 'ownPostsTimeline' || this.props.filter ==='userTimeline' ?<h3 className="text-secondary">{this.state.posts[0].owner.username}<Button outline size="sm" color="info">Follow</Button></h3>:undefined}
              </div>
            </div>:undefined
          }

          <div className="row">
            {this.state.posts.length ? this.state.posts.map((post, index) => {
              return <div className="col-md-4 text-center" key={post._id}>
                  <div className="box">
                    <div className="box-content">
                      <h1 className="tag-title">{post.title}</h1>
                      <hr />
                      <p>{post.shortDescription}</p>
                      <br />
                      <a href="" id={post._id} onClick={this.props.postView} className="btn btn-block btn-info">
                        Read
                      </a>
                    </div>
                  </div>
                </div>;
            }): <Container className="topmed"><img className="rounded mx-auto d-block" src={Nofound} alt="nofound" /> <h1 className="text-center logonav"> Ups! We don't have anything to show you.</h1></Container>}
          </div>
        </div>
      </div>;
  }
}
