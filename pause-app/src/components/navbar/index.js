import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar(){

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
        </div>
    )
}

export default Navbar