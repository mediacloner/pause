//import { NavLink } from "react-router-dom";
import React from "react";

function Signup() {
  return (
    <div>
      <div className="container">
        <h1 className="logo text-center topmin">·|pause|·</h1>
      </div>
      <div className="container topmin">
        <form className="form-signin">
          <h2 className="form-signin-heading text-secondary">User Registration</h2>
          <label htmlFor="inputEmail" className="sr-only">
            Name
          </label>
          <input
            id="inputEmail"
            className="form-control"
            placeholder="Enter Name"
            required
            autofocus
            type="email"
          />
          <label htmlFor="inputEmail" className="sr-only">
            Surname
          </label>
          <input
            id="inputEmail"
            className="form-control"
            placeholder="Enter Surname"
            required
            type="email"
          />
          <label htmlFor="inputEmail" className="sr-only">
            Country
          </label>
          <input
            id="inputEmail"
            className="form-control"
            placeholder="Country"
            required
            type="email"
          />
          <label htmlFor="inputEmail" className="sr-only">
            City
          </label>
          <input
            id="inputEmail"
            className="form-control"
            placeholder="City"
            required
            type="email"
          />
          <label htmlFor="inputEmail" className="sr-only">
            Name of your Timeline
          </label>
          <input
            id="inputEmail"
            className="form-control"
            placeholder="Name of your Timeline"
            required
            type="email"
          />
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            type="email"
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
            type="password"
          />
          <label htmlFor="inputPassword" className="sr-only">
            Confirm Password
          </label>
          <input
            id="inputPassword"
            className="form-control"
            placeholder="Confirm Password"
            required
            type="password"
          />
          <div className="checkbox" />
          <button
            className="btn btn-lg btn btn-outline-info btn-block"
            type="submit"
          >Sign in </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
