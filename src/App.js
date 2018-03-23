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
import NavbarHead from './components/navbarhead'
import Signup from './components/signup'
import Signin from './components/signin'
import Newpost from './components/newpost'
import Newcomment from './components/newcomment'


const apiClient = new ApiClient("http", "localhost", 5000);

class App extends Component {
  constructor() {
    super();
    this.state = {
 
      user: 0,
      page: 'search'
    };
  }




  render() {
    return (

        <div>


{/*           <Signin/> */}
{/*         <Signup/>  */}
      <NavbarHead/>
{/*        <Newcomment/> */}
{/*         <Newpost/>  */}
{/*           <Timeline list={this.state.posts} />  */}
        </div>



    );
  }
}


export default App;
