import React, { Component } from "react";
import "./App.css";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/blocks.css";
import "./styles/main.css";
import "./styles/post.css";
import "./styles/signin_reg.css";
import ApiClient from "./models/api-client/src/index.js";
import Timeline from './components/timeline'
import Navbar from './components/navbar'
import Signup from './components/signup'
import { HashRouter } from "react-router-dom";

const apiClient = new ApiClient("http", "localhost", 5000);

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      user: 0,
      page: 'search'
    };
  }

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    apiClient
      .listPosts()
      .then(posts => this.setState({ posts: posts.data }))
      .catch(console.error);
  };

  render() {
    return (
      <HashRouter>
        <div>

          <Signup/>
{/*           <Navbar/>
          <Timeline list={this.state.posts} /> */}
        </div>
      </HashRouter>
    );
  }
}


export default App;
