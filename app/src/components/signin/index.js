import React from 'react'
import { NavLink } from 'react-router-dom'

function Signin(){

    return (
<div>
  <div className="container">
    <h1 className="logo text-center topmin">·|pause|·</h1>
  </div>
  <div className="container topmed">
    <form className="form-signin">
      <h2 className="form-signin-heading text-secondary">Please sign in</h2>
      <label htmlFor="inputEmail" className="sr-only">Email address</label>
      <input id="inputEmail" className="form-control" placeholder="Email address" required autofocus type="email" />
      <label htmlFor="inputPassword" className="sr-only">Password</label>
      <input id="inputPassword" className="form-control" placeholder="Password" required type="password" />
      <div className="checkbox">
        <label>
          <input defaultValue="remember-me" type="checkbox" /> Remember me
        </label>
      </div>
      <button className="btn btn-lg btn btn-outline-info btn-block" type="submit">Sign in</button>
    </form>
  </div>
</div>

    )
}

export default Signin