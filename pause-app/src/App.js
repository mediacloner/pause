import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'
import './styles/blocks.css'
import './styles/main.css'
import './styles/post.css'
import './styles/signin_reg.css'
import apiClient from "./models/api-client/src/index.js"


class App extends Component {
  constructor() {
    super();
    this.state = {

      rawData= {}
      
    };
  }


componentWillMount(){
  getList()
}


getList = () => {
  apiClient
    .listPosts()
    .then(rawData => this.setState(rawData))
    .catch(console.error);
};


  render() {
    return (
      <div>

  <nav className="navbar navbar-expand-md navbar-dark bg-dark flex-row">
    <a className="navbar-brand mr-auto" href="/">
      <h1 className="logonav text-center">·|pause|·</h1>
    </a>
    <ul className="navbar-nav flex-row mr-lg-0">
      <li className="nav-item">
        <a className="nav-link pr-2"><i className="fa fa-search" /></a>
      </li>
      <li className="nav-item">
        <a className="nav-link pr-2"><i className="fa fa-facebook" /></a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle mr-3 mr-lg-0" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-user" /><span className="caret" />
        </a>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href>User</a>
          <a className="dropdown-item" href>Login</a>
        </div>
      </li>
    </ul>
    <button className="navbar-toggler ml-lg-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
  </nav>
  <nav className="navbar navbar-expand-md navbar-light">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <ul>
          <li className="nav-item">
            <a className="nav-link" href="#">My reference</a>
          </li>
        </ul>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  {/* /container */}
  <div className="container">
    <div className="row">
      <h2 className="text-center pauseFont ">·|timeline|·</h2>
      <div className="row">
        <div className="col-md-4 text-center">
          <div className="box">
            <div className="box-content">
              <h1 className="tag-title">How "oldschool" graphics worked in Commodore and Nintendo</h1>
              <hr />
              <p>I cover the limitations of color on older 1980's computers and game consoles such as the Nintendo Entertainment System and the Commodore 64.
              </p>
              <br />
              <a href="ppc.html" className="btn btn-block btn-info">Learn more</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="box">
            <div className="box-content">
              <h1 className="tag-title">Learning never exhausts the mind.</h1>
              <hr />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, facilisis sit amet neque.</p>
              <br />
              <a href="ppc.html" className="btn btn-block btn-info">Learn more</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="box">
            <div className="box-content">
              <h1 className="tag-title">It is far better to be alone, than to be in bad company.</h1>
              <hr />
              <p> Etiam efficitur felis vel imperdiet varius. Maecenas bibendum elementum molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus finibus semper. Fusce molestie tincidunt leo vel varius. Nam scelerisque nulla feugiat leo consequat, id dignissim sem tincidunt. Proin elit mauris, hendrerit in varius sed, facilisis sit amet neque.</p>
              <br />
              <a href="ppc.html" className="btn btn-block btn-info">Learn more</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="box">
            <div className="box-content">
              <h1 className="tag-title">The One Thing That Protects a Laptop After It’s Been Stolen</h1>
              <hr />
              <p>Lorem ipsum dolor sit amet.</p>
              <br />
              <a href="ppc.html" className="btn btn-block btn-info">Learn more</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="box">
            <div className="box-content">
              <h1 className="tag-title">How "oldschool" graphics worked in Commodore and Nintendo</h1>
              <hr />
              <p>I cover the limitations of color on older 1980's computers and game consoles such as the Nintendo Entertainment System and the Commodore 64.
              </p>
              <br />
              <a href="ppc.html" className="btn btn-block btn-info">Learn more</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="box">
            <div className="box-content">
              <h1 className="tag-title">Independence is happiness.</h1>
              <hr />
              <p>I such as the Nintendo Entertainment System and the Commodore 64.
              </p>
              <br />
              <a href="ppc.html" className="btn btn-block btn-info">Learn more</a>
            </div>
          </div>
        </div>
      </div>           
    </div>
  </div>
</div>


    );
  }
}

export default App;
