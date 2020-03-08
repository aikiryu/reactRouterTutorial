import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/header.css";
import "./css/reset.css";
const MenuItem = ({ active, children, to }) => (
  <div className="menu-item">{children}</div>
);

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Title</h1>

        <div className="menu">
          <MenuItem>
            <Link to="/">HOME</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/about">About us</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/post">Posts</Link>
          </MenuItem>
        </div>
      </header>
    );
  }
}

export default Header;
