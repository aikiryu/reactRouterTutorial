import React, { Component } from "react";
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
          <MenuItem>HOME</MenuItem>
          <MenuItem>About us</MenuItem>
          <MenuItem>Posts</MenuItem>
        </div>
      </header>
    );
  }
}

export default Header;
