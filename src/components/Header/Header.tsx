import React, { Component } from "react";
// @ts-ignore
import logo from "../../images/ico_suffle.png";
import "./header.css";
class Header extends Component {
  render() {
    return (
      <header>
        <div className="nav-container">
          <img src={logo} alt="mops" />
          <span>Какой-то текст</span>
        </div>
      </header>
    );
  }
}

export default Header;
