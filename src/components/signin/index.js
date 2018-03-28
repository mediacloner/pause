// import { NavLink } from 'react-router-dom'
import React from 'react'
import apiClient from "../../services/api-config"
import {
  Button
} from 'reactstrap';
import storage from "../../services/storage"

export default class Signin extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        username:'',
        password:'',
        errorMsg: false
      };
    }
login = (e) =>{

  e.preventDefault();

  apiClient.login(this.state.username, this.state.password)
  .then(result => {
      if (result.status === 'OK') {
        

         storage.setToken(result.data.token)         
         this.setState({errorMsg: false})
         this.props.loged( true )
     
      }
      else {
          this.setState({errorMsg: true})
          console.log('Error, username and/or password wrong')
      }
  })

}
   

    updateState = e => {
      this.setState({ [e.target.id]: e.target.value });
    }

  render(){
    return (
<div>
  <div className="container">
    <h1 className="logo text-center topmin">·|pause|·</h1>
  </div>
  <div className="container topmed">
    <form className="form-signin">
      <h2 className="form-signin-heading text-secondary">Please sign in</h2>
      <label htmlFor="inputEmail" className="sr-only">Username</label>
      <input id="username" onChange={this.updateState}className="form-control" placeholder="Username" required autoFocus type="text" />
      <label htmlFor="inputPassword" className="sr-only">Password</label>
      <input id="password" onChange={this.updateState} className="form-control" placeholder="Password" required type="password" />
      <Button onClick={this.login} className="btn btn-lg btn btn-outline-info btn-block" type="submit">Sign in</Button>

      { 
        this.state.errorMsg ? 
        <h6 className='topmin text-danger'>Error, username and/or password wrong </h6>
        :
        undefined}
    </form>
  </div>
</div>
    )
}}

