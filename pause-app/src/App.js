import React, { Component } from "react";
import "./App.css";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/blocks.css";
import "./styles/main.css";
import "./styles/post.css";
import "./styles/signin_reg.css";
import ApiClient from "./models/api-client/src/index.js";
import { HashRouter } from "react-router-dom";

const apiClient = new ApiClient("http", "localhost", 5000);

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      user: 0
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
          <ListPosts list={this.state.posts} />
        </div>
      </HashRouter>
    );
  }
}
function ListPosts(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark flex-row">
        <a className="navbar-brand mr-auto" href="/">
          <h1 className="logonav text-center">·|pause|·</h1>
        </a>
        <ul className="navbar-nav flex-row mr-lg-0">
          <li className="nav-item">
            <a className="nav-link pr-2">
              <i className="fa fa-search" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link pr-2">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle mr-3 mr-lg-0"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-user" />
              <span className="caret" />
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href>
                User
              </a>
              <a className="dropdown-item" href>
                Login
              </a>
            </div>
          </li>
        </ul>
        <button
          className="navbar-toggler ml-lg-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </nav>
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <ul>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  My reference
                </a>
              </li>
            </ul>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <h2 className="text-center pauseFont ">·|timeline|·</h2>
          <div className="row">
            {props.list.map((post, index) => {
              return (
                <div className="col-md-4 text-center key ={post._id}">
                  <div className="box">
                    <div className="box-content">
                      <h1 className="tag-title">{post.title}</h1>
                      <hr />
                      <p>{post.shortDescription}</p>
                      <br />
                      <a href="ppc.html" className="btn btn-block btn-info">
                        Read
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
