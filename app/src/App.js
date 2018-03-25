import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/blocks.css";
import "./styles/main.css";
import "./styles/post.css";
import "./styles/signin_reg.css";
import NavbarHead from './components/navbarhead'








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



      <NavbarHead/>

        </div>



    );
  }
}


export default App;
